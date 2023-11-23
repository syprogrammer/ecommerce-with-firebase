import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import { Link } from "react-router-dom";

const OrderAddress = () => {
  const [address, setAddress] = useState("saurabh");
  const submit = (e) => {
    e.preventDefault();
  };
  console.log(address);
  return (
    <div className="container">
      <OrderHeader title="Select Address" step={1} backlink="/"/>
      <div className="bg-white cursor-pointer text-blue-500 my-1 shadow-md p-4">
        <span className="text-2xl mx-2">+</span>
        <span>Add a new address</span>
      </div>
      <form className="pb-16" onSubmit={submit}>
        {["saurabh", "akash", "mohan", "ak"].map((name) => (
          <div
            key={name}
            className="px-4 py-5 flex gap-4 items-start bg-white border h-[50p1x]"
          >
            <input
              type="radio"
              name="Saurabh yadav"
              value="yadav mobile garhi chaukhandi sec-68 noida uttar pradesh-201301"
              id={name}
              checked={address == name}
              onChange={(e) => setAddress(e.target.id)}
              className="mt-2"
            />
            <label htmlFor={name} className="w-full">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <p>{name}</p>
                    <button className="bg-gray-100 py-1 px-4 text-xs">
                      Home
                    </button>
                  </div>
                  <div className="h-5">
                    {address == name && (
                    <button className="text-blue-700 shadow-md border py-1 px-4 text-sm">
                      Edit
                    </button>
                  )}
                  </div>
                </div>
                <p className="w-[70%]">
                  yadav mobile garhi chaukhandi sec-68 noida uttar
                  pradesh-201301
                </p>
              </div>
            </label>
          </div>
        ))}
      </form>
      <div >
        <Link to="/order/summary" className="bg-orange-500 fixed bottom-0 w-full p-3 text-xl text-center text-white font-semibold">Deliver here</Link>
      </div>
    </div>
  );
};

export default OrderAddress;
