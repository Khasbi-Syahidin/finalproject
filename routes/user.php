<?php

use App\Http\Controllers\Admin\BuyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/beli', function () {
    return Inertia::render('User/Beli');
})->name('beli');

// Route::post([BuyController::class, 'create'])->name('buy');
