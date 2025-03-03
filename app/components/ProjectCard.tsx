import { ProjectProps } from "../types/ProjectProps";
import Appear from "./Appear";
import Reveal from "./RevealText";

export default function ProjectCard({name, stack, description, repository, liveSite}: ProjectProps) {
    return(
        <Appear className=" flex flex-col justify-center items-center">
            <div className="rounded-xl w-full h-[290px] bg-black"></div>

            <div className="my-6 w-full">
                <Reveal className="flex items-center gap-5">
                    <div className="text-2xl font-bold">{name}</div>
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <div>{repository}</div>
                    <div>{liveSite}</div>
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