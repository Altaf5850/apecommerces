import React from "react";
import Scarousel from "../components/shoes/Scarousel";
import Scard from "../components/shoes/Scard";

function Shoes() {
  return (
    <>
      <div className="w-full bg-gray-200 mb-4">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-craze-sale-facebook-ad-design-template-b1d1738fd5e9e0f6e3152ec502a1c2e1_screen.jpg?ts=1567579016"
          alt=""
          className="w-full h-full object-center md:object-center"
        />
      </div>
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/AF/EOSS/Stripes/v1/pc1.jpg"
          alt="w-full"
        />
      </div>
      <Scard />
      <Scarousel />
    </>
  );
}

export default Shoes;
