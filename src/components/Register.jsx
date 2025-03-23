import React, { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = ({ onClose, onShowLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
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
      const response = await axios.post("http://localhost:4000/users/register", formData);
      console.log("Success:", response.data);
      alert("Registration successful!");
      onClose();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      // alert("Registration failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed top-20 right-10 w-96 p-6 bg-[#041625] text-white rounded-lg border-2 border-dashed border-[#3C5A68] shadow-lg z-50">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-yellow-500 font-bold">Create an Account</h2>
        <button onClick={onClose}><AiOutlineClose size={24} /></button>
      </div>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
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

        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 bg-[#072533] border rounded"
            placeholder="Choose a username"
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
          <button type="button" className="absolute right-3 top-[38px] text-gray-500" onClick={togglePassword}>
            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
          </button>
        </div>

        <button type="submit" className="w-full mt-4 p-2 bg-green-500 text-white rounded" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <p className="mt-3 text-center text-sm">
        Already have an account? <a href="#" className="text-blue-500" onClick={onShowLogin}>Log in</a>
      </p>
    </div>
  );
};

export default Register;
