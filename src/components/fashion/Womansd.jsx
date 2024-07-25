import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Womansd = () => {
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
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-050724-MAINBANNER-GFS-GOLIVE.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-050724-EMB-Z11-P5-Gulmoharjaipur-Janasya-Min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-050724-EMB-Z11-P7-Kotty-Orchidblues-Min65.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-050724-EMB-Z11-P1-Kibo-Ketch-min55.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-050724-UHPHER-Z11-P2-VEROMODA-AND-MIN40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-050724-UHPHER-Z11-P3-RITUKUMAR-SATYAPAUL-UPTO50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-050724-DailyBanners-Z6-P2-stylum-gulmoharjaipur-under999.jpg",
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
              <a href="/woman">
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

export default Womansd;
