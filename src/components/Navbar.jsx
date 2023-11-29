import { Link } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { searchContext } from "../context/searchContext";

export default function Navbar() {
  const cartItems = useSelector((store) => store.cart.items);
  const userAuth = useSelector((store)=>store.auth.userAuth.isAuthenticated)
  const userData = useSelector((store)=>store.auth.userData)

  const { showSearch, openSearchBar, closeSearchBar } =
    useContext(searchContext);
  return (
    <div className="nav  flex justify-between  md:justify-evenly items-center shadow-md p-1 fixed bg-white  w-full h-[60px] z-10">
      <div className="logo">
        <Link
          to="/"
          className="flex flex-col justify-start items-start px-2 md:px-4"
        >
          <img src="./logo.svg" alt="Flipkart" data-testid="logo" className=" -ml-8 text-center text-blue-700 font-bold italic w-32" />
          <div className="flex gap-1 items-center">
            <span className="text-gray-700 italic text-[10px] lg:text-xs">
              Explore
            </span>
            <span className="text-yellow-500 italic text-[10px]  lg:text-xs">
              Plus
            </span>
            <img src="./fplus.svg" alt="h" className="w-1 md:w-2 text-white" />
          </div>
        </Link>
      </div>

      <div className="lg:w-1/2 h-fit ">{showSearch && <SearchContainer />}</div>

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
            <Link to="/dashboard">
              <div className="flex items-center gap-2">
                <img src={userAuth?"/userok.svg":"/usercircleicon.svg" }/>
                <span className="hidden md:block">
                  {userAuth? userData?.profile?.name?.slice(0,1):'Sign in'}
                </span>
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
