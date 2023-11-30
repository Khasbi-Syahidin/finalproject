<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Carousel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class CarouselController extends Controller
{

    public function allcarousel()
    {
        $carousels = Carousel::all();
        return Inertia::render('PanelAdmin/Dashboard', ['carousels' => $carousels]);
    }

    public function edit(Carousel $id)
    {
        $carousel = Carousel::find($id)->first();
        // Log::info($carousel);
        // dd($buku);
        return Inertia::render('PanelAdmin/Postingan', ['carousel' => $carousel]);
    }

    public function update(Request $request)
    {

        // dd($request);
        // Validasi request
        $request->validate([
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Ambil semua file gambar dari request
        $images = $request->file('images');

        // Lakukan penanganan untuk masing-masing file
        foreach ($images as $key => $image) {
            $index = $key + 1;

            // Simpan file ke storage di dalam direktori public/image/carousel
            $filename = "carousel{$index}." . $image->getClientOriginalExtension();
            $path = $image->storeAs("public/image/carousel", $filename);

            Carousel::updateOrCreate(
                ['id' => $index],
                ['image' => $filename]
            );

            // Hapus file lama dari storage jika diperlukan
            // Sebagai contoh, kita hapus file lama dengan index yang sama
            Storage::delete("public/image/carousel/carousel{$index}.jpg");
        }

        return redirect('/dashboard');
    }
}
