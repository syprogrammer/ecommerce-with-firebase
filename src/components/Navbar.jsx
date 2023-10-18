import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { lightMode, toggle } = useContext(ThemeContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="nav flex justify-between  md:justify-evenly items-center shadow-md p-1 fixed bg-white  w-full z-10">
      <div className="logo">
        <Link to="/">
        <img src="./ecomm.png" className="w-12 p-2" />
        </Link>
      </div>
      <div className="search hidden order-3 flex items-center px-1 w-1/2 border rounded-md   bg-[#f0f5ff]">
        <label>
          <img src="/search.svg" className="w-8 " />
        </label>
        <input
          type="text"
          placeholder="Search for Products,Brands and More"
          className="w-full p-2  bg-[#f0f5ff] focus:border-transparent outline-none"
        />
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
                  <span className="bg-cyan-700 text-white text-xs px-1 rounded-full absolute -top-1 w-fit right-0">{cartItems.length}</span>
                </div>
                <span className="hidden md:block">Cart</span>
              </div>
            </Link>
          </li>
          <li>
            <img src="/dotmenu.svg" className="cursor-pointer"/>
          </li>
        </ul>
      </div>
    </div>
  );
}
