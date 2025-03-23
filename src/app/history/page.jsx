"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Tabs from "@/components/tabs/HistoryTab";
import { useRouter } from "next/navigation";

export default function History() {
  const [activeTab, setActiveTab] = useState("all time");
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Default: assume user is NOT logged in
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (!userId) {
      console.warn("No user_id found. Redirecting to login.");
      setUserLoggedIn(false);
      setLoading(false);
      return;
    }

    setUserLoggedIn(true);
    
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/puzzle/completion/${userId}`);
        setHistoryData(response.data || []);
      } catch (error) {
        console.error("Error fetching puzzle history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a192f] text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (!userLoggedIn) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white text-center">
        <p className="text-2xl font-bold mb-4">Please log in to view your puzzle history.</p>
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
        <div className="relative container mx-auto px-6 py-12">
          <h1 className="text-white text-4xl font-bold">Puzzle History</h1>
          <p className="text-[#40E0D0] mt-2 text-xl">({historyData.length})</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="w-full flex items-center justify-between h-[80px] bg-[#041625] text-white px-4">
        <p className="text-xl">Total: {historyData.length}</p>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Puzzle History Table */}
      {historyData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-white">
          <p className="text-lg">No puzzle history found.</p>
        </div>
      ) : (
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
                <tr key={index} className="bg-gray-300 even:bg-gray-200 rounded-lg overflow-hidden">
                  <td className="py-4 px-6 flex items-center gap-10">
                    <div className="w-7 h-7 rounded-full flex items-center bg-[#2E3A44] text-white justify-center font-bold border border-gray-700 shadow-md">
                      {index + 1}
                    </div>
                    <img src={game.selectedImage || "/Logo.png"} alt="puzzle" className="w-10 h-10 object-cover" />
                  </td>
                  <td className="py-4 px-6 text-center text-black">{game.mode || "Normal"}</td>
                  <td className="py-4 px-6 text-center text-black">{game.puzzlePiece}</td>
                  <td className="py-4 px-6 text-center text-black">{game.timer}</td>
                  <td className="py-4 px-6 text-center text-black">{(game.score || 0).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
