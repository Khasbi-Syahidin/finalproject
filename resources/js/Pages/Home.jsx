
import Berita from '@/Components/User/Berita';
import Footer from '@/Components/User/Footer';
import Hero from '@/Components/User/Hero';
import Kategori from '@/Components/User/Kategori';
import Navbar from '@/Components/User/Navbar';
import ProdukTerbaru from '@/Components/User/ProdukTerbaru';
import Rekomendasi from '@/Components/User/Rekomendasi';
import React from 'react'
// import GalaxyBackground from '@/Components/User/GalaxyBackground';


export default function Home({auth, carousels, bukuterbarus, rekomendasiBuku, bukus}) {
    // console.log(bukuterbarus);
    return (
        <>
        <div className="flex-col">
        <Navbar />
        {/* <GalaxyBackground /> */}
        <Hero auth={auth} carousels={carousels} />
        <ProdukTerbaru bukuterbarus={bukuterbarus} />
        {/* <Berita /> */}
        <Kategori bukus={bukus}/>
        {/* <ProdukTerbaru /> */}
        <Rekomendasi rekomendasi={rekomendasiBuku} />
        <Footer />
        </div>
        </>
    );
}
