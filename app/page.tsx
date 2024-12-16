'use client';
import Reveal from "./components/RevealText";
import CustomCursor from "./components/CustomCursor";
import IconCloud from "./components/DynamicIconCloud";
import { SetStateAction, useState, useRef } from "react";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <div className="*:h-dvh *:w-full *:justify-center *:flex">
        <Hero></Hero>
      </div>
    </div>
  );
}
