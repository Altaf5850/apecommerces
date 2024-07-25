import React from "react";
import ToysGrid from "../components/toys/ToysGrid";

function Toys() {
  return (
    <>
      <div className="w-full bg-gray-200 mb-4">
        <img
          src="https://i.pinimg.com/originals/72/0c/74/720c7457a6af70a649613d4b7b549994.png"
          alt="img"
          className="w-full h-full object-center"
        />
      </div>
      <ToysGrid />
    </>
  );
}

export default Toys;
