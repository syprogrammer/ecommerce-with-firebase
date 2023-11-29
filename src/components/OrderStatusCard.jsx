import React from "react";

const OrderStatusCard = ({ order }) => {
  const { orderItems } = order;
  return (
    <>
      {orderItems.length < 2 ? (
        <div className="flex justify-between bg-white p-4 gap-4 border-b">
          <div className="flex flex-col gap-2">
            <span className="text-sm lg:text-lg">{orderItems[0].name}</span>
            <span className="text-xs text-gray-500">Black</span>
            <span className="text-xs text-gray-500">Seller:TBL Online</span>
            <p className="flex items-center gap-2">
              <span className="text-lg">₹{order.totalPrice || "24000"}</span>
              <span className="text-green-500 text-xs">2 offers</span>
            </p>
          </div>
          <img src={orderItems[0].img} className="h-24" />
        </div>
      ) : (
        <div>
          <div className=" bg-white p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h3> Order Items ({orderItems.length}) </h3>
              <button className="text-blue-700 shadow-md py-1 px-4">
                View All
              </button>
            </div>
            <div className="flex justify-evenly p-4 items-center">
              {orderItems.map((item) => (
                <div>
                  <img src={item.img} className="w-20" />
                </div>
              ))}
            </div>
            <div className="text-lg border-b pb-2">₹{order.totalPrice || "24000"}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderStatusCard;
