import React from 'react'

const OrderStatusCard = ({order}) => {
  const {orderItems} = order
  return (
    <div className="flex justify-between bg-white p-4 gap-4 border-b">
    <div className="flex flex-col gap-2">
      <span className="text-sm lg:text-lg">
        {orderItems[0].name}
      </span>
      <span className="text-xs text-gray-500">Black</span>
      <span className="text-xs text-gray-500">Seller:TBL Online</span>
      <p className="flex items-center gap-2">
        <span className="text-lg">₹{order.totalPrice || "24000"}</span>
        <span className="text-green-500 text-xs">2 offers</span>
      </p>
    </div>
    <img src={orderItems[0].img} className="h-24" />
  </div>
  )
}

export default OrderStatusCard