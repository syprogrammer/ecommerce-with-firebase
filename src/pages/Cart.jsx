import { useDispatch, useSelector } from "react-redux";
import cartSlice, { increaseQty } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems", cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const discount = 723;
  console.log(totalPrice);

  return cartItems.length > 0 ? (
    <div className=" max-w-[95%] lg:max-w-[80%] mx-auto flex flex-col-reverse lg:flex-row justify-between items-start">
      <div className="w-full lg:w-[72%]">
        <div className="bg-white p-5 flex justify-between items-center ">
          <div className="flex gap-1">
            <span>Deliver to:</span>
            <span className="font-medium">Noida-201301</span>
          </div>
          <button className="text-blue-700 py-1 px-5 border shadow-sm">
            Change
          </button>
        </div>
        <div className="bg-white p-5 flex justify-between items-center ">
          <button className="bg-orange-600 text-white font-medium py-2 px-5">
            Place Order
          </button>
        </div>

        {cartItems.map((product) => (
          <div className="mt-2 p-2 bg-white">
            <CartCard product={product} />
          </div>
        ))}
      </div>
      {/* //price calculate */}
      <div className="bg-white p-2 w-full lg:w-[27%]  mt-4 lg:mt-0 lg:sticky top-[70px]">
        <div className="text-gray-500 ">PRICE DETAILS</div>
        <hr />

        <div className="flex flex-col gap-4 p-2">
          <div className="flex justify-between">
            <span>Price({cartItems.length} items)</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-700">
              -₹{totalPrice - discount > discount ? discount : 0}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <div>
              <span className="line-through text-gray-400 text-xs">₹00 </span>
              <span className="text-green-700">Free</span>
            </div>
          </div>
        </div>
        <div className="py-4 px-2 font-medium  border-t border-dotted flex justify-between">
          <span>Total Amount</span>
          <span>
            ₹
            {totalPrice - discount > discount
              ? totalPrice - discount
              : totalPrice}
          </span>
        </div>
        {totalPrice - discount > discount && (
          <div className="border-t border-dotted text-green-700">
            You will save ₹{discount} on this order
          </div>
        )}
      </div>
    </div>
  ) : (
    <div>your have 0 items is your cart</div>
  );
};

export default Cart;
