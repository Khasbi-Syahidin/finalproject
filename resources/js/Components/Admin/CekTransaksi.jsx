import { useEffect, useState } from "react";
// import PrimaryButton from "../PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";

export default function CekTransaksi({ cekData }) {
    // const [cekData, setCekData] = useState(null);
    console.log(cekData);
    const [showModal, setShowModal] = useState(false);
    const handleChange = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: field === "image" ? value[0] : value,
        }));
    };
    const { data, setData, post } = useForm({
        buku_id: "",
        total: "",
        maxtime: 24,
        status: "belum terbayar",
        // ... tambahkan data lain sesuai kebutuhan
    });

    const submit = (e) => {
        e.preventDefault();
        if (cekData) {
            console.log(cekData);
            let endpoint = "";

            if (cekData.status === "Dijual") {
                endpoint = "admin.confirm.kode";
            } else if (cekData.statusPeminjaman === "dibooking") {
                endpoint = "admin.confirm.kode.peminjaman";
            } else if (cekData.statusPeminjaman === "sedang dipinjam") {
                endpoint = "admin.confirm.kode.pengembalian";
            }

            // Kirim formData ke server
            post(route(endpoint), data);
        } else {
            // Uji awalan nomor
            if (data.nomor.startsWith("BL")) {
                // Kirim formData ke server untuk admin.cek.kode
                post(route("admin.cek.kode"), data);
            } else if (data.nomor.startsWith("PB")) {
                // Kirim formData ke server untuk admin.cek.kodepeminjaman
                post(route("admin.cek.kode.peminjaman"), data);
            }
        }
    };

    useEffect(() => {
        // Lakukan sesuatu ketika nilai cekData berubah
        if (cekData) {
            // Jika ada kode, set showKode menjadi true
            setShowModal(true);
            // Lakukan hal lain sesuai kebutuhan
            setData({
                nomor: cekData.nomor,
                // ... tambahkan data lain sesuai kebutuhan
            });
        } else {
            // Lakukan hal lain sesuai kebutuhan
            setData({
                nomor: "",
            });
        }
    }, [cekData]);

    return (
        <>
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
                <div className="flex items-center justify-center px-4 mx-auto h-full w-full relative">
                    <div className="fixed overflow-y-auto w-11/12 h-full py-40 max-w-2xl m-auto">
                        <div className="bg-white rounded-md relative">
                            <div className="bg-secondary rounded-tl-md rounded-tr-md md:px-10 px-5 py-2.5">
                                <div className="sm:flex justify-between">
                                    <div>
                                        <img
                                            src='/storage/image/logo_perpusku.png'
                                            alt=""
                                            className="w-24"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3.5 pb-9 px-10">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="text-xs leading-none text-gray-500 border-b border-gray-200 text-left">
                                            <p className="text-lg font-bold text-gray-500 mt-2 mb-4">
                                                Detail Transaksi
                                            </p>
                                            <p className="text-base font-bold text-gray-500 mt-2 mb-4">
                                                Nama :{" "}
                                                {cekData ? cekData.name : ""}
                                                <br />
                                                <span className="text-sm font-bold text-gray-500 mt-2 mb-4">
                                                    {cekData
                                                        ? cekData.email
                                                        : ""}
                                                </span>
                                            </p>
                                            <br />
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
                                            <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
                                                <td className="py-4 w-8/12">
                                                    {cekData
                                                        ? cekData.nama_buku
                                                        : ""}
                                                </td>
                                                <td className="py-4"></td>
                                                <td className="py-4">Novel</td>
                                                <td className="py-4 text-right">
                                                    {/* {cekData.total} */}
                                                    {cekData &&
                                                    cekData.status === "Dijual"
                                                        ? cekData.total
                                                        : "Rp.0,-"}
                                                    {/* {cekData
                                                        ? cekData.total
                                                        : ""} */}
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4"></td>
                                                <td className="border-b border-gray-200 py-4">
                                                    Pajak
                                                </td>
                                                <td className="border-b border-gray-200 py-4 text-right">
                                                    Rp.0,-
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4 font-bold"></td>
                                                <td className="py-4 font-bold">
                                                    BAYAR
                                                </td>
                                                <td className="text-indigo-400 py-4 text-right">
                                                    {cekData &&
                                                    cekData.status === "Dijual"
                                                        ? cekData.total
                                                        : "Rp.0,-"}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-9">
                                    <p className="text-xs leading-4 text-gray-500">
                                        Status Sebelumnya ={" "}
                                        {cekData && cekData.statusPeminjaman}
                                    </p>
                                    <p className="text-xs leading-4 text-gray-500">
                                        Klik Konfirmasi Untuk Melanjutkan
                                        Transaksi
                                    </p>
                                    <div className="flex items-center justify-between mt-8">
                                        <button
                                            onClick={() => {
                                                setShowModal(false);
                                                window.history.back();
                                            }}
                                            className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                                        >
                                            Cancel
                                        </button>

                                        <form
                                            onSubmit={submit}
                                            encType="multipart/form-data"
                                        >
                                            <button
                                                onClick={() => {
                                                    setShowModal(false);
                                                }}
                                                type="submit"
                                                className={`px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white ${
                                                    cekData &&
                                                    (cekData.status ===
                                                        "terbayar" ||
                                                        cekData.statusPeminjaman ===
                                                            "sudah dikembalikan") &&
                                                    "bg-gray-400 cursor-not-allowed"
                                                }`}
                                                disabled={
                                                    cekData &&
                                                    (cekData.statusPeminjaman ===
                                                        "terbayar" ||
                                                        cekData.statusPeminjaman ===
                                                            "sudah dikembalikan")
                                                }
                                            >
                                                {cekData &&
                                                cekData.status === "Dijual"
                                                    ? "Konfirmasi"
                                                    : cekData &&
                                                      cekData.statusPeminjaman ===
                                                          "dibooking"
                                                    ? "Konfirmasi Pengambilan"
                                                    : cekData &&
                                                      cekData.statusPeminjaman ===
                                                          "sedang dipinjam"
                                                    ? "Buku Diterima"
                                                    : cekData &&
                                                      cekData.statusPeminjaman ===
                                                          "tidak dikembalikan"
                                                    ? "Denda diterima"
                                                    : cekData &&
                                                      cekData.statusPeminjaman ===
                                                          "sudah dikembalikan"
                                                    ? "Sudah Dikembalikan"
                                                    : cekData &&
                                                      cekData.statusPeminjaman ===
                                                          "terbayar"
                                                    ? "Sudah Terbayar"
                                                    : "Konfirmasi Transaksi"}
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
            <div className="px-6 py-6 rounded-md shadow-soft-2xl">
                <div className="carousel-1 my-3">
                    <form className="mx-auto mt-4 rounded " onSubmit={submit}>
                        <label
                            htmlFor="uniqueCode"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Silahkan nomor unik transaksi disini
                        </label>
                        {/* Input nomor Unik Transaksi */}
                        <div className="mb-4 flex">
                            <input
                                required
                                type="text"
                                id="nomor"
                                name="nomor"
                                value={data.nomor}
                                onChange={(e) =>
                                    handleChange("nomor", e.target.value)
                                }
                                className="w-full border p-2 rounded"
                            />
                            <button
                                type="submit"
                                //   onClick={handleSubmit}
                                className="bg-gray-800 w-12 text-white py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ml-4"
                            >
                                <div className="flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"
                                            // stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="#fff"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        {/* Tombol Submit */}
                        <div className="mt-4"></div>
                    </form>
                </div>
            </div>
        </>
    );
}
