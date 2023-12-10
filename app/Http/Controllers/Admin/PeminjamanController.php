<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Book;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePeminjamanRequest;
use App\Http\Requests\ConfirmPeminjamanRequest;
// use App\Http\Requests\ConfirmPeminjamanRequest;

class PeminjamanController extends Controller
{
    public function generateCode($nomor = '')
    {
        $now = Carbon::now();
        $year = $now->format('y');
        $month = $now->month;
        $count = Peminjaman::count();
        $last = Peminjaman::orderByDesc('id')->first();

        if ($count == 0) {
            $order = 100001;
            $nomor = 'PB' . $year . $month . $order;
        } else {
            $order = (int)substr($last->nomor, -6) + 1;
            $nomor = 'PB' . $year . $month . $order;
        }

        $checkByNomor = Peminjaman::where('nomor', $nomor)->first();
        if (!empty($checkByNomor)) {
            $order = (int)substr($checkByNomor->nomor, -6) + 1;
            $nomor = 'PB' . $year . $month . $order;
            // Recursif to this function until the number not duplicate
            return $this->generateCode($nomor);
        }

        // Log::info($nomor);

        return $nomor;
    }

    public function create(CreatePeminjamanRequest $request)
    {
        try {
            DB::beginTransaction();
            $nomor = $this->generateCode();
            $request = array_merge($request->validated(), ['nomor' => $nomor, 'user_id' => auth()->id()]);
            // Log::info($request['buku_id']);
            Peminjaman::create($request);
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

    public function confirm(ConfirmPeminjamanRequest $request)
    {
        log::info($request->all());
        try {
            DB::beginTransaction();

            $data = Peminjaman::where('nomor', $request['nomor'])->firstOrFail();

            $awalPinjam = Carbon::now();
            $batasWaktu = $awalPinjam->copy()->addDays(7);
            Book::where('id', $data->buku_id)->decrement('stock');

            $data->update([
                'status' => 'sedang dipinjam',
                'awal_pinjam' => $awalPinjam,
                'batas_waktu' => $batasWaktu,
            ]);

            DB::commit();

            // return Inertia::render('PanelAdmin/Transaksi');
            return redirect()->route('admin.transaksi');
            // TODO: return page
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }


    public function showConfirmationForm(ConfirmPeminjamanRequest $request)
    {
        try {
            $nomor = $request['nomor'];
            $data = Peminjaman::where('nomor', $nomor)->firstOrFail();

            $user = User::find($data->user_id);
            $buku = Book::find($data->buku_id);

            $cekData = [
                'name' => $user->name,
                'email' => $user->email,
                'buku_id' => $buku->id,
                'nama_buku' => $buku->nama_buku,
                'kategory' => $buku->kategori,
                'status' => $buku->status,
                'statusPeminjaman' => $data->status,
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


    //Cofirm Dikembalikan

    public function confirmPengembalian(ConfirmPeminjamanRequest $request)
    {
        // dd($request->all());
        try {
            DB::beginTransaction();

            $data = Peminjaman::where('nomor', $request['nomor'])->firstOrFail();

            $waktuSekarang = Carbon::now();

            $data->update([
                'status' => 'sudah dikembalikan',
                'waktu_pengembalian' => $waktuSekarang,
            ]);

            Book::where('id', $data->buku_id)->increment('stock');

            DB::commit();

            // return Inertia::render('PanelAdmin/Transaksi');
            return redirect()->route('admin.transaksi');
            // TODO: return page
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }






    // Ganti status setelah lebih dari 7 hari

    public function getIdForCanceling()
    {
        $data = Peminjaman::whereRaw('TIMESTAMPDIFF(HOUR, created_at, NOW()) >= maxtime')
            ->where('status', 'sedang dipinjam')
            ->pluck('id')
            ->toArray();

        return $data;
    }

    public function cancel($ids)
    {
        try {
            DB::beginTransaction();
            $data = Peminjaman::whereIn('id', $ids);
            $data->update(['status' => 'terbatalkan']);
            DB::commit();

            // TODO: Redirect atau return response sesuai kebutuhan

        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    // public function confirm(ConfirmPeminjamanRequest $request)
    // {
    //     try {
    //         DB::beginTransaction();
    //         $data = Peminjaman::where('nomor', $request['nomor'])->firstOrFail();

    //         $data->update([
    //             'status' => 'sedang dipinjam',
    //             'awal_pinjam' => Carbon::now(),
    //             'batas_waktu' => Carbon::now()->addHours($data->maxtime), // Menggunakan maxtime
    //         ]);
    //         DB::commit();

    //         // TODO: Redirect atau return response sesuai kebutuhan
    //     } catch (\Throwable $th) {
    //         DB::rollBack();
    //         throw $th;
    //     }
    // }




}
