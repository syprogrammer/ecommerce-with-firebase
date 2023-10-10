import { useState, useEffect } from 'react'

const useRestaurantMenu = (restaurantId) => {

    const [restaurant, setRestaurant] = useState(null)
    useEffect(() => {

    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(RESTAURANT_MENU_URL + restaurantId)
        const json = await data.json()
        setRestaurant(json.data)
    }

    return restaurant

}

export default useRestaurantMenu