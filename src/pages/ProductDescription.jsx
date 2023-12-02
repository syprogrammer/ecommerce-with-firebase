import useProductDescription from "../hooks/useProductDescription";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import RatingsAndReviews from "../components/RatingandReviews";
import SimilarProducts from "../components/SimilarProducts";
import DescriptionShimmer from "../components/shimmer/DescriptionShimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createOrder } from "../redux/slices/orderSlice";
import scrollToTop from "../utils/ScrollToTop";

const ProductDescription = () => {
  const [pincode, setPincode] = useState("");
  const product = useProductDescription();
  useEffect(() => {
    scrollToTop();
  },[]);
  console.log(product);
  const dispatch = useDispatch();

  const addProductToCart = (item) => {
    dispatch(addItem(item));
    dispatch(createOrder(item));
  };

  return product ? (
    <div className="lg:max-w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row justify-evenly  mx-auto bg-white py-10 px-5 ">
        <div className="w-fit">
          <div className="w-fit flex flex-col gap-5 items-center sticky top-[100px]">
            <div className="flex items-start gap-8">
              <img className="w-52 " src={product.img} />
              <img
                src="/wishlisticon.svg"
                className="w-8 float-right -ml-4 shadow-md p-2 rounded-full"
              />
            </div>

            <div className="flex gap-2 font-medium text-sm">
              <button
                className="bg-orange-400 flex items-center justify-center gap-1 p-3 text-white rounded-sm w-40"
                onClick={() => addProductToCart(product)}
              >
                <img src="/carticon2.svg" className="w-4" />
                ADD TO CART
              </button>
              <Link onClick={() => addProductToCart(product)} to="/order">
                <button className="bg-orange-500 flex items-center justify-center gap-1 p-3 text-white rounded-sm w-40">
                  <img src="/lightingicon.png" className="w-5" />
                  BUY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ----------------------- */}

        <div className="flex flex-col gap-2 relative pt-8 lg:pt-0">
          {/* //right side */}
          <div className="hidden lg:flex items-start -mt-4 justify-end text-sm gap-1 float-right">
            <img src="/shareicon.svg" className="float-right w-5 right-0" />
            <span>Share</span>
          </div>

          <span className=" flex items-start gap-2 md:max-w-[500px] lg:max-w-[700px] text-sm lg:text-lg">
            <span>{product.name}</span>
          </span>

          <div className="flex gap-2 items-center">
            <div className="rating bg-green-700 flex gap-1 items-center text-white text-sm px-1">
              4.2
              <img src="/staricon.svg" />
            </div>
            <span className="text-gray-500 text-sm">
              10,427 Ratings & 890 Reviews
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-medium text-lg">₹{product.price}</span>
            <span className="line-through text-gray-400">₹540</span>
            <span className="text-sm text-green-700 font-medium">50% off</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium">Available offers</span>
            <div className="py-4 flex flex-col gap-2">
              <div className="flex gap-2 items-center text-xs font-medium">
                <img src="/offericon.png" className="w-4" />
                <span className="">
                  Combo Offer Buy 3 items save 3%; Buy 4 or more save 5%
                  <span className="text-blue-500 mx-1">
                    See all productsT&C
                  </span>
                </span>
              </div>
              <div className="flex gap-2 items-center text-xs font-medium">
                <img src="/offericon.png" className="w-4" />
                <span className="">
                  Combo Offer Buy 2 items save 5%; Buy 3 or more save 7%
                  <span className="text-blue-500 mx-1">
                    See all productsT&C
                  </span>
                </span>
              </div>
              <div className="flex gap-2 items-center text-xs font-medium">
                <img src="/offericon.png" className="w-4" />
                <span className="">
                  Bank Offer 10% off on Bank of Baroda Credit Card Txns, up to
                  ₹1,500 on orders of ₹5,000 and above
                  <span className="text-blue-500 mx-1">T&C</span>
                </span>
              </div>
              <div className="flex gap-2 items-center text-xs font-medium">
                <img src="/offericon.png" className="w-4" />
                <span className="">
                  Bank Offer 10% off on Bank of Baroda Credit Card EMI Txns, up
                  to ₹2,000 on orders of ₹5,000 and above
                  <span className="text-blue-500 mx-1">T&C</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <span className="text-gray-500">Delivery </span>
            <form className="flex flex-col gap-2 ">
              <div className="flex">
                <label>
                  <img src="/locationicon.svg" />
                </label>
                <input
                  type="text"
                  className="border-b border-b-blue-500 px-2 outline-none"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <span className="text-blue-700 font-medium">change</span>
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-medium">
                  Delivery in 2 Days, Saturday | ₹ 40
                </span>
                <span>if ordered before 11:55 AM</span>
                <span className="py-5 font-medium">
                  Faster delivery by 11 PM Tomorrow available for ₹40 if ordered
                  before 11:25 AM
                </span>
              </div>
            </form>
          </div>
          <div className="flex gap-5 text-sm">
            <span className="text-gray-500">seller</span>
            <div className="flex flex-col px-4">
              <span className="text-blue-500 flex gap-1 font-medium text-sm">
                RIDNISHretail
                <span className="rating bg-blue-700 w-fit rounded-full  flex gap-1 items-center text-white text-sm px-1">
                  4.2
                  <img src="/staricon.svg" />
                </span>
              </span>
              <ul className="text-gray-900 text-xs py-3 flex flex-col gap-2 ">
                <li className="list-disc marker:text-gray-500">
                  No Returns Applicable
                </li>
                <li className="list-disc marker:text-gray-500">
                  GST invoice available
                </li>
              </ul>
            </div>
          </div>

          <div className="border ">
            <div className="p-5 text-lg  ">Specification</div>
            <hr />
            <div className="p-5 flex flex-col gap-3 text-sm">
              <div className="flex gap-5 ">
                <span className="text-gray-500 w-40">Sales Package</span>
                <span>108 Playing Cards</span>
              </div>
              <div className="flex gap-5 ">
                <span className="text-gray-500 w-40">Material</span>
                <span>Paper</span>
              </div>
              <div className="flex gap-5 ">
                <span className="text-gray-500 w-40">Battery Operated</span>
                <span>No</span>
              </div>
              <div className="flex gap-5">
                <span className="text-gray-500  w-40">ideal for</span>
                <span>Boys,Girls</span>
              </div>
              <div className="flex gap-5 ">
                <span className="text-gray-500 w-40">Number of Cards</span>
                <span>108</span>
              </div>
            </div>
          </div>
          <RatingsAndReviews />
          {/* --------------- */}
        </div>
      </div>
      <div className="bg-white mt-2 overflow-hidden">
        <SimilarProducts />
      </div>
      {/* ----------------------- */}
    </div>
  ) : (
    <DescriptionShimmer />
  );
};

export default ProductDescription;
