import React from "react";
import HeroName from "./HeroName";

export default function Hero() {
  return (
    <>
    <div className="flex">
      <HeroName/>
      <img src="./souls.gif" className="scale-x-[-1]"></img>
    </div>
    </>
  );
}
