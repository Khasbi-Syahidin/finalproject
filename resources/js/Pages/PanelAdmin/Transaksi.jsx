import Navbar from "@/Components/Admin/Navbar";
import Sidebar from "@/Components/Admin/Sidebar";
import React from "react";
import { useState } from "react";
import CekTransaksi from "@/Components/Admin/CekTransaksi";
import FooterAdmin from "@/Components/Admin/FooterAdmin";

const Transaksi = ({cekData, auth}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSidebar = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} auth={auth}/>
            <Sidebar showMenu={showMenu} page={3} />
            <main className="ease-soft-in-out xl:ml-68.5 relative h-full rounded-xl transition-all duration-200 px-2 py-6 md:px-4 lg:px-6">
                <CekTransaksi cekData={cekData} />
            </main>
            <FooterAdmin />
        </div>
    );
};

export default Transaksi;
