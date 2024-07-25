import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const smartDeals = [
  {
    id: 250,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/8/i/-original-imahy99nvkpewtzy.jpeg?q=70",
    name: "realme C65 5G (Feather Green, 128 GB)",
    price: "₹ 15,999",
    dicount: "₹ 12,499",
  },
  {
    id: 251,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70",
    name: "Realme C51 (Mint Green, 64 GB) T612 Processor",
    price: "₹ 10,999",
    dicount: "₹ 8,999",
  },
  {
    id: 252,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/s/p/narzo-70-5g-rmx3869-realme-original-imahyatkfpdbaheg.jpeg?q=70",
    name: "realme narzo 70 5G (Forest Green, 128 GB) (6 GB RAM)",
    price: "₹ 19,999",
    dicount: "₹ 14,797",
  },
  {
    id: 253,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/e/d/c61-rmx3933-realme-original-imah28xeqdygzshc.jpeg?q=70",
    name: "realme C61 (Safari Green, 128 GB)",
    price: "₹ 10,999",
    dicount: "₹ 8,999",
  },
  {
    id: 254,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/w/-original-imagzk4mfg6zf2fv.jpeg?q=70",
    name: "realme 12x 5G (Twilight Purple, 128 GB)",
    price: "₹ 17,999",
    dicount: "₹ 13,499",
  },
  {
    id: 255,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/x/c/-original-imagx6rdpmhuq5ba.jpeg?q=70",
    name: "realme 12 Pro 5G (Submarine Blue, 128 GB)(8 GB RAM)",
    price: "₹ 29,999",
    dicount: "₹ 23,999",
  },
];

function Samsung() {
  const dispatch = useDispatch();

  return (
    <div className="m-2 bg-white shadow-xl mt-3 p-4 rounded-lg font-josefin">
      <div className="flex justify-between items-center p-3 rounded-lg">
        <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
          Realme Smartphones
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
