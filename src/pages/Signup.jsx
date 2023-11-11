import React from "react";
import AuthLeft from "../components/AuthLeft";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className=" my-4 flex w-[70%] lg:w-[60%] h-[70vh] mx-auto">
      <div className="w-[40%] h-full">
        <AuthLeft
          heading="Looks like you're new here!"
          subheading="Sign up with your mobile number to get started"
        />
      </div>
      <div className="right w-[60%] bg-white">
        <form className="py-10 px-5">
          <input
            className="border-b p-1 w-full outline-none"
            placeholder="Enter Mobile number"
          />
          <p className="mt-8 text-gray-500 text-[10px] flex gap-1">
            <span>By continuing,you agree to Flipkart's</span>
            <span className="text-blue-500">Terms of Use</span>
            <span>and</span>
            <span className="text-blue-500">Privacy Policy</span>
          </p>
          <button className="bg-[#fb641b] font-semibold w-full text-center text-white my-2 py-2">
            Continue
          </button>
          <Link to="/login">
            <button className="shadow-md font-semibold text-sm py-2 w-full text-[#2874f0] text-center my-1 ">
              New User? Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
