import DetailUser from '@/Components/Admin/DetailUser';
import Navbar from '@/Components/Admin/Navbar'
import Sidebar from '@/Components/Admin/Sidebar'
import React from 'react'
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import CardAtas from '@/Components/Admin/CardAtas';
import FooterAdmin from '@/Components/Admin/FooterAdmin';
import DataBaru from '@/Components/Admin/DataBaru';
import Chart from '@/Components/Admin/Chart';

const Dashboard = ({bukus, users, chartDataPembelian, chartDataPeminjaman, dataPraTransaksi, auth}) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSidebar = () => {
      setShowMenu(!showMenu);
    };

    // console.log(bukus);

    return (
      <div>
        <Navbar toggleSidebar={toggleSidebar} auth={auth}/>
        <Sidebar showMenu={showMenu} page={1} />
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full rounded-xl transition-all duration-200  px-6 py-6 sm:px-3">
                {/* <CardAtas /> */}
                <DataBaru dataBukus={bukus} users={users} dataPraTransaksi={dataPraTransaksi} />
                <Chart chartDataPembelian={chartDataPembelian}  chartDataPeminjaman={chartDataPeminjaman}/>
                {/* <Chart /> */}
            </main>
            <FooterAdmin />
      </div>
    );
  };

  export default Dashboard;
