import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="m-3 flex flex-col md:flex-row justify-start items-center bg-[#FFFEFF] mt-5 hover:scale-95 duration-300 ease-in-out font-josefin">
        <div className="md:w-1/3">
          <a href="/digitals">
            <img
              src="https://cdn.phonebunch.com/news-images/2024/05/Vivo-X100-Ultra-launch-cn.webp"
              alt="img"
              className="w-full h-auto md:h-full object-cover"
            />
          </a>
        </div>
        <div className="md:w-2/3 m-2">
          <a href="/digitals">
            <h2 className="font-bold font-serif text-xl md:text-2xl mb-2">
              Vivo X100 Series Launch
            </h2>
          </a>
          <p className="font-sans text-gray-600">
            Vivo has confirmed launching two new phones in the X100 series—
            which includes the X100 Ultra, X100s and X100 Pro. The X100 Ultra is
            expected to feature one of the most powerful camera systems. Vivo
            has confirmed on the Chinese alternative of Twitter, Weibo that the
            smartphone series will be made official on May 13.
            <br />
            <br />
            The pricing details for three new phone models have been leaked in
            China, according to a report by GSMArena. Let's start with the Ultra
            model. It's rumored to start at approximately CNY 6,699, which
            translates to around Rs 77,300, for the version with 12GB of RAM and
            256GB of storage. If you want more storage, the version with 16GB of
            RAM and 512GB of storage might cost around CNY 7,499, or roughly Rs
            86,700. And if you want the top-of-the-line model with 16GB of RAM
            and 1TB of storage, it could be priced at approximately CNY 8,499,
            which is around Rs 98,300. These are high prices for top-notch
            devices.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
