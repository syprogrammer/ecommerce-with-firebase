import React from 'react'

const AdminHome = () => {
  return (
    <div>
      <div className="p-5 flex flex-wrap gap-5 justify-evenly">
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
         <img src="/storeicon.png"/>
         <h2>Sellers</h2>
        </div>
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
         <img src="/ordericon.png"/>
         <h2>Orders</h2>
        </div>
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
         <img src="/productsicon.png"/>
         <h2>Products</h2>
        </div>
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
         <img src="/storeicon.png"/>
         <h2>Sellers</h2>
        </div>
      </div>
    </div>
  )
}

export default AdminHome