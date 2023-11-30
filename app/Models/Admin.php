<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $fillable = [
        'password', 'email', 'nama_admin', 'tempat_lahir', 'tanggal_lahir', 'gender', 'image',
    ];
}
