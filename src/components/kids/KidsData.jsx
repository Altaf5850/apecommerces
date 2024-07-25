import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KidsData = () => {
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
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050724-MainBanner-Z1-1-GFS-5090.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050724-topbanner-Z4-2-KGFRENDZ-DNMXBOYS-UNDER399%20(1)%20(1).jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050724-topbanner-Z4-4-outryt-wotnot-under499.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050724-topbanner-Z4-5-NautiNati-PUMA-MIN50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050724-topbanner-Z4-3-USPA-Jack&Jone-3070.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050724-topbanner-Z4-1-ADIDAS-M&S-MIN30.jpg",
  ];

  return (
    <>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className="hover:scale-105 duration-300 ease-in-out"
            >
              <a href="/kids">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto"
                />
              </a>
            </div>
          ))}
        </Slider>
        <style global="true">{`
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

export default KidsData;
