import ProductCard from "../components/ProductCard";
import CardsShimmer from "../components/CardsShimmer";
import useProductsList from "../hooks/useProductsList";
import Filter from "../components/Filter";

export default function Home() {
  const products = useProductsList();
  console.log(products);
  return products ? (
    <div className="flex justify-between px-2">
      <div className="w-[20%] hidden md:block">
        <Filter />
      </div>
      <div className="home p-1 bg-white rounded-md w-full md:w-[78%] float-right">
        <div className="flex md:flex-row flex-wrap justify-center gap-10">
          {products.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <CardsShimmer />
  );
}
