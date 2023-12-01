import { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { Link } from "@inertiajs/react";

// import { useForm } from 'react-hook-form';

function TambahProduk({ buku }) {
    return (
        <>
            {buku.map((buku) => (
                <div key={buku.id} className="px-2 py-2 lg:px-4">
                    <div className="flex flex-no-wrap items-start">
                        <div className="w-full ">
                            <form encType="multipart/form-data">
                                <div className="py-4 px-2">
                                    <div className="bg-white rounded shadow">
                                        <div className="p-7">
                                            <p className="text-xl font-semibold leading-tight text-gray-800">
                                                Detail Buku {buku.nama_buku}
                                            </p>
                                            <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Status Buku
                                                    </p>
                                                    <div className="relative top-1">
                                                        <input
                                                            readOnly
                                                            className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            // placeholder={buku.name}
                                                            defaultValue={
                                                                buku.status
                                                            }
                                                        />
                                                    </div>
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                        Pilih salah satu saja
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Nama Buku
                                                    </p>
                                                    <input
                                                        readOnly
                                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        id="name"
                                                        type="text"
                                                        name="name"
                                                        // placeholder={buku.name}
                                                        defaultValue={
                                                            buku.nama_buku
                                                        }
                                                    />
                                                    <p className="mt-3 text-xs leading-3 text-gray-600">
                                                        Pastikan penulisan nama
                                                        sudah benar
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Jumlah Stock Buku
                                                    </p>
                                                    <input
                                                        readOnly
                                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        id="stock"
                                                        type="number"
                                                        name="stock"
                                                        defaultValue={
                                                            buku.stock
                                                        }
                                                    />
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                        Hanya Bisa Input Angka
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Harga Buku
                                                    </p>
                                                    <input
                                                        readOnly
                                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        type="number"
                                                        id="price"
                                                        name="price"
                                                        defaultValue={
                                                            buku.price
                                                        }
                                                    />
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                        Hanya Bisa Input Angka
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Jumlah Halaman Buku
                                                    </p>
                                                    <input
                                                        readOnly
                                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        id="stock"
                                                        type="number"
                                                        name="halaman"
                                                        defaultValue={
                                                            buku.jumlah_halaman
                                                        }
                                                    />
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                        Hanya Bisa Input Angka
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Kategori Buku
                                                    </p>
                                                    <input
                                                        readOnly
                                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        id="stock"
                                                        type="text"
                                                        name="halaman"
                                                        defaultValue={
                                                            buku.kategori
                                                        }
                                                    />
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                        Pilih salah satu saja
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Penulis
                                                    </p>
                                                    <input
                                                        readOnly
                                                        className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        id="stock"
                                                        type="text"
                                                        name="penulis"
                                                        defaultValue={
                                                            buku.penulis
                                                        }
                                                    />
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                        Pastikan penulisan Nama
                                                        & Pangkat
                                                    </p>
                                                    <p className="text-base mt-4 mb-4 font-semibold leading-4 text-gray-800">
                                                        Image Buku
                                                    </p>
                                                    <img
                                                        className="border border-gray-300 rounded"
                                                        src={`/storage/image/buku/${buku.image}`}
                                                        alt="Book"
                                                    />
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600 ">
                                                        Pastikan Frame Gambar
                                                        3000 x 3000
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-base font-medium leading-none text-gray-800">
                                                        Deskripsi Buku
                                                    </p>
                                                    <div className="relative top-1">
                                                        <div className="mt-3 border border-gray-300 rounded">
                                                            <textarea
                                                                readOnly
                                                                className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none"
                                                                placeholder="Start typing here ..."
                                                                // defaultdefaultValue={""}
                                                                id="deskripsi"
                                                                type="text"
                                                                name="deskripsi"
                                                                defaultValue={
                                                                    buku.deskripsi
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                        Pilih salah satu saja
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-rpw flex-wrap items-center justify-center w-full px-7 lg:justify-end md:justify-end gap-x-4 gap-y-4 pt-8 pb-5">
                                            <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:w-1/3 w-full ">
                                                <Link onClick="back">
                                                    Kembali
                                                </Link>
                                            </button>
                                            <button
                                                className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:w-1/3 w-full "
                                                type="submit"
                                            >
                                                <Link
                                                    href={`/dashboard/editproduct/${buku.id}`}
                                                >
                                                    Edit Buku
                                                </Link>
                                            </button>
                                            {/* <hr className="h-[1px] bg-gray-100 my-14" /> */}
                                            {/* <PrimaryButton>

                                            Tambah Buku {data.name}
                                        </PrimaryButton> */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TambahProduk;
