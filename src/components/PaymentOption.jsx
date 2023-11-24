import React from "react";

const PaymentOption = ({
  id,
  title,
  subtitle,
  imgsrc,
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <>
      <div className="flex gap-5 items-start  border-b pb-2 px-4 border-b-slate-100">
        <input
          type="radio"
          name="Saurabh yadav"
          value="Paytm Upi"
          id={id}
          checked={paymentMethod == id}
          onChange={(e) => setPaymentMethod(e.target.id)}
          className="mt-2"
        />
        <label htmlFor={id} className="w-full cursor-pointer">
         <div className="flex justify-between items-start">
          <div>
            <p>{title}</p>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
          <img src={imgsrc} className="w-10 -mt-2"/>
         </div>
        </label>
      </div>
    </>
  );
};

export default PaymentOption;
