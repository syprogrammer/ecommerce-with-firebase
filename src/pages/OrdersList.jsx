import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useGetOrders from "../hooks/useGetOrders";
import OrdersShimmer from "../components/shimmer/OrdersShimmer";
import NoOrders from "../components/NoOrders";

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
  const uid = useSelector((store) => store.auth.userAuth.uid);
  const orders = useGetOrders(uid);
  // const orders = false
  if (!orders) {
    return <OrdersShimmer />;
  } else if (orders.length < 1) {
    return <NoOrders title="You have no Orders"/>
  }
  console.log(orders[0]);

  return (
    <div className="container">
      {orders?.map((order) => (
        <Link
          to={`/dashboard/orderlist/${order.orderid}`}
          key={order.orderid}
          className="flex gap-3 items-center px-4 py-7 bg-white  border-y cursor-pointer"
        >
          <img src={order.orderItems[0].img} className="w-10" />
          <div className="flex flex-col gap-2 tracking-normal text-sm w-[95%]">
            <span >{order.orderStatus || "Order Placed"}</span>
            <span className="text-gray-500 ">
              {order.orderItems[0].name.slice(0, 30)}
              {order.orderItems[0].name.length > 30 ? "..." : ""}
            </span>
          </div>
          <img src="/rightarrow.svg" />
        </Link>
      ))}
    </div>
  );
};

export default OrdersList;
