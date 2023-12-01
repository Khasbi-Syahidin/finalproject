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

    // Pemeriksaan apakah ada setidaknya satu buku sebelum mencoba mengambil item secara acak
    $bukuCount = Book::count();
    $rekomendasiBuku = [];

    if ($bukuCount > 0) {
        // Menggunakan metode inRandomOrder untuk mendapatkan data acak langsung dari database
        $rekomendasiBuku = Book::inRandomOrder()->limit(20)->get();
    }

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
