<?php

use App\Http\Controllers\Admin\BuyController;
use App\Http\Controllers\Admin\PeminjamanController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/beli', function () {
    return Inertia::render('User/Beli');
})->name('beli');

Route::post('/createkodebuy', [BuyController::class, 'create'])->name('createkodebuy');

Route::post('/createkodepeminjaman',[PeminjamanController::class, 'create'])->name('createkodepeminjaman');

Route::get('/info',[ProfileController::class, 'info'])->name('info');

Route::get('/editprofile/{id}',[ProfileController::class, 'editprofile'])->name('editprofile');

Route::post('/updateprofile',[ProfileController::class, 'updateprofile'])->name('updateprofile');

// Route::post([BuyController::class, 'create'])->name('buy');
