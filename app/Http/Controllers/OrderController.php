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

        Log::info('Order creation attempt', ['request' => $request->all()]);
        // Validate the incoming request
//        $request->validate([
//            'buyer_name' => 'required|string',
//            'buyer_email' => 'required|string|email',
//            'buyer_phone' => 'required|string',
//            'order_info' => 'nullable|string',
//            'econt_city' => 'required|string',
//            'econt_street_number' => 'required|string',
//            'econt_street' => 'required|string',
//            'econt_street_id' => 'nullable|string',
//            'subtotal' => 'required|numeric',
//            'discount' => 'nullable|numeric',
//            'total' => 'required|numeric',
//            'items' => 'required|array',
//            'items.*.id' => 'required|exists:products,id',
//            'items.*.name' => 'required|string',
//            'items.*.quantity' => 'required|numeric|min:1',
//            'items.*.price' => 'required|numeric|min:0',
//        ]);



        $existingOrder = Order::where('email', $request->buyer_email)
            ->where('created_at', '>=', now()->subMinutes(1))
            ->first();

        if ($existingOrder) {
            Log::warning('Duplicate order attempt by ' . $request->buyer_email);
            return response()->json(['message' => 'An order has already been placed recently.'], 409);
        }

        foreach ($request->input('items') as $item) {
            $product = Product::find($item['id']);
            if (!$product || $product->quantity < $item['quantity']) {
                return response()->json(['message' => 'Insufficient stock for product: ' . $item['name']], 400);
            }
        }

        $order = null;

        try {
            DB::transaction(function () use ($request, &$order) {

                $order = Order::create([
                    'full_name' => $request->buyer_name,
                    'email' => $request->buyer_email,
                    'phone' => $request->buyer_phone,
                    'order_notes' => $request->order_info,
                    'econt_city_id' => $request->econt_city_id,
                    'econt_office_id' => $request->econt_office_id,
                    'econt_street_number' => $request->econt_street_number,
                    'econt_street_id' => $request->econt_street_id,
                    'subtotal' => $request->subtotal,
                    'delivery_type' => $request->delivery_type,
                    'discount' => $request->discount,
                    'total' => $request->total,
                ]);

                // Create order items and reduce stock
                foreach ($request->input('items') as $item) {
                    Log::info('Creating order items for product ID: ' . $item['id']);

                    $order->orderItems()->create([
                        'product_id' => $item['id'],
                        'product_name' => $item['name'],
                        'quantity' => $item['quantity'],
                        'single_price' => $item['price'],
                    ]);

                    // Update product stock
                    $product = Product::find($item['id']);
                    $newStockQuantity = $product->quantity - $item['quantity'];

                    if ($newStockQuantity >= 0) {
                        $product->update(['quantity' => $newStockQuantity]);
                    } else {
                        throw new \Exception('Insufficient stock for product: ' . $product->name);
                    }
                }
            });
        } catch (\Exception $e) {
            Log::error('Transaction failed: ' . $e->getMessage());
            return response()->json(['message' => 'An error occurred while processing your order.'], 500);
        }

        $deliveryInfo = [
            'name' => $request->buyer_name,
            'delivery_type' => $request->delivery_type,
            'econt_office' => $request->econt_office,
            'address' => $request->econt_street . ', ' . $request->econt_street_number . ', ' . $request->econt_city,
            'phone' => $request->buyer_phone,
            'email' => $request->buyer_email,
        ];

        $products = $request->input('items');

        // Send order confirmation email
        try {
            Mail::to($request->buyer_email)->send(new OrderConfirmation($deliveryInfo, $products));
        } catch (\Exception $e) {
            Log::error('Failed to send email: ' . $e->getMessage());
        }

        // Return a success response
        return response()->json([
            'message' => 'Order placed successfully!',
            'order' => $order,
            'items' => $order->orderItems,
        ], 201);
    }
}
