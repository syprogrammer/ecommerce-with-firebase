import React from "react";
const nav = [
  {
    title: "Orders",
    imgsrc: "/ordersicon.svg",
  },
  {
    title: "Wishlist",
    imgsrc: "/hearticon.svg",
  },
  {
    title: "Coupons",
    imgsrc: "/gifticon.svg",
  },
  {
    title: "Help Center",
    imgsrc: "/micicon.svg",
  },
];
const Dashboard = () => {
  return (
    <div className="container">
      <div className="flex justify-evenly py-5 flex-wrap gap-5 bg-white p-2 ">
        {nav.map((nav) => (
          <div key={nav.title} className="w-[46%] py-2 px-4  flex gap-2 items-center border rounded-md">
            <img src={nav.imgsrc} className="w-6" />
            <span>{nav.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
