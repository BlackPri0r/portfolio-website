import Reveal from "./RevealText";
import StackBlock from "./StackBlock";

export default function Stack() {
    const items = ["NextJS", "React", "Javascript", "Typescript", "Framer-motion", "TailwindCSS", "Git", "Java", "Prisma", "Drizzle", "Python", "NodeJS", "HTML", "CSS", "SQLite", "Postgres", "Figma"]

    return(
        <>
            <div className="w-full flex items-center gap-8">
                <div className="flex-grow h-px bg-gray-300"></div>
                <Reveal className="text-4xl text-bold">
                    Stack
                </Reveal>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <div className="flex flex-wrap gap-5">
                {items.map((value, key) => 
                    <StackBlock key={key}>{value}</StackBlock>
                )}
            </div>
        </>
    )
}