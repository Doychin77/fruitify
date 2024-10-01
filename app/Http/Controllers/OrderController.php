<?php

namespace App\Http\Controllers;

use App\Mail\OrderConfirmation;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'country' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'postcode' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'order_notes' => 'nullable|string',
            'subtotal' => 'required|numeric',
            'discount' => 'nullable|numeric',
            'total' => 'required|numeric',
            'items' => 'required|array',
            'items.*.id' => 'required|exists:products,id',
            'items.*.name' => 'required|string',
            'items.*.quantity' => 'required|numeric|min:1',
            'items.*.price' => 'required|numeric|min:0',
        ]);

        $existingOrder = Order::where('email', $request->email)
            ->where('created_at', '>=', now()->subMinutes(1))
            ->first();

        if ($existingOrder) {
            return response()->json(['message' => 'An order has already been placed recently.'], 409);
        }

        $order = null;

        DB::transaction(function () use ($request, &$order) {
            $order = Order::create($request->all());

            foreach ($request->input('items') as $item) {
                $order->orderItems()->create([
                    'product_id' => $item['id'],
                    'product_name' => $item['name'],
                    'quantity' => $item['quantity'],
                    'single_price' => $item['price'],
                ]);

                $product = Product::find($item['id']);
                if ($product) {
                    $newStockQuantity = $product->quantity - $item['quantity'];

                    if ($newStockQuantity >= 0) {
                        $product->update(['quantity' => $newStockQuantity]);
                    } else {
                        throw new \Exception('Insufficient stock for product: ' . $product->name);
                    }
                }
            }
        });

        $deliveryInfo = [
            'name' => $request->first_name . ' ' . $request->last_name,
            'address' => $request->address . ', ' . $request->city . ', ' . $request->state . ', ' . $request->postcode . ', ' . $request->country,
            'phone' => $request->phone,
            'email' => $request->email,
        ];

        $products = $request->input('items');

        Mail::to($request->email)->send(new OrderConfirmation($deliveryInfo, $products));

        return response()->json(['message' => 'Order placed successfully!', 'order' => $order], 201);
    }
}



