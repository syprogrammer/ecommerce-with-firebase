import Timeline from "../components/Timeline";

const statusList = [
  {
    title: "Your Order has been placed",
    time: "  Sun,25th Sep'23 - 4:32pm",
  },
  {
    title: "Seller has processed your order",
    statusTime: "  Sun,25th Sep'23 - 4:32pm",
  },
  {
    title: "Your item has been picked up by courier partner",
    time: "  Sun,25th Sep'23 - 4:32pm",
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
      {/* --------------------------- */}
      <div className="p-4 bg-white">      
       <div className="">
        <Timeline data={statusList}/>
       </div>
      </div>
    </div>
  );
};

export default OrderStatus;
