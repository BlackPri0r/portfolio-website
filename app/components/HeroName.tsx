import { HeroNameProps } from "../types/HeroNameProps";
import Reveal from "./RevealText";

export default function HeroName({ selectedOption, message, toggleDropdown }: HeroNameProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-start">
        <Reveal className="text-white bg-none text-left text-[12rem] leading-none -mx-2 -my-4">
          Lawrence Li
        </Reveal>
        <div className="flex flex-row gap-4">
          <Reveal>
            <div className="relative flex gap-1">
              <span className="text-4xl text-white">For:</span>
              <button
                onClick={toggleDropdown}
                className="text-4xl text-white px-4 border-solid border-2 rounded-full"
              >
                {selectedOption}
              </button>
            </div>
          </Reveal>
          <Reveal className="text-white bg-none text-4xl font-medium flex">
            {message}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
