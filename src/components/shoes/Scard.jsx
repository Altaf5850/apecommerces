import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const shoeData = [
  {
    id: 151,
    name: "Men's Running Shoes",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/m/d/-original-imahfxvf74qsw95y.jpeg?q=70",
    price: "₹2999",
  },
  {
    id: 152,
    name: "Women's Casual Shoes",
    image: "https://m.media-amazon.com/images/I/81OQBOqsqmL._SY695_.jpg",
    price: "₹2499",
  },
  {
    id: 153,
    name: "Men's Formal Shoes",
    image:
      "https://m.media-amazon.com/images/I/51f9qL2WrlL._AC_UL480_FMwebp_QL65_.jpg",
    price: "₹3499",
  },
  {
    id: 154,
    name: "Women's Heels",
    image:
      "https://m.media-amazon.com/images/I/51oWI8b1ibL._AC_UL480_FMwebp_QL65_.jpg",
    price: "₹1999",
  },
  {
    id: 155,
    name: "Men's Sneakers",
    image:
      "https://m.media-amazon.com/images/I/61caYFuVm3L._AC_UL480_FMwebp_QL65_.jpg",
    price: "₹3999",
  },
  {
    id: 156,
    name: "Women's Running Shoes",
    image:
      "https://m.media-amazon.com/images/I/61ELkM9sETL._AC_UL480_FMwebp_QL65_.jpg",
    price: "₹2999",
  },
  {
    id: 157,
    name: "Men's Loafers",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/6/r/8-fk0076-8-ajanta-copper-original-imagys329c2ghhfv.jpeg?q=70",
    price: "₹2799",
  },
  {
    id: 158,
    name: "Women's Sandals",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/v/7/y/7-gd602-40-picktoes-pink-original-imah2ytwur3mj7dh.jpeg?q=70",
    price: "₹1899",
  },
  {
    id: 159,
    name: "Men's Boots",
    image:
      "https://m.media-amazon.com/images/I/71CKW7B2dkL._AC_UL480_FMwebp_QL65_.jpg",
    price: "₹4999",
  },
  {
    id: 160,
    name: "Women's Boots",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/t/t/4-wmbt-sf-black-original-imagy8keh3fxt6kr.jpeg?q=70",
    price: "₹4599",
  },
  {
    id: 161,
    name: "Men's flip Footwear",
    image:
      "https://rukminim2.flixcart.com/image/750/900/l1tmf0w0/slipper-flip-flop/t/p/x/7-iluf1263-m-black-41-p-drunken-black-original-imagdazf48zgz3v2.jpeg?q=20&crop=false",
    price: "₹4599",
  },
  {
    id: 162,
    name: "Women's flip Footwear",
    image: "https://static-01.daraz.pk/p/b1e83c37b570cdba721df43dfd823345.jpg",
    price: "₹4599",
  },
];

const Card = ({ id, name, image, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-2 font-josefin">
      <img
        className="w-full h-48 object-cover hover:scale-105 duration-200 ease-in-out"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
        <p className="mt-2 text-gray-600 text-center">{price}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 ml-24 md:ml-16 mb-2"
          onClick={() => dispatch(addToCart({ id, name, image, price }))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Scard = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-josefin">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shoeData.map((shoe) => (
          <Card
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            image={shoe.image}
            price={shoe.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Scard;
