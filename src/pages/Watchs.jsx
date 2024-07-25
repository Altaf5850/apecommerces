import React from "react";
import WatchesGrid from "../components/watches/WatchesGrid";

function Watchs() {
  return (
    <>
      <div className="w-full bg-gray-200 mb-4">
        <img
          src="https://i.ytimg.com/vi/TwGBUVtb-Ac/maxresdefault.jpg"
          alt="img"
          className="w-full h-full object-center"
        />
      </div>
      <div>
        <WatchesGrid />
      </div>
    </>
  );
}

export default Watchs;
