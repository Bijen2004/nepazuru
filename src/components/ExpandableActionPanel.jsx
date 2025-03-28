"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiEye, FiEyeOff, FiArrowLeftCircle } from "react-icons/fi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const ExpandableActionPanel = ({ showPreview, setShowPreview, setBgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const router = useRouter();

  // Close panel when clicking outside or toggle button
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-9 left-12 z-50" ref={panelRef}>
      <div
        className={`relative flex flex-col items-center transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-90"
        } bg-yellow-500 p-4 rounded-lg shadow-lg pointer-events-auto`}
      >
        <button
          className="p-2 bg-black text-white rounded-full hover:bg-gray-800"
          onClick={() => setShowPreview((prev) => !prev)}
        >
          {showPreview ? <FiEyeOff size={24} /> : <FiEye size={24} />}
        </button>

        <input
          type="color"
          className="mt-2 w-10 h-10 cursor-pointer bg-black border border-gray-700 rounded-full"
          onChange={(e) => setBgColor(e.target.value)}
        />

        <button
          className="p-2 bg-black text-white rounded-full hover:bg-gray-800 mt-2"
          onClick={() => router.push("/home")}
        >
          <FiArrowLeftCircle size={24} />
        </button>
      </div>

      {/* Floating Button to toggle the panel */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mt-4 p-4 border-2 border-dashed border-yellow-500 bg-[#3C5A68] text-black rounded-full shadow-lg hover:bg-[#374b54]"
      >
        <FaPuzzlePiece className="text-yellow-500" size={28} />
      </button>
    </div>
  );
};

export default ExpandableActionPanel;
