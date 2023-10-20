import { useSelector } from "react-redux";
import cartSlice from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems", cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const discount = 723;
  console.log(totalPrice);

  return cartItems.length > 0 ? (
    <div className="max-w-[80%] mx-auto flex justify-between items-start">
      <div className="w-[72%]">
        <div className="bg-white p-5 flex justify-between items-center ">
          <span>Deliver to Noida 201301</span>
          <span>Change</span>
        </div>

        {cartItems.map((product) => (
          <div className="mt-2 p-2 bg-white">
            <CartCard product={product} />
          </div>
        ))}
      </div>
      {/* //price calculate */}
      <div className="bg-white p-2 w-[27%] sticky top-[70px]">
        <div className="text-gray-500 ">PRICE DETAILS</div>
        <hr />

        <div className="flex flex-col gap-4 p-2">
          <div className="flex justify-between">
            <span>Price({cartItems.length} items)</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-700">-₹{discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="line-through text-gray-400">
              ₹00 <span className="text-green-700">Free</span>
            </span>
          </div>
        </div>
        <div className="py-4 px-2 font-medium  border-t border-dotted flex justify-between">
          <span>Total Amount</span>
          <span>₹{totalPrice - discount}</span>
        </div>
        <div className="border-t border-dotted text-green-700">
          You will save ₹{discount} on this order
        </div>
      </div>
    </div>
  ) : (
    <div>your have 0 items is your cart</div>
  );
};

export default Cart;
