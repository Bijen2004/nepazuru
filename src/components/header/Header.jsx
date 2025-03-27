import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="p-4 border-b border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={110} height={60} className="rounded-full" />
        </div>

        {/* Centered Navigation */}
        <nav className="flex-grow flex justify-center items-center gap-8">
          <a href="#" className="text-white hover:text-[#4CD7E7] transition-colors">Game</a>
          <a href="#" className="text-white hover:text-[#4CD7E7] transition-colors">Leaderboard</a>
          <a href="#" className="text-white hover:text-[#4CD7E7] transition-colors">Story</a>
          <a href="#" className="text-white hover:text-[#4CD7E7] transition-colors">Gallery</a>
        </nav>

        {/* User Icon */}
        <div className="flex-shrink-0">
          <User className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
