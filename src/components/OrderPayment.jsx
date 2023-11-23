import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import useTotalPrice from "../hooks/useTotalPrice";
import { Link } from "react-router-dom";
import PaymentOption from "./PaymentOption";

const OrderPayment = () => {
  const totalPrice = useTotalPrice();
  const [paymentMethod,setPaymentMethod] = useState("paytmupi")

  return (
    <div className="container">
      <OrderHeader title="Payment" step={3} backlink="/order/summary" />
      {/* ---------------------middle section--- */}

      {/* -------------bankoffer---------- */}
      <div className="flex flex-col  bg-white p-2 my-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center py-2">
            <img src="/axisbanklogo.svg" className="w-5"/>
            <p className="text-sm">5% Cashback on Flipkart Axis Bank Card</p>
          </div>
          <img src="/rightarrow.svg" />
        </div>
        <p className="text-center text-blue-700 border-t py-2">View All Offers</p>
      </div>
      {/* -----------------payment option-------------- */}
      <form className="bg-white p-2 my-2">
        <div className="pt-4 pb-1 border-b">
          <p>Suggested for you</p>
        </div>
        <div className="py-4">
        <PaymentOption
        title="paytm"
        subtitle="upi with paytm"
        imgsrc="/"
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        />
        </div>
      </form>
      {/* --------------------------end middlesection--------- */}

      <div className="shadow-inner bg-white fixed w-full p-2 bottom-0 flex items-center justify-between">
        <div className="flex flex-col ">
          <span className="text-gray-400 line-through leading-5">
            {totalPrice + 799}
          </span>
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

export default OrderPayment;
