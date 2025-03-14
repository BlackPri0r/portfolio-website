import Reveal from "./RevealText";
import StackBlock from "./StackBlock";

export default function Stack() {
    const items = ["NextJS", "React", "Javascript", "Typescript", "Framer-motion", "TailwindCSS", "Git", "Java", "Prisma", "Drizzle", "Python", "NodeJS", "HTML", "CSS", "SQLite", "Postgres", "Figma", ]

    return(
        <div className="flex flex-col gap-5 ">
            <div className="w-full flex items-center gap-8">
                <div className="flex-grow h-px bg-gray-300"></div>
                <Reveal className="text-4xl text-bold">
                    Tools and Skills
                </Reveal>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <Reveal className="flex flex-wrap gap-4 ">
                {items.map((value, key) => 
                    <StackBlock key={key}>{value}</StackBlock>
                )}
            </Reveal>
        </div>
    )
}