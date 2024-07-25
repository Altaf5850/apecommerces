import React from "react";
import Electronicss from "../components/electonics/Electronics";

function Electronics() {
  return (
    <>
      <div className="w-full bg-gray-200 mb-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/478/302/original/sale-electronics-banner-background-free-vector.jpg"
          alt="img"
          className="w-full h-full object-center md:object-center"
        />
      </div>

      <div>
        <Electronicss />
      </div>
    </>
  );
}

export default Electronics;
