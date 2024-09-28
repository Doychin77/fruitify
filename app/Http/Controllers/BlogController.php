<?php

namespace App\Http\Controllers;

use App\Models\BlogArticle;
use App\Models\BlogCategory;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function allCategories()
    {
        $blogCategories = BlogCategory::all();
        return response()->json($blogCategories);
    }

    public function allArticles()
    {
        $articles = BlogArticle::all();
        return response()->json($articles);
    }
}
