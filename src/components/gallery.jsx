"use client";

import React, { useState } from "react";
import PuzzleCard from "./PuzzleCard";
import Categories from "./categories";



const puzzles = [
  { id: 1, image: "/puzzles/animal.png", category: "Animals" },
  { id: 2, image: "/puzzles/art.png", category: "Art" },
  { id: 3, image: "/puzzles/building.png", category: "Nature" },
  { id: 4, image: "/puzzles/cat.png", category: "Animals" },
  { id: 5, image: "/puzzles/city-night.png", category: "Nature" },
  { id: 6, image: "/puzzles/london.png", category: "Nature" },
  { id: 7, image: "/puzzles/street.png", category: "Nature" },
  { id: 8, image: "/puzzles/van-gogh.png", category: "Art" },
];


export default function PuzzleGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPuzzles =
    selectedCategory === "All"
      ? puzzles
      : puzzles.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col items-center mt-[30px]">
      <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

      <div className="p-4 w-full max-w-5xl text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredPuzzles.map((puzzle) => (
            <PuzzleCard key={puzzle.id} imageUrl={puzzle.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

