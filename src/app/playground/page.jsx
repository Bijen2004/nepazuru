'use client'
import { useState, useEffect } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import CongratulationBox from '../../components/CongratulationBox';
import ExpandableActionPanel from '../../components/ExpandableActionPanel'
export default function Playground() {
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [puzzlePieces, setPuzzlePieces] = useState(3);

  useEffect(() => {
    const storedImage = localStorage.getItem('selectedImage');
    const storedPieces = localStorage.getItem('puzzlePieces');
    const actualPiece = storedPieces / 3;

    if (storedImage) setImageUrl(storedImage);
    if (storedPieces) setPuzzlePieces(parseInt(actualPiece, 10));
  }, []);

  useEffect(() => {
    if (puzzleCompleted) {
      setTimeout(() => setShowCongrats(true), 500);
    }
  }, [puzzleCompleted]);

  const handlePuzzleComplete = () => {
    setPuzzleCompleted(true);
  };

  return (
    <div className="min-h-screen bg-[#1B2028] p-6 flex justify-center items-center relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center relative">
        {/* Puzzle Container */}
        <div className="relative">
          <div className="bg-white/10 rounded-lg shadow-lg p-4">
            <h2 className="text-xl text-white font-semibold mb-4 text-center">
              Solve the Puzzle
            </h2>
            {imageUrl && (
              <>
              <div className="w-[500px] h-[500px] aspect-square relative">
                <JigsawPuzzle
                  imageSrc={imageUrl}
                  rows={puzzlePieces}
                  columns={puzzlePieces}
                  onSolved={handlePuzzleComplete}
                />
              </div>
              <div>
                <ExpandableActionPanel/>
              </div>
            </>
            )}
          </div>
        </div>

        {/* Overlay CongratulationBox */}
        {showCongrats && (
          <div className="absolute inset-0 flex justify-center items-center bg-black/60">
            <CongratulationBox />
          </div>
        )}
      </div>
    </div>
  );
}
