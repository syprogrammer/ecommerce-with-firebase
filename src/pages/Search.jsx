import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import useProductsList from "../hooks/useProductsList";
import SortAndFilter from "../components/SortAndFilter";
import SearchShimmer from "../components/shimmer/SearchShimmer";
import { useState } from "react";

const Search = () => {
  const { products, totalProductsCount, page, setPage } = useProductsList();
  // const products = false
  const [filter, setFilter] = useState({
    category: "",
    name: "",
    price: 2000,
  });

  return !products ? (
    <SearchShimmer />
  ) : (
    <div className="">
      <div className="flex flex-col lg:flex-row lg:gap-2 lg:pt-2">
        <div className="w-1/3  ml-4  hidden lg:inline-block">
          <Filter />
        </div>
        <div>
          <SortAndFilter />
        </div>

        <div className="flex flex-col">
          <div className="w-full lg:px-2 bg-white flex  flex-wrap  lg:justify-evenly">
            {products?.map((prod) => (
              <Link
                key={prod.id}
                to={`/product/${prod.id}`}
                className="w-1/2 md:w-1/3 lg:w-[220px]"
              >
                <ProductCard {...prod} />
              </Link>
            ))}
          </div>
          <div className="flex flex-col bg-white  items-center ">
            <span className="w-full text-center p-2 text-sm border-y">
              Showing {products.length} of {totalProductsCount} Products
            </span>
            {products.length < totalProductsCount && (
              <button
                className=" text-sm bg-orange-700 text-white px-4 py-1 my-2 rounded-sm"
                onClick={() => setPage(page + 1)}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
