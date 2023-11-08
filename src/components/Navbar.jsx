import { Link } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  
  const cartItems = useSelector((store) => store.cart.items);

  
  return (
    <div className="nav flex justify-between  md:justify-evenly items-center shadow-md p-1 fixed bg-white  w-full h-[60px] z-10">
      <div className="logo flex flex-col  items-start">
        <Link to="/" className="flex flex-col items-end  md:px-4">
          <div className="w-fit">
            <img src="./logo.svg" data-testid="logo" className="w-20 md:w-28" 
            
            />
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-gray-700 italic text-[10px] lg:text-xs">Explore</span>
            <span className="text-yellow-500 italic text-[10px]  lg:text-xs">Plus</span>
            <img src="./fplus.svg" className="w-1 md:w-2" />
          </div>
        </Link>
      </div>
      <div className="lg:w-1/2">       
        <SearchContainer/>
      </div>
      <div className="menus flex w-[50%] md:w-1/3 ">
        <ul className="flex w-full justify-between">
          <li>
            <Link to="/about">
              <div className="flex items-center gap-2">
                <img src="/shopicon.svg" />
                <span className="hidden md:block">Become a Seller</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <div className="flex items-center gap-2">
                <img src="/usericon.svg" />
                <span className="hidden md:block">Sign in</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="flex items-center gap-2">
                <div className="carticon relative flex">
                  <img src="/carticon.svg" />
                  <span className="bg-cyan-700 text-white text-xs px-1 rounded-full absolute -top-1 w-fit right-0">
                    {cartItems.length}
                  </span>
                </div>
                <span className="hidden md:block">Cart</span>
              </div>
            </Link>
          </li>
          <li>
            <img src="/dotmenu.svg" className="cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
}
