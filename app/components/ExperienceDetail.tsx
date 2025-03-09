import experience from "../data/experience.json";
import { ExperienceDetailsProps } from "../types/ExperienceProps";
import AboutTextAppear from "./AboutTextAppear";
import Reveal from "./RevealText";
import Stack from "./Stack";

export default function ExperienceDetail({ active }: ExperienceDetailsProps) {
    const selectedExperience = experience.find(exp => exp.id === active);

    return (
        <div className="hidden md:flex flex-col justify-between w-full md:max-w-[650px] overflow-y-auto md:overflow-hidden">
            <div className="border border-gray-300/20 p-10 rounded-2xl mb-5 h-full">
                <Reveal className="text-xl">
                    <AboutTextAppear>
                        {selectedExperience?.description}
                    </AboutTextAppear>
                </Reveal>
            </div>
            <Stack />
        </div>
    );
}
