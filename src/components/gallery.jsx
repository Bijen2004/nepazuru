"use client";

import React from "react";

const puzzles = [
  { id: 1, image: "/puzzles/animal.png", alt: "Animal Puzzle" },
  { id: 2, image: "/puzzles/art.png", alt: "Art Puzzle" },
  { id: 3, image: "/puzzles/building.png", alt: "Building Puzzle" },
  { id: 4, image: "/puzzles/cat.png", alt: "Cat Puzzle" },
  { id: 5, image: "/puzzles/city-night.png", alt: "City Night Puzzle" },
  { id: 6, image: "/puzzles/london.png", alt: "London Puzzle" },
  { id: 7, image: "/puzzles/street.png", alt: "Street Puzzle" },
  { id: 8, image: "/puzzles/van-gogh.png", alt: "Van Gogh Puzzle" },
];

export default function PuzzleGallery() {
  return (
    <div className="flex justify-center mt-[30px]">
      <div className=" p-4 w-full max-w-5xl text-center">
        <div className="grid grid-cols-4 gap-4">
          {puzzles.map((puzzle) => (
            <div key={puzzle.id} className="relative group">
              <img
                src={puzzle.image}
                alt={puzzle.alt}
                className="rounded-md shadow-md w-full h-auto transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
