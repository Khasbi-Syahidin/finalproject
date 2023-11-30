<?php

namespace App\Http\Controllers\User;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\Carousel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    public function index()
    {
        $bukus = Book::all();
        $carousels = Carousel::all();
        $bukuterbaru = Book::latest()->take(8)->get();
        $rekomendasiBuku = Book::all()
            ->random() // Mengambil hasil secara acak
            ->limit(20)
            ->get();
        // dd($carousels);

        // dd($buku);

        return Inertia::render('Home', [
            'carousels' => $carousels,
            'bukuterbarus' => $bukuterbaru,
            'rekomendasiBuku' => $rekomendasiBuku,
            'bukus' => $bukus,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function detailbuku($id)
    {
        // Mendapatkan detail buku
        $buku = Book::find($id);

        // Mendapatkan 20 buku serupa berdasarkan kategori
        $rekomendasiBuku = Book::where('kategori', $buku->kategori)
            ->where('id', '<>', $id) // Menghindari buku yang sedang di-detail
            ->limit(20)
            ->get();

        // dd($rekomendasiBuku);

        return Inertia::render('User/UserDetailBuku', [
            'buku' => $buku,
            'rekomendasiBuku' => $rekomendasiBuku,
        ]);
    }
}
