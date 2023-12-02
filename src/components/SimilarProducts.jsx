import { Link } from "react-router-dom";
import useProductsList from "../hooks/useProductsList";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import scrollToTop from "../utils/ScrollToTop";

const SimilarProducts = () => {
  const products = useProductsList();

  if (!products) return null;
  return (
    <div>
      <h2 className="font-medium text-xl py-4 px-2">Similar Products</h2>
      <div onClick={scrollToTop} className="flex  gap-1">
        <Swiper
          spaceBetween={4}
          slidesPerView={2.2}
          className="similarproductsSwiper "
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 50,
            },
          }}
        >
          {products.map((prod) => (
            <SwiperSlide key={prod.id}>
              <Link to={`/product/${prod.id}`} className="">
                <ProductCard {...prod} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarProducts;
