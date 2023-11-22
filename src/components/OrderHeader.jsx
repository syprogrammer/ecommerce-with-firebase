import React from "react";

const OrderHeader = ({ title, step }) => {
    let src=""
    if(step == 1){
        src ="/orderstep1.svg"
    }else if(step==2){
        src="/orderstep2.png"
    }
  return (
    <div className="bg-white flex flex-col shadow-md p-1">
      <div className="flex gap-5 p-3 border-b">
        <img src="/backarrow.svg  " />
        <span>{title}</span>
      </div>
      <div className="flex justify-evenly p-1">
       <img src={src}/>
      </div>
    </div>
  );
};

export default OrderHeader;
