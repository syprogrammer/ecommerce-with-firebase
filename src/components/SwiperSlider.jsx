import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperSlider = (Component) => {
  return ({props}) => {
    return (
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        className="CarouselSwiper flex flex-wrap"
        navigation={{
          prevEl: ".catprev",
          nextEl: ".catnext",
        }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.title}>
            <Link to={`/search/${item.title}`}>
              <Component {...item} />
            </Link>
          </SwiperSlide>
        ))}
        <div className="catprev bg-white shadow-sm rounded-r-md hidden md:block md:absolute top-14 z-50 w-8 h-20">
          <img src="./lefticon.png" className="w-6 my-[70%]" />
        </div>
        <div className="catnext bg-white shadow-sm rounded-l-md  hidden md:block md:absolute right-0 z-50 top-14 w-8 h-20">
          <img src="./lefticon.png" className="rotate-180 w-6 my-[70%]" />
        </div>
      </Swiper>
    );
  };
};

export default SwiperSlider;
