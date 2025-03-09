"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaUserCircle,
  FaHome,
  FaLayerGroup,
  FaTrophy,
  FaImages,
} from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [closing, setClosing] = useState(false);
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
    }, 300);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/home" },
    { name: "Category", icon: <FaLayerGroup />, link: "/category" },
    { name: "Leaderboard", icon: <FaTrophy />, link: "/leaderboard" },
    { name: "Gallery", icon: <FaImages />, link: "/gallery" },
  ];

  return (
    <nav className="flex justify-between items-center h-20 px-6 bg-[#041625] text-white shadow-md">
      <Link href="/home">
        <img
          src="/assets/Nepazuru-logo.png"
          alt="NePazuru Logo"
          className="w-32 p-2"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl">
        {menuItems.map(({ name, icon, link }) => (
          <li
            key={name}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Avatar */}
      <FaUserCircle
        className="hidden md:block text-3xl cursor-pointer"
        onClick={toggleLogin}
      />

      {showLogin && (
        <Login onClose={toggleLogin} onShowRegister={toggleRegister} />
      )}
      {showRegister && (
        <Register onClose={toggleRegister} onShowLogin={toggleLogin} />
      )}

      <button onClick={toggleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {nav && (
        <div
          className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${
            closing ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeNav}
        >
          <div
            className={`fixed top-0 left-0 w-64 h-full bg-[#041625] text-white shadow-lg transition-transform duration-300 ${
              closing ? "-translate-x-full" : "translate-x-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <Link href="/home">
                <img
                  src="/assets/Nepazuru-logo.png"
                  alt="NePazuru Logo"
                  className="w-32"
                />
              </Link>
              <button onClick={closeNav}>
                <AiOutlineClose size={24} />
              </button>
            </div>

            {/* Sidebar Menu */}
            <ul className="p-4 space-y-4">
              {menuItems.map(({ name, icon, link }) => (
                <li
                  key={name}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
                >
                  <span className="text-xl">{icon}</span>
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>

            {/* Avatar at Bottom */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-3 p-4 rounded-lg bg-gray-800 w-11/12">
              <FaUserCircle
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-600 cursor-pointer"
              />
              <div>
                <p className="font-semibold">Guest</p>
                <p className="text-sm text-gray-400">@anonymous123</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
