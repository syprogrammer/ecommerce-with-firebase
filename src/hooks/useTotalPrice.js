import { useSelector } from 'react-redux'

const useTotalPrice = () => {
    const orderItems = useSelector((store)=>store.cart.items)
    console.log("orderitems",orderItems)
    const totalPrice = orderItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
  return totalPrice.toLocaleString("en-IN")

}

export default useTotalPrice