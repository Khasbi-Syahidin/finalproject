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

    const [showModal, setShowModal] = useState(false);

    return (
        <>
             {/* Invoice */}
            <div
                className={`fixed overflow-hidden w-full h-full py-8 top-0 ${
                    showModal ? "block" : "hidden"
                }`}
                style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(000, 000, 000, 0.5)' }}
                id="modal"
            >
                <div className="flex items-center justify-center px-4 h-full w-full relative" >
                <div className="fixed overflow-y-auto w-11/12 h-full py-10 max-w-lg" >
                        <div className="bg-white rounded-md relative">
                            <div className="bg-secondary rounded-tl-md rounded-tr-md md:px-10 px-5 pt-9 pb-2.5">
                                <div className="sm:flex justify-between">
                                    <div>
                                        <img src={`/storage/image/logo_perpusku.png`} alt="" className="w-24"/>
                                        <p className="text-lg font-bold text-white mt-2">
                                            Detail Pesanan
                                        </p>
                                        <div className="mt-2">
                                            <p className="text-xs font-semibold leading-3 text-gray-800 uppercase">
                                                RECIPIENT
                                            </p>
                                            <p className="text-xs leading-4 text-white uppercase mt-1">
                                                JOHN SMITH
                                                <br />
                                                4304 Liberty Avenue
                                                <br />
                                                92680 Tustin, CA
                                                <br />
                                                VAT no.: 12345678
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <div className="flex space-x-1 items-center text-xs leading-3">
                                                <p className="text-blue-500">
                                                    @
                                                </p>
                                                <p className="text-white">
                                                    company.mail@gmail.com
                                                </p>
                                            </div>
                                            <div className="flex space-x-1 items-center text-xs leading-3 mt-2">
                                                <p className="text-blue-500">
                                                    m
                                                </p>
                                                <p className="text-white">
                                                    +386 714 505 8385
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:flex flex-col sm:items-end sm:text-right">
                                        <div className="py-2.5 px-5 bg-red-100 rounded-full text-xs leading-3 text-red-500 w-24 sm:w-auto">
                                            Pending
                                        </div>
                                        <p className="text-xs leading-5 text-light-blue mt-3">
                                            XYZ Company <br />
                                            <span className="text-white">
                                                1331 Hart Ridge Road <br />
                                                48436 Gaines, MI <br />
                                                TAX ID: 987654321
                                            </span>
                                        </p>
                                        <div className="mt-3">
                                            <div className="flex space-x-1 items-center text-xs leading-3">
                                                <p className="text-blue-500">
                                                    @
                                                </p>
                                                <p className="text-white">
                                                    company.mail@gmail.com
                                                </p>
                                            </div>
                                            <div className="flex space-x-1 items-center sm:justify-end text-xs leading-3 mt-2">
                                                <p className="text-blue-500">
                                                    m
                                                </p>
                                                <p className="text-white">
                                                    +386 714 505 8385
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6 text-xs leading-3 sm:text-right">
                                            <p className="text-gray-800 uppercase">
                                                invoice no.
                                            </p>
                                            <p className="text-white mt-1">
                                                #IDO-2202-2
                                            </p>
                                            <div className="mt-3">
                                                <p className="text-gray-800 uppercase">
                                                    Invoice date
                                                </p>
                                                <p className="text-white mt-1">
                                                    February 2, 2020
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="pt-3.5 pb-9 px-10">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="text-xs leading-none text-gray-500 border-b border-gray-200 text-left">
                                            <tr>
                                                <th className="pb-2">Items</th>
                                                <th className="pb-2">
                                                    Quantity
                                                </th>
                                                <th className="pb-2">Rate</th>
                                                <th className="pb-2 text-right">
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
                                                <td className="py-4 w-1/2">
                                                    Natural Herbs
                                                </td>
                                                <td className="py-4">
                                                    14 grams
                                                </td>
                                                <td className="py-4">$15</td>
                                                <td className="py-4 text-right">
                                                    $28
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
                                                <td className="py-4 w-1/2">
                                                    Active Plus
                                                </td>
                                                <td className="py-4">
                                                    7 grams
                                                </td>
                                                <td className="py-4">$7.5</td>
                                                <td className="py-4 text-right">
                                                    $14
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4 border-b border-gray-200">
                                                    Sub total
                                                </td>
                                                <td className="border-b border-gray-200 py-4" />
                                                <td className="border-b border-gray-200 py-4 text-right">
                                                    $14
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4 border-b border-gray-200">
                                                    10% Tax
                                                </td>
                                                <td className="border-b border-gray-200 py-4" />
                                                <td className="border-b border-gray-200 py-4 text-right">
                                                    $2
                                                </td>
                                            </tr>
                                            <tr className="text-xs leading-3 text-gray-800 text-left">
                                                <td className="py-4 w-1/2" />
                                                <td className="py-4 font-bold">
                                                    TOTAL
                                                </td>
                                                <td className="py-4" />
                                                <td className="text-indigo-400 py-4 text-right">
                                                    $42
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-9">
                                    <p className="text-xs leading-4 text-gray-500">
                                        All amounts are in dollars. Please make
                                        the payment within 15 days from the
                                        issue of date of this invoice.
                                    </p>
                                    <div className="flex items-center justify-between mt-8">
                                        <button
                                            onclick="modalHandler(false)"
                                            className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                                        >
                                            Close
                                        </button>
                                        <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                                            Send Invoice
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* End Invoice */}
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

                        <button
                            onClick={() => setShowModal(true)}
                            className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
                        >
                            {buku.status === "Dijual"
                                ? "Beli Sekarang"
                                : "Pinjam Sekarang"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailBuku;
