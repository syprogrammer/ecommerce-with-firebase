import { Link } from "react-router-dom";
// import logo from "../../public/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { lightMode, toggle } = useContext(ThemeContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div
      style={{ backgroundColor: lightMode ? "" : "black" }}
      className={`nav flex justify-between items-center shadow-md p-1 `}
    >
      <div>
        <img src="./logo.png" className="w-20" />
      </div>
      <div>
        <button onClick={toggle}>Change theme</button>
        <Link to="/cart">
        <span>Cart items - {cartItems.length}</span>
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
// https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.627981&lng=77.3648567&str=khich search suggestion
//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/071d07e5d5deb5e3da47feef18fb14fc
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6279168&lng=77.2124919&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
