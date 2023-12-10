<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\Pembelian;
use App\Models\Peminjaman;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class BukuController extends Controller
{

    public function allbuku()
    {
        $bukus1 = Book::take(10)->get();
        $bukus = Book::all();
        $users = User::all();

        // PreTransaksi
        $praTransaksi = Pembelian::where('status', 'belum terbayar')
            ->take(10)
            ->get(['user_id', 'buku_id']);

        $dataPraTransaksi = [];

        foreach ($praTransaksi as $transaksi) {
            $userPraTransaksi = User::find($transaksi->user_id);
            $bukuPraTransaksi = Book::find($transaksi->buku_id);

            $dataPraTransaksi[] = [
                'user' => $userPraTransaksi,
                'buku' => $bukuPraTransaksi
            ];
        }

        // Menggunakan query builder untuk mengambil data penjualan yang terbayar
        $weeklySales = Pembelian::where('status', 'terbayar')
            ->whereBetween('created_at', [now('Asia/Jakarta')->startOfWeek(), now('Asia/Jakarta')->endOfWeek()])
            ->get();

        // Mengelompokkan data berdasarkan hari
        $groupedSales = $weeklySales->groupBy(function ($sale) {
            return now()->parse($sale->created_at)->format('l'); // l menunjukkan nama hari dalam bahasa Inggris
        });
        // dd($groupedSales);
        // Menyiapkan data untuk dimunculkan di chart
        $chartDataPembelian = [
            'xAxis' => [
                [
                    'scaleType' => 'band',
                    'data' => ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
                ],
            ],
            'series' => [
                [
                    'type' => 'bar',
                    'data' => [
                        $groupedSales->get('Monday') ? $groupedSales->get('Monday')->count() : 0,
                        $groupedSales->get('Tuesday') ? $groupedSales->get('Tuesday')->count() : 0,
                        $groupedSales->get('Wednesday') ? $groupedSales->get('Wednesday')->count() : 0,
                        $groupedSales->get('Thursday') ? $groupedSales->get('Thursday')->count() : 0,
                        $groupedSales->get('Friday') ? $groupedSales->get('Friday')->count() : 0,
                        $groupedSales->get('Saturday') ? $groupedSales->get('Saturday')->count() : 0,
                        $groupedSales->get('Sunday') ? $groupedSales->get('Sunday')->count() : 0,
                    ],
                ],
            ],
        ];

        //Chart Peminjaman
        $weeklyPeminjaman = Peminjaman::where('status', 'sedang dipinjam')
            ->whereBetween('created_at', [now('Asia/Jakarta')->startOfWeek(), now('Asia/Jakarta')->endOfWeek()])
            ->get();

        // Mengelompokkan data berdasarkan hari
        $groupedPeminjaman = $weeklyPeminjaman->groupBy(function ($sale) {
            return now()->parse($sale->created_at)->format('l'); // l menunjukkan nama hari dalam bahasa Inggris
        });
        // dd($groupedPeminjaman);
        // Menyiapkan data untuk dimunculkan di chart
        $chartDataPeminjaman = [
            'xAxis' => [
                [
                    'scaleType' => 'band',
                    'data' => ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
                ],
            ],
            'series' => [
                [
                    'type' => 'bar',
                    'data' => [
                        $groupedPeminjaman->get('Monday') ? $groupedPeminjaman->get('Monday')->count() : 0,
                        $groupedPeminjaman->get('Tuesday') ? $groupedPeminjaman->get('Tuesday')->count() : 0,
                        $groupedPeminjaman->get('Wednesday') ? $groupedPeminjaman->get('Wednesday')->count() : 0,
                        $groupedPeminjaman->get('Thursday') ? $groupedPeminjaman->get('Thursday')->count() : 0,
                        $groupedPeminjaman->get('Friday') ? $groupedPeminjaman->get('Friday')->count() : 0,
                        $groupedPeminjaman->get('Saturday') ? $groupedPeminjaman->get('Saturday')->count() : 0,
                        $groupedPeminjaman->get('Sunday') ? $groupedPeminjaman->get('Sunday')->count() : 0,
                    ],
                ],
            ],
        ];

        // dd($chartDataPeminjaman);
        return Inertia::render('PanelAdmin/Dashboard', ['bukus' => $bukus1, 'users' => $users, 'chartDataPembelian' => $chartDataPembelian, 'chartDataPeminjaman' => $chartDataPeminjaman, 'dataPraTransaksi' => $dataPraTransaksi]);
    }


    // public function show($id){
    //     $buku = Book::find($id);
    //     return Inertia::render('PanelAdmin/Dashboard', ['buku' => $buku]);
    // }
    public function show(Book $id)
    {
        $buku = Book::find($id);
        // dd($bukus);
        return Inertia::render('PanelAdmin/DetailProduct', ['buku' => $buku]);
    }
    public function edit(Book $id)
    {
        $buku = Book::find($id)->first();
        // Log::info($buku);
        // dd($buku);
        return Inertia::render('PanelAdmin/EditProduct', ['buku' => $buku]);
    }
    public function update(Request $request, $id)
    {
        // Validasi form data di sini (tambahkan validasi sesuai kebutuhan)

        $buku = Book::find($id);

        if (!$buku) {
            // Handle jika buku tidak ditemukan
            return redirect()->back()->with('error', 'Buku tidak ditemukan');
        }

        // Simpan nama file gambar lama sebelum diupdate
        $oldImageName = $buku->image;

        // Update data buku
        $buku->nama_buku = $request->input('name');
        $buku->kategori = $request->input('category');
        $buku->jumlah_halaman = $request->input('halaman');
        $buku->stock = $request->input('stock');
        $buku->price = $request->input('price');
        $buku->status = $request->input('status');
        $buku->penulis = $request->input('penulis');
        $buku->deskripsi = $request->input('deskripsi');

        // Cek apakah ada file gambar baru diupload
        if ($request->hasFile('image')) {
            // Hapus gambar lama dari penyimpanan
            if ($oldImageName) {
                Storage::delete('public/image/buku/' . $oldImageName);
            }

            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            // Simpan gambar ke penyimpanan yang diinginkan (contoh: public storage)
            $image->storeAs('public/image/buku', $imageName);

            // Setel path gambar untuk disimpan di database
            $buku->image = $imageName;
        }

        // Simpan perubahan
        $buku->save();

        // Redirect atau berikan respon sukses
        return redirect('dashboard/product')->with('success', 'Data buku berhasil diperbarui');
    }


    public function allproduct()
    {
        $bukus = Book::all();
        return Inertia::render('PanelAdmin/Product', ['bukus' => $bukus]);
    }


    public function tambahbuku(Request $request)
    {
        // Validasi form data di sini

        $imageName = "";

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            // Simpan gambar ke penyimpanan yang diinginkan (contoh: public storage)
            $image->storeAs('public/image/buku', $imageName);

            // Setel path gambar untuk disimpan di database
            // $imagePath = $imageName;
        }

        // Simpan data buku beserta path gambar ke database
        Book::create([
            'nama_buku' => $request->name,
            'kategori' => $request->category,
            'jumlah_halaman' => $request->halaman,
            'stock' => $request->stock,
            'price' => $request->price,
            'status' => $request->status,
            'penulis' => $request->penulis,
            'deskripsi' => $request->deskripsi,
            'image' => $imageName, // Setel path gambar yang sudah disimpan
        ]);

        // Redirect atau berikan respon sukses
        // return redirect()->back()->with('success', 'Buku ditambahkan');
        return to_route('admin.product');
    }

    public function destroy(Book $id)
    {
        $buku = Book::find($id)->first();
        //    $buku->delete();


        if ($buku->image) {
            Storage::delete('public/image/buku/' . $buku->image);
        }

        // Hapus entri buku dari database
        $buku->delete();

        // Redirect atau berikan respon sukses
        return redirect('dashboard/product')->with('success', 'Data berhasil Dihapus');

        // dd($buku);
        //    return redirect('dashboard/product')->with('success', 'Data berhasil Dihapus');
    }

    public function formtambahbuku()
    {
        return Inertia::render('PanelAdmin/FormTambahBuku');
    }



    //Chart Penjualan

}
