import CardsShimmer from "../components/CardsShimmer";
import useProductDescription from "../hooks/useProductDescription";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const ProductDescription = () => {
  const product = useProductDescription();
  console.log(product);
  const dispatch = useDispatch();

  const addProductToCart = (item) => {
    dispatch(addItem(item));
  };

  return product ? (
    <div className="flex flex-col p-2">
      <img className="w-52" src={product.img} />
      <span>{product.name}</span>
      <span>{product.price}</span>
      <button
        className="bg-cyan-700 p-2 text-white rounded-md w-fit"
        onClick={() => addProductToCart(product)}
      >
        Add to cart
      </button>
    </div>
  ) : (
    <CardsShimmer />
  );
};

export default ProductDescription;
