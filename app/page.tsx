'use client';
import BackToTopButton from "./components/BackToTopButton";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectShowcase from "./components/ProjectShowcase";

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

        <div id="projects" className="text-white">
          <ProjectShowcase></ProjectShowcase>
        </div>

        <div id="contact" className="text-white h-dvh">
          Contact
        </div>
      </div>
    </>
  );
}
