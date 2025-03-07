'use client';
import BackToTopButton from "./components/BackToTopButton";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectShowcase from "./components/ProjectShowcase";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackToTopButton/>
      <div className="*:items-center *:flex *:justify-center ">
        <div id="home" className="h-dvh">
          <Hero />
        </div>

        <div id="about" className="text-white mb-30">
          <About></About>
        </div>

        <div id="projects" className="text-white mb-25">
          <ProjectShowcase></ProjectShowcase>
        </div>

        <div id="contact" className="text-white mb-35">
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}
