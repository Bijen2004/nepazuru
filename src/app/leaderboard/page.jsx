// "use client";
// import { useEffect, useState } from "react";

// export default function Leaderboard() {
//   const [leaderboardData, setLeaderboardData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:4000/puzzle/leaderboard");
//         if (!response.ok) {
//           throw new Error("Failed to fetch leaderboard data");
//         }
//         const data = await response.json();
//         setLeaderboardData(data); 
//       } catch (error) {
//         setError(error.message); 
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchLeaderboard();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
//         <p className="text-white text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
//         <p className="text-red-500 text-lg">Error: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#0a192f] min-h-screen">
//       {/* Background Image */}
//       <div className="relative h-48 bg-gradient-to-r from-[#40E0D0]/20 to-[#40E0D0]/10 overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="assets/bgimage.png"
//             alt="Leaderboard background"
//             className="w-full h-full object-cover opacity-90"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>
//         <div className="relative z-10 container mx-auto px-6 py-12">
//           <h1 className="text-white text-4xl font-bold">Leaderboard</h1>
//           <p className="text-[#40E0D0] mt-2">Top-ranking players</p>
//         </div>
//       </div>

//       {/* Leaderboard Table */}
//       <div className="container mx-auto px-4 py-6">
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-[#001a25] text-white">
//                 <th className="py-4 px-6 text-left">Rank</th>
//                 <th className="py-4 px-6 text-left">Name</th>
//                 <th className="py-4 px-6 text-center">Total Score</th>
//                 <th className="py-4 px-6 text-center">Completions</th>
//                 <th className="py-4 px-6 text-center">Best Score</th>
//                 <th className="py-4 px-6 text-center">Last Completion</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaderboardData.map((player, index) => (
//                 <tr key={index} className="bg-gray-300 even:bg-gray-200">
//                   <td className="py-4 px-6 text-black font-bold">{index + 1}</td>
//                   <td className="py-4 px-6 text-black">{player.name}</td>
//                   <td className="py-4 px-6 text-center text-black">{player.totalScore}</td>
//                   <td className="py-4 px-6 text-center text-black">{player.completions}</td>
//                   <td className="py-4 px-6 text-center text-black">{player.bestScore || "N/A"}</td>
//                   <td className="py-4 px-6 text-center text-black">
//                     {new Date(player.lastCompletion).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Simulating user authentication check (Replace with real auth check)
    const user = localStorage.getItem("user_id"); // Example: Get token from storage
    setUserLoggedIn(!!user); // Convert to boolean

    if (user) {
      fetchLeaderboard();
    }
  }, []);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/puzzle/leaderboard");
      if (!response.ok) {
        throw new Error("Failed to fetch leaderboard data");
      }
      const data = await response.json();
      setLeaderboardData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0a192f] min-h-screen">
      {/* Background Image */}
      <div className="relative h-48 bg-gradient-to-r from-[#40E0D0]/20 to-[#40E0D0]/10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="assets/bgimage.png"
            alt="Leaderboard background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 py-12">
          <h1 className="text-white text-4xl font-bold">Leaderboard</h1>
          <p className="text-[#40E0D0] mt-2">Top-ranking players</p>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="container mx-auto px-4 py-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#001a25] text-white">
                <th className="py-4 px-6 text-left">Rank</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-center">Total Score</th>
                <th className="py-4 px-6 text-center">Completions</th>
                <th className="py-4 px-6 text-center">Best Score</th>
                <th className="py-4 px-6 text-center">Last Completion</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player, index) => (
                <tr key={index} className="bg-gray-300 even:bg-gray-200">
                  <td className="py-4 px-6 text-black font-bold">{index + 1}</td>
                  <td className="py-4 px-6 text-black">{player.name}</td>
                  <td className="py-4 px-6 text-center text-black">{player.totalScore}</td>
                  <td className="py-4 px-6 text-center text-black">{player.completions}</td>
                  <td className="py-4 px-6 text-center text-black">{player.bestScore || "N/A"}</td>
                  <td className="py-4 px-6 text-center text-black">
                    {new Date(player.lastCompletion).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
