import { Link } from "react-router-dom";

export default function ProductCard({ id, name, img, price }) {
  return (
    <div className="min-w-[200px] md:w-1/5 p-2 ">
      
      <Link to={`/product/${id}`}>
        <div className="container flex justify-left items-start flex-col gap-2">
          <img className="w-42 h-32 " src={img} />

          <div className="">
            <span>
              {name.substr(0, 10)}
              {name.length > 20 && "..."}
            </span>
          </div>

          <div className="flex gap-2 items-center">
          <div className="rating bg-green-700 flex gap-1 items-center text-white text-sm px-1">
            4.2
            <img src="/staricon.svg" />
          </div>
          <span className="text-gray-500 text-md">
          (4588)
          </span>
          </div>

          <div className="flex items-center gap-1">
            <span>₹{price}</span>
            <span className="line-through text-gray-400">₹540</span>
            <span className="text-sm text-green-700 font-medium">50% off</span>
          </div>

          <div className="flex flex-col gap-1 ">
            <span className="text-xs">Free delivery</span>
            <span className="text-pink-700 font-bold text-sm">
              Only few left
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
