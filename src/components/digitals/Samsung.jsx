import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const smartDeals = [
  {
    id: 256,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/w/e/-original-imagtyw9fdfnsune.jpeg?q=70",
    name: "SAMSUNG Galaxy F34 5G (Mystic Green, 128 GB)",
    dicount: "₹ 12,999",
    price: "₹ 24,499",
  },
  {
    id: 256,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/g/1/-original-imaguechpztrxtgh.jpeg?q=70",
    name: "SAMSUNG Galaxy F04 (Jade Purple, 64 GB)",
    dicount: "₹ 7,999",
    price: "₹ 11,499",
  },
  {
    id: 257,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/2/b/galaxy-f54-5g-sm-e546bdbhins-samsung-original-imagq79fjhhcb6u2.jpeg?q=70",
    name: "SAMSUNG Galaxy F54 5G (Meteor Blue, 256 GB)",
    dicount: "₹ 22,999",
    price: "₹ 35,999",
  },
  {
    id: 258,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/e/f/-original-imagymhw8g7tdyhk.jpeg?q=70",
    name: "OPPOSAMSUNG Galaxy F15 5G (Jazzy Green, 128 GB)",
    dicount: "₹ 12,999",
    price: "₹ 15,999",
  },
  {
    id: 259,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/2/5/galaxy-m14-5g-sm-m146b-samsung-original-imagzwrqnpzujxks.jpeg?q=70",
    name: "SAMSUNG Galaxy M14 5G (Icy Silver, 128 GB) (6 GB RAM)",
    dicount: "₹ 13,999",
    price: "₹ 18,999",
  },
  {
    id: 260,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/y/g/-original-imagtnqkutcyzhgq.jpeg?q=70",
    name: "Samsung Galaxy S21 FE 5G (Navy, 128 GB) (8 GB RAM)",
    dicount: "₹ 29,999",
    price: "₹ 69,999",
  },
];

function Samsung() {
  const dispatch = useDispatch();

  return (
    <div className="m-2 bg-white shadow-xl mt-3 p-4 rounded-lg font-josefin">
      <div className="flex justify-between items-center p-3 rounded-lg">
        <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
          Samsung Smartphones
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

export default Samsung;
