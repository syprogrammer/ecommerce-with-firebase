import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="p-5 flex flex-col gap-5 justify-center items-center">
      <img src="/shoppingcart.png" className="py-5 w-[160px] lg:w-[300px] " />
      <span className="font-semibold">Your cart have 0 items</span>
      <Link to="/login" className="px-10 font-semibold py-2 bg-blue-600 text-white rounded-sm ">
        Login
      </Link>
    </div>
  );
};

export default EmptyCart;
