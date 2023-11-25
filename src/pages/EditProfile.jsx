import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const [updated, setUpdated] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    altmobileno: "",
    altemail: "",
  });
  const [address, setAddress] = useState({
    city: "",
    pincode: "",
    state: "",
    locality: "",
  });

  const uid = useSelector((store) => store.auth.userAuth.uid);
  const userData = useSelector((store) => store.auth.userData);

  useEffect(() => {
    console.log("from profile ", userData, !address.city);
    if (address.city) {
      setProfile(profile);
      setAddress(address);
    }
  }, [userData]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };
  console.log(profile, address);
  const SaveProfile = async (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "users", uid), {
      profile: profile,
      address: address,
    });
    setUpdated(true);
  };
  return (
    <div className="bg-white w-full lg:w-[80%] mx-auto my-5 p-4 rounded-md">
      <h1 className="mt-5 w-full mb-8 font-semibold text-xl">
        Complete Your profile
      </h1>
      <form
        onSubmit={SaveProfile}
        className=" flex flex-wrap flex-col lg:flex-row gap-5"
      >
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="name">Name</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="name"
            value={profile.name}
            type="text"
            required
            minLength={2}
            maxLength={10}
            onChange={handleProfileChange}
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="email">Email</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="email"
            value={profile.email}
            type="email"
            required
            onChange={handleProfileChange}
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="altmob">Alternate Mobile Number</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="altmobileno"
            value={profile.altmobileno}
            type="text"
            minLength={10}
            maxLength={10}
            onChange={handleProfileChange}
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="altemail">Alternate Email</label>
          <input
            className="border px-4 py-2 rounded-md w-full outline-blue-500"
            id="altemail"
            value={profile.altemail}
            type="email"
            onChange={handleProfileChange}
          />
        </div>
        <h1 className="w-full mt-5 mb-8 font-semibold text-xl">Address</h1>
        <div className="w-full flex flex-wrap flex-col lg:flex-row  gap-5">
          <div className="flex flex-col gap-2  lg:w-[48%]">
            <label htmlFor="city">City</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="city"
              value={address.city}
              type="text"
              minLength={4}
              maxLength={15}
              onChange={handleAddressChange}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="pincode">Pin code</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="pincode"
              value={address.pincode}
              type="text"
              minLength={6}
              maxLength={6}
              onChange={handleAddressChange}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="state">State</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="state"
              value={address.state}
              type="text"
              minLength={4}
              maxLength={15}
              onChange={handleAddressChange}
            />
          </div>
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="Locality">Locality</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="locality"
              value={address.locality}
              type="text"
              minLength={4}
              maxLength={15}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <button
          disabled={updated}
          style={{backgroundColor:updated?"gray":"#fb641b"}}
          className="bg-orange-400 w-full p-2  rounded-md text-white font-semibold text-lg"
        >
          {updated ? "Saved Successfully" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
