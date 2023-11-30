import React from "react";

export default function DataBaru({dataBukus}) {

    console.log(dataBukus);
    return (
        <>
            <div className="w-full">
                <div className="flex flex-wrap -mx-3">
                    {/* card1 */}
                    <div className="w-full max-w-full px-3 mb-4 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-2xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <h5 className="mb-0 font-bold text-xl">
                                                20
                                            </h5>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal">
                                                Pembeli
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i className="fas fa-shopping-cart text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card2 */}
                    <div className="w-full max-w-full px-3 mb-4 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-2xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <h5 className="mb-0 font-bold text-xl">
                                                13
                                            </h5>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal">
                                                User Baru
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i className="fas fa-user text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card3 */}
                    <div className="w-full max-w-full px-3 mb-4 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-2xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <h5 className="mb-0 font-bold text-xl">
                                                15
                                            </h5>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal">
                                                Buku Baru
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i className="fas fa-book text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card4 */}
                    <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-2xl rounded-2xl bg-clip-border">
                            <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <h5 className="mb-0 font-bold text-xl">
                                                {dataBukus.length}
                                            </h5>
                                            <p className="mb-0 font-sans text-sm font-semibold leading-normal">
                                                Total Buku
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                        <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i className="fas fa-chart-bar text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Buku */}

            <div className="w-full mx-auto">
                <div className="flex flex-wrap my-6 -mx-3">
                    <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-2xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <div className="flex flex-wrap mt-0 -mx-3">
                                    <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                                        <h6>Buku Terbaru</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-auto p-3 px-0 pb-2">
                                <div className="overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                                    Nama Buku
                                                </th>
                                                <th className="px-6 py-3 pl-2 text-center font-bold tracking-normal uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                                    Kategori
                                                </th>
                                                <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                                    Harga
                                                </th>
                                                <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                                                    Stock
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataBukus.map((buku) => (
                                            <tr key={buku.id}>
                                                <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                    <div className="flex px-2 py-1">
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm ml-2 leading-normal">
                                                                {buku.nama_buku}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                                    {buku.kategori}
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                                    {buku.price}
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                                    {buku.stock}
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}

                    <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
                        <div className="border-black/12.5 shadow-soft-2xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    className="inline-block mr-2 align-middle"
                                >
                                    <path
                                        fill="#53637E"
                                        d="M21.854 13.683l1.998.159c-.132.854-.351 1.676-.652 2.46l-1.8-.905c.2-.551.353-1.123.454-1.714zm-2.548 7.826l-1.413-1.443c-.486.356-1.006.668-1.555.933l.669 1.899c.821-.377 1.591-.844 2.299-1.389zm1.226-4.309c-.335.546-.719 1.057-1.149 1.528l1.404 1.433c.583-.627 1.099-1.316 1.539-2.058l-1.794-.903zm-20.532-5.2c0 6.627 5.375 12 12.004 12 1.081 0 2.124-.156 3.12-.424l-.665-1.894c-.787.2-1.607.318-2.455.318-5.516 0-10.003-4.486-10.003-10s4.487-10 10.003-10c2.235 0 4.293.744 5.959 1.989l-2.05 2.049 7.015 1.354-1.355-7.013-2.184 2.183c-2.036-1.598-4.595-2.562-7.385-2.562-6.629 0-12.004 5.373-12.004 12zm23.773-2.359h-2.076c.163.661.261 1.344.288 2.047l2.015.161c-.01-.755-.085-1.494-.227-2.208zm-9.005 5.359v-1.419h-2.594v-1.295l2.722-3.653h1.288v3.689h.816v1.259h-.815v1.419h-1.417zm0-2.679v-1.695l-1.263 1.695h1.263zm-7.768 2.679c0-.961.275-1.709 1.234-2.419 1.129-.836 1.99-1.165 1.99-1.939 0-.512-.308-.83-.804-.83-.69 0-.855.723-.855 1.411h-1.421c-.06-1.782.951-2.713 2.338-2.713 1.287 0 2.22.856 2.22 2.036 0 .589-.183 1.056-.576 1.469-.621.655-1.552.985-2.163 1.682h2.774v1.303h-4.737z"
                                    />
                                </svg>
                                <h6 className="inline-block">Pre Transaksi</h6>
                            </div>
                            <div className="flex-auto p-4">
                                <div className="">
                                    <div className="relative mb-4 mt-0">
                                        <div className="px-2 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                            <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                                Novel Pulang Pergi
                                            </h6>
                                            <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                                Khasbi Syahidin
                                            </p>
                                        </div>
                                        <div className="px-2 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                            <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                                                Novel Pulang
                                            </h6>
                                            <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                                                Khasbi Syahidin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
