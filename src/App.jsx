import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Woman from "./pages/Woman";
import Kids from "./pages/Kids";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DigitalsProducts from "./pages/DigitalsProducts";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import Shoes from "./pages/Shoes";
import Toys from "./pages/Toys";
import Watchs from "./pages/Watchs";
import CartPage from "./pages/CartPage";
import AddressPage from "./pages/AddressPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import PaymentPage from "./pages/PaymentPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <NavBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/digitals" element={<DigitalsProducts />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/watchs" element={<Watchs />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
