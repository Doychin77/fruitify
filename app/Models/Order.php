<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'country',
        'address',
        'city',
        'state',
        'postcode',
        'phone',
        'email',
        'order_notes',
        'subtotal',
        'discount',
        'total',
        'product_ids'
    ];


     public function user()
     {
         return $this->belongsTo(User::class);
     }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

}

