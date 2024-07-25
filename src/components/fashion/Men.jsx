import React, { useState } from "react";
import clothingItems from "./clothingItems";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const ClothingCard = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 font-josefin">
      <img
        className="w-full hover:scale-105 duration-200 ease-in-out"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2 capitalize">
          {title} <br /> {price} <br />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 ml-10 mb-2"
            onClick={() => dispatch(addToCart({ id, title, image, price }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Mens = () => {
  const [category, setCategory] = useState("Men's");

  const filteredItems = clothingItems.filter(
    (item) => item.category === category
  );

  return (
    <>
      <div className="container mx-auto px-4 font-josefin">
        <header className="App-header pt-10 text-center mb-5">
          <h1 className="text-3xl font-bold font-serif my-8">
            Men's Clothing Collection
          </h1>
          <button
            className="p-3 bg-green-300 rounded-lg"
            onClick={() => setCategory("Men's")}
          >
            Shirt's
          </button>
          <button
            className="p-3 m-2 bg-green-300 rounded-lg"
            onClick={() => setCategory("Pants")}
          >
            Pants's
          </button>
          <button
            className="p-3 bg-green-300 rounded-lg"
            onClick={() => setCategory("T-shirt")}
          >
            T-shirt's
          </button>
          <button
            className="p-3 m-2 bg-green-300 rounded-lg"
            onClick={() => setCategory("Shorts")}
          >
            Short's
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
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Mens;
