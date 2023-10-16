import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantShimmer from "../components/RestaurantShimmer";
import useRestaurantList from "../hooks/useRestaurantList";

export default function Home() {

  const restaurants = useRestaurantList();

  return restaurants.length > 0 ? (
    <div className="home p-1">
      Search
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearchtext(e.target.value)}
          className="border p-2 m-2"
        />
        <button onClick={filter}>Search</button>
      </div>
      <div class="restaurantCards flex flex-wrap justify-center gap-10">
        {restaurants.map((restaurant) => {
          console.log(restaurant);
          return (
            <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
          );
        })}
      </div>
    </div>
  ) : (
    <RestaurantShimmer />
  );
}
