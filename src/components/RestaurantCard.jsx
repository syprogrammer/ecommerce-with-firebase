import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import ImageShimmer from "./shimmer/imageshimmer";
import { Link } from "react-router-dom";

export default function RestaurantCard({ id,name, cloudinaryImageId }) {
  
  // const { name, cloudinaryImageId } = resData
  console.log(cloudinaryImageId);
  return (
    <div className="RestaurantCard w-56 shadow-md ">
     <Link to={`/restaurant/${id}`}>
     <div className="container">
        {/* <div className="restaurant-image"
                style={{backgroundImage:`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId})`}}
                > */}
        {cloudinaryImageId ? (
          <img
            className="restaurant-image"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          />
        ) : (
          <ImageShimmer/>
        )}

        {/* </div> */}
        <div className="p-2">
          <span>{name}</span>
        </div>
      </div>
     </Link>
    </div>
  );
}
