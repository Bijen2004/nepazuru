"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaUserCircle,
  FaHome,
  FaLayerGroup,
  FaTrophy,
  FaImages,
} from "react-icons/fa";
import Link from "next/link";
import Login from "./Login"; // Ensure you have this component
import Register from "./Register"; // Ensure you have this component

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [closing, setClosing] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Fetch authentication state (Example: localStorage, API, or Auth provider)
  //   const user = localStorage.getItem("user"); // Replace with your actual authentication logic
  //   setIsAuthenticated(!!user);
  // }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("nepazuru-token");
  //   if(token){
  //     setIsAuthenticated(true)
  //   }
  //   // You can also add this to track login state changes
  //   const handleStorageChange = () => {
  //     const token = localStorage.getItem("nepazuru-token");
  //     setIsAuthenticated(!!token);
  //   };

  //   // Listen for storage changes (in case token is added/removed in another tab)
  //   window.addEventListener('storage', handleStorageChange);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []); // Empty dependency array means this runs once on component mount

  // In Navbar.js
  useEffect(() => {
    // Check token on mount
    const token = localStorage.getItem("nepazuru-token");
    setIsAuthenticated(!!token);

    // Function to update auth state
    const updateAuthState = () => {
      const token = localStorage.getItem("nepazuru-token");
      setIsAuthenticated(!!token);
    };

    // Listen for our custom event (same tab changes)
    window.addEventListener("loginStateChange", updateAuthState);

    // Listen for storage changes (other tab changes)
    window.addEventListener("storage", updateAuthState);

    // Cleanup listeners
    return () => {
      window.removeEventListener("loginStateChange", updateAuthState);
      window.removeEventListener("storage", updateAuthState);
    };
  }, []);

  // Add logout function
  const handleLogout = () => {
    localStorage.removeItem("nepazuru-token");
    setIsAuthenticated(false);
    // Optionally redirect to home or login page
    // router.push('/home');
  };

  const toggleNav = () => {
    if (!nav) {
      setClosing(false);
      setNav(true);
    } else {
      closeNav();
    }
  };

  const toggleLogin = (e) => {
    if (e) e.stopPropagation();
    setShowLogin((prev) => !prev);
    setShowRegister(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const toggleRegister = (e) => {
    e.stopPropagation();
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
    { name: "Gallery", icon: <FaImages />, link: "/gallery" },
    { name: "Leaderboard", icon: <FaTrophy />, link: "/leaderboard" },
    { name: "History", icon: <FaLayerGroup />, link: "/history" },
  ];

  return (
    <nav className="flex justify-between items-center h-20 px-6 bg-[#041625] text-white shadow-md">
      <Link href="/home">
        <img
          src="/assets/Nepazuru-logo.png"
          alt="NePazuru Logo"
          className="w-32 p-2 cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl">
        {menuItems.map(({ name, link }) => (
          <li
            key={name}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Avatar */}
      {/* {isAuthenticated ? 
      <div>
        Logged in
      </div>:
      <FaUserCircle
        className="hidden md:block text-3xl cursor-pointer"
        onClick={toggleLogin}
      />} */}

      {/* Desktop Avatar/Login Section */}
      {isAuthenticated ? (
        <div className="flex items-center gap-2">
          <FaUserCircle className="hidden md:block text-3xl" />
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-medium">User</p>
            <button
              onClick={handleLogout}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <FaUserCircle
          className="hidden md:block text-3xl cursor-pointer"
          onClick={toggleLogin}
        />
      )}

      {/* Login & Register Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={toggleLogin}
        >
          <div
            className="p-6 rounded-lg text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Login onClose={closeLogin} onShowRegister={toggleRegister} />
          </div>
        </div>
      )}

      {showRegister && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={toggleRegister}
        >
          <div
            className="bg-[#041625] p-6 rounded-lg text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Register onClose={toggleRegister} onShowLogin={toggleLogin} />
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button onClick={toggleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Mobile Sidebar */}
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
                  className="w-32 cursor-pointer"
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

            {/* Sidebar Avatar */}
            <div
              className="absolute bottom-4 left-4 flex items-center space-x-3 p-4 rounded-lg bg-gray-800 w-11/12 cursor-pointer"
              onClick={isAuthenticated ? undefined : toggleLogin}
            >
              <FaUserCircle className="w-10 h-10 rounded-full border border-gray-600" />
              <div className="flex-1">
                {isAuthenticated ? (
                  <>
                    <p className="font-semibold">User</p>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-400 hover:text-red-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <p className="font-semibold">Guest</p>
                    <p className="text-sm text-gray-400">@anonymous123</p>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar Avatar */}
            {/* <div
              className="absolute bottom-4 left-4 flex items-center space-x-3 p-4 rounded-lg bg-gray-800 w-11/12 cursor-pointer"
              onClick={toggleLogin}
            >
              <FaUserCircle className="w-10 h-10 rounded-full border border-gray-600" />
              <div>
                <p className="font-semibold">Guest</p>
                <p className="text-sm text-gray-400">@anonymous123</p>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
