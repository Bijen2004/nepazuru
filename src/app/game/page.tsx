'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

export default function Home() {
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  
  const imageUrl = "https://img.drz.lazcdn.com/static/np/p/a40ab24bcd15bfc0dedcd79450145d97.jpg_960x960q80.jpg_.webp";
  
  useEffect(() => {
    if (puzzleCompleted) {
      setTimeout(() => setShowCongrats(true), 500);
    }
  }, [puzzleCompleted]);

  const handlePuzzleComplete = () => {
    setPuzzleCompleted(true);
  };

  return (
    <div className="min-h-screen bg-[#1B2028] p-6">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
        Jigsaw Puzzle Challenge
      </h1>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <div className="bg-white/10 rounded-lg shadow-lg p-4">
            <h2 className="text-xl text-white font-semibold mb-4 text-center ">
              Solve the Puzzle
            </h2>
            <div className="w-[500px] h-[500px] aspect-square relative">
              <JigsawPuzzle
                imageSrc={imageUrl}
                rows={3}
                columns={3}
                onSolved={handlePuzzleComplete}
              />
            </div>
          </div>
        </div>
        
        <div className="">
          <div className="bg-white/10 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-white">
              Reference Image
            </h2>
            <img 
              src={imageUrl} 
              alt="Puzzle Reference" 
              className="w-[300px] rounded shadow"
            />
          </div>
        </div>
      </div>
      
      {showCongrats && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-xl p-8 max-w-md shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
              Congratulations!
            </h2>
            <p className="text-center text-gray-700 mb-6">
              You've successfully completed the puzzle!
            </p>
            <button 
              onClick={() => {
                setPuzzleCompleted(false);
                setShowCongrats(false);
              }}
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              Play Again
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}