<?php
// app/Models/Book.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $table = 'bukus';
    protected $fillable = [
        'nama_buku',
        'kategori',
        'jumlah_halaman',
        // 'color',
        'stock',
        'penulis',
        'price',
        'status',
        'deskripsi',
        'image',
    ];

    public function user()
    {
        return $this->belongsTo(Customer::class, 'user_id');
    }
    public function pembelian()
    {
        return $this->hasMany(Pembelian::class, 'buku_id');
    }
}
