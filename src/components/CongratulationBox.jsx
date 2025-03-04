"use client";
import React, { useEffect, useState } from "react";
import PartyPopperAnimation from "./PartyPopperAnimation";
import { useRouter } from "next/navigation";

const CongratulationBox = ({ onClose }) => {
  const [showPartyPopper, setShowPartyPopper] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Hide party popper animation after 4 seconds
    setTimeout(() => setShowPartyPopper(false), 2000);
  }, []);

  return (
    <div
      className="relative w-full max-w-[625px] h-auto bg-[#061E2C] text-[#FFCC00] flex flex-col 
    items-center border-4 border-dashed border-[#3C5A68] shadow-2xl rounded-lg p-6 animate-fadeIn 
    transform transition-transform duration-500 ease-in-out scale-100 hover:scale-105"
    >
      {/* Show party poppers only for the first 4 seconds */}
      {showPartyPopper && (
        <div className="flex">
          <PartyPopperAnimation direction="left" />
          <PartyPopperAnimation direction="right" />
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-guerrilla mt-4 tracking-widest animate-bounce">
        CONGRATULATIONS!
      </h1>
      <p className="text-xl md:text-2xl mt-6 text-[#BBCAD1] text-center animate-fadeIn">
        You've successfully completed this puzzle. Great job!
      </p>

      <div className="w-full mt-6">
        <div className="w-full flex flex-wrap justify-evenly mt-4 gap-4">
          <button
            onClick={() => router.push('/home')}
            className="h-[50px] w-[120px] bg-[#3C5A68] font-guerrilla border border-white hover:bg-[#4F7684] 
          transition-colors duration-300 animate-pulse"
          >
            RESTART
          </button>
          <button
            className="h-[50px] w-[120px] bg-[#3C5A68] font-guerrilla border border-white hover:bg-[#4F7684] 
          transition-colors duration-300 animate-pulse"  onClick={() => router.push('/home')}
          >
            EXIT
          </button>
        </div>
        <div className="w-full flex justify-center mt-6">
          <button
            className="h-[50px] w-[180px] bg-[#3C5A68] font-guerrilla border border-white hover:bg-[#4F7684] 
          transition-colors duration-300 animate-pulse"  onClick={() => router.push('/leaderboard')}
          >
            VIEW LEADERBOARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationBox;
