const statuses = [
  {
    statusTitle: "Your Order has been placed",
    statusTime: "  Sun,25th Sep'23 - 4:32pm",
  },
  {
    statusTitle: "Seller has processed your order",
    statusTime: "  Sun,25th Sep'23 - 4:32pm",
  },
  {
    statusTitle: "Your item has been picked up by courier partner",
    statusTime: "  Sun,25th Sep'23 - 4:32pm",
  },
];

const OrderStatus = () => {
  return (
    <div className="">
      <div className="px-5 py-2 text-gray-500 text-sm bg-white border-b">
        order ID - OD4855646456
      </div>
      <div className="flex justify-between bg-white p-4 gap-4 border-b">
        <div className="flex flex-col gap-2">
          <span className="text-lg">
            boAt Rockerz 510 Super Extra Bass Bluetooth Headset
          </span>
          <span className="text-xs text-gray-500">Black</span>
          <span className="text-xs text-gray-500">Seller:TBL Online</span>
          <p className="flex items-center gap-2">
            <span className="text-lg">1109</span>
            <span className="text-green-500 text-xs">2 offers</span>
          </p>
        </div>
        <img src="/boatheadphone.jpeg" className="h-24" />
      </div>

      {/* -------------order status------------------- */}
      <div className="flex flex-col p-4 bg-white">

      
      <div className="flex gap-4">
        <div className="w-1 flex flex-col items-center">
          <div className="w-3 h-4  rounded-full bg-green-500"></div>
          <div className=" h-full border-l-2 border-green-500"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex text-lg">
              <span>Order Confirmed</span>
            </div>
            {/* ----------------------- */}
            {statuses.map((status) => (
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="">{status.statusTitle}</span>
                  <span className="text-sm text-gray-500">
                    {status.statusTime}
                  </span>
                </div>
              </div>
            ))}
            {/* --------------- */}
          </div>
        </div>
      </div>
      {/* -------------end-------------------- */}
      {/* -------------order status------------------- */}
      
      <div className="flex gap-4  ">
        <div className="w-1 flex flex-col items-center">
          <div className="pt-4 w-3 h-4  rounded-full bg-green-500"></div>
          <div className=" h-full border-l-2 border-green-500"></div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-3">
            <div className="flex text-lg">
              <span>Shipped</span>
            </div>
            {/* ----------------------- */}
            {statuses.map((status) => (
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="">{status.statusTitle}</span>
                  <span className="text-sm text-gray-500">
                    {status.statusTime}
                  </span>
                </div>
              </div>
            ))}
            {/* --------------- */}
          </div>
        </div>
      </div>
      </div>
      {/* -------------end-------------------- */}
    </div>
  );
};

export default OrderStatus;
