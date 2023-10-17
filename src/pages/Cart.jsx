import { useSelector } from "react-redux";
import cartSlice from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems", cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  console.log(totalPrice);

  return cartItems.length > 0 ? (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.img} className="w-20" />
          <span>{item.name}</span>
        </div>
      ))}
      <span>Your total amount is : {totalPrice}</span>
      <div>
        <Link to="/payment" className="bg-cyan-700 px-5 py-2">
          Checkout
        </Link>
      </div>
    </div>
  ) : (
    <div>your have 0 items is your cart</div>
  );
};

export default Cart;
