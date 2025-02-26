import React from "react";

const CongratulationBox = () => {
  return (
    <div className="w-[625px] h-[365px] bg-[#061E2C] text-[#FFCC00] flex flex-col 
    items-center border-4 border-dashed border-[#3C5A68]">
      <h1 className="text-3xl font-bold mt-6">CONGRATULATIONS</h1>
      <p className="text-xl mt-8 text-[#BBCAD1]">
        You've completed this puzzle.
      </p>
      <div className="w-full mt-6 p-2">
        <div className="w-full flex justify-evenly mt-2 p-4">
          <button className="h-[50px] w-[100px] bg-[#3C5A68] border border-white">
            RESTART
          </button>
          <button className="h-[50px] w-[100px] bg-[#3C5A68] border border-white">
            EXIT
          </button>
        </div>
        <div className="w-full flex justify-evenly mt-2 p-4">
          <button className="h-[50px] w-[160px] bg-[#3C5A68] border border-white">
            LEADERBOARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationBox;
