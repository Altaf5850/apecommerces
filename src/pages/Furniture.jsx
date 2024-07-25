import React from "react";
import FurnitureGrid from "../components/furniture/FurnitureGrid";

function Furniture() {
  return (
    <div className="">
      <div className="w-full bg-gray -200 mb-4">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/08b6d354987911.5971a0fd31e99.jpg"
          alt=""
          className="w-full h-full object-center md:object-center"
        />
      </div>
      <FurnitureGrid />
    </div>
  );
}

export default Furniture;
