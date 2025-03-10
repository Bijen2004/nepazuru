"use client";

import React from "react"
import PuzzleCard from "./PuzzleCard";


const puzzles = [
  { id: 1, image: "/puzzles/animal.png" },
  { id: 2, image: "/puzzles/art.png" },
  { id: 3, image: "/puzzles/building.png" },
  { id: 4, image: "/puzzles/cat.png" },
  { id: 5, image: "/puzzles/city-night.png" },
  { id: 6, image: "/puzzles/london.png" },
  { id: 7, image: "/puzzles/street.png" },
  { id: 8, image: "/puzzles/van-gogh.png" },
];

export default function PuzzleGallery() {
  return (
    <div className="flex justify-center mt-[30px]">
      <div className="p-4 w-full max-w-5xl text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {puzzles.map((puzzle) => (
            <PuzzleCard key={puzzle.id} imageUrl={puzzle.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
