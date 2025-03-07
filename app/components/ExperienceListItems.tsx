import { ExperienceListItemProps } from "../types/ExperienceProps";
import Reveal from "./RevealText";

export default function ExperienceListItem({children, subtitle, handleActive, id}: ExperienceListItemProps) {
    return(
        <div className="cursor-pointer" onClick={() => handleActive(id)}>
            <div className="p-5 text-2xl rounded-2xl border-[0.1px] holographic-card">

                <div className="w-fit">
                    <Reveal>
                        {children}
                    </Reveal>
                </div>


                <div className="text-lg w-fit">
                    <Reveal className="">
                        {subtitle}
                    </Reveal>
                </div>
            </div>
        </div>
    )
}