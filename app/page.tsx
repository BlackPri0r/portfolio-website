'use client';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <Hero />
        </div>

        <div className="text-white">
          About
        </div>

        <div className="text-white">
          Projects
        </div>

        <div className="text-white">
          Contact
        </div>
      </div>
    </>
  );
}
