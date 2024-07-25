import React from "react";
import MobileBanner from "../components/digitals/MobileBanner";
import Phone from "../components/digitals/Phone";
import Oppo from "../components/digitals/Oppo";
import Iphone from "../components/digitals/Iphone";
import Samsung from "../components/digitals/Samsung";
import Realme from "../components/digitals/Realme";
import Infinix from "../components/digitals/Infinix";

function DigitalsProducts() {
  return (
    <>
      <div>
        <div className="w-full bg-gray-200 mb-4">
          <img
            src="https://pbs.twimg.com/media/GDSBrx3XIAIAc1Q.jpg:large"
            alt=""
            className="w-full h-full object-center "
          />
        </div>
        <MobileBanner />
        <Phone />
        <Iphone />
        <Oppo />
        <Samsung />
        <Realme />
        <Infinix />
      </div>
    </>
  );
}

export default DigitalsProducts;
