import { useParams } from "react-router-dom";
import Timeline from "../components/Timeline";
import useGetOrder from "../hooks/useGetOrder";
import OrderStatusShimmer from "../components/shimmer/OrderStatusShimmer";
import OrderStatusCard from "../components/OrderStatusCard";

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
  const { orderid } = useParams();

  const order = useGetOrder(orderid);
  console.log("order", order, orderid);

  if (!order) {
    return <OrderStatusShimmer />;
  }

  return (
    <div className="">
      <div className="px-5 py-2 text-gray-500 text-sm bg-white border-b">
        order ID - {order?.orderid}
      </div>
      <OrderStatusCard orderItems={order.orderItems} />
      {/* --------------------------- */}
      <div className="p-4 bg-white">
        <div className="">
          <Timeline data={statusList} />
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
