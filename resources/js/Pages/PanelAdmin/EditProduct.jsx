// import DetailUser from "@/Components/Admin/DetailUser";
import Navbar from "@/Components/Admin/Navbar";
import Sidebar from "@/Components/Admin/Sidebar";
import React from "react";
import { useState } from "react";
// import { Link } from "@inertiajs/react";
// import CardAtas from "@/Components/Admin/CardAtas";
// import TableUser from "@/Components/Admin/TrasnsaksiTerbaru";
import FooterAdmin from "@/Components/Admin/FooterAdmin";
import TambahProduk from "@/Components/Admin/TambahProduk";
import TableBuku from "@/Components/Admin/TableBuku";
import EditBuku from "@/Components/Admin/EditBuku";

const DetailProduct = ({buku}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSidebar = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar showMenu={showMenu} page={4} />
            <main className="ease-soft-in-out xl:ml-68.5 relative h-full rounded-xl transition-all duration-200 px-2 py-6 md:px-4 lg:px-4">
                {/* <TableBuku buku={buku} /> */}
                {/* <TambahProduk /> */}
                {/* <DetailBuku buku={buku} />   */}
                <EditBuku buku={buku}/>
            </main>
            <FooterAdmin />
        </div>
    );
};

export default DetailProduct;
