import React from 'react'
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const CartItems = () => {
    const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className='flex flex-col w-full pb-16'>
    {cartItems?.map((product) => (
        <div className="mt-2 p-2 bg-white">
          <CartCard product={product} removbtn={false}/>
        </div>
      ))}
    </div>
  )
}

export default CartItems