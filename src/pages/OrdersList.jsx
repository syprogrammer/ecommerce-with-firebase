import React from "react";
import { Link } from "react-router-dom";

const orderlist = [
  {
    id: "order1",
    imgsrc: "/boatheadphone.jpeg",
    orderstatus: "Delivered on Nov 05",
    ordertitle: "boAt Rockerz 510 Super Extra bass...",
  },
  {
    id: "order2",
    imgsrc: "/parachuteoil.jpeg",
    orderstatus: "Delivered on Nov 05",
    ordertitle: "Grocery Basket (2 items)",
  },
];

const OrdersList = () => {
  return (
    <div className="container">
      {orderlist.map((order) => (
        <Link
          to={`/dashboard/orderlist/:${order.id}`}
          key={order.id}
          className="flex gap-6 items-center px-5 py-7 bg-white  border-y cursor-pointer"
        >
          <img src={order.imgsrc} className="w-10" />
          <div className="flex flex-col gap-2 tracking-normal w-[80%]">
            <span>{order.orderstatus}</span>
            <span className="text-gray-500 ">{order.ordertitle}</span>
          </div>
          <img src="/rightarrow.svg" />
        </Link>
      ))}
    </div>
  );
};

export default OrdersList;
