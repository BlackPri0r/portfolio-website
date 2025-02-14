import experience from '../data/experience.json';
import ExperienceListItem from './ExperienceListItems';

export default function ExperienceList() {
    return(
        <div className="text-white">
            {experience.map((experience, key) => 
                <ExperienceListItem key={key}>{experience.title}</ExperienceListItem>
            )}
        </div>
    )
}
