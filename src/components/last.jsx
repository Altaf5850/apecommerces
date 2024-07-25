import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Last() {
  const images = [
    "https://m.media-amazon.com/images/I/71U1lXwFNZL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71Kc9uMO+fL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61YamEA82eL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71uRdPRZiqL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/716ho3I0D-L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71I3yrko-RL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81yH4BZ9uPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/714BXmczLaL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/6111Ihk6OIL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71BU8rShLlL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81z0PHGlVOL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81hkyvQwYyS._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71Lqt9hrR-L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81KwkKnMDtL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61Bv8YMdu6S._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51vMUuO++SL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71qs3hHvSEL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81V1134YEfL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61F-53gyv7L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61dTXlPgpiL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71XBnj1MATL._AC_SY200_.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 7;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - imagesPerView : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - imagesPerView ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto m-10 p-3 bg-white font-josefin">
      <div className="flex justify-between mb-5">
        <h2 className="font-bold mb-5 font-serif underline">
          Pick up where you left off
        </h2>
        <a href="/woman">
          <FaArrowRight
            className="m-1 bg-blue-700 rounded-xl text-white hover:scale-110 duration-200 ease-in"
            size={25}
          />
        </a>
      </div>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 gap-10 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 35) / imagesPerView}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-1/7 flex-shrink-0 hover:scale-95 duration-300 ease-in-out"
            >
              <a href="/woman">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-40"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
}

export default Last;
