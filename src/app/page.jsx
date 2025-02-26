import React from "react";
import Navbar from "../components/Navbar";
import CongratulationBox from "@/components/CongratulationBox";

const page = () => {
  return (
    <div className="bg-[#072533] w-screen h-screen">
      <Navbar />
      <div className="flex flex-col fixed items-center justify-center w-screen h-screen">
        <CongratulationBox />
      </div>
    </div>
  );
};

export default page;
