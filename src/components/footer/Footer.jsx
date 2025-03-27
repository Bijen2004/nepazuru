import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full p-4 text-center text-gray-400 border-t border-gray-800 bg-[#1B2028]">
      <p>© {new Date().getFullYear()} NePazuru. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
