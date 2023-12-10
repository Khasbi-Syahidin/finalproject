<?php

namespace App\Http\Controllers\User;

use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Pembelian;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    //Info User


    public function info(){

        // $data = User::find(auth()->id());
        $peminjaman = Peminjaman::where('user_id', auth()->id())->get();
        $pembelian = Pembelian::where('user_id', auth()->id())->get();
        $bukus = Book::all();

        return Inertia::render('User/InfoAkun', ['peminjaman' => $peminjaman, 'pembelian' => $pembelian, 'bukus' => $bukus]);
    }

    //Edit Profile User

    public function editprofile($id){

        $user = User::find($id);

        return Inertia::render('User/EditProfile', ['user' => $user]);
    }

    public function updateprofile(Request $request){

        $user = User::find($request->input('user_id'));

        if (!$user) {
            // Handle jika buku tidak ditemukan
            return redirect()->back()->with('error', 'Buku tidak ditemukan');
        }

        // Simpan nama file gambar lama sebelum diupdate
        $oldImageName = $user->image;

        // Update data buku
        $user->name = $request->input('name');
        $user->gender = $request->input('gender');
        $user->phone = $request->input('phone');
        $user->NISN = $request->input('NISN');
        $user->TTL = $request->input('TTL');
        $user->alamat = $request->input('alamat');

        // Cek apakah ada file gambar baru diupload
        if ($request->hasFile('image')) {
            // Hapus gambar lama dari penyimpanan
            if ($oldImageName) {
                Storage::delete('public/image/user/' . $oldImageName);
            }

            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();

            // Simpan gambar ke penyimpanan yang diinginkan (contoh: public storage)
            $image->storeAs('public/image/user', $imageName);

            // Setel path gambar untuk disimpan di database
            $user->image = $imageName;
        }

        // Simpan perubahan
        $user->save();

        // Redirect atau berikan respon sukses
        return redirect('/info')->with('success', 'Data buku berhasil diperbarui');
    }
}
