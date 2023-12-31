export default function ProductCard({ id, name, img, price }) {
  return (
    <div className="border lg:border-0 p-2 ">
      <div className="container flex justify-center lg:justify-left items-start flex-col gap-2">
        <img className="w-42 h-32 mx-auto" src={img} />
        <div className="">
          <span className="text-sm md:text-lg">
            {name.substr(0, 15)}
            {name.length > 20 && "..."}
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="rating bg-green-700 flex gap-1 items-center text-white text-xs md:text-sm px-1">
            4.2
            <img src="/staricon.svg" />
          </div>
          <span className="text-gray-500 text-xs md:text-md">(4588)</span>
        </div>

        <div className="flex items-center gap-1 text-sm md:text-lg">
          <span>₹{price.toLocaleString("en-IN")}</span>
          <span className="line-through text-gray-400">₹540</span>
          <span className="text-sm text-green-700 font-medium">50% off</span>
        </div>

        <div className="flex flex-col gap-1 ">
          <span className="text-xs">Free delivery</span>
          <span className="text-pink-700 font-bold text-sm">Only few left</span>
        </div>
      </div>
    </div>
  );
}
