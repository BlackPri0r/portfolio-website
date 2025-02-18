import experience from "../data/experience.json";
import Reveal from "./RevealText";

export default function ExperienceDetail({ active }: ExperienceDetailsProps) {
    const selectedExperience = experience.find(exp => exp.id === active);
    
    return(
        <div className="flex flex-col justify-between max-w-[650px] overflow-y-auto">
            <div className="border-1 boder-white p-10 rounded-2xl">
                <Reveal className="text-xl">
                    {selectedExperience?.description}
                </Reveal>
            </div>
            <div className="border-1 border-white">
                Stack
            </div>
        </div>
    )
}