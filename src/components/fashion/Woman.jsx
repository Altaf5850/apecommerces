import React, { useState } from "react";
import WclothingItems from "./WclothingItems";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const ClothingCard = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg font-josefin">
      <img
        className="w-full h-96 hover:scale-105 duration-200 ease-in-out"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2 capitalize">
          {title} <br /> {price} <br />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mb-2"
            onClick={() => dispatch(addToCart({ id, title, image, price }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Womans = () => {
  const [category, setCategory] = useState("Sarees");

  const filteredItems = WclothingItems.filter(
    (item) => item.category === category
  );

  return (
    <>
      <div className="container mx-auto px-4 text-center font-josefin">
        <header className="App-header pt-10">
          <h1 className="text-3xl font-bold underline my-5 mb-3">
            Woman's Clothing Collection
          </h1>
          <button
            className="p-3 bg-green-300 rounded-lg"
            onClick={() => setCategory("Sarees")}
          >
            Saree's
          </button>
          <button
            className="p-3 m-2 bg-green-300 rounded-lg"
            onClick={() => setCategory("kurtas-kurtis")}
          >
            kurtas-kurti's
          </button>
          <button
            className="p-3 bg-green-300 rounded-lg"
            onClick={() => setCategory("Gowns")}
          >
            Gown's
          </button>
          <button
            className="p-3 m-2 bg-green-300 rounded-lg"
            onClick={() => setCategory("Dresses")}
          >
            Dresse's
          </button>
        </header>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <ClothingCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                // Size={item.Size}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Womans;
