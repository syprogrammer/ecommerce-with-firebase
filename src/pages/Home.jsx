import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantShimmer from "../components/RestaurantShimmer"

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchtext, setSearchtext] = useState([]);
  const [info, setInfo] = useState();

  const filter = () => {
    const filtered = restaurants.filter((item) =>
      item.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    console.log("filtered", filtered);
    setFilteredRestaurants(filtered);
    filtered.length === 0 ? setInfo("No restaurants found") : "";
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    try {
      const data = await fetch(
        process.env.PRODUCT_URL
      );
      const res = await data.json();
      let resData = res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if(!resData){
        resData = res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      }
      setRestaurants(
       resData
      );
      setFilteredRestaurants(
        resData
      );
    } catch (error) {
      console.log("Fetch Err: ",error)
    }
  };

  

  return restaurants.length>0 ? (
    <div className="home p-1">
    Search
    <div className="search">
      <input type="text" onChange={(e) => setSearchtext(e.target.value)}
      className="border p-2 m-2"
      />
      <button onClick={filter}>Search</button>
    </div>
    <div class="restaurantCards flex flex-wrap justify-center gap-10">
      {filteredRestaurants.map((restaurant) => {
        console.log(restaurant);
        return (
          <RestaurantCard
            key={restaurant?.info.id}
            {...restaurant?.info}
          />
        );
      })}
    </div>
  </div>
  ) : (
  <RestaurantShimmer/>
  );
}
