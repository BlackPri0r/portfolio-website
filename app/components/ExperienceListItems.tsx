import Reveal from "./RevealText";

export default function ExperienceListItem({children, subtitle, handleActive, id}: ExperienceListItemProps) {
    return(
        <div className="cursor-pointer" onClick={() => handleActive(id)}>
            <div className="p-5 text-2xl border-1 border-white rounded-2xl">

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