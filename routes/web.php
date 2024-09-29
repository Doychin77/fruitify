<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\ProductController;
use App\Models\BlogCategory;
use Illuminate\Support\Facades\Route;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/product/{id}', [ProductController::class, 'show']);
Route::post('/apply-coupon', [CouponController::class, 'applyCoupon']);
Route::get('/blog-categories', [BlogController::class, 'allCategories']);
Route::get('/articles', [BlogController::class, 'allArticles']);
Route::get('/article/{id}', [BlogController::class, 'getArticle']);


Route::get('/', function () {
    return view('welcome');
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');




