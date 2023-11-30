import { Link } from "@inertiajs/react";

export default function ProdukTerbaru({ bukuterbarus }) {
    // console.log(bukuterbarus);
    const formatCurrency = (value) => {
        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
          return 'Invalid Price';
        }

        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(numericValue);
      };

    return (
        <div className="bg-primary py-5 h-fit">
            <div className="terbaru container mx-auto p-0">
                <div className="bg-white my-5">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="mx-auto py-2 flex flex-wrap items-center lg:justify-center">
                            <h5 className="text-center text-text text-xl font-extrabold">Buku Terbaru</h5>
                        </div>
                        <hr className="bg-secondary opacity-100 w-full h-1.5" />
                        <div className="flex justify-center gap-3 flex-wrap py-5 pb-8">
                            {bukuterbarus.map((bukuterbaru) => (
                                <Link  key={bukuterbaru.id} href={`/userdetailbuku/${bukuterbaru.id}`}>
                                <div className="w-44 h-fit shadow transform transition-transform duration-300 hover:scale-105">
                                    <img
                                        src={`/storage/image/buku/${bukuterbaru.image}`}
                                        className="w-full h-full aspect-square"
                                    />
                                <div className="bg-white mx-auto">
                                    <div className="px-2">
                                        <div className="flex items-center">
                                            <h2 className="text-sm my-1 font-semibold">
                                            {bukuterbaru.nama_buku}
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
                                            {formatCurrency(bukuterbaru.price)}
                                            </h3>
                                            <p className="text-xs text-gray-600">
                                                {bukuterbaru.stock} pcs
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


