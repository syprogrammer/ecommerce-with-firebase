import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeItem,
} from "../redux/slices/cartSlice";

const CartCard = ({ product, removebtn }) => {
  console.log("from cart", product);

  const dispatch = useDispatch();

  const increaseProductQty = (productid) => {
    dispatch(increaseQty(productid));
  };
  const decreaseProductQty = (productid) => {
    dispatch(decreaseQty(productid));
  };
  const removeProduct = (productid) => {
    dispatch(removeItem(productid));
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-evenly h-200px p-2">
      <div className="mx-auto lg:w-[20%]">
        <img src={product.img} className="w-[55%] lg:w-28" />
      </div>

      <div className="flex flex-col gap-5 lg:w-[55%]">
        <div className="flex flex-col">
          <h2>
            {product.name.substr(0, 35)}
            {product.name.length > 20 && "..."}
          </h2>
          <span className="text-gray-700 text-sm">seller:Darshan Globals</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-700 text-sm">₹1999</span>
          <span className="font-medium">₹{product.price.toLocaleString("en-IN")}</span>

          <span className="text-sm text-green-700 font-medium">50% off</span>
          <div className="flex items-center gap-2 text-xs  px-2 text-green-700 font-medium">
            <span>2 offers applied</span>
            <img src="/infoicon.svg" className="w-3" />
          </div>
        </div>
        <div className="pt-5 flex flex-col lg:flex-row gap-6">
          <div className="flex gap-2 text-center">
            <div
              onClick={() => decreaseProductQty(product.id)}
              className="w-fit px-2 flex leading-5 border rounded-full"
            >
              -
            </div>
            <div className="w-fit border px-4">{product.qty}</div>
            <div
              onClick={() => increaseProductQty(product.id)}
              className="w-fit px-2 flex leading-5 border rounded-full"
            >
              +
            </div>
          </div>

          {removebtn && (
            <div className="flex gap-4 font-medium text-gray-800 text-sm">
              <button>SAVE FOR LATER</button>
              <button onClick={() => removeProduct(product.id)}>REMOVE</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-1 text-xs pt-2 lg:pt-0 lg:w-[25%]">
        <span>Delivery by Tue Oct 24 |</span>
        <span className="text-gray-400 line-through">₹40</span>
        <span className="text-green-700">Free</span>
      </div>
    </div>
  );
};

export default CartCard;
