import React, { useState } from "react";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addNewAddress } from "../redux/slices/userSlice";

const NewAddressModal = ({setNewAddressPopup}) => {
    const uid = useSelector((store)=>store.auth.userAuth.uid)
    const dispatch = useDispatch()

  const [address, setAddress] = useState({
    name: "",
    mobilenumber: "",
    city: "",
    pincode: "",
    state: "",
    locality: "",
  });
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };
  const saveNewAddress = async (e) => {
    e.preventDefault();
    const profileRef = doc(db, "users", uid);
    // Atomically add a new region to the "regions" array field.
    await updateDoc(profileRef, {
      address: arrayUnion(address),
    });
    console.log(address)
    dispatch(addNewAddress(address))
    setNewAddressPopup(false)

    console.log("successfully saved new Address")
  };
  return (
    <div className="p-5 absolute z-10 bg-white w-full h-fit ">
      <form onSubmit={saveNewAddress}>
        <div className="w-full flex flex-wrap flex-col lg:flex-row  gap-5">
          <div className="flex flex-col gap-2  lg:w-[48%]">
            <label htmlFor="city">Name</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="name"
              value={address.name}
              type="text"
              minLength={4}
              maxLength={15}
              onChange={handleAddressChange}
            />
          </div>
          <div className="flex flex-col gap-2  lg:w-[48%]">
            <label htmlFor="city">Mobile Number</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="mobilenumber"
              value={address.mobilenumber}
              type="text"
              minLength={10}
              maxLength={10}
              onChange={handleAddressChange}
            />
          </div>
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
        <button className="px-12 py-4 bg-orange-500 w-full text-white  rounded-md  my-4">
          Save Address{" "}
        </button>
      </form>
    </div>
  );
};

export default NewAddressModal;
