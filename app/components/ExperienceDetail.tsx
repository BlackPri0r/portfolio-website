import experience from "../data/experience.json";

export default function ExperienceDetail({ active }: ExperienceDetailsProps) {
    const selectedExperience = experience.find(exp => exp.id === active);
    
    return(
        <div className="">
            {selectedExperience?.description}
        </div>
    )
}