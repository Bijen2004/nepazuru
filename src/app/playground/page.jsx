'use client';

import { useState, useEffect, useRef } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import CongratulationBox from '../../components/CongratulationBox';
import ExpandableActionPanel from '../../components/ExpandableActionPanel';

export default function Playground() {
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [puzzlePieces, setPuzzlePieces] = useState(3);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerInterval = useRef(null);
  const hasHandledCompletion = useRef(false);

  // Load initial data from localStorage
  useEffect(() => {
    const storedImage = localStorage.getItem('selectedImage');
    const storedPieces = localStorage.getItem('puzzlePieces');
    
    if (storedImage) setImageUrl(storedImage);
    if (storedPieces) {
      const actualPiece = parseInt(storedPieces, 10) / 3;
      setPuzzlePieces(actualPiece > 0 ? actualPiece : 3);
    }

    // Set up timer
    const currentTime = new Date().getTime();
    setStartTime(currentTime);

    timerInterval.current = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval.current);
    };
  }, []);

  // Handle puzzle completion
  const handlePuzzleComplete = () => {
    console.log("Puzzle completed!");
    
    // Fix: Use a timeout to avoid React state updates during render
    setTimeout(() => {
      setPuzzleCompleted(true);
      clearInterval(timerInterval.current);
    }, 0);
  };

  // Process completion data separately from the completion event
  useEffect(() => {
    if (puzzleCompleted && !hasHandledCompletion.current) {
      hasHandledCompletion.current = true;
      processCompletion();
    }
  }, [puzzleCompleted]);

  const processCompletion = () => {
    const userId = localStorage.getItem('user_id');
    const selectedImage = localStorage.getItem('selectedImage');
    const puzzlePiece = localStorage.getItem('puzzlePieces');

    // Always show congratulations box regardless of user data
    setTimeout(() => setShowCongrats(true), 500);

    // Only send data to API if we have all required information
    if (!userId || !selectedImage || !puzzlePiece) {
      console.log("Missing data, skipping API call but still showing congratulations.");
      return;
    }

    const data = {
      userId,
      timer: elapsedTime,
      selectedImage,
      puzzlePiece
    };
    sendCompletionData(data);
  };

  const sendCompletionData = async (payload) => {
    try {
      // Fix: Add validation and better error handling
      const trimmedPayload = {
        ...payload,
        // Optionally truncate the base64 image data if it's too large
        selectedImage: payload.selectedImage.length > 1000 ? 
          payload.selectedImage.substring(0, 1000) + '...' : 
          payload.selectedImage
      };      
      const response = await fetch("http://localhost:4000/puzzle/completion", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedPayload),
        // Add timeout to prevent hanging requests
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to send completion data:', response.status, errorText);
      } else {
        console.log('Successfully sent completion data to API');
        
        // Clear puzzle-related data from localStorage but keep user_id
        localStorage.removeItem('selectedImage');
        localStorage.removeItem('puzzlePieces');
        console.log('Puzzle data cleared from localStorage, user_id retained');
      }
    } catch (error) {
      console.error('Error sending completion data:', error);
      // Show a user-friendly error message if needed
    }
  };

  return (
    <div className="min-h-screen bg-[#1B2028] p-6 flex justify-center items-center relative">
      <div className="fixed top-20 right-4 bg-white/30 rounded-lg px-4 py-2 text-white text-xl font-bold shadow-lg z-50">
        Time: {elapsedTime}s
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative">
        <div className="relative">
          <div className="bg-white/10 rounded-lg shadow-lg p-4">
            <h2 className="text-xl text-white font-semibold text-center">
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
                <ExpandableActionPanel/>
              </>
            )}
          </div>
        </div>

        {showCongrats && (
          <div className="absolute inset-0 flex justify-center items-center bg-black/60">
            <CongratulationBox timeElapsed={elapsedTime} />
          </div>
        )}
      </div>
    </div>
  );
}