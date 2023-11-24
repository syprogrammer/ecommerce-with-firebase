import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import useTotalPrice from "../hooks/useTotalPrice";
import { Link } from "react-router-dom";
import PaymentOption from "./PaymentOption";

const OrderPayment = () => {
  const totalPrice = useTotalPrice();
  const [paymentMethod, setPaymentMethod] = useState("paytmupi");
  console.log(paymentMethod);
  
  return (
    <div className="container">
      <OrderHeader title="Payment" step={3} backlink="/order/summary" />
      {/* ---------------------middle section--- */}

      {/* -------------bankoffer---------- */}
      <div className="flex flex-col  bg-white p-2 my-2 cursor-pointer">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4 items-center py-2 ">
            <img src="/axisbanklogo.svg" className="w-5" />
            <p className="text-sm">5% Cashback on Flipkart Axis Bank Card</p>
          </div>
          <img src="/rightarrow.svg" />
        </div>
        <p className="text-center cursor-pointer text-blue-700 border-t py-2">
          View All Offers
        </p>
      </div>
      {/* -----------------payment option-------------- */}
      <form className="bg-white p-2 my-2">
        <div className="pt-4 pb-1 border-b">
          <p>Suggested for you</p>
        </div>
        <div className="py-4 flex flex-col gap-7">
          <PaymentOption
            id="paytmupi"
            title="Paytm UPI"
            subtitle="sy@paytm"
            imgsrc="/paytmlogo.png"
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
      </form>
      <form className="bg-white px-2 pb-8 my-2">
        <div className="pt-4 pb-1 border-b">
          <p>All Other Options</p>
        </div>
        <div className="py-4 flex flex-col gap-7">
          <PaymentOption
            id="upi"
            title="UPI"
            subtitle="Pay by any UPI app"
            imgsrc="/upi.gif"
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <PaymentOption
            id="wallets"
            title="Wallets"
            subtitle="Pay by wallets"
            imgsrc="/wallets.gif"
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <PaymentOption
            id="cardpayment"
            title="Credit/Debit/ATM Card"
            subtitle="Add and secure card as per RBI guidelines"
            imgsrc=""
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <PaymentOption
            id="codpayment"
            title="Cash on Delivery"
            subtitle=""
            imgsrc=""
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
      </form>
      <div className="lg:hidden pb-16">
        <img src="/paymentsafetylabel.svg" className="w-full" />
        <img src="/safteylabelbadge.png"/>
      </div>
      <div className="hidden lg:flex items-center justify-center w-[50%] gap-4 mx-auto">
        <img src="/safeandsecure.png"/>
        <p className="text-gray-700">Safe and Secure and Payments. Easy Returns. 100% Authentic products</p>
      </div>
      {/* --------------------------end middlesection--------- */}

      <div className="shadow-inner bg-white fixed lg:sticky w-full p-2 bottom-0 flex items-center justify-between">
        <div className="flex flex-col ">
          <span className="text-gray-400 line-through leading-5">
            {totalPrice + 799}
          </span>
          <span className="text-xl leading-5">{totalPrice}</span>
          <span className="text-blue-700 leading-5">View price details</span>
        </div>

        <Link
          to="/dashboard"
          className="bg-yellow-400 py-2 w-1/3 text-center rounded-md"
        >
          continue
        </Link>
      </div>
    </div>
  );
};

export default OrderPayment;
