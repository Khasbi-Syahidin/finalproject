import React from "react";

export default function DetailUser() {
    return (
        <div className="flex flex-wrap">
            <div className="w-full max-w-full mt-6 md:flex-none">
                <div className="flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="px-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                        <h4 className="mb-0 text-2xl font-black text-center">
                            Informasi Detail User
                        </h4>
                    </div>
                    <div className="flex-auto px-4 py-3">
                        <div className="flex flex-col pl-0 mb-0 rounded-lg">
                            <div className="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50">
                                <div className="flex flex-row lg:flex-col">
                                    <div className="flex sm:flex-row md:flex-col lg:flex-col">
                                        <div className="profile lg:flex lg:flex-row items-start gap-7 md:space-x-4 md:items-start sm:flex-col">
                                            <img
                                                className="rounded-lg object-cover sm:w-full w-4/5 lg:w-1/3 mx-2 my-1"
                                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                                alt="Profile"
                                                width={100}
                                            />
                                            <div className="deskripsi flex flex-col mx-2 my-auto">
                                                <h6 className="mt-3 leading-normal text-xl mb-2 lg:text-2xl text-bold">
                                                    Khasbi Syahidin
                                                </h6>
                                                <span className="mb-2 leading-tight text-sm">
                                                    Email Address :{" "}
                                                    <span className="font-semibold text-slate-700 sm:ml-2 sm:mt-5">
                                                        khasbi@gmail.com
                                                    </span>
                                                </span>
                                                <span className="mb-2 leading-tight text-sm">
                                                    Nomor Induk Siswa Nasional :{" "}
                                                    <span className="font-semibold text-slate-700 sm:ml-2">
                                                        12345678
                                                    </span>
                                                </span>
                                                <span className="mb-2 leading-tight text-sm">
                                                    Tempat Tanggal Lahir : {" "}
                                                    <span className="font-semibold text-slate-700 sm:ml-2 sm:mt-5">
                                                        Tegal, 03 Juli 2004
                                                    </span>
                                                </span>
                                                <span className="mb-2 leading-tight text-sm">
                                                    Jenis Kelamin : {" "} ,<br />
                                                    <span className="font-semibold text-slate-700 sm:ml-2 sm:mt-5">
                                                        Laki laki
                                                    </span>
                                                </span>
                                                <span className="mb-2 leading-tight text-sm">
                                                    Nomor Telephon : {" "}
                                                    <span className="font-semibold text-slate-700 sm:ml-2 sm:mt-5">
                                                        085727672415
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-auto text-right d-flex">
                                    <a
                                        className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                                        href="#"
                                    >
                                        <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>
                                        Delete
                                    </a>
                                    <a
                                        className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                                        href="#"
                                    >
                                        <i
                                            className="mr-2 fas fa-pencil-alt text-slate-700"
                                            aria-hidden="true"
                                        ></i>
                                        Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
