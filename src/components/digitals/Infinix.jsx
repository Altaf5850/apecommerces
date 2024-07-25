import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const smartDeals = [
  {
    id: 232,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/c/t/-original-imagxsc4ufzm64uz.jpeg?q=70",
    name: "Infinix SMART 8 (Rainbow Blue, 128 GB) Helio G36 Processor",
    price: "₹ 10,999",
    dicount: "₹ 07,999",
  },
  {
    id: 233,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/c/2/-original-imahfsy9xyk5fujz.jpeg?q=70",
    name: "Infinix Note 40 Pro 5G (Titan Gold, 256 GB)",
    price: "₹ 27,999",
    dicount: "₹ 21,999",
  },
  {
    id: 234,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/p/x/-original-imahf38d4cwmuqep.jpeg?q=70",
    name: "Infinix GT 20 Pro (Mecha Blue, 256 GB)",
    price: "₹ 31,999",
    dicount: "₹ 23,999",
  },
  {
    id: 235,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/y/g/-original-imagwfffdrfjj2pg.jpeg?q=70",
    name: "Infinix SMART 8 HD (Timber Black, 64 GB)",
    price: "₹ 07,999",
    dicount: "₹ 06,999",
  },
  {
    id: 236,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/p/0/-original-imahfsy3hwrqavwf.jpeg?q=70",
    name: "Infinix Note 40 Pro 5G (Vintage Green, 256 GB)",
    price: "₹ 27,999",
    dicount: "₹ 21,999",
  },
  {
    id: 237,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/k/d/-original-imagrgpkyyrjzdxz.jpeg?q=70",
    name: "Infinix HOT 30 5G (Miami Orange, 128 GB)",
    price: "₹ 14,999",
    dicount: "₹ 12,499",
  },
];

function Infinix() {
  const dispatch = useDispatch();

  return (
    <div className="m-2 bg-white shadow-xl mt-3 p-4 rounded-lg font-josefin">
      <div className="flex justify-between items-center p-3 rounded-lg">
        <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
          Infinix Smartphones
        </h2>
        <Link to="/digitals">
          <FaArrowRight
            className="m-1 bg-blue-700 rounded-xl text-white hover:scale-110 duration-200 ease-in"
            size={25}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 m-2">
        {smartDeals.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <Link to="/digitals">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-70 object-center mb-4 rounded-lg hover:scale-105 duration-300 ease-in"
              />
            </Link>
            <p className="font-bold text-sm md:text-base capitalize">{item.name}</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-black-700 font-bold">{item.dicount}</p>
              <p className="text-gray-500 line-through pl-2">{item.price}</p>
            </div>
            <button
              className="bg-blue-700 text-white p-2 rounded-lg mt-2 w-full hover:scale-105 duration-300 ease-in"
              onClick={() => dispatch(addToCart(item))}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Infinix;
