import React, { useState } from "react";
import Data from "./Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const Datas = ({ id, image, name, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-md bg-white rounded overflow-hidden shadow-lg mb-4 font-josefin">
      <img
        className="w-full h-68 hover:scale-105 duration-200 ease-in-out object-cover"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-medium text-xl mb-2 mt-5 capitalize">
          {name} <br /> <hr className="font-bold text-black" />{" "}
          <span className="text-center p-24 md:p-10 m-3">{price}</span>{" "}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mb-2"
            onClick={() => {
              dispatch(addToCart({ id, name, image, price }));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Electronicss = () => {
  const [category, setCategory] = useState("Laptop");

  const filteredItems = Data.filter((item) => item.category === category);

  return (
    <div className="container mx-auto px-4 font-josefin">
      <header className="App-header text-center mb-4">
        <h1 className="text-3xl font-bold underline my-8">
          Electronics Collection
        </h1>
        <button
          className="p-3 bg-green-300 rounded-lg"
          onClick={() => setCategory("Laptop")}
        >
          Laptop
        </button>
        <button
          className="p-3 m-2 bg-green-300 rounded-lg"
          onClick={() => setCategory("Televisions")}
        >
          Television
        </button>
        <button
          className="p-3 bg-green-300 rounded-lg"
          onClick={() => setCategory("Air-Conditioner")}
        >
          Air-Conditioner
        </button>
        <button
          className="p-3 m-2 bg-green-300 rounded-lg"
          onClick={() => setCategory("Refrigerators")}
        >
          Refrigerator
        </button>
        <button
          className="p-3 m-2 bg-green-300 rounded-lg"
          onClick={() => setCategory("Washing-Machine")}
        >
          Washing-Machine
        </button>
      </header>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div className="flex">
              <Datas
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Electronicss;
