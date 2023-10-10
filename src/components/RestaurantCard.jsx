export default function RestaurantCard({ name, cloudinaryImageId}) {
    
    // const { name, cloudinaryImageId } = resData
    console.log(cloudinaryImageId)
    return (
        <div className="RestaurantCard w-56 shadow-md ">
            <div className="container">
                {/* <div className="restaurant-image"
                style={{backgroundImage:`url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId})`}}
                > */}
                    <img 
                    className="restaurant-image"
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />


                {/* </div> */}
                <div className="p-2">
                    <span>{name}</span>
                </div>
            </div>
        </div>
    )
}