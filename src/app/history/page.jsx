"use client";

import React, { useState } from "react";
import Tabs from "@/components/tabs/HistoryTab";

export default function History() {
  const [activeTab, setActiveTab] = useState("all time");
  const historyData = [
    {
      number: 1,
      game: "/Logo.png",
      mode: "Normal",
      pieces: 9,
      time: "1:00 min",
      score: 100,
    },
    {
      number: 2,
      game: "/Logo.png",
      mode: "Hardcore",
      pieces: 28,
      time: "1:00 min",
      score: 500,
    },
    {
      number: 3,
      game: "/Logo.png",
      mode: "Hardcore",
      pieces: 100,
      time: "20:00 min",
      score: 1000,
    },
    {
      number: 4,
      game: "/Logo.png",
      mode: "Normal",
      pieces: 9,
      time: "1:00 min",
      score: 100,
    },
  ];

  return (
    <>
      <div className="bg-[#0a192f] min-w-screen h-screen">
        {/* Background Image  */}
        <div className="relative h-48 bg-gradient-to-r from-[#40E0D0]/20 to-[#40E0D0]/10 overflow-hidden">
          <div className="relative container mx-auto px-6 py-12">
            <h1 className="text-white text-4xl font-bold">Puzzle History</h1>
            <p className="text-[#40E0D0] mt-2 text-xl">(1,027)</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between h-[80px] bg-[#041625] text-white px-4">
          <p className="text-xl">Total: 1,027</p>
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          {/* <div className="flex w-fit gap-14 justify-between ">
            <p className="text-xl">Mode</p>
            <p className="text-xl">Pieces</p>
            <p className="text-xl">Time</p>
            <p className="text-xl">Score</p>
          </div> */}
          <div className="flex w-fit gap-2">
            <button className="w-[30px] h-[30px] bg-[#2E3A44] rounded-sm hover:bg-[#40E0D0] active:bg-[#28a8a0] transition">
              {"<"}
            </button>
            <button className="w-[30px] h-[30px] bg-[#2E3A44] rounded-sm hover:bg-[#40E0D0] active:bg-[#28a8a0] transition">
              1
            </button>
            <button className="w-[30px] h-[30px] bg-[#2E3A44] rounded-sm hover:bg-[#40E0D0] active:bg-[#28a8a0] transition">
              2
            </button>
            <button className="w-[30px] h-[30px] bg-[#2E3A44] rounded-sm hover:bg-[#40E0D0] active:bg-[#28a8a0] transition">
              3
            </button>
            <button className="w-[30px] h-[30px] rounded-sm hover:bg-[#40E0D0] active:bg-[#28a8a0] transition">
              ...
            </button>
            <button className="w-[30px] h-[30px] bg-[#2E3A44] rounded-sm hover:bg-[#40E0D0] active:bg-[#28a8a0] transition">
              {">"}
            </button>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#001a25] text-white">
                <th className="py-4 px-6 text-left w-1/5">Puzzle</th>
                <th className="py-4 px-6 text-center w-1/5">Mode</th>
                <th className="py-4 px-6 text-center w-1/5">Pieces</th>
                <th className="py-4 px-6 text-center w-1/5">Time</th>
                <th className="py-4 px-6 text-center w-1/5">Score</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((game, index) => (
                <tr
                  key={index}
                  className="bg-gray-300 even:bg-gray-200 rounded-lg overflow-hidden"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-10">
                      <div className="w-7 h-7 rounded-full flex items-center bg-[#2E3A44] text-white justify-center font-bold border border-gray-700 shadow-md">
                        {game.number}
                      </div>
                      <div className="text-black">
                        <img
                          src={`${game.game}`}
                          alt="puzzle"
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {game.mode}
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {game.pieces}
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {game.time}
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {game.score.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
