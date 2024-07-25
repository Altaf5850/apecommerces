import React from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Smart from "../components/smart";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import FourCart from "../components/FourCart";
import Last from "../components/last";
import Most from "../components/Most";
import KidsData from "../components/kids/KidsData";
import Womansd from "../components/fashion/Womansd";
import AutoPlay from "../components/AutoPlay";

function Home() {
  return (
    <div>
      
      <Carousel />
      <Card />
      <Most />
      <Smart />
      <Cart />
      <Womansd />
      <FourCart />
      <Last />
      <KidsData />
      <Banner />
      <AutoPlay />
    </div>
  );
}

export default Home;
