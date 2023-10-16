import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCard from "../components/RestaurantCard";

export default function RestaurantMenu() {
  const { restaurantId } = useParams();
  const {restaurantInfo,restaurantDishes} = useRestaurantMenu(restaurantId);
  console.log(restaurantDishes)

  return (
    <div>
      <h1>Restaurant id:{restaurantId}</h1>
      <h2>{restaurantInfo?.name}</h2>
      <img src={import.meta.env.IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}/>
      {
        restaurantDishes?.cards && restaurantDishes?.cards?.map((dish)=>(
          <RestaurantCard 
          // key={dish.card.info.id}
          {...dish.card.info}/>
        ))
      }
    </div>
  );
}
