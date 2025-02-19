"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa"; // Avatar Icon
import Logo from "../assets/NePazuru-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-[#041625]">
      {/* Left Section - Logo */}
      <img src={Logo} alt="NePazuru Logo" className="w-32" />

      {/* Desktop Menu (Hidden on mobile) */}
      <ul className="hidden md:flex gap-8">
        <li className="p-4 cursor-pointer">Game</li>
        <li className="p-4 cursor-pointer">Category</li>
        <li className="p-4 cursor-pointer">Leaderboard</li>
        <li className="p-4 cursor-pointer">Story</li>
        <li className="p-4 cursor-pointer">Gallery</li>
      </ul>

      {/* Avatar in Desktop View (Hidden on mobile) */}
      <FaUserCircle className="hidden md:block text-white text-3xl cursor-pointer" />

      {/* Mobile Menu Button */}
      <button
        onClick={handleNav}
        className="block md:hidden"
        aria-label="Toggle Menu"
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[60%] h-full border-r border-gray-900 bg-[#041625] ease-in-out duration-500 ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={Logo} alt="NePazuru Logo" className="w-32" />
          <button onClick={handleNav} aria-label="Close Menu">
            <AiOutlineClose size={24} />
          </button>
        </div>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Game</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Category
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Leaderboard
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Story</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Gallery
          </li>
          {/* Avatar inside Mobile Menu */}
          <li className="p-4 flex justify-center">
            <FaUserCircle className="text-white text-3xl cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
