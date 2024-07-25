import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleAddToCart = (item) => {
    dispatch(increaseQuantity(item.id));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseInt(item.price.replace(/[₹,]/g, ""));
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  const handleBuyClick = () => {
    if (isAuthenticated) {
      navigate("/address");
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-28 font-josefin">
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
          Item added to cart successfully!
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4 text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden m-2"
              >
                <img
                  className="w-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700">
                    ₹{parseInt(item.price.replace(/[₹,]/g, "")) * item.quantity}
                  </p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:scale-95 duration-200"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                    <button
                      className="bg-gray-500 text-white py-1 px-2 rounded hover:scale-95 duration-200"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded hover:scale-95 duration-200"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white shadow-md rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Total: ₹{totalPrice.toLocaleString()}
            </h3>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded w-full hover:scale-95 duration-200"
              onClick={handleBuyClick}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
