import carouselBanners from "../dummydata/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "./../../node_modules/swiper/modules";

const CarouselBanners = () => {
  return (
    <div>
      <div className="">
        <Swiper
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation={{
            prevEl: ".carouselprev",
            nextEl: ".carouselnext",
          }}
          className="carouselcards relative"
        >
          {carouselBanners.map((carouselImage) => (
            <SwiperSlide>
              <picture
                key={carouselImage.largedevicebannersrc}
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <source
                  media="(min-width:650px)"
                  srcSet={carouselImage.largedevicebannersrc}
                />
                <source
                  media="(max-width:465px)"
                  srcSet={carouselImage.smalldevicebannersrc}
                />
                <img src={carouselImage.largedevicebannersrc} alt="Flowers" />
              </picture>
            </SwiperSlide>
          ))}
          <div className="carouselprev bg-white rounded-r-md hidden md:block absolute top-14 z-50 py-2 ">
            <img src="./lefticon.png" className="w-6 my-[50%]" />
          </div>
          <div className="carouselnext bg-white rounded-l-md hidden md:block absolute right-0 z-50 top-14 py-2">
            <img src="./lefticon.png" className="rotate-180 w-6 my-[50%]" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselBanners;
