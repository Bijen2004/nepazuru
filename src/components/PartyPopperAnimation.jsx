"use client";

import dynamic from "next/dynamic";
import PartyPopper from "../../public/assets/PartyPoppers.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const PartyPopperAnimation = ({ direction }) => {
  return (
    <div
      className={`absolute top-0 ${
        direction === "left" ? "left-0" : "right-0 transform scale-x-[-1]"
      } w-[500px]`}
    >
      <Lottie animationData={PartyPopper} loop={false} />
    </div>
  );
};

export default PartyPopperAnimation;
