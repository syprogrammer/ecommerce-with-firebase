import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
    const userData = useSelector((store)=>store.auth.userData)
  return (
    <div className="bg-gray-100 min-h-[100vh] ">
      <div className="bg-white border-b pb-2 px-2">
        <div className="flex gap-5 pt-4  px-3  leading-5">
          <Link to="/">
            <img src="/backarrow.svg  " />
          </Link>
          <span className="text-lg  font-semibold">hey! {userData?.profile?.name}</span>
        </div>
        <div className="flex items-center gap-2 pl-10">
        <img src="/pluspremium.png" className="w-20 lg:w-28"/>
        <span className="text-[10px] lg:text-sm text-gray-400">Member</span>
        </div>
      </div>
      <div className="w-full lg:w-[70%] mx-auto bg-white px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
