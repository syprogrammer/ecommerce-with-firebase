import ProductCard from "../components/ProductCard";
import CardsShimmer from "../components/CardsShimmer";
import useProductsList from "../hooks/useProductsList";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CategoryCards from "../components/CategoryCards";
import { beautyandmore, beautytitle } from "../dummydata/beauty";
import { electronicsList, electronicstitle } from "../dummydata/electronics";

export default function Home() {
  const products = useProductsList();
  console.log(products);
  return (
    <div className=" md:w-[90%] mx-auto flex flex-col gap-4">
      <div className="bg-white w-full">
        <Header />
      </div>
      <div className="w-full overflow-hidden">
        <Carousel />
      </div>
      <div className="bg-white w-full flex flex-col gap-5">
        <CategoryCards title={beautytitle} list={beautyandmore}/>
        <CategoryCards title={electronicstitle} list={electronicsList}/>
      </div>
    </div>
  );
}
