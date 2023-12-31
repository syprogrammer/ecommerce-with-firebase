import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import { Link } from "react-router-dom";
import NewAddressModal from "./NewAddressModal";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "./AddressCard";
import { setOrderAddress } from "../redux/slices/orderSlice";

const OrderAddress = () => {
  const [address, setAddress] = useState("noaddressset");
  const [newAddressPopup, setNewAddressPopup] = useState(false);
  const dispatch = useDispatch();
  const addressList = useSelector((store) => store.auth.userData.address);

  const handleOrderAddress = (orderData,id) => {
    dispatch(setOrderAddress(orderData));
    setAddress(id);
  };

  console.log("addresslist=>", addressList);
  console.log(address);
  if (addressList.length < 0) {
    setNewAddressPopup(true);
  }
  return (
    <div className="container">
      <OrderHeader title="Select Address" step={1} backlink="/" />
      <div
        onClick={() => setNewAddressPopup(!newAddressPopup)}
        className="bg-white cursor-pointer text-blue-500 my-1 shadow-md p-4"
      >
        <span className="text-2xl mx-2">+</span>
        <span>
          {newAddressPopup ? "Enter New Address Details" : "Add a new address"}
        </span>
      </div>
      <div className="relative">
        {newAddressPopup && (
          <NewAddressModal setNewAddressPopup={setNewAddressPopup} />
        )}
      </div>
      {addressList.length > 0 && (
        <form className="pb-16 lg:pb-2" onSubmit={(e) => e.preventDefault}>
          {addressList.map((ads) => (
            <AddressCard
             key={`${ads.name}-${ads.locality}`}
              address={address}
              handleOrderAddress={handleOrderAddress}
              addressData={ads}
            />
          ))}
        </form>
      )}
      {!newAddressPopup && (
        <Link to={address == "noaddressset" ? "#" : "/order/summary"}>
          <div className="bg-orange-500 fixed lg:sticky bottom-0 w-full p-3 text-xl text-center text-white font-semibold">
            Deliver here
          </div>
        </Link>
      )}
    </div>
  );
};

export default OrderAddress;
