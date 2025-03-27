import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth, googleProvider } from "@/app/firebase";

const Login = ({ onClose, onShowRegister }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // In Login.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Email/Password Login Triggered");

    try {
      const response = await axios.post(
        "http://localhost:4000/users/login",
        formData
      );
      console.log("Success:", response.data);

      if (response.data) {
        localStorage.setItem("nepazuru-token", response.data.token);
        localStorage.setItem("user_id", response.data.user._id);

        window.dispatchEvent(new Event("loginStateChange"));
        toast.success("Login successful");

        onClose();
        window.location.reload();
        router.push("/");
      } else {
        console.warn("No user ID found in response");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Login failed. Please check your credentials.");
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      // Set authentication persistence
      await setPersistence(auth, browserLocalPersistence);

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User signed in:", user);

      localStorage.setItem("nepazuru-token", await user.getIdToken());
      localStorage.setItem("user_id", user.uid);

      window.dispatchEvent(new Event("loginStateChange"));

      toast.success("Google Login Successful");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Failed to sign in with Google");
    }
  };

  useEffect(() => {
    signOut(auth).catch((error) =>
      console.error("Google sign-out error:", error)
    );
  }, []);

  return (
    <div className="bg-[#041625] border-[#3C5A68] border-2 border-dashed p-6 rounded-lg shadow-lg text-white w-96 fixed right-10 top-20 z-50">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-yellow-500 font-bold">Welcome back!</h2>
        <button onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
      </div>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex bg-[#072533] border p-2 rounded text-white w-full gap-2 items-center"
        >
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
            className="text-gray-500 absolute right-3 top-[38px]"
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
