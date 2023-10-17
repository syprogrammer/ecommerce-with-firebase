import ProductCard from "../components/ProductCard";
import CardsShimmer from "../components/CardsShimmer";
import useProductsList from "../hooks/useProductsList";

export default function Home() {

  const products = useProductsList();
  console.log(products)
  return products ? (
    <div className="home p-1">      
      <div className="flex flex-wrap justify-center gap-10">
        {products.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))
          }
      </div>
    </div>
  ) : (
    <CardsShimmer />
  );
}
