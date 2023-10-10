import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

export default function RestaurantMenu() {
  const { restaurantId } = useParams();
  const restaurant = useRestaurantMenu(restaurantId);
  return (
    <div>
      <h1>Restaurant id:{restaurantId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={process.env.IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
    </div>
  );
}
