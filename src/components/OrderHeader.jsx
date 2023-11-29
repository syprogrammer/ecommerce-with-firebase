import React from "react";
import { useNavigate } from "react-router-dom";

const OrderHeader = ({ title, step, backlink }) => {
  const navigate = useNavigate();
  let src = "";
  if (step == 1) {
    src = "/orderstep1.svg";
  } else if (step == 2) {
    src = "/orderstep2.png";
  } else {
    src = "/orderstep3.svg";
  }
  return (
    <div className="bg-white flex flex-col shadow-md p-1">
      <div className="flex gap-5 p-3 border-b ">
        <img src="/backarrow.svg  " onClick={() => navigate(-1)} />

        <span>{title}</span>
      </div>
      <div className="flex justify-evenly ">
        <img src={src} className="" />
      </div>
    </div>
  );
};

export default OrderHeader;
