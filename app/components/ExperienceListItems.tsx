import Reveal from "./RevealText";

export default function ExperienceListItem({children, subtitle, handleActive, id}: ExperienceListItemProps) {
    return(
        <div className="cursor-pointer" onClick={() => handleActive(id)}>
            <Reveal className="mb-10 p-5 text-2xl border-1 border-white rounded-2xl">
                {children}
                <div className="text-xl">
                    {subtitle}
                </div>
            </Reveal>
        </div>
    )
}