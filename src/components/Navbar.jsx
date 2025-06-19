import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={toggleMenu} className="text-blue-600">
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Exchanges</a>
          <a href="#" className="hover:text-blue-600">How it Works?</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">About us</a>
          <button className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-all cursor-pointer">
            Sign In
          </button>
        </nav>
      </div>

      {/* Main navbar */}
      <header className="flex justify-between items-center px-6 py-3 shadow-md h-20 bg-white">
        <div className="flex items-center space-x-1">
          <img src="./1.png" alt="logo" className="h-10 w-auto" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Exchanges</a>
          <a href="#" className="hover:text-blue-600">How it Works?</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">About us</a>
        </nav>

        {/* Desktop Sign In */}
        <div className="hidden lg:block">
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition-all cursor-pointer">
            Sign In
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 hover:text-blue-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      </header>
    </>
  );
};

export default Navbar;