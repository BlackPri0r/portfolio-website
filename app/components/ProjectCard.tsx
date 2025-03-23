import { motion } from "framer-motion";
import { ProjectProps } from "../types/ProjectProps";
import Appear from "./Appear";
import Reveal from "./RevealText";

const hoverEffect = {
    hover: { 
        rotate: 2,
        scale: 1.05
    },
};

export default function ProjectCard({name, stack, description, repository, liveSite, image}: ProjectProps) {
    return(
        <Appear className=" flex flex-col justify-center items-center">
            <motion.a 
                className="relative w-full h-[320px] border-b-2 overflow-hidden"
                href={liveSite}
                whileHover="hover"
                target="_blank"
            >
                <motion.img
                    src={image} 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain max-h-[calc(100%-20px)] max-w-[calc(100%-60px)]"
                    variants={hoverEffect}
                />
            </motion.a>

            <div className="my-6 w-full">
                <Reveal className="flex items-center gap-4">
                    <div className="text-2xl font-bold">{name}</div>
                    <div className="flex-grow h-[2px] bg-gray-300"></div>
                    
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
