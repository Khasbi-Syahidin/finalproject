<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Book;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin'),
        ]);


        // $books = [
        //     [
        //         // 'user_id' => 1,
        //         'nama_buku' => 'Book Dewasa 1',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 300,
        //         'stock' => 50,
        //         'penulis' => 'Author 1',
        //         'price' => 20,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 1.',
        //         'image' => 'https://via.placeholder.com/150/0000FF/808080?text=Book+1',
        //     ],
        //     [
        //         // 'user_id' => 2,
        //         'nama_buku' => 'Book Dewasa 2',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 250,
        //         'stock' => 40,
        //         'penulis' => 'Author 2',
        //         'price' => 25,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 2.',
        //         'image' => 'https://via.placeholder.com/150/00FF00/808080?text=Book+2',
        //     ],
        //     [
        //         // 'user_id' => 3,
        //         'nama_buku' => 'Book Dewasa 3',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 30,
        //         'penulis' => 'Author 3',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 3.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+3',
        //     ],
        //     [
        //         // 'user_id' => 3,
        //         'nama_buku' => 'Book Dewasa 4',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 40,
        //         'penulis' => 'Author 4',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 4.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+4',
        //     ],
        //     [
        //         // 'user_id' => 4,
        //         'nama_buku' => 'Book Dewasa 4',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 40,
        //         'penulis' => 'Author 4',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 4.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+4',
        //     ],
        //     [
        //         // 'user_id' => 4,
        //         'nama_buku' => 'Book Dewasa 4',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 40,
        //         'penulis' => 'Author 4',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 4.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+4',
        //     ],
        //     [
        //         // 'user_id' => 6,
        //         'nama_buku' => 'Book Dewasa 6',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 60,
        //         'penulis' => 'Author 6',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 6.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+6',
        //     ],
        //     [
        //         // 'user_id' => 7,
        //         'nama_buku' => 'Book Dewasa 7',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 70,
        //         'penulis' => 'Author 7',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 7.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+7',
        //     ],
        //     [
        //         // 'user_id' => 8,
        //         'nama_buku' => 'Book Dewasa 8',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 80,
        //         'penulis' => 'Author 8',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 8.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+8',
        //     ],
        //     [
        //         // 'user_id' => 9,
        //         'nama_buku' => 'Book Dewasa 9',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 90,
        //         'penulis' => 'Author 9',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 9.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+9',
        //     ],
        //     [
        //         // 'user_id' => 10,
        //         'nama_buku' => 'Book Dewasa 10',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 100,
        //         'penulis' => 'Author 10',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 10.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+10',
        //     ],
        //     [
        //         // 'user_id' => 11,
        //         'nama_buku' => 'Book Dewasa 11',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 110,
        //         'penulis' => 'Author 11',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 11.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+11',
        //     ],
        //     [
        //         // 'user_id' => 12,
        //         'nama_buku' => 'Book Dewasa 12',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 120,
        //         'penulis' => 'Author 12',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 12.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+12',
        //     ],
        //     [
        //         // 'user_id' => 13,
        //         'nama_buku' => 'Book Dewasa 13',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 130,
        //         'penulis' => 'Author 13',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 13.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+13',
        //     ],
        //     [
        //         // 'user_id' => 14,
        //         'nama_buku' => 'Book Dewasa 14',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 140,
        //         'penulis' => 'Author 14',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 14.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+14',
        //     ],
        //     [
        //         // 'user_id' => 15,
        //         'nama_buku' => 'Book Dewasa 15',
        //         'kategori' => 'Dewasa',
        //         'jumlah_halaman' => 200,
        //         'stock' => 150,
        //         'penulis' => 'Author 15',
        //         'price' => 15,
        //         'status' => 'Dipinjam',
        //         'deskripsi' => 'Description for Book Dewasa 15.',
        //         'image' => 'https://via.placeholder.com/150/FF0000/808080?text=Book+15',
        //     ],
        //     // ... tambahkan data lainnya untuk buku 4 hingga 20
        // ];

        // // Gunakan metode create untuk menyimpan data ke dalam tabel
        // foreach ($books as $book) {
        //     Book::create($book);
        // }

    }
}
