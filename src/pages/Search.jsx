import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import useProductsList from "../hooks/useProductsList";
import SortAndFilter from "../components/SortAndFilter";

const Search = () => {
  const products = useProductsList();

  if (!products) return <p>Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-2 lg:pt-2">
      <div className="w-1/3  ml-4  hidden lg:inline-block">
        <Filter />
      </div>
      <div>
        <SortAndFilter />
      </div>
      <div className="w-full lg:px-2 bg-white flex  flex-wrap  lg:justify-evenly">
        {products.map((prod) => (
          <Link to={`/product/${prod.id}`} className="w-1/2 md:w-1/3 lg:w-[220px]">
            <ProductCard {...prod} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
