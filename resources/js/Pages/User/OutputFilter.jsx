
import DetailBuku from '@/Components/User/DetailBuku';
import Footer from '@/Components/User/Footer';
import HasilFilter from '@/Components/User/HasilFilter';
import Hero from '@/Components/User/Hero';
import Kategori from '@/Components/User/Kategori';
import Navbar from '@/Components/User/Navbar';
import ProdukTerbaru from '@/Components/User/ProdukTerbaru';
import Rekomendasi from '@/Components/User/Rekomendasi';
import React from 'react'
// import GalaxyBackground from '@/Components/User/GalaxyBackground';


export default function OutputFilter({ bukus, namaPages}) {
    // console.log(bukuterbarus);
    return (
        <>
        <div className="flex-col">
        <Navbar />
        {/* <DetailBuku buku={buku} kode={kode}/> */}
        {/* <GalaxyBackground /> */}
        {/* <Hero auth={auth} carousels={carousels} /> */}
        {/* <ProdukTerbaru bukuterbarus={bukuterbarus} /> */}
        {/* <Berita /> */}
        {/* <Kategori /> */}
        {/* <ProdukTerbaru /> */}
        {/* <Rekomendasi rekomendasi={rekomendasiBuku} /> */}
        <HasilFilter bukus={bukus} namaPages={namaPages}/>
        <Footer />
        </div>
        </>
    );
}
