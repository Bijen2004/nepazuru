import React, { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Login = ({ onClose, onShowRegister }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/users/login", formData);
      console.log("Success:", response.data);
      alert("Login successful!");
      onClose();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Login failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed top-20 right-10 w-96 p-6 bg-[#041625] text-white rounded-lg border-2 border-dashed border-[#3C5A68] shadow-lg z-50">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-yellow-500 font-bold">Welcome back!</h2>
        <button onClick={onClose}><AiOutlineClose size={24} /></button>
      </div>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <button className="w-full bg-[#072533] text-white flex items-center gap-2 p-2 border rounded">
          <FcGoogle size={20} /> Log in with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-[#3C5A68]" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-t border-[#3C5A68]" />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-[#072533] border rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="relative">
          <label className="block mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-[#072533] border rounded"
            placeholder="Password"
            required
          />
          <button type="button" className="absolute right-3 top-9 text-gray-500" onClick={togglePassword}>
            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
          </button>
        </div>

        <button type="submit" className="w-full mt-4 p-2 bg-blue-500 text-white rounded" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p className="mt-3 text-center text-sm">
        Don’t have an account? <a href="#" className="text-blue-500" onClick={onShowRegister}>Sign up</a>
      </p>
    </div>
  );
};

export default Login;