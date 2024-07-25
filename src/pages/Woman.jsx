import React from "react";
import Womans from "../components/fashion/Woman";
import Womansd from "../components/fashion/Womansd";

function Woman() {
  return (
    <div>
      <Womansd />
      <Womans />
      <div className="w-full bg-gray-200 mb-4 pt-10">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14d5f677630559.5c8d3005a7c9c.png"
          alt=""
          className="w-full h-full object-center"
        />
      </div>
      <div></div>
    </div>
  );
}

export default Woman;
