// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark-blue text-white p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Placeholder logo image
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-semibold font-poppins">
            InstaDownload
          </span>
        </div>

        {/* Menu (Responsive) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About Us
          </Link>
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-blue text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block hover:text-blue-500">
            About Us
          </Link>
          <Link to="/login" className="block hover:text-blue-500">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
