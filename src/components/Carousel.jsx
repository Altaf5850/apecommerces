import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://im.indiatimes.in/content/2023/Jan/FBImage-2_63b3dd8b7671c.jpg",
    link: "/digitals",
  },
  {
    src: "https://www.mckinstech.com/public/uploads/all/SAnt5Bnl5F7DvVNeb9c1OqVHLjZxDaElLTipckY3.jpg",
    link: "/electronics",
  },
  {
    src: "https://www.cartrollers.com/wp-content/uploads/2022/07/Watch-Banner-Sale.jpg",
    link: "/watchs",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden relative h-56 sm:h-64 md:h-80 lg:h-96 xl:h-112">
        <a href={images[currentIndex].link}>
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform ease-in-out duration-500"
          />
        </a>
      </div>
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4 text-gray-800 rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-200"
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 text-gray-800 rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-200"
      >
        &#9654;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
