"use client";

import React from "react";
import { Leaf, PawPrint, Star, Palette } from "lucide-react";

export default function Categories({ selected, onSelect }) {
  const categories = [
    { name: "All", icon: null },
    { name: "Nature", icon: <Leaf size={16} className="text-green-500" /> },
    { name: "Animals", icon: <PawPrint size={16} className="text-red-500" /> },
    { name: "Art", icon: <Palette size={16} className="text-yellow-500" /> },
    { name: "Anime", icon: <Star size={16} className="text-orange-500" /> },
  ];

  return (
    <div className="flex justify-center">
      <div className="border border-gray-600 rounded-lg p-4 w-full max-w-md text-center mt-[27px]">
        <div className="text-gray-400 text-sm flex justify-center items-center gap-2">
          <span className="flex-1 border-t border-gray-500"></span>
          <span className="uppercase font-semibold tracking-wide">Categories</span>
          <span className="flex-1 border-t border-gray-500"></span>
        </div>

        <div className="flex justify-center gap-3 mt-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onSelect(category.name)}
              className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm shadow-md transition cursor-pointer
                ${
                  selected === category.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
