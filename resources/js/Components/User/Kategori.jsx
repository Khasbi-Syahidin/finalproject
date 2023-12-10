import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function Kategori({ bukus }) {
    const [BgButtonPinjam, setBgButtonPinjam] = useState("bg-primary");
    const [BgButtonJual, setBgButtonJual] = useState("bg-white");
    const [filteredBukus, setFilteredBukus] = useState([]);
    const [currentStatus, setCurrentStatus] = useState("Dijual"); // Default menampilkan buku yang dijual

    useEffect(() => {
        // Menyaring buku berdasarkan status
        const filtered = bukus
            .filter((buku) => buku.status === currentStatus)
            .slice(0, 20);
        setFilteredBukus(filtered);
    }, [currentStatus, bukus]);

    const handleBeliButtonClick = () => {
        setBgButtonPinjam("bg-primary");
        setBgButtonJual("bg-white");
        setCurrentStatus("Dijual");
    };

    const handlePinjamButtonClick = () => {
        setBgButtonPinjam("bg-white");
        setBgButtonJual("bg-primary");
        setCurrentStatus("Dipinjam");
    };

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
        <div className="bg-primary py-5 h-fit">
            {/* Remove py-8 */}
            <div className="terbaru container mx-auto p-0">
                <div className="bg-white my-5">
                    <div className="flex flex-wrap items-center justify-center  flex-row">
                        <div
                            onClick={handleBeliButtonClick}
                            className={`flex flex-wrap items-center w-1/2 justfy-center ${BgButtonJual} `}
                        >
                            <h5 className="text-center mx-auto text-text text-xl font-extrabold py-2">
                                Beli Buku
                            </h5>
                            <hr className="bg-secondary opacity-100  w-full h-1.5" />
                        </div>
                        <div
                            onClick={handlePinjamButtonClick}
                            className={`flex flex-wrap items-center w-1/2 justfy-center ${BgButtonPinjam} `}
                        >
                            <h5
                                className={`text-center mx-auto text-text text-xl font-extrabold py-2`}
                            >
                                Pinjam Buku
                            </h5>
                            <hr className="bg-secondary opacity-100  w-full h-0.5" />
                        </div>
                        <div className="flex justify-center gap-3  flex-wrap py-5 pb-8">
                            {/* Card 1 */}
                            {filteredBukus.map((buku) => (
                                <Link
                                    key={buku.id}
                                    href={`/userdetailbuku/${buku.id}`}
                                >
                                    <div className="w-44 h-fit shadow z-4 duration-300 hover:scale-105">
                                    <img
                                            src={`/storage/image/buku/${buku.image}`}
                                            className="w-full h-full aspect-square"
                                        />
                                        <div className="bg-white mx-auto">
                                            <div className="px-2">
                                                <div className="flex items-center">
                                                    <h2 className="text-sm my-1 font-semibold">
                                                        {buku.nama_buku}
                                                    </h2>
                                                </div>
                                                <div className="flex gap-2">
                                                    <p className="text-xs text-gray-600 px-1.5 bg-gray-200 py-1 w-fit">
                                                        Best Seller
                                                    </p>
                                                    <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1 w-fit">
                                                        Original
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between py-1">
                                                    <h3 className="text-text text-base font-semibold">
                                                        {formatCurrency(
                                                            buku.price
                                                        )}
                                                    </h3>
                                                    <p className="text-xs text-gray-600">
                                                        {buku.stock} pcs
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
