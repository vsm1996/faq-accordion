import Image from "next/image";

import BgDesk from "@/public/images/background-pattern-desktop.svg";
import BgMob from "@/public/images/background-pattern-mobile.svg";

import Accordion from "@/components/accordion";

export default function Home() {
  return (
    <main className="z-0 relative bg-purple-100 flex flex-col items-center justify-center min-h-screen p-200 font-[family-name:var(--font-work-sans)]">
      <div
        aria-hidden
        className="absolute top-0 left-0 -z-1 aspect-16/9 w-full"
      >
        <Image
          src={BgMob}
          alt="background pattern"
          className=" object-cover w-full h-full "
        />
      </div>
      <Accordion />
    </main>
  );
}
