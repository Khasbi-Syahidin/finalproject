import ProfileUser from "@/Components/User/ProfileUser";
import { Link } from "@inertiajs/react";
import React from "react";

function InfoAkun({ auth, peminjaman, pembelian, bukus }) {
    // Fungsi untuk memformat mata uang
    const formatCurrency = (amount) => {
        // Implementasi format mata uang sesuai kebutuhan Anda
        return amount.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        });
    };

    // Fungsi untuk memformat tanggal
    const formatDate = (dateString) => {
        // Implementasi format tanggal sesuai kebutuhan Anda
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: "Asia/Jakarta",
        };
        return new Date(dateString).toLocaleDateString("id-ID", options);
    };

    // Menggabungkan data peminjaman dan pembelian
    const datas = [...Object.values(peminjaman), ...Object.values(pembelian)];

    console.log(bukus);
    console.log(datas);

    return (
        <>
            <div className="px-4 mx-auto rounded-lg md:my-8 xl:my-10 sm:mt-0 md:px-8 py-6 md:w-1/2 w-full sm:border-r border-gray-200 shadow-soft-2xl">
                <ProfileUser
                    auth={auth}
                    peminjaman={peminjaman}
                    pembelian={pembelian}
                />
                <div className="mt-9">
                    <p className="text-base xl:text-xl md:text-xl font-medium leading-none text-gray-700 whitespace-nowrap">
                        Transaksi Kamu
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
                        <div className="bg-green w-3/4 rounded-full h-1" />
                    </div>
                </div>
                {datas.map((data, index) => {
                    return (
                        <div key={index} className="mt-8">
                            <div className="sm:flex justify-between items-end">
                                <div>
                                    <p className="text-sm sm:text-md font-medium leading-none text-gray-700 ">
                                        {data.id && data.awal_pinjam
                                            ? `Pinjam Buku ${
                                                  bukus.find(
                                                      (buku) =>
                                                          buku.id ===
                                                          data.buku_id
                                                  )?.nama_buku
                                              }`
                                            : `Beli Buku ${
                                                  bukus.find(
                                                      (buku) =>
                                                          buku.id ===
                                                          data.buku_id
                                                  )?.nama_buku
                                              }`}
                                    </p>
                                    <div className="flex items-center space-x-5 mt-4">
                                        <div className="flex flex-col">
                                            {/* <div className="text-end flex mb-1">
                                                <p className="text-sm leading-none text-gray-600">
                                                    {data.batas_waktu ? "Batas Waktu Pinjam" : "Waktu Pemesanan"}
                                                </p>
                                            </div> */}
                                            <div className="flex flex-row">
                                                <div className="m-auto flex">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                        fill="#52525B"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328zm-12.679 9.593c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm12 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm-6 6c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm-4-2c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm8 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm-8-9c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm8 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5z"
                                                            // stroke="#52525B"
                                                            // strokeWidth="1.25"
                                                            // strokeLinecap="round"
                                                            // strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="text-end flex my-auto">
                                                    {data.batas_waktu ? (
                                                        <p className="text-xs text-start leading-none text-gray-600 ml-2">
                                                            Batas Waktu <br />
                                                            <span className="text-sm leading-none">
                                                                {
                                                                    // data.batas_waktu
                                                                    formatDate(
                                                                        data.batas_waktu
                                                                    )
                                                                }
                                                            </span>
                                                        </p>
                                                    ) : (
                                                        <p className="text-xs text-start leading-none text-gray-600 ml-2">
                                                            Batas Waktu <br />
                                                            <span className="text-sm leading-none">
                                                                {
                                                                    // data.id && data.updated_at
                                                                    formatDate(
                                                                        data.updated_at
                                                                    )
                                                                }
                                                            </span>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex items-center space-x-5 mt-4">
                                        <div className="flex flex-col">
                                            {/* <div className="text-end flex mb-1">
                                                <p className="text-sm leading-none text-gray-600">
                                                    {data.batas_waktu ? "Batas Waktu Pinjam" : "Waktu Pemesanan"}
                                                </p>
                                            </div> */}
                                            <div className="flex flex-row">
                                                <div className="m-auto flex">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                        fill="#52525B"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9 6h-1v-1h2v2h-1v-1zm2-1h-1v-2h-2v-1h3v1h1v1h-1v1zm2-3h-2v-1h-3v-1h4v1h1v-1h1v5h-1v-3zm-8 3h-3v-3h3v3zm7 0h1v1h-1v-1zm8 0h-3v-3h3v3zm2-5h-7v7h7v-7zm-1 6h-5v-5h5v5zm-10 0h1v1h-1v-1zm2 1v-1h1v1h-1zm-7 2v1h-1v-1h1zm1-9h-7v7h7v-7zm-1 6h-5v-5h5v5zm3 8v2h-1v-2h1zm-4-6v1h-2v1h1v1h-3v-1h1v-1h-2v-1h5zm-3 9h3v3h-3v-3zm-2 5h7v-7h-7v7zm1-6h5v5h-5v-5zm5-3h1v1h-1v-1zm-2-1v-1h1v3h-1v-1h-1v1h-1v-1h-1v1h-1v-2h4zm6.089 4.734c0-3.765 3.149-6.845 6.915-6.725 1.954.052 3.761.944 4.996 2.429v-2.4379999999999997h-1v-2h-1v1.69c-.627-.284-1.298-.483-2-.591v-.099h1v-1h-2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v-1h1v-1h-4v1h2v1h-2v1h1v2h1v-1h2v1.1c-.471.88-.775 1.86-.874 2.9h-.126v1h-1v5h1v-1h1.383c.239.356.495.674.791 1h1.473c-1.677-1.334-2.558-3.295-2.558-5.266zm.911-5.734v-1h1v.698c-.362.29-.695.613-1 .962v-.66zm-2 9v-1h.429c.106.345.242.677.393 1h-.822zm15 2.586l-2.832-2.832c.524-.79.832-1.735.832-2.754 0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5c1.019 0 1.964-.308 2.754-.832l2.832 2.832 1.414-1.414zm-7-2.586c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
                                                            // stroke="#52525B"
                                                            // strokeWidth="1.25"
                                                            // strokeLinecap="round"
                                                            // strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="text-end flex my-auto">
                                                    {data.batas_waktu ? (
                                                        <p className="text-xs text-start leading-none text-gray-600 ml-2">
                                                            Nomor Transaksi <br />
                                                            <span className="text-sm leading-none">
                                                                {
                                                                    // data.batas_waktu
                                                                        data.nomor
                                                                }
                                                            </span>
                                                        </p>
                                                    ) : (
                                                        <p className="text-xs text-start leading-none text-gray-600 ml-2">
                                                            Nomor Transaksi <br />
                                                            <span className="text-sm leading-none">
                                                                {
                                                                    // data.id && data.updated_at
                                                                    data.nomor
                                                                }
                                                            </span>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:text-end lg:mb-8">
                                    <button
                                        className={`mt-4 sm:mt-0 focus:outline-none px-5 py-2 rounded text-xs leading-none ${
                                            data.id
                                                ? data.status === "dibatalkan"
                                                    ? "text-red-500 hover:bg-red-100 bg-red-50"
                                                    : data.status ===
                                                      "tidak dikembalikan"
                                                    ? "text-red-500 hover:bg-red-100 bg-red-50"
                                                    : data.status ===
                                                      "belum terbayar"
                                                    ? "text-red-500 hover:bg-red-100 bg-red-50"
                                                    : data.status ===
                                                      "terbatalkan"
                                                    ? "text-red-500 hover:bg-red-100 bg-red-50"
                                                    : data.status ===
                                                      "dibooking"
                                                    ? "text-red-500 hover:bg-red-100 bg-red-50"
                                                    : "hover:bg-green-100 text-green-500 bg-green-50"
                                                : ""
                                        }`}
                                    >
                                        {data.id && data.status}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* <div className="mt-8">
                    <div className="sm:flex justify-between items-end">
                        <div>
                            <p className="text-base sm:text-md font-medium leading-none text-gray-700 whitespace-nowrap">Peminjaman Buku Hujan</p>
                            <div className="flex items-center space-x-5 mt-4">
                                <div className="flex items-center">
                                    <button className="focus:outline-none">
                                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328zm-12.679 9.593c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm12 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm-6 6c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm-4-2c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm8 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm-8-9c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm8 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5z"
                                                stroke="#52525B"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <p className="text-sm leading-none text-gray-600 ml-2">Batas waktu pinjam : 04/07/2023</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 sm:mt-0 focus:outline-none px-5 py-2 bg-green-50 hover:bg-green-100 text-green-500 rounded text-sm leading-none">Sedang Dipinjam</button>
                    </div>
                </div> */}
                <div className="flex lg:gap-7 md:gap-3 gap-0 items-center justify-between mt-9">
                    <button
                        onClick={() => {
                            window.history.back();
                        }}
                        className="w-full py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                    >
                        Cancel
                    </button>
                    <button className="w-full py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                        <Link href={`/editprofile/${auth.user.id}`}>
                            Update Profile
                        </Link>
                    </button>
                    <button className="w-full py-3 bg-red-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                        <Link href={route("logout")} method="post" as="button">
                            Logout
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default InfoAkun;
