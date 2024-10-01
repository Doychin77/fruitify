<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Filament\Resources\OrderResource\RelationManagers\OrderItemsRelationManager;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
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
                        Forms\Components\TextInput::make('first_name')
                            ->label('Име')
                            ->required(),
                        Forms\Components\TextInput::make('last_name')
                            ->label('Фамилия')
                            ->required(),

                        Forms\Components\TextInput::make('phone')
                            ->label('Телефон')
                            ->required(),
                        Forms\Components\TextInput::make('email')
                            ->label('Имейл')
                            ->required()->email(),
                    ])->columns(2),
                Forms\Components\Section::make('Адрес')
                    ->collapsed()
                    ->schema([
                        Forms\Components\TextInput::make('country')
                            ->label('Държава')
                            ->required(),
                        Forms\Components\TextInput::make('address')
                            ->label('Адрес')
                            ->required(),
                        Forms\Components\TextInput::make('city')
                            ->label('Град')
                            ->required(),
                        Forms\Components\TextInput::make('state')
                            ->label('Област')
                            ->required(),
                        Forms\Components\TextInput::make('postcode')
                            ->label('Пощенски код')
                            ->required(),
                    ])->columns(2),
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
                Tables\Columns\TextColumn::make('first_name')
                    ->label('Име'),
                Tables\Columns\TextColumn::make('last_name')
                    ->label('Фамилия'),
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
