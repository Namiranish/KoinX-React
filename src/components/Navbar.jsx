import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-md h-20 bg-white">
      <div className="flex items-center space-x-1">
        {/* <span className="text-blue-600 font-bold text-xl">Koin</span>
        <span className="text-orange-500 font-bold text-xl">X</span>
        <span className="text-xs align-top">™</span> */}
        <img src="./1.png" alt="logo"  className="h-10 w-auto"/>
      </div>

      <nav className="flex space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Exchanges</a>
        <a href="#" className="hover:text-blue-600">How it Works?</a>
        <a href="#" className="hover:text-blue-600">Blog</a>
        <a href="#" className="hover:text-blue-600">About us</a>
      </nav>

      <div>
        <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition-all cursor-pointer">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
