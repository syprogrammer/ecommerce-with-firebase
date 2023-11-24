import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const OrderLayout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems", cartItems.length);
  if (cartItems.length == 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <div className="border-b-2 border-white h-[90px] lg:h-[60px]">
        <Navbar />
      </div>
      <div className="border   w-full lg:w-[70%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default OrderLayout;
