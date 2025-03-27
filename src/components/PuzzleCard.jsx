'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PuzzleCard = ({ imageUrl }) => {
  const router = useRouter();

  const handlePlayClick = () => {
    localStorage.setItem("selectedImage", imageUrl);
    
    router.push("/customize");
  };

  return (
    <div className="relative w-fit h-fit bg-gray-900 cursor-pointer group transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl rounded-lg">
      <div className="border-4 border-[#3C5A68] border-dashed rounded-lg relative w-[214px] h-[164px] overflow-hidden">
        <Image
          src={imageUrl || "/ground.jpg"}
          alt="Puzzle Card"
          width={400}
          height={300}
          className="rounded-md object-fill w-full h-full"
        />

       
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: "url(/frame.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />

       
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md shadow-md transition-all duration-300"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PuzzleCard;