"use client";

import { useState, useEffect } from "react";
import { GamepadIcon as GameController } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PuzzleCustomizerPage() {
  const [mode, setMode] = useState("Normal");
  const [pieces, setPieces] = useState(9);
  const [showPreview, setShowPreview] = useState(false);
  const router = useRouter();
  
  // Load from localStorage on mount
  useEffect(() => {
    const storedMode = localStorage.getItem("puzzleMode");
    const storedPieces = localStorage.getItem("puzzlePieces");
    const storedPreview = localStorage.getItem("puzzlePreview");

    if (storedMode) setMode(storedMode);
    if (storedPieces) {
      const parsedPieces = parseInt(storedPieces, 10);
      // Ensure only valid values are loaded
      if ([9, 16, 25].includes(parsedPieces)) {
        setPieces(parsedPieces);
      }
    }
    if (storedPreview) setShowPreview(storedPreview === "true");
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("puzzleMode", mode);
    localStorage.setItem("puzzlePieces", pieces.toString());
    localStorage.setItem("puzzlePreview", showPreview.toString());
  }, [mode, pieces, showPreview]);

  const handleStart = () => {
    router.push('/playground');
  };

  // Function to get difficulty label
  const getDifficultyLabel = (pieceCount) => {
    switch(pieceCount) {
      case 9: return "Easy";
      case 16: return "Medium";
      case 25: return "Hard";
      default: return "";
    }
  };

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
                <button
                  onClick={() => setMode("Normal")}
                  className={`p-2 rounded-lg flex items-center gap-2 ${
                    mode === "Normal" ? "bg-[#40E0D0] text-black" : "text-gray-400 border-2 border-gray-400"
                  }`}
                >
                  <GameController className="h-4 w-4" />
                  Normal
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center text-gray-400">
              <span>PIECES :</span>
              <div className="bg-[#001a1f] rounded-lg px-4 py-2">
                <span className="text-[#40E0D0]">{pieces}</span>
                <span className="text-gray-400 ml-2">({getDifficultyLabel(pieces)})</span>
              </div>
            </div>
            
            <div className="px-2">
              {/* Replace slider with buttons for the three specific options */}
              <div className="flex justify-between space-x-4">
                {[9, 16, 25].map((value) => (
                  <button 
                    key={value}
                    onClick={() => setPieces(value)}
                    className={`flex-1 py-3 rounded-lg text-center transition-colors ${
                      pieces === value 
                        ? "bg-[#40E0D0] text-black font-medium" 
                        : "bg-[#001a1f] text-gray-400 hover:bg-[#002a33]"
                    }`}
                  >
                    <div className="font-medium">
                      {value === 9 ? "3×3" : value === 16 ? "4×4" : "5×5"}
                    </div>
                    <div className="text-xs mt-1">{getDifficultyLabel(value)}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button 
            onClick={handleStart} 
            className="bg-transparent hover:bg-[#40E0D0]/10 text-[#40E0D0] border-2 border-[#40E0D0] border-dashed rounded-xl px-12 py-4 text-xl"
          >
            Start
          </button>
        </div>
      </main>
    </div>
  );
}