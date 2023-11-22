import React from "react";
import OrderHeader from "../pages/OrderHeader";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="container">
      <OrderHeader title="Order Summary" step={2} backlink="/order"/>
      <div className="shadow-inner  fixed w-full p-2 bottom-0 flex items-center justify-between">
        <div className="flex flex-col ">
          <span className="text-gray-400 line-through leading-5">49,900</span>
          <span className="text-xl leading-5">42,098</span>
          <span className="text-blue-700 leading-5">View price details</span>
        </div>
        <Link to="/order/payment"
        className="bg-yellow-400 py-2 w-1/3 text-center rounded-md"
        >
        continue
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
