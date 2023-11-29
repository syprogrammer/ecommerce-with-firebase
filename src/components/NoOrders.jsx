import React from "react";
import { Link } from "react-router-dom";

const NoOrders = () => {
  return (
    <div className="w-[98%] text-center items-center container flex flex-col  bg-white min-h-[80vh] my-4 mx-auto">
     <div className="">
     <img src="/noorders.png" className="w-[70%] mx-auto"/>
     </div>
     <h3 className="mt-5 py-5 text-xl font-semibold">You have no Orders</h3>
     <Link to="/" className="text-lg text-white bg-orange-600 py-2 px-5 rounded-sm tracking-wide">Start Shopping</Link>
    </div>
  );
};

export default NoOrders;
