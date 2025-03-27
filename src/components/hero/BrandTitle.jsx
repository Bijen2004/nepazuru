import React from "react";
import Image from "next/image";

const BrandTitle = () => (
  <div className="text-center md:mb-12">
    <div className="flex items-center justify-center mb-4">
      {/* Ensure the image scales properly */}
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <Image
          src="/Logo.png"
          alt="Logo"
          fill // Use "fill" instead of "layout='fill'"
          sizes="(max-width: 768px) 96px, 128px" // Adjust sizes for responsiveness
          style={{ objectFit: "contain" }} // Use "style" instead of "objectFit"
          className="rounded-lg"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold ml-2 mr-8">
        <span className="text-white">Ne</span>
        <span className="text-[#4CD7E7]">Pa</span>
        <span className="text-[#46B789]">zuru</span>
      </h1>
    </div>
    <p className="text-white text-lg md:text-xl px-4">
      All The Pieces Fit Together, You Just Have to Figure Out How.
    </p>
  </div>
);

export default BrandTitle;
