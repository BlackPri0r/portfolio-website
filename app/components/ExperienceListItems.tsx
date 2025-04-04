import { ExperienceListItemProps } from "../types/ExperienceProps";
import Reveal from "./RevealText";

export default function ExperienceListItem({ children, subtitle, handleActive, id }: ExperienceListItemProps) {
    return (
        <div 
            className="cursor-pointer flex-grow-0 flex-shrink-0 min-w-[250px]" 
            onClick={() => handleActive(id)}
        >
            <div className="md:p-5 text-2xl  border-2 holographic-card px-8 py-4
                flex flex-col items-center md:items-start"
            >
                <div className="w-fit whitespace-nowrap text-center md:text-left">
                    <Reveal>
                        {children}
                    </Reveal>
                </div>
                <div className="text-lg w-fit whitespace-nowrap text-center md:text-left">
                    <Reveal>
                        {subtitle}
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
