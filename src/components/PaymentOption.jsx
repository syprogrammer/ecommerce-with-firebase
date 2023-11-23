import React from "react";

const PaymentOption = ({
  title,
  subtitle,
  imgsrc,
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <>
      <div className="justify-between">
        <input
          type="radio"
          name="Saurabh yadav"
          value="yadav mobile garhi chaukhandi sec-68 noida uttar pradesh-201301"
          id={title}
          checked={paymentMethod == title}
          onChange={(e) => setPaymentMethod(e.target.id)}
          className="mt-2"
        />
      </div>
    </>
  );
};

export default PaymentOption;
