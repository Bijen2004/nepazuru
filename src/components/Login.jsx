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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const response = await axios.post("http://localhost:4000/users/login", formData);
  //     console.log("Success:", response.data);

  //     // Store the user ID in localStorage
  //     if (response.data.userId) {
  //       localStorage.setItem('user_id', response.data.userId);
  //       console.log("User ID saved to localStorage:", response.data.userId);
  //     } else if (response.data.user && response.data.user._id) {
  //       localStorage.setItem('user_id', response.data.user._id);
  //       console.log("User ID saved to localStorage:", response.data.user._id);
  //     } else if (response.data._id) {
  //       localStorage.setItem('user_id', response.data._id);
  //       console.log("User ID saved to localStorage:", response.data._id);
  //     } else {
  //       console.warn("No user ID found in response");
  //     }

  //     alert("Login successful!");
  //     onClose();
  //   } catch (error) {
  //     console.error("Error:", error.response?.data || error.message);
  //     alert("Login failed. Please try again.");
  //   }
  //   setLoading(false);
  // };

  const handleSubmit = async (e) => {
    console.log("Event received:", e);
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/users/login",
        formData
      );
      console.log("Success:", response.data);

      const userId =
        response.data.userId || response.data.user?._id || response.data._id;
      if (userId) {
        localStorage.setItem("user_id", userId);
        console.log("User ID saved to localStorage:", userId);
      } else {
        console.warn("No valid user ID found in response");
      }

      alert("Login successful!");
      if (onClose) onClose();
      window.location.reload();
    } catch (error) {
      // console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#041625] border-[#3C5A68] border-2 border-dashed p-6 rounded-lg shadow-lg text-white w-96 fixed right-10 top-20 z-50">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-yellow-500 font-bold">Welcome back!</h2>
        <button onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
      </div>
      <form className="mt-4 space-y-3" onSubmit={(e) => handleSubmit(e)}>
        <button className="flex bg-[#072533] border p-2 rounded text-white w-full gap-2 items-center">
          <FcGoogle size={20} /> Log in with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-[#3C5A68] border-t" />
          <span className="text-gray-500 mx-2">or</span>
          <hr className="flex-grow border-[#3C5A68] border-t" />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#072533] border p-2 rounded w-full"
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
            className="bg-[#072533] border p-2 rounded w-full"
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="text-gray-500 absolute right-3 top-9"
            onClick={togglePassword}
          >
            {showPassword ? (
              <IoEyeOffOutline size={20} />
            ) : (
              <IoEyeOutline size={20} />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 p-2 rounded text-white w-full mt-4"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p className="text-center text-sm mt-3">
        Don't have an account?{" "}
        <a href="#" className="text-blue-500" onClick={onShowRegister}>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
