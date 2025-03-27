"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function History() {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [userId, setUserId] = useState(null);

  // Check user login status when component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
      setLoading(false);
      setLoading(false);
    }
  }, []);

  // Fetch history only when user is logged in & userId exists
  useEffect(() => {
    if (userLoggedIn && userId) {
      fetchHistory(userId, currentPage);
    }
  }, [userId, currentPage, userLoggedIn]);

  // Listen for login/logout changes
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUserId = localStorage.getItem("user_id");
      if (!storedUserId) {
        setUserId(null);
        setUserLoggedIn(false);
        setHistoryData([]);
        setLoading(false);
      } else {
        setUserId(storedUserId);
        setUserLoggedIn(true);
        setLoading(true);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const fetchHistory = async (userId, page) => {
    setLoading(true);
    try {
      console.log("Fetching history for user:", userId, "Page:", page);

      const response = await axios.get(
        `http://localhost:4000/puzzle/history/${userId}`
      );

      console.log("Response data:", response.data);
      setHistoryData(response.data.completions || []);
    } catch (error) {
      console.error(
        "Error fetching puzzle history:",
        error.response?.data || error
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a192f] text-white">
        <p className="text-lg animate-pulse">Loading history...</p>
      </div>
    );
  }

  if (!userLoggedIn) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white text-center">
        <p className="text-2xl font-bold mb-4">
          Please log in to view your puzzle history.
        </p>
        <button
          className="mt-4 px-6 py-3 bg-[#40E0D0] text-black font-semibold rounded-lg hover:bg-[#30c4b2] transition"
          onClick={() => {
            const loginEvent = new Event("openLogin");
            window.dispatchEvent(loginEvent);
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0a192f] min-w-screen h-screen">
      {/* Header Section */}
      <div className="relative h-48 bg-gradient-to-r from-[#40E0D0]/20 to-[#40E0D0]/10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/puzzle-gallery-bg.png"
            alt="Leaderboard background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 py-12">
          <h1 className="text-white text-4xl font-bold">Puzzle History</h1>
          <p className="text-[#40E0D0] mt-2 text-xl">({historyData.length})</p>
        </div>
      </div>

      <div className="w-full flex items-center justify-start h-[80px] bg-[#041625] text-white px-4">
        <p className="text-xl">Total: {historyData.length}</p>
      </div>

      {/* Puzzle History Table */}
      {historyData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-white">
          <p className="text-lg">No puzzle history found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-[#001a25] text-white">
                <th className="py-4 px-6 text-left w-1/5">Puzzle</th>
                <th className="py-4 px-6 text-center w-1/5">Pieces</th>
                <th className="py-4 px-6 text-center w-1/5">Time (s)</th>
                <th className="py-4 px-6 text-center w-1/5">Score</th>
                <th className="py-4 px-6 text-center w-1/5">Date</th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto max-h-96">
              {historyData.map((game, index) => (
                <tr
                  key={index}
                  className="bg-gray-300 even:bg-gray-200 hover:bg-gray-400 transition"
                >
                  <td className="py-4 px-4 flex items-center justify-center gap-10">
                    <div className="w-fit h-7 p-2 rounded-full flex items-center bg-[#2E3A44] text-white justify-center font-bold border border-gray-700 shadow-md">
                      Game {index + 1}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {game.puzzlePiece}
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {game.timer}s
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {(game.score || 0).toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-center text-black">
                    {new Date(game.completedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
