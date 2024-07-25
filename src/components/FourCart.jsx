import React from "react";

function FourCart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 m-10 p-2 bg-white hover:scale-105 duration-300 ease-in-out font-josefin">
      <div className="flex justify-center items-center">
        <a href="/electronics">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png"
            alt="Asus Logo"
            className="max-w-full h-auto"
          />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a href="/electronics">
          <img
            src="https://lsmedia.linker-cdn.net/266980/2024/12431421.webp?width=1200&height=1125"
            alt="Product Image"
            className="max-w-full h-auto"
          />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a href="/electronics">
          <div className="p-2">
            <p className="font-bold font-mono">
              Asus Vivobook Ultra 15 OLED / i3-1115G4//8G/256G PCIe
              SSD/TRANSPARENT SILVER/15.6"FHD OLED/1Y international warranty +
              McAfee/Office H&S/Backlit KB/Finger Print / K513EA-L303TS <br />
              <span className="line-through text-gray-500">
                MRP ₹ 57,990.00
              </span>{" "}
              <br />
              Price ₹ 55,090.50 <br />
              <span className="text-red-500">Inclusive of all taxes </span>
              <br />
              <span className="text-green-500">
                You Save: ₹ 2,899.50. Discount: 5%
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default FourCart;
