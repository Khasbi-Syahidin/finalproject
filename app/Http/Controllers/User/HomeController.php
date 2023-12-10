<?php

namespace App\Http\Controllers\User;

use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Carousel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    public function index(Request $request)
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

    public function filterBooks(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'Fiksi' => 'boolean',
            'NoFiksi' => 'boolean',
            'Novel' => 'boolean',
            'Biografi' => 'boolean',
            'Sejarah' => 'boolean',
            'Sains' => 'boolean',
            'Pendidikan' => 'boolean',
            'Sastra' => 'boolean',
            'Bisnis' => 'boolean',
            'Teknologi' => 'boolean',
            'Seni' => 'boolean',
            'Hobi' => 'boolean',
            'Anak' => 'boolean',
            'Remaja' => 'boolean',
            'Dijual' => 'boolean',
            'Dipinjam' => 'boolean',
        ]);

        // dd($request->all());
        // Validasi request

        // Filter berdasarkan kategori yang dipilih
        $categories = $request->only([
            'Fiksi',
            'NoFiksi',
            'Novel',
            'Biografi',
            'Sejarah',
            'Sains',
            'Pendidikan',
            'Sastra',
            'Bisnis',
            'Teknologi',
            'Seni',
            'Hobi',
            'Anak',
            'Remaja',
        ]);

        // Filter berdasarkan status yang dipilih
        $statuses = $request->only(['Dijual', 'Dipinjam']);

        // Buat query untuk mengambil data buku sesuai dengan filter
        $booksQuery = Book::query();

        // Filter berdasarkan kategori dan status yang dipilih
        $booksQuery->where(function ($query) use ($categories, $statuses) {
            foreach ($categories as $category => $value) {
                if ($value) {
                    // Hanya menambahkan kategori ke query jika bernilai true
                    $query->orWhere('kategori', $category);
                }
            }
        });

        // Tambahkan filter status ke query
        $booksQuery->where(function ($query) use ($statuses) {
            foreach ($statuses as $status => $value) {
                if ($value) {
                    // Hanya menambahkan status ke query jika bernilai true
                    $query->orWhere('status', $status);
                }
            }
        });

        // Ambil data buku yang sesuai dengan filter
        $filteredBooks = $booksQuery->get();

        // Kembalikan data buku yang sesuai dengan filter
        // dd($filteredBooks);
        return Inertia::render('User/OutputFilter', ['bukus' => $filteredBooks, 'namaPages' => 'Hasil Filter']);
        // return response()->json($filteredBooks);
    }

    public function searchBooks(Request $request)
    {
        $searchTerm = strtolower($request->input('search'));

        // Ambil semua buku dari database (gunakan model Book)
        $allBooks = Book::all();

        // Inisialisasi array untuk menyimpan hasil pencarian
        $searchResults = [];

        // Lakukan pencarian fuzzy
        foreach ($allBooks as $book) {
            $bookName = strtolower($book->nama_buku);
            $author = strtolower($book->penulis);

            // Hitung tingkat kesamaan nama buku dan penulis menggunakan algoritma pencarian fuzzy sederhana
            similar_text($searchTerm, $bookName, $nameSimilarity);
            similar_text($searchTerm, $author, $authorSimilarity);

            // Tentukan tingkat kesamaan yang diterima (misalnya, 50%)
            if ($nameSimilarity >= 50 || $authorSimilarity >= 50) {
                $searchResults[] = $book;
            }
        }


        // dd($searchResults);

        return Inertia::render('User/OutputFilter', ['bukus' => $searchResults, 'namaPages' => 'Hasil Pencarian']);

        // Return halaman yang sesuai dengan hasil pencarian
        // return view('your.search.view', compact('searchResults'));
    }


}
