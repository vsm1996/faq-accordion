"use client";

import Image from "next/image";

import { useIsMobile } from "@/hooks/isMobile";

import BgDesk from "@/public/images/background-pattern-desktop.svg";
import BgMob from "@/public/images/background-pattern-mobile.svg";

const BG = () => {
  const isMobile = useIsMobile();
  return (
    <div className="absolute inset-0 -z-10">
      {/* Solid background color */}
      <div className="absolute inset-0 bg-purple-100" />

      {/* Pattern overlay */}
      <div className="absolute inset-x-0 top-0 h-[50vh] md:h-[60vh]">
        <Image
          src={isMobile ? BgMob : BgDesk}
          alt=""
          fill
          priority
          className="object-contain object-top"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default BG;
