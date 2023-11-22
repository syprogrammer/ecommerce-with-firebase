import React from "react";
import OrderHeader from "../pages/OrderHeader";
import { Link } from "react-router-dom";

const OrderAddress = () => {
  return (
    <div className="container">
      <OrderHeader title="Select Address" step={1} />
      <div className="bg-orange-500 fixed bottom-0 w-full p-2 text-xl text-center text-white font-semibold">
        <Link to="/order/summary">Deliver here</Link>
      </div>
    </div>
  );
};

export default OrderAddress;
