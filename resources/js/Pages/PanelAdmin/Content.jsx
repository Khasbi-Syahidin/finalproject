import DetailUser from '@/Components/Admin/DetailUser';
import Navbar from '@/Components/Admin/Navbar'
import Sidebar from '@/Components/Admin/Sidebar'
import React from 'react'
import { useState } from 'react';
import { Link } from '@inertiajs/react';

const Content = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSidebar = () => {
      setShowMenu(!showMenu);
    };

    return (
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar showMenu={showMenu} />
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full rounded-xl transition-all duration-200">
                Haloooo
            </main>
      </div>
    );
  };

  export default Dashboard;
