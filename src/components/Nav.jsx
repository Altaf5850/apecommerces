import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const img = [
  {
    id: 0,
    img: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    img: "https://ss7.vzw.com/is/image/VerizonWireless/google-husky-porcelain-2023?wid=465&hei=465&fmt=webp",
    text: "Digitals",
    link: "/digitals",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1340513032/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=BdFdPDF3nfwD3qpnxcc0AfUR3f8E6VZ5b3uB_V1n4C0=",
    text: "Watchs",
    link: "/watchs",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejoAXRVyIBZ6EQodsf3jk4l8_PkiT7lD-uQ&s",
    text: "Electronics",
    link: "/electronics",
  },
  {
    id: 4,
    img: "https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-running-shoes-color-png-image_9145069.png",
    text: "Shoes",
    link: "/shoes",
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg",
    text: "Furniture",
    link: "/furniture",
  },
  {
    id: 6,
    img: "https://static.vecteezy.com/system/resources/previews/030/680/146/non_2x/toys-with-white-background-high-quality-ultra-hd-free-photo.jpg",
    text: "Toys",
    link: "/toys",
  },
  {
    id: 7,
    img: "https://static.vecteezy.com/system/resources/thumbnails/036/420/686/small/ai-generated-young-stylish-man-posing-isolated-on-white-background-free-png.png",
    text: "Men's",
    link: "/men",
  },
  {
    id: 8,
    img: "https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-inclusivity-fashion-girl-png-image_10511765.png",
    text: "Woman's",
    link: "/woman",
  },
  {
    id: 9,
    img: "https://png.pngtree.com/png-clipart/20240303/original/pngtree-a-muslim-cute-boy-cartoon-white-background-png-image_14482527.png",
    text: "Kid's",
    link: "/kids",
  },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white font-josefin pt-1">
      <div className="flex justify-between pt-[50%] items-center p-5 md:hidden">
        <h1 className="text-lg font-bold ">Menu</h1>
        <button onClick={handleMenuToggle} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex md:flex flex-wrap justify-around pt-8`}
      >
        {img.map((item) => (
          <Link
            to={item.link}
            className="flex flex-col items-center gap-2 p-3 mt-10 w-20 sm:w-24 md:w-28 lg:w-32"
            key={item.id}
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 hover:scale-110 duration-300 ease-in-out"
            />
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
