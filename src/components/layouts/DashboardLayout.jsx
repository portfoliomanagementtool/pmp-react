import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout;