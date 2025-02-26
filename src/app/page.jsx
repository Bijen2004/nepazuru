"use client";
import React, { useState } from "react";

import Header from "@/components/header/Header";
import UploadZone from "@/components/upload/UploadZone";
import Tabs from "@/components/tabs/Tab";
import Footer from "@/components/footer/Footer";
import BrandTitle from "@/components/hero/BrandTitle";


const HomePage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="min-h-screen  bg-[#1B2028]">
      <Header />

      <main className="max-w-7xl  mx-auto px-4 pt-8 md:pt-12">
        <BrandTitle/>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex justify-center mb-8 md:mb-12">
          <button className="bg-[#4CD7E7] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
            Browse Puzzle Gallery
          </button>
        </div>

        {activeTab === "create" && <UploadZone onFileSelect={setSelectedFile} />}
        {activeTab === "rooms" && <div className="text-center text-white">Rooms feature coming soon...</div>}
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;