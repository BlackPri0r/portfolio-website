import AboutHeader from "./AboutHeader";
import ExperienceDetail from "./ExperienceDetail";
import ExperienceListItem from "./ExperienceListItems";
import experience from "../data/experience.json"
import { useState } from "react";

export default function About() {
    const [active, setActive] = useState("cosmoshop");

    const handleActive = (item: string) => {
        setActive(item)
    }

    return (
        <section className="max-w-6xl w-full pt-36">
            <AboutHeader />
            <div className="flex justify-between">
                <div className="text-white flex flex-col gap-10">
                    {experience.map((experience, key) => 
                        <ExperienceListItem 
                            id={experience.id} 
                            handleActive={handleActive} 
                            key={key} 
                            subtitle={experience.subtitle}
                        >
                            {experience.title}
                        </ExperienceListItem>
                    )}
                </div>  
                <ExperienceDetail active={active}/>
            </div>
        </section>
    );
}
