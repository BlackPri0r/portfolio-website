import { HeroDropDownProps } from "../types/HeroDropDownProps";

export default function HeroDropDown({ dropDownState, options, selectOption }: HeroDropDownProps) {
  return (
    <div>
      {dropDownState && (
        <div className="absolute bg-gray-800 rounded-lg shadow-lg z-10">
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
  );
}
