"use client";

import { GamepadIcon as GameController } from "lucide-react";

export default function PuzzleCustomizer() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#072533] overflow-hidden">
      <main className="w-full max-w-2xl mx-auto px-4 py-4">
        <h1
          className="text-white text-4xl md:text-5xl font-bold text-center mb-6"
          style={{ fontFamily: "Roboto, sans-serif", letterSpacing: "0.05em" }}
        >
          Customize your Puzzle
        </h1>

        <div className="bg-[#061E2C] rounded-xl p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-gray-400 mb-4">
              <span>MODE :</span>
              <div className="flex gap-4">
                <button className="bg-[#40E0D0] hover:bg-[#40E0D0]/90 text-black p-2 rounded-lg flex items-center gap-2">
                  <GameController className="h-4 w-4" />
                  Normal
                </button>
                {/* <button className="text-gray-400 border-2 border-gray-400 p-2 rounded-lg">
                  Hardcore
                </button> */}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center text-gray-400">
              <span>PIECES :</span>
              <div className="bg-[#001a1f] rounded-lg px-4 py-2">
                <span className="text-[#40E0D0]">9</span>
              </div>
            </div>
            <div className="px-2">
              <input
                type="range"
                min="9"
                max="121"
                step="1"
                defaultValue="9"
                className="w-full bg-[#40E0D0]"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>9</span>
                <span>121</span>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between items-center text-gray-400">
            <span>PREVIEW :</span>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="preview" className="text-[#40E0D0]" />
              <label htmlFor="preview">Show preview</label>
            </div>
          </div> */}
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-transparent hover:bg-[#40E0D0]/10 text-[#40E0D0] border-2 border-[#40E0D0] border-dashed rounded-xl px-12 py-4 text-xl">
            Start
          </button>
        </div>
      </main>
    </div>
  );
}