'use client';

import Hero from "./components/Hero/Hero";
import BackToTopButton from "./components/FreeComponents/BackToTopButton";
import Navbar from "./components/FreeComponents/Navbar";
import Footer from "./components/FreeComponents/Footer";
import ProjectShowcase from "./components/Projects/ProjectShowcase";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BackToTopButton/>
      <div className="*:items-center *:flex *:justify-center ">
        <div id="home" className="h-dvh">
          <Hero />
        </div>

        <div id="projects" className="text-white mb-25">
          <ProjectShowcase></ProjectShowcase>
        </div>
      </div>
      <Footer/>
    </>
  );
}
