<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Pembelian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBuyRequest;
use App\Http\Requests\ConfirmBuyRequest;

class BuyController extends Controller
{
    public function generateCode($nomor = '')
    {
        $now = Carbon::now();
        $year = $now->format('y');
        $month = $now->month;
        $count = Pembelian::count();
        $last = Pembelian::orderByDesc('id')->first();

        if ($count == 0) {
            $order = 100001;
            $nomor = 'BL' . $year . $month . $order;
        } else {
            $order = (int)substr($last->nomor, -6) + 1;
            $nomor = 'BL' . $year . $month . $order;
        }

        $checkByNomor = Pembelian::where('nomor', $nomor)->first();
        if (!empty($checkByNomor)) {
            $order = (int)substr($checkByNomor->nomor, -6) + 1;
            $nomor = 'BL' . $year . $month . $order;
            // Recursif to this function until the number not duplicate
            return $this->generateCode($nomor);
        }

        // Log::info($nomor);

        return $nomor;
    }

    public function create(CreateBuyRequest $request)
    {
        try {
            DB::beginTransaction();
            $nomor = $this->generateCode();
            $request = array_merge($request->validated(), ['nomor' => $nomor, 'user_id' => auth()->id()]);
            // Log::info($request['buku_id']);
            Pembelian::create($request);
            DB::commit();
            $buku_id = $request['buku_id'];
            $buku = Book::find($buku_id);

            $buku = Book::find($buku_id);

            // Mendapatkan 20 buku serupa berdasarkan kategori
            $rekomendasiBuku = Book::where('kategori', $buku->kategori)
                ->where('id', '<>', $buku_id) // Menghindari buku yang sedang di-detail
                ->limit(20)
                ->get();

            return Inertia::render('User/UserDetailBuku', [
                'buku' => $buku,
                'rekomendasiBuku' => $rekomendasiBuku,
                'kode' => $nomor,
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function confirm(ConfirmBuyRequest $request)
    {

        log::info($request->all());
        try {
            DB::beginTransaction();
            $data = Pembelian::where('nomor', $request['nomor'])->firstOrFail();
            Book::where('id', $data->buku_id)->decrement('stock');
            $data->update(['status' => 'terbayar']);
            DB::commit();

            // return Inertia::render('PanelAdmin/Transaksi');
            return redirect()->route('admin.transaksi');
            // TODO: return page
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function showConfirmationForm(ConfirmBuyRequest $request)
    {
        try {
            $nomor = $request['nomor'];
            $data = Pembelian::where('nomor', $nomor)->firstOrFail();

            $user = User::find($data->user_id);
            $buku = Book::find($data->buku_id);

            $cekData = [
                'name' => $user->name,
                'email' => $user->email,
                'buku_id' => $buku->id,
                'nama_buku' => $buku->nama_buku,
                'kategory' => $buku->kategori,
                'status' => $buku->status,
                'total' => $data->total,
                'nomor' => $request->nomor,
            ];

            log::info($cekData);
            return Inertia::render('PanelAdmin/Transaksi', [
                'cekData' => $cekData,
            ]);
        } catch (\Throwable $th) {
            // Handle exception
            throw $th;
        }
    }

    // public function confirm(ConfirmBuyRequest $request)
    // {
    //     try {
    //         DB::beginTransaction();
    //         $data = Pembelian::where('nomor', $request['nomor'])->firstOrFail();

    //         // Lakukan validasi data atau sinkronisasi sesuai kebutuhan Anda
    //         // ...

    //         // Jika data valid dan sinkron, ubah status
    //         $data->update(['status' => 'terbayar']);

    //         DB::commit();

    //         // Redirect ke halaman setelah konfirmasi
    //         return redirect()->route('home')->with('success', 'Konfirmasi berhasil');
    //     } catch (\Throwable $th) {
    //         DB::rollBack();
    //         throw $th;
    //     }
    // }


    public function getIdForCanceling()
    {
        $data = Pembelian::whereraw('TIMESTAMPDIFF(HOUR, created_at, NOW()) >= maxtime')
            ->where('status', 'belum terbayar')
            ->pluck('id')
            ->toArray();
        return $data;
    }

    public function cancel($ids)
    {
        try {
            DB::beginTransaction();
            $data = Pembelian::whereIn('id', $ids);
            $data->update(['status' => 'terbatalkan']);
            DB::commit();
            // return to_route('users.index');
            // TODO: return page
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    // public function chat(Request $request)
    // {
    //     $chat = new Chat();
    //     $chat->user_id = Auth::user()->id;
    //     $chat->chat = $request->chat;
    //     $chat->pengaduan_id = $request->input('pengaduan_id');
    //     $chat->save();
    // }
}
