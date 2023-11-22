import React from 'react'
import { Outlet } from "react-router-dom";
import OrderHeader from '../pages/OrderHeader';
const OrderLayout = () => {
  return (
    <div className="nav">
        
        <Outlet/>
    </div>
  )
}

export default OrderLayout