<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Peminjaman extends Model
{
    protected $table = 'peminjamans';
    protected $fillable = [
        'nomor',
        'user_id',
        'buku_id',
        'total',
        'maxtime',
        'status',
        'batas_waktu',
        'awal_pinjam',
        'created_at',
        'updated_at',
        'waktu_pengembalian',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function buku()
    {
        return $this->belongsTo(Buku::class);
    }
}
