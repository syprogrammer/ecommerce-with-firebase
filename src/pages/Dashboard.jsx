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
const accountsettings = [
  {
    id: "flipkartplus",
    title: "Flipkart Plus",
    imgsrc: "/fplusicon.png",
  },
  {
    id: "editprofile",
    title: "Edit Profile",
    imgsrc: "/usericon.png",
  },
  {
    id: "Saved-Cards-&-Wallet",
    title: "Saved Cards & Wallet",
    imgsrc: "/walleticon.png",
  },
  {
    id: "Saved-Addresses",
    title: "Saved Addresses",
    imgsrc: "/locationicon.png",
  },
  {
    id: "select-language",
    title: "Select Language",
    imgsrc: "/langicon.png",
  },
  {
    id: "Notification-Settings",
    title: "Notification Settings",
    imgsrc: "/notificationicon.png",
  },
];
const myactivity = [
  {
    id: "reviews",
    title: "Reviews",
    imgsrc: "/reviewicon.png",
  },
  {
    id: "questions&answers",
    title: "Question & Answers",
    imgsrc: "/messageicon.png",
  },
];
const feedback =[
  {
    id:"feedbackandinfomation",
    title:"Feedback & Information",
    imgsrc:"/feedbackandinformation.png"
  },{
    id:"Browse-FAQs",
    title:"Browse FAQs",
    imgsrc:"/questionmark.png"
  }
]
const Dashboard = () => {
  return (
    <div className="container w-full">

      <div className="flex justify-evenly py-5 flex-wrap gap-5 bg-white p-2 ">
        {nav.map((nav) => (
          <div
            key={nav.title}
            className="w-[46%] py-2 px-4  flex gap-2 items-center border rounded-md"
          >
            <img src={nav.imgsrc} className="w-6" />
            <span>{nav.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-white my-2 p-2">
        <h3 className="text-lg font-semibold pb-2 border-b">
          Account Settings
        </h3>
        <div className="flex flex-col gap-5 py-2">
          {accountsettings.map((setting) => (
            <div key={setting.id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={setting.imgsrc} />
                <span>{setting.title}</span>
              </div>
              <img src="/rightarrowicon.svg" className="w-3" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white my-2 p-2">
        <h3 className="text-lg font-semibold pb-2 border-b">My Activity</h3>
        <div className="flex flex-col gap-5 py-2">
          {myactivity.map((activity) => (
            <div key={activity.id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={activity.imgsrc} />
                <span>{activity.title}</span>
              </div>
              <img src="/rightarrowicon.svg" className="w-3" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white my-2 p-2">
        <h3 className="text-lg font-semibold pb-2 border-b">
          Account Settings
        </h3>
        <div className="flex flex-col gap-5 py-2">
          {accountsettings.map((setting) => (
            <div key={setting.id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={setting.imgsrc} />
                <span>{setting.title}</span>
              </div>
              <img src="/rightarrowicon.svg" className="w-3" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white my-2 p-2">
        <h3 className="text-lg font-semibold pb-2 border-b">Feedback & Information</h3>
        <div className="flex flex-col gap-5 py-2">
          {feedback.map((feedback) => (
            <div key={feedback.id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={feedback.imgsrc} className="w-6" />
                <span>{feedback.title}</span>
              </div>
              <img src="/rightarrowicon.svg" className="w-3" />
            </div>
          ))}
        </div>
      </div>

      <button className=" w-full bg-white py-2 px-5 text-blue-600">Logout</button>
    
    </div>
  );
};

export default Dashboard;
