"use client";

import React from "react";
import { Leaf, PawPrint, Utensils, Star } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Nature", icon: <Leaf size={16} className="text-green-500" /> },
    { name: "Animals", icon: <PawPrint size={16} className="text-red-500" /> },
    { name: "Food & Drinks", icon: <Utensils size={16} className="text-yellow-500" /> },
    { name: "Anime", icon: <Star size={16} className="text-orange-500" /> },
  ];

  return (
    <div className="  flex justify-center">
      <div className="border border-gray-600 rounded-lg p-4 w-full max-w-md text-center mt-[27px]">
    
        <div className="text-gray-400 text-sm flex justify-center items-center gap-2">
          <span className="flex-1 border-t border-gray-500"></span>
          <span className="uppercase font-semibold tracking-wide">Categories</span>
          <span className="flex-1 border-t border-gray-500"></span>
        </div>

       
        <div className="flex justify-center gap-3 mt-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-md text-sm text-white shadow-md hover:bg-gray-700 transition"
            >
              {category.icon}
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
