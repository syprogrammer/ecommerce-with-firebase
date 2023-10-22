import carouselBanners from "../dummydata/carousel";
import Slider from "./Slider";

const Carousel = ({ carousels }) => {
  return (
    <div data-te-carousel-init
    data-te-ride="carousel" >
      <div
       
      className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {carouselBanners.map((carouselImage) => (
          <picture
            key={carouselImage.largedevicebannersrc}
            data-te-carousel-item
      data-te-carousel-active
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
        ))}
      
      </div>
    </div>
  );
};

export default Carousel;
