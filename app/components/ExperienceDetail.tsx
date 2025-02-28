import experience from "../data/experience.json";
import { ExperienceDetailsProps } from "../types/ExperienceProps";
import AboutTextAppear from "./AboutTextAppear";
import Reveal from "./RevealText";
import Stack from "./Stack";

export default function ExperienceDetail({ active }: ExperienceDetailsProps) {
    const selectedExperience = experience.find(exp => exp.id === active);
    
    return(
        <div className="flex flex-col justify-between max-w-[650px] overflow-y-auto">
            <div className="border-1 boder-white p-10 rounded-2xl h-full mb-5">
                <Reveal className="text-xl">
                    <AboutTextAppear>
                        {selectedExperience?.description}
                    </AboutTextAppear>
                </Reveal>
            </div>
            <Stack/>
        </div>
    )
}