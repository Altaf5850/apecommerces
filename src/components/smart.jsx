import React from "react";
import { FaArrowRight } from "react-icons/fa";

const smartDeals = [
  {
    img: "https://www.kindpng.com/picc/m/45-450792_laptop-png-gaming-laptop-png-lenovo-transparent-png.png",
    name: "Lenovo Gaming Laptop",
    price: "₹ 1,00,000",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhv3lxUVab9WyEpfwXyPXt3MZLmPwNJ6kGPa6vZeZ0WrPbIhRJB4K-S0YQ5FdzYxne5E&usqp=CAU",
    name: "Samsung Refrigerator",
    price: "₹ 84,999",
  },
  {
    img: "https://oasis.opstatics.com/content/dam/oasis/page/store/tv/TV-43-Y1S-pro_S-.jpg",
    name: "oneplus tv 50 inch",
    price: "₹ 65,499",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2020/12/YF/TP/XS/20728860/blue-star-inverter-ac-1-5-ton-3-star-ic318qatu-500x500.png",
    name: "Blue star Inverter AC",
    price: "₹ 44,999",
  },
  {
    img: "https://i.pinimg.com/originals/ba/0d/87/ba0d876cd9184c6096ee61dea8ae9de9.jpg",
    name: "Samsung washing machine",
    price: "₹ 21,999",
  },
];

function Smart() {
  return (
    <div className="m-2 bg-white shadow-xl mt-3 p-4 rounded-lg font-josefin">
      <div className="flex justify-between items-center p-3 rounded-lg">
        <h2 className="font-bold font-serif text-lg md:text-xl lg:text-2xl">
          Best Deals on Electronics
        </h2>
        <a href="/electronics">
          <FaArrowRight
            className="m-1 bg-blue-700 rounded-xl text-white hover:scale-110 duration-200 ease-in"
            size={25}
          />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 m-2">
        {smartDeals.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <a href="/electronics">
              <img
                src={item.img}
                alt="img"
                className="w-full mb-4 h-48 md:h-56 object-cover hover:scale-105 duration-300 ease-in"
              />
              <p className="font-bold font-serif">{item.name}</p>
              <p className="text-gray-500">{item.price}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Smart;
