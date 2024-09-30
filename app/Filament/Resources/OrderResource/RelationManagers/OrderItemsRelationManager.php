<?php

namespace App\Filament\Resources\OrderResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderItemsRelationManager extends RelationManager
{
    protected static string $relationship = 'orderItems';

    protected static ?string $navigationLabel = 'Продукти';
    protected static ?string $pluralLabel = 'Продукти';

    protected static ?string $label = 'Продукт';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('product_id')
                    ->label('ID на продукт')
                    ->relationship('product', 'name')
                    ->required(),
                Forms\Components\TextInput::make('product_name')
                    ->label('Име на продукта')
                    ->required(),
                Forms\Components\TextInput::make('quantity')
                    ->label('Брой')
                    ->numeric()
                    ->required(),
                Forms\Components\TextInput::make('single_price')
                    ->label('Единична цена')
                    ->numeric()
                    ->required(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('title')
            ->columns([
                Tables\Columns\TextColumn::make('product_id')
                ->label('ID'),
                Tables\Columns\TextColumn::make('product_name')
                ->label('Име на продукта'),
                Tables\Columns\TextColumn::make('quantity')
                    ->label('Брой'),
                Tables\Columns\TextColumn::make('single_price')
                    ->label('Единична цена'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                ]),
            ]);
    }
}