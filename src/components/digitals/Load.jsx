import React from "react";

const setting = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/new/NordCe4_Lite_580x675.jpeg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/Redmi_12_5G_4.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/June24/iQOOZ9/C/iQOO_Z9X_580x675.jpeg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/Bank/narzo_70.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/16thApril/TopDeals_Samsung_1.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/ITELTILESPHASE3F/GamexA70/GAMEXJANART/Variant_1_2.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/OP/CommunitySale/OnePlus_12R_580x675.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/POCO_M6_5G_4.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/tiles/23June/narzo_70x_8128_580x675_2.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/June24/iQOOZ9/C/iQOO_Z9_5G_580x675.jpeg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/new/OnePlus_12_580x675.jpeg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/BANHITABRANDSTORE/BRANDTILES/TECNOSPARK20/Tecnosparkgo2024/Lava-Storm-5G-.jpg",
];

function Load() {
  return (
    <div className="mb-5 font-josefin">
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/CatPage/PC-_STRIPE1.gif"
          alt=""
          className="w-full"
        />
      </div>
      <div>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/riyaa/MOnsoonevent/D94738480_WLD_bankstripe_MOB_1242HDFConecard.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-[80%] h-full mx-auto">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/Portkey/New_design/stripes/04.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {setting.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="w-full h-full object-cover hover:scale-105 duration-300 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Load;
