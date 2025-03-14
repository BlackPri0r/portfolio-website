import Reveal from "./RevealText";

export default function AboutHeader() {
    return (
        <div className="flex items-center gap-10 w-full mb-8">
            <Reveal className="text-7xl font-bold">About</Reveal>
            <div className="flex-grow h-[2px] bg-gray-300"></div>
        </div>
    );
}
