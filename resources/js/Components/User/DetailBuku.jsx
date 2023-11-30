import React, { useState } from "react";

const DetailBuku = ({ buku }) => {
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
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                {/* <!-- Preview Images Div For larger Screen--> */}

                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full  bg-gray-100 flex justify-center items-center">
                        <img
                            src={`/storage/image/buku/${buku.image}`}
                            alt="Wooden Chair Previw"
                        />
                    </div>
                </div>

                {/* <!-- Description Div --> */}

                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
                        Buku Dengan Kategori {buku.kategori}
                    </p>
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                        {buku.nama_buku}
                    </h2>
                    <div className=" flex flex-row justify-between items-center mt-4">
                        <p className="font-medium text-sm leading-4 text-gray-600">
                            Stock : {buku.stock} Buku
                        </p>
                    </div>
                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
                        {buku.deskripsi}
                    </p>

                    <div className="lg:mt-11 mt-10">
                        <hr className=" bg-gray-200 w-full my-2" />
                        {/* <hr className=" bg-gray-200 w-full mt-4" /> */}
                        <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                            {buku.status == "Dijual"
                                ? formatCurrency(buku.price)
                                : ""}
                            {/* {formatCurrency(buku.price)} */}
                        </p>
                        <div className=" flex flex-row justify-between items-center mt-4">
                            <p className="font-medium text-sm leading-4 text-gray-600">
                                {buku.status == "Dijual"
                                    ? "Buku Ini Hanya Untuk Dijual"
                                    : "Buku Ini Hanya Untuk Dipinjam"}
                            </p>
                        </div>
                    </div>

                    <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
                        {buku.status == "Dijual"
                            ? "Beli Sekarang"
                            : "Pinjam Sekarang"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailBuku;
