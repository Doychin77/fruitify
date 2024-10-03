<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Продукти';
    protected static ?string $navigationLabel = 'Продукти';
    protected static ?string $pluralLabel = 'Продукти';

    protected static ?string $label = 'Продукт';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->label('Категория')
                    ->required(),
                Forms\Components\TextInput::make('name')
                    ->label('Име')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->label('Описание')
                    ->required(),
                Forms\Components\TextInput::make('price')
                    ->label('Цена')
                    ->required()
                    ->lazy()
                    ->numeric()
                    ->live(onBlur: true)
                    ->afterStateUpdated(function ($state, callable $set) {
                        self::updateSalePrice($set);
                    }),
                Forms\Components\TextInput::make('quantity')
                    ->label('Количество')
                    ->required()
                    ->numeric(),
                Forms\Components\Toggle::make('on_sale')
                    ->label('На разпродажба')
                    ->live(onBlur: true)
                    ->afterStateUpdated(function ($state, callable $set) {
                        self::updateSalePrice($set);
                    }),
                Forms\Components\TextInput::make('on_sale_percent')
                    ->label('Процент намаление')
                    ->visible(fn ($get) => $get('on_sale'))
                    ->numeric()
                    ->nullable()
                    ->lazy()
                    ->live(onBlur: true)
                    ->afterStateUpdated(function ($state, callable $set) {
                        self::updateSalePrice($set);
                    }),
                Forms\Components\TextInput::make('on_sale_price')
                    ->label('Цена в промоция')
                    ->visible(fn ($get) => $get('on_sale'))
                    ->numeric()
                    ->live(onBlur: true)
                    ->hint('Изчислява се автоматично'),

            ])->columns(3);
    }



    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('ИД'),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('Категория'),
                Tables\Columns\TextColumn::make('name')
                    ->label('Име'),
                Tables\Columns\TextColumn::make('price')
                    ->label('Цена')
                    ->suffix('лв'),
                Tables\Columns\TextColumn::make('on_sale_price')
                    ->label('Цена на промоция')
                    ->alignCenter()
                    ->suffix('лв'),
                Tables\Columns\TextColumn::make('quantity')
                    ->label('Налично количество')
                    ->alignCenter(),
                Tables\Columns\IconColumn::make('on_sale')
                    ->label('Промоция')
                    ->boolean()
                    ->alignCenter(),
                Tables\Columns\TextColumn::make('on_sale_percent')
                    ->label('Процент намаление')
                    ->formatStateUsing(fn($state) => $state ? "{$state}%" : 'N/A')
                    ->alignCenter(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
//                Tables\Actions\CreateAction::make()
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\ImagesRelationManager::class
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }

    protected static function updateSalePrice(callable $set)
    {
        $set('on_sale_price', function ($get) {
            $price = $get('price');
            $onSalePercent = $get('on_sale_percent');
            $onSale = $get('on_sale');

            if ($onSale && $price && $onSalePercent) {
                return $price - ($price * $onSalePercent / 100);
            }

            return null;
        });
    }


}
