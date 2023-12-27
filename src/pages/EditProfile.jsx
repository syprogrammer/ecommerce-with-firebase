import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../redux/slices/userSlice";
import DisablePage from "../components/DisablePage";
import { useNavigate } from "react-router-dom";
import getUserinfo from "../utils/getUserinfo";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updated, setUpdated] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    mobilenumber: "",
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
    console.log("from profile ", userData, !userData?.address?.city);
    if (userData?.address?.city) {
      console.log("inside if");
      setProfile(userData.profile);
      setAddress(userData.address);
    }
  }, [userData]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };
  const handleAddressChange = (e) => {
    setAddress([{ ...address, [e.target.id]: e.target.value }]);
  };
  console.log(profile, address);
  const SaveProfile = async (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    setProcessing(true);

    try {
      await setDoc(doc(db, "users", uid), {
        profile: profile,
        address:{... address,name:profile.name,mobilenumber:profile.mobilenumber},
      });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }

    getUserData(uid);
    navigate("/dashboard");
  };

  const getUserData = async (uid) => {
    const userData = await getUserinfo(uid);
    if (userData) {
      dispatch(saveUserData(userData));
    }
    console.log("userData", userData);
  };

  return (
    <>
      {processing && <DisablePage />}
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
              minLength={5}
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
            <label htmlFor="mobilenumber"> Mobile Number</label>
            <input
              className="border px-4 py-2 rounded-md w-full outline-blue-500"
              id="mobilenumber"
              value={profile.mobilenumber}
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
            style={{ backgroundColor: updated ? "gray" : "#fb641b" }}
            className="bg-orange-400 w-full p-2  rounded-md text-white font-semibold text-lg"
          >
            {updated ? "Saved Successfully" : "Save"}
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
