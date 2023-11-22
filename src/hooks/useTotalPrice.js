import { useSelector } from 'react-redux'

const useTotalPrice = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
  return totalPrice

}

export default useTotalPrice