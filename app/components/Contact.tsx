import ProjectCard from "./ProjectCard";
import Reveal from "./RevealText";

export default function Contact() {
    return(
        <section className="max-w-6xl w-full pt-36">
            <div className="flex items-center gap-10 w-full mb-8">
                <div className="flex-grow h-px bg-gray-300"></div>
                <Reveal className="text-7xl font-bold">Contact</Reveal>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-2 content-center gap-10">
                Contact stuff
            </div>
        </section>
    )
}