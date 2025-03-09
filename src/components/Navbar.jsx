"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [closing, setClosing] = useState(false); // Track if closing animation is running
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleNav = () => {
    if (!nav) {
      setClosing(false);
      setNav(true);
    } else {
      closeNav();
    }
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
    setShowLogin(false);
  };

  const closeNav = () => {
    setClosing(true);
    setTimeout(() => {
      setNav(false);
      setClosing(false);
    }, 300); // Delay before fully closing
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

      {/* Sidebar with Overlay */}
      {nav && (
        <div
          className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${
            closing ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeNav}
        >
          <div
            className={`fixed top-0 left-0 w-3/5 h-full bg-[#041625] border-r border-gray-700 shadow-lg transition-transform duration-300 ${
              closing ? "-translate-x-full" : "translate-x-0"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <img src="/assets/Nepazuru-logo.png" alt="NePazuru Logo" className="w-32" />
              <button onClick={closeNav}>
                <AiOutlineClose size={24} />
              </button>
            </div>

            <ul className="text-lg p-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item} className="cursor-pointer hover:text-gray-300 transition">
                  <Link href={`/${item.toLowerCase()}`} onClick={closeNav}>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
