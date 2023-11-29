const orderStages = [
  {
    title: "Order Confirmed",
    time: "Sun, 18th oct '23",
    statusList: [
      {
        title: "Your Order has been placed",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
      {
        title: "Seller has processed your order",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
      {
        title: "Your item has been picked up by courier partner",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
    ],
  },
  {
    title: "Shipped",
    time: "Sun, 18th oct '23",
    statusList: [
      {
        title: "Your Order has been shipped",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
      {
        title: "Your order has been arrived at flipkart facility",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
      {
        title: "Your order has left the flipkart facility",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
    ],
  },
  {
    title: "Out For Delivery",
    time: "Sun, 18th oct '23",
    statusList: [
      {
        title: "Your Order has been reached nearest hub",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
      {
        title: "Your items is out for delivery",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
    ],
  },
  {
    title: "Delivered",
    time: "Sun, 18th oct '23",
    statusList: [
      {
        title: "Your Order has been Delivered",
        time: "  Sun,25th Sep'23 - 4:32pm",
      },
    ],
  },
];

const Timeline = () => {
  return (
    <ol className="relative border-s-2 border-green-500 ">
      {orderStages?.map((orderStage) => (
        <li key={orderStage.title} className="mb-5 ms-4">
          <div className="absolute w-3 bg-green-500 rounded-full mt-2 -start-[7px] ">
            <img src="/okicon.svg" className=""/>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg ">{orderStage.title}</h3>
            <h3 className="text-gray-500 text-sm">{orderStage.time}</h3>
          </div>
          <div className="py-4 flex flex-col gap-3">
            {orderStage.statusList.map((status) => (
              <div key={status.title} className="flex flex-col">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-800">{status.title}</span>
                  <span className="text-xs text-gray-500">{status.time}</span>
                </div>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
