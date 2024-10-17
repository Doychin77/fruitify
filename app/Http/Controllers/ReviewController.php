<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'productId' => 'required|exists:products,id',
            'userId' => 'required|exists:users,id',
            'comment' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'title' => 'nullable|string|max:255',
        ]);

        $review = Review::create([
            'product_id' => $validated['productId'],
            'user_id' => $validated['userId'],
            'comment' => $validated['comment'],
            'rating' => $validated['rating'],
            'title' => $validated['title'],
        ]);

        return response()->json(['message' => 'Review submitted successfully!', 'review' => $review], 201);
    }
}
