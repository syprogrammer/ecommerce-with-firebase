import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/admin/AdminNavbar'

const AdminLayout = () => {
  return (
   <div className="bg-white">
    <AdminNavbar/>
    <div className="my-5">
        <Outlet/>
    </div>
   </div>
  )
}

export default AdminLayout