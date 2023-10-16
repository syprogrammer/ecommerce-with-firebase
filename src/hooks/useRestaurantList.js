import { useEffect, useState } from "react";

const useRestaurantList = () => {
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getRestaurantData();
    }, []);

    const getRestaurantData = async () => {
        try {
            const data = await fetch(
                import.meta.env.VITE_PRODUCT_URL
            );
            const res = await data.json();
            let resData = res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (!resData) {
                resData = res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            }
            setRestaurants(
                resData
            );
            setFilteredRestaurants(
                resData
            );
        } catch (error) {
            console.log("Fetch Err: ", error)
        }
    };
    return restaurants
}