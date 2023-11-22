import React from 'react'
import { Outlet } from "react-router-dom";

const OrderLayout = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
        
        <Outlet/>
    </div>
  )
}

export default OrderLayout