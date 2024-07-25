import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const smartDeals = [
  {
    id: 238,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70",
    name: "Apple iPhone 14 Plus (Starlight, 128 GB)",
    price: "₹ 79,999",
    dicount: "₹ 58,999",
  },
  {
    id: 239,

    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
    name: "Apple iPhone 15 (Black, 128 GB)",
    price: "₹ 79,999",
    dicount: "₹ 66,999",
  },
  {
    id: 240,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",
    name: "Apple iPhone 15 (Blue, 128 GB)",
    price: "₹ 79,999",
    dicount: "₹ 66,499",
  },
  {
    id: 241,
    image:
      "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    name: "Apple iPhone 13 (Starlight, 128 GB)",
    price: "₹ 59,999",
    dicount: "₹ 51,999",
  },
  {
    id: 242,
    image:
      "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
    name: "Apple iPhone 12 (Black, 64 GB)",
    price: "₹ 49,999",
    dicount: "₹ 38,999",
  },
  {
    id: 243,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    name: "Apple iPhone 14 (Blue, 128 GB)",
    price: "₹ 69,999",
    dicount: "₹ 58,999",
  },
];

function Iphone() {
  const dispatch = useDispatch();

  return (
    <div className="m-2 bg-white shadow-xl mt-3 p-4 rounded-lg font-josefin">
      <div className="flex justify-between items-center p-3 rounded-lg">
        <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
          Iphone Smartphones
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
            <p className="font-bold text-sm md:text-base capitalize">
              {item.name}
            </p>
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

export default Iphone;
