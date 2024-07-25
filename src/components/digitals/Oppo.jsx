import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const smartDeals = [
  {
    id: 226,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/a/s/a58-cph2577-oppo-original-imags7s63vnfqc5j.jpeg?q=70",
    name: "OPPO A58 (Dazzling Green, 128 GB) (6 GB RAM)",
    price: "₹ 15,499",
    dicount: "₹ 13,399",
  },
  {
    id: 227,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/q/u/-original-imahfqwstzrcnhpb.jpeg?q=70",
    name: "OPPO F27 Pro+ (Dusk Pink, 128 GB) (8 GB RAM)",
    price: "₹ 32,999",
    dicount: "₹ 27,999",
  },
  {
    id: 228,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/4/r/-original-imagwxvqs6f88zjh.jpeg?q=70",
    name: "OPPO Reno11 5G (Rock Grey, 256 GB) (8 GB RAM)",
    price: "₹ 40,999",
    dicount: "₹ 29,499",
  },
  {
    id: 229,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/a/5/a59-5g-cph2617-oppo-original-imagwez4ruy9wrad.jpeg?q=70",
    name: "OPPO A59 5G (Starry Black, 128 GB) (4 GB RAM)",
    price: "₹ 17,999",
    dicount: "₹ 13,999",
  },
  {
    id: 230,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/m/i/-original-imah24x4zhzszgtc.jpeg?q=70",
    name: "OPPO A3 Pro 5G (Moonlight Purple, 128 GB) (8 GB RAM)",
    price: "₹ 20,999",
    dicount: "₹ 17,999",
  },
  {
    id: 231,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/4/-original-imagtcrumzbqj4xd.jpeg?q=70",
    name: "OPPO Reno10 5G (Silvery Grey, 256 GB) (8 GB RAM)",
    price: "₹ 38,499",
    dicount: "₹ 32,999",
  },
];

function Oppo() {
  const dispatch = useDispatch();

  return (
    <div className="m-2 bg-white shadow-xl mt-3 p-4 rounded-lg font-josefin">
      <div className="flex justify-between items-center p-3 rounded-lg">
        <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
          Oppo Smartphones
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

export default Oppo;
