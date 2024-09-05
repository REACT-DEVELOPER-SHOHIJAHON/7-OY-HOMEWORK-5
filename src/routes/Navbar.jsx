import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaSignInAlt,
  FaInfoCircle,
  FaEnvelope,
  FaHome,
  FaBlog,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300 flex items-center space-x-2"
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            to="/about"
            className="text-gray-200 hover:text-white text-sm transition duration-300 ease-in-out flex items-center space-x-1"
          >
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 hover:text-white text-sm transition duration-300 ease-in-out flex items-center space-x-1"
          >
            <FaEnvelope />
            <span>Contact</span>
          </Link>
          <Link
            to="/blog"
            className="text-gray-200 hover:text-white text-sm transition duration-300 ease-in-out flex items-center space-x-1"
          >
            <FaBlog />
            <span>Blog</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white text-black rounded-full pl-10 pr-4 py-1 focus:outline-none border border-blue-500 placeholder-gray-600"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
          </div>

          <Link
            to="/profile"
            className="text-gray-200 hover:text-white text-sm transition duration-300 ease-in-out flex items-center space-x-1"
          >
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link
            to="/login"
            className="bg-blue-700 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out flex items-center space-x-1"
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
