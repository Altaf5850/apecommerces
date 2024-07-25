import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Most = () => {
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
    "https://assets.ajio.com/cms/AJIO/WEB/D-MHP-1.0-05072024-gfs-5090.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-020724-DailyBanners-Z6-P2-AllenSolly-USPA-min40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01072024-TopBrandBanner-Z3-P2-USPA-Gap-Min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05072024-mainbanner-z1-P6-NETPLAY-JOHNPLAYERS-MIN40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05072024-uhphim-z10-p3-LOUISPHILIPPE-VANHEUSEN-MIN45.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05072024-uhphim-z10-p4-BROOKS&BROTHERS-REPLAY-UPTO50.jpg",
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
              <a href="/men">
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

export default Most;
