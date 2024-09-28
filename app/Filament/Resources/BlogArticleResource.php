<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogArticleResource\Pages;
use App\Filament\Resources\BlogArticleResource\RelationManagers;
use App\Models\BlogArticle;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BlogArticleResource extends Resource
{
    protected static ?string $model = BlogArticle::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Блог';

    protected static ?string $label = 'Статия';
    protected static ?string $pluralLabel = 'Статии';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Заглавие')
                    ->required(),
                TextInput::make('slug')
                    ->label('Слъг')
                    ->required(),
                RichEditor::make('content')
                    ->label('Съдържание')
                    ->required(),
                FileUpload::make('image')
                    ->label('Изображение')
                    ->nullable(),
                Toggle::make('is_published')
                    ->label('Публикувана')
                    ->default(false),
                DatePicker::make('published_at')
                    ->label('Дата на публикуване')
                    ->nullable(),
                Select::make('category_id')
                    ->label('Категория')
                    ->relationship('category', 'name')
                    ->required(),
                Select::make('author_id')
                    ->label('Автор')
                    ->relationship('author', 'name')
                    ->nullable(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Заглавие'),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('Категория'),
                Tables\Columns\BooleanColumn::make('is_published')
                    ->label('Публикувана'),
                Tables\Columns\TextColumn::make('published_at')
                    ->label('Дата на публикуване')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Създадено на')
                    ->dateTime(),
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogArticles::route('/'),
            'create' => Pages\CreateBlogArticle::route('/create'),
            'edit' => Pages\EditBlogArticle::route('/{record}/edit'),
        ];
    }
}
