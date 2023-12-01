import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";

const CreateNewProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    img: "",
    qty: 5,
    category: "clothes",
    seller: "Goyal Garments",
    description: "description",
  });
  const handleProductChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productRef = await doc(collection(db, "products"));
    await setDoc(productRef, {
        ...product,
        id:productRef.id
    });
    console.log("new product id",productRef.id)
  };
  console.log(product);

  return (
    <div className="container  shadow-lg border p-2 mx-auto">
      <h1 className="font-semibold text-xl text-center py-5">
        Create New Product
      </h1>
      <div className="w-[90%] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row justify-center  flex-wrap p-2 gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              required
              className="border py-2 px-2 rounded-md lg:w-[400px]"
              minLength={10}
              maxLength={100}
              value={product.name}
              onChange={handleProductChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price">Price</label>
            <input
            type="number"
              name="price"
              id="price"
              required
              className="border py-2 px-2 rounded-md lg:w-[400px]"
              minLength={3}
              maxLength={8}
              value={product.price}
              onChange={handleProductChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="img">Product Image Link</label>
            <input
              name="img"
              id="img"
              required
              className="border py-2 px-2 rounded-md lg:w-[400px]"
              minLength={10}
              maxLength={100}
              value={product.img}
              onChange={handleProductChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="qty">Quantity</label>
            <input
              name="qty"
              id="qty"
              required
              className="border py-2 px-2 rounded-md lg:w-[400px]"
              minLength={1}
              maxLength={4}
              value={product.qty}
              onChange={handleProductChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <input
              name="category"
              id="category"
              required
              className="border py-2 px-2 rounded-md lg:w-[400px]"
              minLength={5}
              maxLength={25}
              value={product.category}
              onChange={handleProductChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="seller">Seller</label>
            <input
              name="seller"
              id="seller"
              required
              className="border py-2 px-2 rounded-md lg:w-[400px]"
              minLength={4}
              maxLength={100}
              value={product.seller}
              onChange={handleProductChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              required
              className="border py-2 px-2 rounded-md  lg:w-[800px]"
              minLength={10}
              maxLength={100}
              value={product.description}
              onChange={handleProductChange}
              rows="5"
              cols="30"
            />
          </div>
          <button className="px-12 py-4 bg-orange-500 w-full text-white  rounded-md  my-4">
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewProduct;
