import Reveal from "./RevealText";

export default function ProjectCard() {
    return(
        <div className="border-1 border-white flex flex-col justify-center items-center">
            <div className="w-full h-[260px] bg-black"></div>

            <div className="my-6 w-full">
                <div className="flex items-center gap-5">
                    <Reveal className="text-xl font-bold">Title Here</Reveal>
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <div>Repo Link</div>
                </div>
                <div>
                    Stack
                </div>
                <div>
                    Text here
                </div>
            </div>
            
        </div>
    )
}