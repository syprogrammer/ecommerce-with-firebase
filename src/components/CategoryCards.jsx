import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "./../../node_modules/swiper/modules";
import useDevice from "../hooks/useDevice";
import { Link } from "react-router-dom";

const CategoryCards = ({ title, list }) => {
  const device = useDevice();
  return (
    <div className="p-4">
      <div className="font-medium text-lg py-4">{title}</div>
      <div className="flex gap-3 md:gap-6 flex-wrap md:flex-nowrap overflow-hidden justify-center md:justify-between">
        {device == "large" ? (
          <Swiper            
            spaceBetween={30}
            slidesPerView={6}
            className="CarouselSwiper flex flex-wrap"
            navigation={{
              prevEl: '.catprev',
              nextEl: '.catnext',
            }}
          >
            {list.map((item) => (
              <SwiperSlide key={item.title}>
                <Link to={`/search/${item.title}`}>
                  <CategoryCard {...item} />
                </Link>
              </SwiperSlide>
            ))}
            <div className="catprev bg-white shadow-sm rounded-r-md hidden md:block absolute top-14 z-50 w-8 h-20" >
            <img src="./lefticon.png" className="w-6 my-[70%]"/>
           </div>
            <div className="catnext bg-white shadow-sm rounded-l-md  hidden md:block absolute right-0 z-50 top-14 w-8 h-20" >
            <img src="./lefticon.png" className="rotate-180 w-6 my-[70%]"/>
            </div>
          </Swiper>
        ) : (
          list.map((item) => (
            <Link
              key={item.title}
              to={`/search/${item.title.replace(/\W+/g, "-")}`}
            >
              <CategoryCard {...item} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryCards;
