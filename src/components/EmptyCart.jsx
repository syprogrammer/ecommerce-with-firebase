import React from "react";
import { Link } from "react-router-dom";
import NoOrders from "./NoOrders";

const EmptyCart = () => {
  return (
    <div className="p-5 flex flex-col gap-5 justify-center items-center">
      <NoOrders title="Cart is Empty"/>
    </div>
  );
};

export default EmptyCart;
