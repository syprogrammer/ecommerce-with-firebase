const carouselImages =[
  {
    src:"/banner1.jpg"
  },
  {
    src:"/banner2.jpg"
  },
  {
    src:"/banner3.jpg"
  },
  {
    src:"/banner4.jpg"
  },
]

const Carousel = ({carousels}) => {
  return (
    <div>
        <div className="flex">
            {
              carouselImages.map((carouselImage)=>(
                <img 
                key={carouselImage.src}
                src={carouselImage.src}/>
              ))
            }
        </div>
    </div>
  )
};

export default Carousel;



