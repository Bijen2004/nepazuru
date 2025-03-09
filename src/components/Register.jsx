import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = ({ onClose, onShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="fixed top-20 right-10 w-96 p-6 bg-[#041625] text-white rounded-lg border-2 border-dashed border-[#3C5A68] shadow-lg z-50">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-yellow-500 font-bold">Create an Account</h2>
        <button onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
      </div>
      <div className="mt-4 space-y-3">
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full p-2 bg-[#072533] border rounded" placeholder="Enter your email" />
        </div>

        <div>
          <label className="block mb-1">Username</label>
          <input type="text" className="w-full p-2 bg-[#072533] border rounded" placeholder="Choose a username" />
        </div>

        <div className="relative">
          <label className="block mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 bg-[#072533] border rounded"
            placeholder="Password"
          />
          <button type="button" className="absolute right-3 top-[38px] text-gray-500" onClick={togglePassword}>
            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
          </button>
        </div>

        <button className="w-full mt-4 p-2 bg-green-500 text-white rounded">Sign Up</button>
        <p className="mt-3 text-center text-sm">
          Already have an account? <a href="#" className="text-blue-500" onClick={onShowLogin}>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;