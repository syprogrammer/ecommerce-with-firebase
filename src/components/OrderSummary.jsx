import React from "react";
import { Link } from "react-router-dom";
import OrderHeader from "./OrderHeader";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import useTotalPrice from "../hooks/useTotalPrice";

const OrderSummary = () => {
  const totalPrice = useTotalPrice()
  return (
    <div className="container">
      <OrderHeader title="Order Summary" step={2} backlink="/order" />

      {/* ------------middle section------------------- */}
      <div className="bg-white p-5">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <p>saurarbh yadav</p>
              <button className="bg-gray-100 py-1 px-4 text-xs">Home</button>
            </div>
            <div className="h-5">
              <button className="text-blue-700 shadow-md border py-1 px-4 text-sm">
                Change
              </button>
            </div>
          </div>
          <p className="w-[70%]">
            yadav mobile garhi chaukhandi... 
          </p>
          <p>7982822274</p>
        </div>
      </div>
      <CartItems />

      {/* ------------middle section end ------------------- */}

      <div className="shadow-inner bg-white fixed w-full p-2 bottom-0 flex items-center justify-between">
        <div className="flex flex-col ">
          <span className="text-gray-400 line-through leading-5">49,900</span>
          <span className="text-xl leading-5">{totalPrice}</span>
          <span className="text-blue-700 leading-5">View price details</span>
        </div>
        <Link
          to="/order/payment"
          className="bg-yellow-400 py-2 w-1/3 text-center rounded-md"
        >
          continue
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
