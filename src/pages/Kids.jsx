import React from "react";
import KidsClothingGrid from "../components/fashion/KidsClothingGrid";
import KidsData from "../components/kids/KidsData";

function Kids() {
  return (
    <div className="">
      <KidsData />
      <KidsClothingGrid />
      <div className="w-full bg-gray -200 mb-4 pt-10">
        <img
          src="https://mobilecdn.6thstreet.com/AllBanners/bmt/28-03-2024-women/kids+web+en.jpg"
          alt=""
          className="w-full h-full object-center"
        />
      </div>
    </div>
  );
}

export default Kids;
