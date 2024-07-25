import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MobileBanner = () => {
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
    "https://m.media-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M35/Preteaser/D142626032_IN_WLD_Samsung_M35-5G_Launch_catpage_1400x800._CB569415497_.jpg",
    "https://m.media-amazon.com/images/G/31/img21/Wireless/vinambia/Toprating/D142928467_1400x800_1._CB569483401_.jpg",
    "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/27june/D138805427_WLD_OnePlus_NordCE4Lite_NewLaunch_1400x800_4._CB554694068_.jpg",
    "https://m.media-amazon.com/images/G/31/brandstore/MSotles/D142170190_WLD-New-launch_iQOO-Z9-Lite-5G_1400x800._CB569477263_.jpg",
    "https://m.media-amazon.com/images/G/31/img21/Wireless/ITELTILESPHASE3F/GamexA70/GAMEXJANART/D141392764_1400x800._CB554636620_.jpg",
    "https://m.media-amazon.com/images/G/31/img23/Wireless/Xiaomi/D140449033_SIM_1400x800._CB569798150_.jpg",
    "https://m.media-amazon.com/images/G/31/img23/Wireless/riyahonor200/honor3rdjuly/D141165058_SIM_1400x800._CB569488174_.jpg",
    "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/Moto/razr50ultra/GW/KV2/SaleTomo/D141430018_IN_WLD_Moto-Razr-50-Ultra_1400x800._CB569486717_.jpg",
    "https://m.media-amazon.com/images/G/31/img22/WLA/2024/Newlaunch/truke/freedomOwS/sale/live/D138641779_NewLaunch_1400x800._CB554488138_.gif",
  ];

  return (
    <>
      <div className="w-full mb-10 overflow-hidden">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif text-center m-5">
          Best SmartPhones Brand For You!
        </h1>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className="hover:scale-95 duration-300 ease-in-out"
            >
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

export default MobileBanner;
