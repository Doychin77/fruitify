<?php

// routes/web.php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{any}', function () {
    return view('welcome'); // Ensure 'app' matches your React view file
})->where('any', '.*');

