import { Link } from "react-router-dom";

export default function ProductCard({ id, name, img, price}) {
  return (
    <div className=" w-56 shadow-md p-2">
      <Link to={`/product/${id}`}>
        <div className="container">
          <img
            className="w-42 h-32 mx-auto"
            src={img}
          />
          <div className="py-2 text-center">
            <span>{name.substr(0, 50)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
