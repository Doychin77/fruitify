<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Filament\Resources\OrderResource\RelationManagers\OrderItemsRelationManager;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Gdinko\Econt\Models\CarrierEcontCity;
use Gdinko\Econt\Models\CarrierEcontOffice;
use Gdinko\Econt\Models\CarrierEcontStreet;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\DB;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-cart';
    protected static ?string $navigationLabel = 'Поръчки';


    protected static ?string $pluralLabel = 'Поръчки';

    protected static ?string $label = 'Поръчка';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Данни за клиента')
                    ->collapsed()
                    ->schema([
                        Forms\Components\TextInput::make('full_name')
                            ->label('Име')
                            ->required(),
                        Forms\Components\TextInput::make('phone')
                            ->label('Телефон')
                            ->required(),
                        Forms\Components\TextInput::make('email')
                            ->label('Имейл')
                            ->required()->email(),
                    ])->columns(3),
                Forms\Components\Section::make('Адрес')
                    ->collapsed()
                    ->schema([
                        Forms\Components\Select::make('delivery_type')
                            ->label('Доставка до офис/адрес')
                            ->options([
                                'econt_office' => 'Офис на еконт',
                                'courier' => 'Доставка с куриер',
                            ])
                            ->required(),

                        Select::make('econt_city_id')
                            ->label('Град')
                            ->required()
                            ->options(CarrierEcontCity::pluck('name', 'id'))
                            ->live()
                            ->searchable(),

                        Select::make('econt_office_id')
                            ->label('Офис')
                            ->required()
                            ->options(function (callable $get) {
                                $cityId = $get('econt_city_id');

                                return $cityId
                                    ? CarrierEcontOffice::where('econt_city_id', $cityId)->pluck('name', 'id')
                                    : [];
                            })
                            ->live()
                            ->visible(fn (callable $get) => $get('delivery_type') === 'econt_office'),

                        Select::make('econt_street_id')
                            ->label('Улица')
                            ->required()
                            ->live()
                            ->options(function (callable $get) {
                                $cityId = $get('econt_city_id');

                                return $cityId
                                    ? CarrierEcontStreet::where('econt_city_id', $cityId)->pluck('name', 'id')
                                    : [];
                            })
                            ->searchable()
                            ->visible(fn (callable $get) => $get('delivery_type') === 'courier'),

                        Forms\Components\TextInput::make('econt_street_number')
                            ->label('Номер на улица')
                            ->required()
                            ->visible(fn (callable $get) => $get('delivery_type') === 'courier'),
                    ])
                    ->columns(3),

                Forms\Components\TextInput::make('subtotal')
                    ->label('Сума без отстъпка')
                    ->numeric()
                    ->required(),

                Forms\Components\TextInput::make('total')
                    ->label('Сума')
                    ->numeric()
                    ->live()
                    ->required(),
                Forms\Components\Textarea::make('order_notes')
                    ->label('Забележки за поръчката')
                    ->columnSpan('full'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('full_name')
                    ->label('Име'),
                Tables\Columns\TextColumn::make('email')
                    ->label('Имейл'),
                Tables\Columns\TextColumn::make('phone')
                    ->label('Тел'),
                Tables\Columns\TextColumn::make('total')
                    ->label('Сума на поръчката')
                    ->suffix('лв'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()
                    ->label('Създадена на'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            OrderItemsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }

}
