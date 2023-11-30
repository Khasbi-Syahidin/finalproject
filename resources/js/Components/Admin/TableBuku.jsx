// import React from 'react'
import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function TableBuku({ bukus }) {
    const [show, setShow] = useState(null);

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

    return (
        <>
            <div className="w-full sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                            All Buku
                        </p>
                        <div>
                            <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">
                                    Tambah Buku
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">
                                    Nama dan Penulis
                                </th>
                                <th className="font-normal text-left pl-12">
                                    Kategori
                                </th>
                                <th className="font-normal text-left pl-12">
                                    Jumlah Halaman
                                </th>
                                <th className="font-normal text-left pl-20">
                                    Stock
                                </th>
                                <th className="font-normal text-left pl-20">
                                    Status
                                </th>
                                <th className="font-normal text-left pl-16">
                                    Harga
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {bukus.map((buku) => (
                                <tr
                                    key={buku.id}
                                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                                >
                                    <td className="pl-4 cursor-pointer">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10">
                                                {/* <img className="w-full h-full" src="/storage/image/buku/1700966564.png" alt="Book" /> */}
                                                <img
                                                    className="w-full h-full"
                                                    src={`/storage/image/buku/${buku.image}`}
                                                    alt="Book"
                                                />
                                            </div>
                                            <div className="pl-4 my-auto">
                                                <p className="font-medium">
                                                    {buku.nama_buku}
                                                </p>
                                                <p className="text-xs leading-3 text-gray-600 pt=1">
                                                    {buku.penulis}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-12">
                                        <p className="text-sm font-medium leading-none text-gray-800">
                                            {buku.kategori}
                                        </p>
                                    </td>
                                    <td className="pl-12">
                                        <p className="font-medium">
                                            {buku.jumlah_halaman} Halaman
                                        </p>
                                    </td>
                                    <td className="pl-20">
                                        <p className="font-medium">
                                            {buku.stock}
                                        </p>
                                    </td>
                                    <td className="pl-20">
                                        <p className="font-medium">
                                            {buku.status}
                                        </p>
                                    </td>
                                    <td className="pl-16">
                                        <p className="font-medium">
                                            {formatCurrency(buku.price)}
                                        </p>
                                        {/* <p className="text-xs leading-3 text-gray-600 mt-2">
                                            {buku.price}
                                        </p> */}
                                    </td>
                                    <td className="px-7 2xl:px-0">
                                        {show === buku.id ? (
                                            <button
                                                onClick={() => setShow(null)}
                                                className="focus:outline-none pl-7"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                                                        stroke="#A1A1AA"
                                                        strokeWidth="1.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                                                        stroke="#A1A1AA"
                                                        strokeWidth="1.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                                        stroke="#A1A1AA"
                                                        strokeWidth="1.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => setShow(buku.id)}
                                                className="focus:outline-none pl-7"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                                                        stroke="#A1A1AA"
                                                        strokeWidth="1.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                                                        stroke="#A1A1AA"
                                                        strokeWidth="1.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                                        stroke="#A1A1AA"
                                                        strokeWidth="1.25"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        )}
                                        {show === buku.id && (
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6">
                                                <Link
                                                    href={`/dashboard/product/${buku.id}`}
                                                    method="get"
                                                >
                                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                        <p>Detail</p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href={`/dashboard/editproduct/${buku.id}`}
                                                >
                                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                        <p>Edit</p>
                                                    </div>
                                                </Link>
                                                <Link
                                                    href={`/dashboard/deleteproduct/${buku.id}`}
                                                    method="delete"
                                                >
                                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                        <p>Delete</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
