import React from "react";
import { Link } from "react-router-dom";
import OrderHeader from "./OrderHeader";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import useTotalPrice from "../hooks/useTotalPrice";

const OrderSummary = () => {
  const totalPrice = useTotalPrice();
  const orderAddress = useSelector((store) => store.order.address);

  return (
    <div className="container">
      <OrderHeader title="Order Summary" step={2} backlink="/order" />

      {/* ------------middle section------------------- */}
      <div className="bg-white p-5 border-t ">
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-2 lg:py-0">
            <div className="flex gap-2 items-center">
              <p>{orderAddress.name}</p>
              <button className="bg-gray-100 py-1 px-4 text-xs">Home</button>
            </div>
            <div className="h-5">
              <Link to="/order">
                <button className="text-blue-700 shadow-md border py-1 px-4 text-sm">
                  Change
                </button>
              </Link>
            </div>
          </div>
          <p className="w-[90%] pt-2">
            {`${orderAddress.locality} ${orderAddress.city} ${orderAddress.state}-${orderAddress.pincode}`}
          </p>
          <p>+91-{orderAddress.mobilenumber}</p>
        </div>
      </div>
      <CartItems />

      {/* ------------middle section end ------------------- */}

      <div className="shadow-inner bg-white fixed lg:sticky w-full p-2 bottom-0 flex items-center justify-between">
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
