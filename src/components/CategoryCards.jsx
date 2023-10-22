import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "./../../node_modules/swiper/modules";
import useDevice from "../hooks/useDevice";

const CategoryCards = ({ title, list }) => {
  const device = useDevice()
  return (
    <div className="p-4">
      <div className="font-medium text-lg py-4">{title}</div>
      <div className="flex gap-3 md:gap-6 flex-wrap md:flex-nowrap overflow-hidden justify-center md:justify-between">
     {
      device=="large" ?(
        <Swiper
        navigation={true}
        spaceBetween={30}
        slidesPerView={6}
        className="CarouselSwiper flex flex-wrap"
        
      >
       {
        
        list.map((item) => (
          <SwiperSlide>
            <CategoryCard key={item.title} {...item} />
          </SwiperSlide>
        ))
       }
      </Swiper>
      ):(
        list.map((item) => (         
            <CategoryCard key={item.title} {...item} />         
        ))
      )
     } 
     
      </div>
    </div>
  );
};

export default CategoryCards;
