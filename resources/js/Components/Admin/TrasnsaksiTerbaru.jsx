import React from "react";

export default function TableUser() {
    return (
        <div className="w-full px-6 pb-6 mx-auto">
            <div className="flex flex-wrap my-6 -mx-3">
                <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
                    <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
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
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                <div className="flex px-2 py-1">
                                                    <div className="flex flex-col justify-center">
                                                        <h6 className="mb-0 text-sm ml-2 leading-normal">
                                                            Belajar Web
                                                            Programming
                                                        </h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                                Teknologi
                                            </td>
                                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                                100.000,-
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                <div className="flex justify-center">
                                                    <a
                                                        className="flex mb-0 text-sm leading-normal mr-4"
                                                        href=""
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.3em"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        className="flex mb-0 text-sm leading-normal mr-4"
                                                        href=""
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.3em"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        className="flex mb-0 text-sm leading-normal"
                                                        href=""
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.3em"
                                                            viewBox="0 0 448 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                <div className="flex px-2 py-1">
                                                    <div className="flex flex-col justify-center">
                                                        <h6 className="mb-0 text-sm ml-2 leading-normal">
                                                            Belajar Web
                                                            Programming
                                                        </h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                                Teknologi
                                            </td>
                                            <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
                                                100.000,-
                                            </td>
                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                <div className="flex justify-center">
                                                    <a
                                                        className="flex mb-0 text-sm leading-normal mr-4"
                                                        href=""
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.3em"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        className="flex mb-0 text-sm leading-normal mr-4"
                                                        href=""
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.3em"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        className="flex mb-0 text-sm leading-normal"
                                                        href=""
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.3em"
                                                            viewBox="0 0 448 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card 2 */}

                <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
                    <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
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
    );
}
