import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-black py-10 font-josefin">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 hover:scale-105 duration-200 ease-in">
              Company
            </h2>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 hover:scale-105 duration-200 ease-in">
              Customer Service
            </h2>
            <ul>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Order Tracking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 hover:scale-105 duration-200 ease-in">
              Legal
            </h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 hover:scale-105 duration-200 ease-in">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:underline text-xl hover:scale-125 duration-200 ease-in hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:underline text-xl hover:scale-125 duration-200 ease-in hover:text-cyan-400"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:underline text-xl hover:scale-125 duration-200 ease-in hover:text-orange-600"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:underline text-xl hover:scale-125 duration-200 ease-in hover:text-blue-600"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center hover:scale-90 duration-200 ease-in">
          <p>&copy; 2024 P Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
