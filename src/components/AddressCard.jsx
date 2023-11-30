import React from "react";

const AddressCard = ({
  address,
  setAddress,
  name,
  locality,
  city,
  state,
  mobilenumber,
  pincode,
}) => {
  const id = `${name}${mobilenumber}${locality}${city}`;
  const addressValue = `${locality} ${city} ${state}-${pincode}`;
  return (
    <div
      key={id}
      className="px-4 py-5 flex gap-4 items-start bg-white border h-[50p1x]"
    >
      <input
        type="radio"
        name={name}
        value={addressValue}
        id={id}
        checked={address == id}
        onChange={(e) => setAddress(e.target.id)}
        className="mt-2"
      />
      <label htmlFor={id} className="w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <p>{name}</p>
              <button className="bg-gray-100 py-1 px-4 text-xs">Home</button>
            </div>
            <div className="h-5">
              {address === id && (
                <button className="text-blue-700 shadow-md border py-1 px-4 text-sm">
                  Edit
                </button>
              )}
            </div>
          </div>
          <p className="w-[70%] text-sm lg:text-lg">{addressValue}</p>
        </div>
      </label>
    </div>
  );
};

export default AddressCard;
