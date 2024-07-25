import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Cart = () => {
  const images = [
    "https://m.media-amazon.com/images/I/61eaeqlbsUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61QiBo-sPTL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71SkG8qqy3L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71AxLdT5lJL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61MnrUAKACL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71qXnQw5xyL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71fa9QtBYTL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71lYSEETh5L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61op++LedXL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/5154BJoVrKL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71lxpwYJngL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71Q8czKqSIL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71NZuTjNqCL._AC_SY200_.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getImagesPerView = () => {
    if (window.innerWidth >= 1280) {
      return 7;
    } else if (window.innerWidth >= 1024) {
      return 5;
    } else if (window.innerWidth >= 768) {
      return 3;
    } else {
      return 1;
    }
  };

  const [imagesPerView, setImagesPerView] = useState(getImagesPerView());

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

  useEffect(() => {
    const handleResize = () => {
      setImagesPerView(getImagesPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-8xl mx-auto m-10 p-3 bg-white font-josefin">
      <div className="flex justify-between mb-5">
        <h2 className="font-bold mb-5 font-serif underline">
          Pick up where you left off
        </h2>
        <a href="/watchs">
          <FaArrowRight
            className="m-1 bg-blue-700 rounded-xl text-white hover:scale-110 duration-200 ease-in"
            size={25}
          />
        </a>
      </div>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / imagesPerView}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 lg:w-1/5 xl:w-1/7 flex-shrink-0 hover:scale-95 duration-300 ease-in-out"
            >
              <a href="/watchs">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-auto"
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
};

export default Cart;
