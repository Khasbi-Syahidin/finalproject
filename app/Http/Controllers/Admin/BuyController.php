<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Pembelian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\ConfirmBuyRequest;
use App\Http\Requests\CreateBuyRequest;

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
            $order = (int)substr($last->nomor_ticket, -6) + 1;
            $nomor = 'BL' . $year . $month . $order;
        }

        $checkByNomor = Pembelian::where('nomor', $nomor)->first();
        if (!empty($checkByNomor)) {
            $order = (int)substr($checkByNomor->nomor_ticket, -6) + 1;
            $nomor = 'BL' . $year . $month . $order;
            // Recursif to this function until the number not duplicate
            return $this->createTicket($nomor);
        }

        return $nomor;
    }

    public function create(CreateBuyRequest $request)
    {
        try {
            DB::beginTransaction();
            $nomor = $this->generateCode();
            $request = array_merge($request->validated(), ['nomor' => $nomor]);
            Pembelian::create($request);
            DB::commit();
            // return to_route('users.index');
            // TODO: return page
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function confirm(ConfirmBuyRequest $request)
    {
        try {
            DB::beginTransaction();
            $data = Pembelian::where('nomor', $request['nomor'])->firstOrFail();
            $data->update(['status' => 'terbayar']);
            DB::commit();
            // return to_route('users.index');
            // TODO: return page
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

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
}
