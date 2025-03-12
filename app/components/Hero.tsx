import React from "react";
import HeroName from "./HeroName";
import FadeAppear from "./FadeAppear";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10 pl-20 items-baseline">
        <HeroName />
        <img src="./souls.gif" className="scale-x-[-1] align-baseline" />
      </div>

      <div className="flex justify-center gap-4 text-2xl">
        <FadeAppear className="border-2 px-4 py-1">
          Third Year Computer Science @ UoA
        </FadeAppear>
      </div>
    </div>
  );
}
