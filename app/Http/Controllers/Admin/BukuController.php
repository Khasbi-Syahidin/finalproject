<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class BukuController extends Controller
{

    public function allbuku(){
        $bukus = Book::all();
        $users = User::all();
        return Inertia::render('PanelAdmin/Dashboard', ['bukus' => $bukus, 'users' => $users]);
    }
    // public function show($id){
    //     $buku = Book::find($id);
    //     return Inertia::render('PanelAdmin/Dashboard', ['buku' => $buku]);
    // }
    public function show(Book $id){
        $buku = Book::find($id);
        // dd($bukus);
        return Inertia::render('PanelAdmin/DetailProduct', ['buku' => $buku]);
    }
    public function edit(Book $id){
        $buku = Book::find($id)->first();
        Log::info($buku);
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


    public function allproduct(){
        $bukus = Book::all();
        return Inertia::render('PanelAdmin/Product', ['bukus' => $bukus]);
    }


    public function tambahbuku(Request $request){
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

   public function destroy(Book $id){
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

   public function formtambahbuku(){
    return Inertia::render('PanelAdmin/FormTambahBuku');
   }
}
