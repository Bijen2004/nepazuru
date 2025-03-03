"use client";

export default function Leaderboard() {
    const leaderboardData = [
        { rank: 1, name: "Aavash", score: 220, time: "1:00 min", total: 22223, color: "bg-yellow-500" },
        { rank: 2, name: "Bitisha", score: 200, time: "1:20 min", total: 21400, color: "bg-gray-300" },
        { rank: 3, name: "Saroj", score: 190, time: "1:30 min", total: 21000, color: "bg-orange-500" },
        { rank: 4, name: "Aaniya", score: 165, time: "1:55 min", total: 19223, color: "bg-sky-400" },
        { rank: 5, name: "Bijen", score: 120, time: "2:10 min", total: 15022, color: "bg-sky-400" },
    ];

    return (
        <>
        <div className="bg-[#0a192f]">
            {/* Background Image  */}
            <div className="relative h-48 bg-gradient-to-r from-[#40E0D0]/20 to-[#40E0D0]/10 overflow-hidden">
                <div className="absolute inset-0">
                    <img src="assets/bgimage.png" alt="Leaderboard background img"
                        className="w-full h-full object-cover opacity-9"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 py-12">
                    <h1 className="text-white text-4xl font-bold">Leaderboard</h1>
                    <p className="text-[#40E0D0] mt-2">Top-ranking</p>
                </div>
            </div>

            {/* Leaderboard Table */}
            <div className="container mx-auto px-4 py-6">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#001a25] text-white">
                                <th className="py-4 px-6 text-left w-1/4">Name</th>
                                <th className="py-4 px-6 text-center w-1/4">Score</th>
                                <th className="py-4 px-6 text-center w-1/4">Time</th>
                                <th className="py-4 px-6 text-center w-1/4">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((player, index) => (
                                <tr key={index} className="bg-gray-300 even:bg-gray-200 rounded-lg overflow-hidden">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-7 h-7 rounded-full ${player.color} flex items-center justify-center text-black font-bold border border-gray-700 shadow-md`}
                                            >
                                                {player.rank}
                                            </div>
                                            <span className="text-black font-medium">{player.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-center text-black">{player.score}</td>
                                    <td className="py-4 px-6 text-center text-black">{player.time}</td>
                                    <td className="py-4 px-6 text-center text-black">{player.total.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </>
    );
}
