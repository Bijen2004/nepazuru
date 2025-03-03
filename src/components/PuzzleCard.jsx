import React from "react";
import Image from "next/image";

const PuzzleCard = ({ imageUrl }) => {
  return (
    <div className="relative w-fit h-fit bg-gray-900">
      <div className="border-4 border-[#3C5A68] border-dashed rounded-lg relative w-[214px] h-[164px]">
        <Image
          src={imageUrl || "/ground.jpg"}
          alt="Puzzle Card"
          width={400}
          height={300}
          className="rounded-md object-fill w-full h-full"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/frame.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default PuzzleCard;
