<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/beli', function () {
    return Inertia::render('User/Beli');
})->name('beli');
