import DetailUser from '@/Components/Admin/DetailUser';
import Navbar from '@/Components/Admin/Navbar'
import Sidebar from '@/Components/Admin/Sidebar'
import React from 'react'
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import TambahUser from '@/Components/Admin/TambahUser';
import FooterAdmin from '@/Components/Admin/FooterAdmin';

const FormTambahUser = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSidebar = () => {
      setShowMenu(!showMenu);
    };

    return (
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar showMenu={showMenu} page={5} />
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full rounded-xl transition-all duration-200 px-2 py-6 md:px-4 lg:px-6">
                {/* <DetailUser /> */}
                {/* <TableUser users={users}/> */}
                <TambahUser />

            </main>
            <FooterAdmin />
      </div>
    );
  };

  export default FormTambahUser;
