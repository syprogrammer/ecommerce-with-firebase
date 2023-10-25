import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import useProductsList from "../hooks/useProductsList";

const Search = () => {
  const products = useProductsList();

  if (!products) return <p>Loading...</p>;

  return (
    <div className="flex">
      <div className="w-1/4">
        <Filter />
      </div>
      <div className="w-full px-2  flex flex-wrap justify-evenly">
        {products.map((prod) => (
          <Link to={`/product/${prod.id}`}>
            <ProductCard {...prod} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
