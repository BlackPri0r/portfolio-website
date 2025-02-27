import Appear from "./Appear";
import Reveal from "./RevealText";

export default function ProjectCard() {
    return(
        <Appear className=" flex flex-col justify-center items-center">
            <div className="rounded-xl w-full h-[260px] bg-black"></div>

            <div className="my-6 w-full">
                <Reveal className="flex items-center gap-5">
                    <div className="text-xl font-bold">Title Here</div>
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <div>Repo</div>
                    <div>Deploy</div>
                </Reveal>
                <div className="flex my-3">
                    <Reveal className="flex gap-5">
                        <div>Stack - Stack</div>
                    </Reveal>
                </div>
                <Reveal>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Reveal>
            </div>
        </Appear>
    )
}