import ProjectCard from "./ProjectCard";
import Reveal from "./RevealText";
import projects from "../data/projects.json"

export default function ProjectShowcase() {
    return(
        <section className="max-w-6xl w-full pt-36">
            <div className="flex items-center gap-10 w-full mb-8">
                <div className="flex-grow h-px bg-gray-300"></div>
                <Reveal className="text-7xl font-bold">Projects</Reveal>
            </div>
            <div className="grid grid-cols-2 content-center gap-10">
                {projects.map((project, key) =>
                    <ProjectCard 
                        key={key}
                        name={project.name}
                        stack={project.stack}
                        description={project.description}
                        repository={project.repository}
                        liveSite={project.liveSite}
                    ></ProjectCard>
                )}
            </div>
        </section>
    )
}