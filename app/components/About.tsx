import AboutHeader from "./AboutHeader";
import ExperienceDetail from "./ExperienceDetail";
import ExperienceList from "./ExperienceList";

export default function About() {
    return (
        <section className="max-w-6xl w-full pt-36">
            <AboutHeader />
            <div className="flex">
                <ExperienceList></ExperienceList>
                <ExperienceDetail></ExperienceDetail>
            </div>
        </section>
    );
}
