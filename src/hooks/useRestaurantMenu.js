import { useState, useEffect } from 'react'

const useRestaurantMenu = (restaurantId) => {

    const [restaurant, setRestaurant] = useState(null)
    const [restaurantInfo, setRestaurantInfo] = useState(null)
    const [restaurantDishes, setRestaurantDishes] = useState(null)

    useEffect(() => {
        getRestaurantInfo()
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(
            "/api"
            )
        const json = await data.json()
        let resinfo = json?.data?.cards[0]?.card?.card?.info
        let resdishes = json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR
        setRestaurant(json)
        setRestaurantInfo(resinfo)
        setRestaurantDishes(resdishes)
        // setRestaurant(resData)
        console.log(json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    }

    return {restaurant,restaurantInfo,restaurantDishes}

}

export default useRestaurantMenu