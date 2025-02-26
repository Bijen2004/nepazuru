"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle, FaGithub } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const toggleLogin = () => setShowLogin((prev) => !prev);
  const closeLogin = () => setShowLogin(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <nav className="flex flex-row-reverse md:flex-row justify-between items-center h-20 px-6 bg-[#041625] text-white shadow-md">
      {/* Logo */}
      <img
        src="/assets/Nepazuru-logo.png"
        alt="NePazuru Logo"
        className="w-32 p-2"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl">
        {["Game", "Category", "Leaderboard", "Story", "Gallery"].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* User Icon (Desktop) */}
      <FaUserCircle
        className="hidden md:block text-3xl cursor-pointer"
        onClick={toggleLogin}
      />

      {/* Login Popup */}
      {showLogin && (
        <div className="fixed top-20 right-10 w-96 p-6 bg-[#041625] text-white rounded-lg border-2 border-dashed border-[#3C5A68] shadow-lg z-50">
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-yellow-500 font-bold">Welcome back!</h2>
            <button onClick={closeLogin} aria-label="Close Login">
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="mt-4 space-y-3">
            <button className="w-full bg-[#072533] text-white flex items-center gap-2 p-2 border rounded">
              <FcGoogle size={20} /> Log in with Google
            </button>
            <button className="w-full bg-[#072533] text-white flex items-center gap-2 p-2 border rounded">
              <FaSquareXTwitter size={20} /> Log in with X (Twitter)
            </button>
            <button className="w-full bg-[#072533] text-white flex items-center gap-2 p-2 border rounded">
              <FaGithub size={20} /> Log in with GitHub
            </button>

            {/* line seperator */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-[#3C5A68]" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-t border-[#3C5A68]" />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 bg-[#072533] border rounded"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <label className="block mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 bg-[#072533] border rounded"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={togglePassword}
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-500">
                Forgot password?
              </a>
            </div>

            <button className="w-full mt-4 p-2 bg-blue-500 text-white rounded">
              Log in
            </button>
            <p className="mt-3 text-center text-sm">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign up
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={toggleNav}
        className="block md:hidden"
        aria-label="Toggle Menu"
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed z-20 top-0 left-0 w-3/5 h-full bg-[#041625] border-r border-gray-900 transition-transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <img
            src="/assets/Nepazuru-logo.png"
            alt="NePazuru Logo"
            className="w-32"
          />
          <button onClick={toggleNav} aria-label="Close Menu">
            <AiOutlineClose size={24} />
          </button>
        </div>

        <ul className="text-lg p-4 space-y-4">
          {["Game", "Category", "Leaderboard", "Story", "Gallery"].map(
            (item) => (
              <li
                key={item}
                className="p-4 border-b border-gray-600 cursor-pointer"
                onClick={toggleNav}
              >
                {item}
              </li>
            )
          )}
          {/* Avatar inside Mobile Menu */}
          <li className="p-4 flex justify-center">
            <FaUserCircle
              className="text-white text-3xl cursor-pointer"
              onClick={toggleLogin}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
