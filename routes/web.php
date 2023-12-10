<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CheckRoleMiddleware;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');



Route::get('/dashboard2', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

// Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/userdetailbuku/{id}', [HomeController::class, 'detailbuku'])->name('user.buku.detail');

Route::get('/filter', [HomeController::class, 'filterBooks'])->name('filter');
Route::post('/filter1/', [HomeController::class, 'filterBooks'])->name('filter1');

Route::post('/search', [HomeController::class, 'searchBooks'])->name('search');

//Prefix Admin

Route::prefix('/')->middleware(['auth', 'user'])->name('user.')->group(function () {
    require __DIR__.'/user.php';
});

Route::prefix('dashboard')->middleware(['auth', 'admin'])->name('admin.')->group(function () {
    require __DIR__.'/admin.php';
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::fallback(function () {
    return Inertia::render('404');
});



require __DIR__.'/auth.php';
