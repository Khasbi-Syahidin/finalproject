import { Link } from "@inertiajs/react";
import React from "react";

const Error12 = () => {
    return (
        <div className="bg-white m-auto h-full">
            <div className="flex items-center justify-center py-12">
                <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt="" />
                        <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" />
                        <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">Lagi Cari  Apa?</h1>
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">Mendingan Login Aja dulu</p>
                        <Link href="/">
                        <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Ke Halaman Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error12;
