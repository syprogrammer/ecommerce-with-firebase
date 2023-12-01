import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
 
  return (
    <div>
      <div className="p-5 flex flex-wrap gap-5 justify-evenly">
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
          <img src="/storeicon.png" className="lg:w-40 mx-auto" />
          <h2>Sellers</h2>
        </div>
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
          <img src="/ordericon.png" className="lg:w-40 mx-auto" />
          <h2>Orders</h2>
        </div>
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
          <Link to="/admin/createnewproduct">
            <img src="/productsicon.png" className="lg:w-40 mx-auto" />
          </Link>
          <h2>Products</h2>
        </div>
        <div className="shadow text-center font-semibold rounded-md text-lg p-4 w-[40%]">
          <img src="/storeicon.png" className="lg:w-40 mx-auto" />
          <h2>Sellers</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
