'use client';
import CustomCursor from "./components/CustomCursor";
import IconCloud from "./components/DynamicIconCloud";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="*:items-center *:flex *:justify-center *:h-dvh">
        <div>
            <Hero/>
        </div>

        <div className="text-white">
          About
        </div>

        <div className="text-white">
          Projects
        </div>

        <div className="text-white">
          contact
        </div>
        
      </div>
    </>
  );
}
``