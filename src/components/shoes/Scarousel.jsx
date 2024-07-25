import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Scarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const images = [
    "https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Best-of-casual-shoes_11._CB562029483_.png",
    "https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Beat-the-heat_10._CB562029483_.png",
    "https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Beat-the-heat_10._CB562029483_.png",
    "https://m.media-amazon.com/images/G/31/img21/shoes/2024/SS24/MS/PCHero/Formal-foot-forward_1._CB562029483_.png",
  ];

  return (
    <>
      <div className="w-full mb-10 overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <Link to="/digitals">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
              </Link>
            </div>
          ))}
        </Slider>
        <style jsx global>{`
          .slick-dots {
            bottom: 10px;
          }

          .slick-dots li button:before {
            color: black;
          }
        `}</style>
      </div>
    </>
  );
};

export default Scarousel;
