import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
   <div className="flex justify-between py-2 px-5 shadow-md ">
    <div className="logo">
        <Link
          to="/admin"
          className="flex flex-col justify-start items-start px-2 md:px-4"
        >
          <img src="./logo.svg" alt="Flipkart" data-testid="logo" className=" -ml-8 text-center text-blue-700 font-bold italic w-32" />
          <div className="flex gap-1 items-center">
            <span className="text-gray-700 italic text-[10px] lg:text-xs">
              Admin
            </span>
            <span className="text-yellow-500 italic text-[10px]  lg:text-xs">
             Dashboard
            </span>
            <img src="./fplus.svg" alt="h" className="w-1 md:w-2 text-white" />
          </div>
        </Link>
      </div>
   </div>
  )
}

export default AdminNavbar