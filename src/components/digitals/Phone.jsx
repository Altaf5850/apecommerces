import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const smartDeals = [
  {
    id: 244,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70",
    name: "vivo T3x 5G (Crimson Bliss, 128 GB) (4 GB RAM)",
    price: "₹ 17,499",
    dicount: "₹ 13,499",
  },
  {
    id: 245,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=70",
    name: "vivo T2 Pro 5G (Dune Gold, 256 GB) (8 GB RAM) 4600 mAh Battery",
    price: "₹ 27,999",
    dicount: "₹ 23,999",
  },
  {
    id: 246,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
    name: "vivo T2x 5G (Aurora Gold, 128 GB) (4 GB RAM)",
    price: "₹ 17,299",
    dicount: "₹ 11,999",
  },
  {
    id: 247,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70",
    name: "vivo T2x 5G (Marine Blue, 128 GB) (6 GB RAM)",
    price: "₹ 18,999",
    dicount: "₹ 12,999",
  },
  {
    id: 248,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
    name: "vivo T3 5G (Cosmic Blue, 256 GB) (8 GB RAM)",
    price: "₹ 24,999",
    dicount: "₹ 21,999",
  },
  {
    id: 249,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/h/d/v30e-v2339-vivo-original-imahyhhmudmxjrm2.jpeg?q=70",
    name: "vivo V30e (Silk Blue, 256 GB) (8 GB RAM) 5500 mAh Battery",
    price: "₹ 34,999",
    dicount: "₹ 29,999",
  },
];

function Phone() {
  const dispatch = useDispatch();

  return (
    <div className="m-2 bg-white shadow-xl mt-3 p-4 rounded-lg font-josefin">
      <div className="flex justify-between items-center p-3 rounded-lg">
        <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
          Vivo Smartphones
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

export default Phone;
