import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { saveUserAuth } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const nav = [
  {
    title: "Orders",
    imgsrc: "/ordersicon.png",
    link: "/dashboard/orderslist",
  },
  {
    title: "Wishlist",
    imgsrc: "/hearticon.png",
    link: "/dashboard",
  },
  {
    title: "Coupons",
    imgsrc: "/gifticon.png",
    link: "/dashboard",
  },
  {
    title: "Help Center",
    imgsrc: "/micicon.png",
    link: "/dashboard",
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
const feedback = [
  {
    id: "feedbackandinfomation",
    title: "Feedback & Information",
    imgsrc: "/feedbackandinformation.png",
  },
  {
    id: "Browse-FAQs",
    title: "Browse FAQs",
    imgsrc: "/questionmark.png",
  },
];
const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(
          saveUserAuth({
            isAuthenticated:false,
            uid:"notloggedin"
          }))
       navigate("/")
      })
      .catch((error) => {
       console.log("dashboard signout err", error)
      });
  };
  return (
    <div className="container w-full">
      <div className="flex justify-evenly py-5 flex-wrap gap-5 bg-white p-4 ">
        {nav.map((nav) => (
          <Link
            to={nav.link}
            key={nav.title}
            className="w-[46%] py-2 px-4  flex gap-2 items-center border rounded-md"
          >
            <img src={nav.imgsrc} className="w-6" />
            <span>{nav.title}</span>
          </Link>
        ))}
      </div>

      <div className="bg-white my-2 p-4">
        <h3 className="text-lg font-semibold pb-2 border-b">
          Account Settings
        </h3>
        <div className="flex flex-col gap-5 py-2">
          {accountsettings.map((setting) => (
            <div key={setting.id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={setting.imgsrc} className="w-5" />
                <span className="text-sm">{setting.title}</span>
              </div>
              <img src="/rightarrowicon.svg" className="w-3" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white my-2 p-4">
        <h3 className="text-lg font-semibold pb-2 border-b">My Activity</h3>
        <div className="flex flex-col gap-5 py-2">
          {myactivity.map((activity) => (
            <div key={activity.id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={activity.imgsrc} className="w-5" />
                <span className="text-sm">{activity.title}</span>
              </div>
              <img src="/rightarrowicon.svg" className="w-3" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white my-2 p-4">
        <h3 className="text-lg font-semibold pb-2 border-b">
          Feedback & Information
        </h3>
        <div className="flex flex-col gap-5 py-2">
          {feedback.map((feedback) => (
            <div key={feedback.id} className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={feedback.imgsrc} className="w-5" />
                <span className="text-sm">{feedback.title}</span>
              </div>
              <img src="/rightarrowicon.svg" className="w-3" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={userSignOut} className=" w-full bg-white  p-2  text-blue-600">Logout</button>
    </div>
  );
};

export default Dashboard;
