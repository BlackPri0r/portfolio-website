'use client';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="*:items-center *:flex *:justify-center *:h-dvh">
        <div>
          <Hero />
        </div>

        <div id="about" className="text-white">
          About
        </div>

        <div id="projects" className="text-white">
          Projects
        </div>

        <div id="contact" className="text-white">
          Contact
        </div>
      </div>
    </>
  );
}
