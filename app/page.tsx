'use client';
import { Cloud } from "react-icon-cloud";
import BackToTopButton from "./components/BackToTopButton";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackToTopButton/>
      <div className="*:items-center *:flex *:justify-center ">
        <div id="home" className="h-dvh">
          <Hero />
        </div>

        <div id="about" className="text-white">
          <About></About>
        </div>

        <div id="projects" className="text-white h-dvh">
          Projects
        </div>

        <div id="contact" className="text-white h-dvh">
          Contact
        </div>
      </div>
    </>
  );
}
