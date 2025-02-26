import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 text-center text-gray-400 border-t border-gray-800 bg-[#1B2028]">
      <p>© {new Date().getFullYear()} NePazuru. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
