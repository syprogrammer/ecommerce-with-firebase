import { useState } from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  const [price, setPrice] = useState(500);

  return (
    <div className="bg-white ">
      <div className="p-4 text-lg font-medium">Filters</div>
      <hr />
      <div className="flex flex-col  p-4">
        <span className="text-sm font-medium mb-4">CATEGORIES</span>
        <Link
          to="/search/mobiles"
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-sm"
        >
          Mobile
        </Link>
        <Link
          to="/search/clothes"
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-sm"
        >
          Clothes
        </Link>
        <Link
          to="/search/telivisions"
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-sm"
        >
          Telivisions
        </Link>
        <Link
          to="/search/sports"
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-sm"
        >
          Sports
        </Link>
      </div>
      <hr />
      <div className="p-4 flex flex-col gap-2">
        <span className="text-sm font-medium">PRICE</span>
        <div>
          <label
            htmlFor="default-range"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            id="default-range"
            type="range"
            min="0"
            max="10000"
            step="100"
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
        <div className="flex items-center justify-between">
          <span>0</span>
          <span>{price}</span>
        </div>
      </div>
      <hr />
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm font-medium">BRAND</span>
        <img
          src="/downarrowicon.png"
          className="w-4 cursor-pointer hover:shadow-sm"
        />
      </div>
      <hr />
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm font-medium">CUSTOMER RATINGS</span>
        <img
          src="/uparrowicon.png"
          className="w-4 cursor-pointer hover:shadow-sm"
        />
      </div>
      <hr />
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm font-medium">OFFERS</span>
        <img
          src="/downarrowicon.png"
          className="w-4 cursor-pointer hover:shadow-sm"
        />
      </div>
    </div>
  );
};

export default Filter;
