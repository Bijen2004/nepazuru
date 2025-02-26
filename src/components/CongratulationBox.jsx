import React from "react";

const CongratulationBox = () => {
  return (
    <div className="w-full max-w-[625px] h-auto bg-[#061E2C] text-[#FFCC00] flex flex-col 
    items-center border-4 border-dashed border-[#3C5A68] shadow-2xl rounded-2xl p-6 animate-fadeIn 
    transform transition-transform duration-500 ease-in-out scale-100 hover:scale-105">
      <h1 className="text-3xl md:text-4xl font-guerrilla mt-4 tracking-widest animate-bounce">CONGRATULATIONS!</h1>
      <p className="text-xl md:text-2xl mt-6 text-[#BBCAD1] text-center animate-fadeIn">
        You've successfully completed this puzzle. Great job!
      </p>
      <div className="w-full mt-6">
        <div className="w-full flex flex-wrap justify-evenly mt-4 gap-4">
          <button className="h-[50px] w-[120px] bg-[#3C5A68] font-guerrilla border border-white hover:bg-[#4F7684] 
          transition-colors duration-300 animate-pulse">
            RESTART
          </button>
          <button className="h-[50px] w-[120px] bg-[#3C5A68] font-guerrilla border border-white hover:bg-[#4F7684] 
          transition-colors duration-300 animate-pulse">
            EXIT
          </button>
        </div>
        <div className="w-full flex justify-center mt-6">
          <button className="h-[50px] w-[180px] bg-[#3C5A68] font-guerrilla border border-white hover:bg-[#4F7684] 
          transition-colors duration-300 animate-pulse">
            VIEW LEADERBOARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationBox;

// Made the component responsive, added hover animations, bounce effects, and smooth scaling on hover. Let me know if you'd like more adjustments! 🚀
