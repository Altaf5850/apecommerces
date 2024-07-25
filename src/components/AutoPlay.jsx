import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const images = [
    "https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127-768x591.png",
    "https://static1.xdaimages.com/wordpress/wp-content/uploads/2020/03/unnamed-5.jpg",
    "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_1.png?$512_N_PNG$",
    "https://www.infinite.com/wp-content/uploads/2023/04/Google.png",
    "https://www.infinite.com/wp-content/uploads/2023/04/Microsoft.png",
    "https://ih1.redbubble.net/image.4607624316.9964/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPerFjc5tt5WWarAbLykoY43ZTaWasGTzwxg&s",
    "https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/A21TJRUUN4KGV/2964d028da5e67e6c6fd95f5cbd063a5.w4167.h4167.jpg",
  ];

  return (
    <div className="mx-auto w-full bg-white overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-200 h-20 flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
