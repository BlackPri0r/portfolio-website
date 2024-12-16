import { SetStateAction, useRef, useState } from "react";
import Reveal from "./RevealText";

export default function Hero() {
  const options = ["Everyone", "Students", "Devs", "Recruiters"];
  const [selectedOption, setSelectedOption] = useState("Everyone");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectOption = (option: SetStateAction<string>) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const message = () => {
    if (selectedOption === 'Everyone'){
      return ("Second Year CS Student @ UOA")
    } else if (selectedOption === 'Students'){
      return ("Test1")
    } else if (selectedOption === 'Devs'){
      return ("Yes1")
    } else if (selectedOption === 'Recruiters'){
      return ("Bruh")
    }
  }

  return (
    <>
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
                  ref={buttonRef}
                  onClick={toggleDropdown}
                  className="text-4xl text-white px-4 border-solid border-2 rounded-full"
                >
                  {selectedOption}
                </button>
              </div>
            </Reveal>
            <Reveal className="text-white bg-none text-4xl font-medium flex">
              {message()}
            </Reveal>
          </div>
        </div>
      </div>
      <div>
        {dropdownOpen && (
            <div
            className="absolute bg-gray-800 rounded-lg shadow-lg z-10"
            style={{
                top: buttonRef.current?.getBoundingClientRect().bottom || 0,
                left: buttonRef.current?.getBoundingClientRect().left || 0,
                width: buttonRef.current?.offsetWidth || "auto",
            }}
            >
            {options.map((option) => (
                <button
                className="block text-left text-white px-4 py-2 hover:bg-gray-600 w-full"
                key={option}
                onClick={() => selectOption(option)}
                >
                {option}
                </button>
            ))}
            </div>
        )}
      </div>
    </>
  );
}
