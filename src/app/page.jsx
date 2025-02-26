import Banner from "@/components/banner";
import Categories from "@/components/categories";
import PuzzleGallery from "@/components/gallery";
import Navbar from "@/components/navbar";
import React from "react";


export default function JigsawGallery() {
  return (
    <div className="bg-[#0a192f] min-h-screen text-white">
     <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <PuzzleGallery></PuzzleGallery>
    </div>
  );
}
