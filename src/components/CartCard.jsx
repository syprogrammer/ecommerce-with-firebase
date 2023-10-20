const CartCard = ({ product }) => {
    console.log("from cart",product)
  return (
    <div className="flex items-start justify-evenly h-200px p-2">
      <div className="w-[20%]">
      <img src={product.img} className="w-28"/>
      </div>

      <div className="flex flex-col w-[55%]">
        <div className="flex flex-col">
          <h2>{product.name.substr(0, 35)}
              {product.name.length > 20 && "..."}</h2>
          <span>seller:Darshan Globals</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="line-through">₹1999</span>
            <span>₹{product.price}</span>
            <span className="text-sm text-green-700 font-medium">50% off</span>
        </div>
      </div>

      <div className="flex gap-1 text-xs w-[25%]">
        <span>Delivery by Tue Oct 24 |</span> 
        <span className="text-gray-400 line-through">₹40</span>
        <span className="text-green-700">
            Free
        </span>
      </div>

    </div>
  );
};

export default CartCard;
