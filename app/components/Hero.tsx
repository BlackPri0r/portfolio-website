import { useState } from "react";
import HeroName from "./HeroName";
import HeroDropDown from "./HeroDropDown";

export default function Hero() {
  const options = ["Everyone", "Students", "Devs", "Recruiters"];
  const [selectedOption, setSelectedOption] = useState("Everyone");
  const [dropDownState, setDropDownState] = useState(false);

  const toggleDropdown = () => {
    setDropDownState((prev) => !prev);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setDropDownState(false);
  };

  const message = () => {
    if (selectedOption === "Everyone") {
      return "Second Year CS Student @ UOA";
    } else if (selectedOption === "Students") {
      return "Test1";
    } else if (selectedOption === "Devs") {
      return "Yes1";
    } else if (selectedOption === "Recruiters") {
      return "Bruh";
    }
    return "";
  };

  return (
    <>
      <HeroName
        selectedOption={selectedOption}
        message={message()}
        toggleDropdown={toggleDropdown}
      />
      <HeroDropDown 
        dropDownState={dropDownState} 
        options={options} 
        selectOption={selectOption}
      />
    </>
  );
}
