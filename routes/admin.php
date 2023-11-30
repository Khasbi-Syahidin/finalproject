<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BukuController;
use App\Http\Controllers\Admin\CarouselController;



Route::get('/', [BukuController::class, 'allbuku'])->name('dashboard');


Route::get('/update', function () {
    return Inertia::render('PanelAdmin/Postingan');
})->name('update');

Route::get('/data', function () {
    return Inertia::render('PanelAdmin/DataUser');
})->name('data');

Route::get('/transaksi', function () {
    return Inertia::render('PanelAdmin/Transaksi');
})->name('transaksi');


Route::get('/user', function () {
    return Inertia::render('PanelAdmin/User');
})->name('user');

Route::get('/ladingpage', function () {
    return Inertia::render('Ladingpage');
})->name('ladingpage');

Route::get('/tables', function () {
    return Inertia::render('Tables');
})->name('tables');


// Input Buku

Route::get('/product', [BukuController::class, 'allproduct'])->name('product');

Route::get('/product/{id}', [BukuController::class, 'show'])->name('detail.product');

Route::get('/editproduct/{id}', [BukuController::class, 'edit'])->name('edit.product');

Route::post('/updateproduct/{id}', [BukuController::class, 'update'])->name('update.product');

Route::delete('/deleteproduct/{id}', [BukuController::class, 'destroy'])->name('delete.product');

Route::post('/tambahbuku', [BukuController::class, 'tambahbuku'])->name('tambahbuku');

Route::post('/tambahbuku', [BukuController::class, 'tambahbuku'])->name('tambahbuku');



///Carousel

Route::post('/updatecarousel', [CarouselController::class, 'update'])->name('update.carousel');
