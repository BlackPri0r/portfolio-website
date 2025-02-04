import { HeroNameProps } from "../types/HeroNameProps";
import Reveal from "./RevealText";
import TypeWrtier from "./TypeWriter";

export default function HeroName() {
  return (
    <div>
      <div className="flex flex-col justify-center items-start">
        <Reveal className="text-white bg-none text-left text-[12rem] leading-none -mx-2 -my-4">
          Lawrence Li
        </Reveal>
        <div className="flex flex-row gap-4">
          <Reveal className="text-white bg-none text-4xl font-medium flex">
            <TypeWrtier/>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
