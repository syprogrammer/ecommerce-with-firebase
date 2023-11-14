import React from "react";

const EditProfile = () => {
  return (
    <div className="bg-white w-full lg:w-[80%] mx-auto my-5 p-4 rounded-md">
      <h1 className="mt-5 w-full mb-8 font-semibold text-xl">
        Complete Your profile
      </h1>
      <form className=" flex flex-wrap flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="name">Name</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="name"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="email">Email</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="altmob">Alternate Mobile Number</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="altmob"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="altemail">Alternate Email</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="altemail"
            type="email"
          />
        </div>
        <h1 className="w-full mt-5 mb-8 font-semibold text-xl">Address</h1>
        <div className="w-full flex flex-wrap flex-col lg:flex-row  gap-5">
          <div className="flex flex-col gap-2  lg:w-[48%]">
            <label htmlFor="city">City</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="city"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="pincode">Pin code</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="pincode"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="state">State</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="state"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="Locality">Locality</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="locality"
              type="email"
            />
          </div>
        </div>
        <button className="bg-blue-400 w-full p-2 hover:bg-blue-500 rounded-md text-white font-semibold text-2xl">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
