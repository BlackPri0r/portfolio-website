import { ProjectProps } from "../types/ProjectProps";
import Appear from "./Appear";
import Reveal from "./RevealText";

export default function ProjectCard({name, stack, description, repository, liveSite, image}: ProjectProps) {
    return(
        <Appear className=" flex flex-col justify-center items-center">
            <div className="relative rounded-xl w-full h-[290px] bg-black overflow-hidden">
                <img 
                    src={image} 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover "
                />
            </div>

            <div className="my-6 w-full">
                <Reveal className="flex items-center gap-4">
                    <div className="text-2xl font-bold">{name}</div>
                    <div className="flex-grow h-px bg-gray-300"></div>
                    
                    <a href={repository} target="_blank">
                        <img className="invert w-8 h-8" src="./githubicon.svg"></img>
                    </a>
                    <a href={liveSite} target="_blank">
                        <img src="./live.svg" className="invert w-8 h-8"></img>
                    </a>
                </Reveal>
                <div className="flex my-3">
                    <Reveal className="flex gap-5 text-lg">
                        <div>{stack}</div>
                    </Reveal>
                </div>
                <Reveal className="text-lg">
                    {description}
                </Reveal>
            </div>
        </Appear>
    )
}