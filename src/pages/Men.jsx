import React from "react";
import Mens from "../components/fashion/Men";
import Most from "../components/Most";

function Men() {
  return (
    <div>
      <Most />
      <Mens />
      <div>
        <div className="w-full bg-gray-200 mb-4 pt-10">
          <img
            src="https://i.pinimg.com/originals/88/d3/c8/88d3c815f5ffbfd4ab1b4d8f7d977385.jpg"
            alt=""
            className="w-full h-full object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Men;
