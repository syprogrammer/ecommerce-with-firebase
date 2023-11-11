import useProductsList from "../hooks/useProductsList";
import Header from "../components/Header";
import CategoryCards from "../components/CategoryCards";
import { beautyandmore, beautytitle } from "../dummydata/beauty";
import { electronicsList, electronicstitle } from "../dummydata/electronics";
import CarouselBanners from "../components/Carousel";


export default function Home() {
  const products = useProductsList();
  console.log(products);
  return (
    <div className="mt-4 md:w-[90%] mx-auto flex flex-col gap-4">
      <div className="flex flex-col-reverse gap-4 md:flex-col ">
      <div className="bg-white w-full">
        <Header/>
      </div>
      <div className="w-full overflow-hidden">
        <CarouselBanners />
      </div>
      </div>
      <div className="bg-white w-full flex flex-col gap-5">
        <CategoryCards title={beautytitle} list={beautyandmore}/>
        <CategoryCards title={electronicstitle} list={electronicsList}/>
      </div>
    </div>
  );
}
