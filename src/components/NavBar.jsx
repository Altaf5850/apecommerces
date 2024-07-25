import React from "react";
import Img from "../assets/aalogo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-2 bg-slate-200 shadow-xl fixed w-full z-20 font-josefin">
      <header className="flex justify-between items-center w-full md:w-auto md:mr-5 mb-2 md:mb-0">
        <Link to="/">
          <img src={Img} alt="logo" className="w-20 pr-5" />
        </Link>
        <Link
          to="/"
          className="flex items-center space-x-2 p-2 bg-transparent text-black rounded"
        ></Link>
        <div className="flex md:hidden">
          <div className="text-black">
            {!isAuthenticated ? (
              <div className="flex flex-col items-center">
                <p className="capitalize text-red-400">
                  login or sign up first
                </p>
                <button
                  className="p-2 rounded-lg border hover:bg-slate-700 duration-200 ease-in hover:text-white"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <p>{user.name}</p>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
          <button className="flex justify-center items-center gap-1 p-3 rounded-lg border hover:bg-slate-700 duration-200 ease-in hover:text-white ml-2">
            <Link to="/cart" className="flex items-center">
              <FaShoppingCart />
              <span className="ml-1">Cart</span>
              <span className="text-red-500 font-bold ml-1">
                {totalQuantity}
              </span>
            </Link>
          </button>
        </div>
      </header>
      <div className="flex relative items-center w-full md:w-auto mb-2 md:mb-0">
        <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="search"
          className="h-10 w-full md:w-96 rounded-xl pl-10 border bg-[#F0F5FF]"
        />
      </div>
      <div className="hidden md:flex justify-between md:justify-end items-center list-none gap-5 mr-5 pr-4">
        <div className="text-black">
          {!isAuthenticated ? (
            <div className="flex flex-col items-center">
              <p className="capitalize text-red-600">login or sign up first</p>
              <button
                className="p-2 rounded-lg border hover:bg-slate-700 duration-200 ease-in hover:text-white"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p>{user.name}</p>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          )}
        </div>
        <button className="flex justify-center items-center gap-1 p-3 rounded-lg border hover:bg-slate-700 duration-200 ease-in hover:text-white w-full md:w-auto">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="mt-4" />
            <span className="ml-1 mt-4">Cart</span>
            <span className="text-red-500 font-bold ml-1">{totalQuantity}</span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
