"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowRegister(false);
  };
  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
    setShowLogin(false);
  };

  const menuItems = ["Home", "Category", "Leaderboard", "Gallery"];

  return (
    <nav className="flex justify-between items-center h-20 px-6 bg-[#041625] text-white shadow-md">
      <Link href={`/home`}>
        <img src="/assets/Nepazuru-logo.png" alt="NePazuru Logo" className="w-32 p-2" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl">
        {menuItems.map((item) => (
          <li key={item} className="cursor-pointer hover:text-gray-300 transition">
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Avatar */}
      <FaUserCircle className="hidden md:block text-3xl cursor-pointer" onClick={toggleLogin} />

      {showLogin && <Login onClose={toggleLogin} onShowRegister={toggleRegister} />}
      {showRegister && <Register onClose={toggleRegister} onShowLogin={toggleLogin} />}

      {/* Mobile Menu Button */}
      <button onClick={toggleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <div
        className={`fixed z-20 top-0 left-0 w-2/5 h-full bg-[#041625] border-r border-gray-700 shadow-lg transition-transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <img src="/assets/Nepazuru-logo.png" alt="NePazuru Logo" className="w-32" />
          <button onClick={toggleNav}>
            <AiOutlineClose size={24} />
          </button>
        </div>

        <ul className="text-lg p-4 space-y-4">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-300 transition">
              <Link href={`/${item.toLowerCase()}`} onClick={toggleNav}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Avatar - Centered */}
        <div className="flex justify-center border-t border-gray-700 mt-4 p-4">
          <FaUserCircle
            className="text-white text-4xl cursor-pointer hover:text-gray-300 transition"
            onClick={toggleLogin}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
