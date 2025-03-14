import React from "react";
import HeroName from "./HeroName";
import FadeAppear from "./FadeAppear";
import HeroSectioner from "./HeroSectioner";
import HeroBox from "./HeroBox";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <div className="flex gap-10 md:pl-20 items-baseline">
          <HeroName />
          <img src="./souls.gif" className="scale-x-[-1] align-baseline hidden md:block" />
        </div>

        <div className="flex justify-center gap-4 text-2xl">
          <FadeAppear
            delay={1} 
            className="border-2 px-4 py-1"
          >
            Third Year Computer Science @ UoA
          </FadeAppear>
        </div>
      </div>
      
      <HeroSectioner></HeroSectioner>
      <HeroBox></HeroBox>


    </div>
  );
}
