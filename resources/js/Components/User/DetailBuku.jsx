import React, { useState, useRef, useEffect } from "react";
// import { Inertia } from "@inertiajs/inertia";
// import { useForm, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia-react";
// import { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { Link, useForm, usePage } from "@inertiajs/react";

const DetailBuku = ({ buku, kode }) => {
    const formatCurrency = (value) => {
        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
            return "Invalid Price";
        }

        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(numericValue);
    };

    // memunculkan kode

    useEffect(() => {
        if (kode) {
            // Jika ada kode, set showKode menjadi true
            setShowKode(true);
        }
    }, [kode]);

    // console.log(kode);

    const linkInputRef = useRef(null);
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        linkInputRef.current.select();
        document.execCommand("copy");
        setIsCopied(true);

        // Setelah beberapa detik, atur kembali status notifikasi
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const [showModal, setShowModal] = useState(false);
    const [showKode, setShowKode] = useState(false);

    // Mengatur nilai showModal menjadi false ketika showKode menjadi true
    useEffect(() => {
        if (showKode) {
            setShowModal(false);
        }
    }, [showKode]);

    // Fungsi untuk menampilkan atau menyembunyikan modal

    //Kirim data Requst Beli Ke controller
    const { data, setData, post } = useForm({
        buku_id: buku.id,
        total: buku.price,
        maxtime: 24,
        status: buku.status === "Dijual" ? "belum terbayar" : "dibooking",
        // ... tambahkan data lain sesuai kebutuhan
    });

    const submit = (e) => {
        e.preventDefault();

        // Tentukan endpoint berdasarkan nilai buku.status
        const endpoint =
            buku.status === "Dijual"
                ? "user.createkodebuy"
                : "user.createkodepeminjaman";

        // Kirim formData ke server
        post(route(endpoint), data);

        console.log(data);
    };

    //   console.log(buku);

    return (
        <>
            {/* Kode Uniq */}
            <div
                className={`fixed overflow-hidden w-full h-full .z-99 m-auto top-0 bottom-0 ${
                    showKode ? "block" : "hidden"
                }`}
                style={{
                    backdropFilter: "blur(8px)",
                    backgroundColor: "rgba(000, 000, 000, 0.3)",
                }}
                id="modal"
            >
                <div className="relative flex items-center justify-center w-full h-full px-4">
                    <div className="fixed w-11/12 h-full max-w-2xl py-40 overflow-y-auto">
                        <div className="relative bg-white rounded-md">
                            <div className="bg-secondary rounded-tl-md rounded-tr-md md:px-10 px-5 py-2.5">
                                <div className="justify-between sm:flex">
                                    <div>
                                        <img
                                            src='/image/logo_perpusku1.png'
                                            alt=""
                                            className="w-24"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="px-10 pt-6 pb-9">
                                <div className="w-full overflow-x-auto">
                                    <label
                                        htmlFor="link"
                                        className="text-xs font-normal text-gray-600"
                                    >
                                        Silahkan Tunjukkan Kode Uniq Ini Kepada
                                        Admin PerpusKu
                                        <br />
                                        <br />
                                        1. Kode Uniq ini berlaku selama 1 (satu)
                                        hari
                                        <br />
                                        2. Pastikan Transaksi yang anda bayarkan
                                        sesuai dengan Kode Uniq
                                        <br />
                                        3. Kode Uniq ini hanya dapat digunakan 1
                                        (satu) kali
                                        <br />
                                        4. Kode Uniq ini tidak dapat diganti
                                        <br />
                                        5. Pastikan Anda Sudah Copy atau Screen
                                        Shot Kode Uniq Sebelum anda meninggalkan
                                        Halaman ini
                                    </label>
                                    <div className="flex items-stretch mt-2">
                                        <div className="relative w-full">
                                            <input
                                                ref={linkInputRef}
                                                id="link"
                                                className="flex items-center w-full h-10 pl-4 pr-16 text-sm font-normal text-gray-600 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                                                value={kode}
                                            />
                                            <button
                                                onClick={copyToClipboard}
                                                className="absolute top-0 right-0 h-10 px-5 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 rounded-r hover:bg-indigo-600 focus:outline-none"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-link"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        fill="#fff"
                                                        d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"
                                                    />
                                                </svg>
                                            </button>
                                            {isCopied && (
                                                <div className="absolute px-4 py-2 mt-2 mr-2 text-xs text-white bg-green-500 rounded -top-1 right-12">
                                                    Kode Unik Berhasil Dicopy
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-xs leading-4 text-gray-500">
                                        Terima kasih telah melakukan transaksi!
                                    </p>
                                    <div className="flex items-center mt-5 justify-right">
                                        <button
                                            onClick={() => {
                                                setShowKode(false);
                                                history.back();
                                            }}
                                            className="px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow hover:bg-opacity-80"
                                        >
                                            <Link>Okee</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Detail Invoice */}

            <div
                className={`fixed overflow-hidden w-full h-full .z-99 m-auto top-0 bottom-0 ${
                    showModal ? "block" : "hidden"
                }`}
                style={{
                    backdropFilter: "blur(8px)",
                    backgroundColor: "rgba(000, 000, 000, 0.3)",
                }}
                id="modal"
            >
                <div className="relative flex items-center justify-center w-full h-full px-4">
                    <div className="fixed w-11/12 h-full max-w-2xl py-40 overflow-y-auto">
                        <div className="relative bg-white rounded-md">
                            <div className="bg-secondary rounded-tl-md rounded-tr-md md:px-10 px-5 py-2.5">
                                <div className="justify-between sm:flex">
                                    <div>
                                        <img
                                            src='/image/logo_perpusku1.png'
                                            alt=""
                                            className="w-24"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3.5 pb-9 px-10">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="text-xs leading-none text-left text-gray-500 border-b border-gray-200">
                                            <p className="mt-2 mb-4 text-lg font-bold text-gray-500">
                                                {buku.status === "Dijual"
                                                    ? "Detail Pembelian"
                                                    : "Detail Peminjaman"}
                                            </p>
                                            <tr>
                                                <th className="pb-2">Buku</th>
                                                <th className="pb-2"></th>
                                                <th className="pb-2">
                                                    Kategori
                                                </th>
                                                <th className="pb-2 text-right">
                                                    Harga
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-xs leading-3 text-left text-gray-800 border-b border-gray-200">
                                                <td className="w-8/12 py-4">
                                                    {buku.nama_buku}
                                                </td>
                                                <td className="py-4"></td>
                                                <td className="py-4">Novel</td>
                                                <td className="py-4 text-right">
                                                    {buku.status === "Dijual"
                                                        ? formatCurrency(buku.price)
                                                        : "Rp.0,-"}
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-left text-gray-800">
                                                <td className="w-1/2 py-4" />
                                                <td className="py-4"></td>
                                                <td className="py-4 border-b border-gray-200">
                                                    Pajak
                                                </td>
                                                <td className="py-4 text-right border-b border-gray-200">
                                                    Rp.0,-
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-left text-gray-800">
                                                <td className="w-1/2 py-4" />
                                                <td className="py-4 font-bold"></td>
                                                <td className="py-4 font-bold">
                                                    BAYAR
                                                </td>
                                                <td className="py-4 text-right text-indigo-400">
                                                    {buku.status === "Dijual"
                                                        ? formatCurrency(buku.price)
                                                        : "Rp.0,-"}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-9">
                                    <p className="text-xs leading-4 text-gray-500">
                                        Klik Konfirmasi Untuk Melanjutkan
                                        Transaksi
                                    </p>
                                    <div className="flex items-center justify-between mt-8">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="px-6 py-3 text-sm text-white bg-gray-400 rounded shadow hover:bg-gray-500"
                                        >
                                            Cancel
                                        </button>
                                        <form
                                            onSubmit={submit}
                                            encType="multipart/form-data"
                                        >
                                            <button
                                                onClick={() => {
                                                    // Menyembunyikan modal
                                                    setShowModal(false);

                                                    // setShowKode(true);

                                                    // Menjalankan fungsi sendDataToController
                                                    // sendDataToController();
                                                }}
                                                type="submit"
                                                className="px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow hover:bg-opacity-80"
                                            >
                                                Konfirmasi
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Invoice */}
            <div className="px-4 py-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 ">
                <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
                    {/* <!-- Preview Images Div For larger Screen--> */}

                    <div className="flex flex-col w-full gap-4  sm:w-96 md:w-8/12 lg:w-6/12 lg:flex-row lg:gap-8 sm:gap-6">
                        <div className="flex items-center justify-center w-full bg-gray-100 ">
                            <img
                                src={`/storage/image/buku/${buku.image}`}
                                alt="Wooden Chair Previw"
                            />
                        </div>
                    </div>

                    {/* <!-- Description Div --> */}

                    <div className="items-center w-full  sm:w-96 md:w-8/12 lg:w-6/12">
                        <p className="text-base font-normal leading-4 text-gray-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                            Buku Dengan Kategori {buku.kategori}
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
                            {buku.nama_buku}
                        </h2>
                        <div className="flex flex-row items-center justify-between mt-4 ">
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Stock : {buku.stock} Buku
                            </p>
                        </div>
                        <p className="text-base font-normal leading-6 text-gray-600  mt-7">
                            {buku.deskripsi}
                        </p>

                        <div className="mt-10 lg:mt-11">
                            <hr className="w-full my-2 bg-gray-200 " />
                            {/* <hr className="w-full mt-4 bg-gray-200 " /> */}
                            <p className="mt-6 text-xl font-semibold leading-5 lg:text-2xl lg:leading-6 ">
                                {buku.status === "Dijual" ? (
                                    formatCurrency(buku.price)
                                ) : (
                                    <div>
                                        <span className="text-sm font-medium leading-4 text-gray-600">
                                            Uang ganti Rugi jika bukunya hilang
                                        </span>
                                        <br /><br />
                                        {formatCurrency(buku.price)}
                                    </div>
                                )}
                            </p>

                            {/* <div className="flex flex-row items-center justify-between mt-4 ">
                                <p className="text-sm font-medium leading-4 text-gray-600">
                                    {buku.status == "Dijual"
                                        ? "Buku Ini Hanya Untuk Dijual"
                                        : "Buku Ini Hanya Untuk Dipinjam"}
                                </p>
                            </div> */}
                        </div>

                        {buku.status === "Dijual" ? (
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full py-5 mt-6 text-base font-medium leading-4 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-secondary lg:mt-12"
                            >
                                Beli Sekarang
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full py-5 mt-6 text-base font-medium leading-4 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-secondary lg:mt-12"
                            >
                                Pinjam Sekarang
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailBuku;
