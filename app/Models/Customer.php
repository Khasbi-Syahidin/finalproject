<?php
// app/Models/Customer.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'user_id',
        'NISN',
        'nama_custemer',
        'TTL',
        'telp',
        'alamat',
        'gender',
        'image',
    ];

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }

    // public function books()
    // {
    //     return $this->hasMany(Book::class, 'customer_id');
    // }
    // public function pembelian()
    // {
    //     return $this->hasMany(Pembelian::class, 'customer_id');
    // }
}
