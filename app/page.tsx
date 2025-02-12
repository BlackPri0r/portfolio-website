'use client';
import BackToTopButton from "./components/BackToTopButton";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackToTopButton/>
      <div className="*:items-center *:flex *:justify-center *:h-dvh">
        <div id="home">
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
