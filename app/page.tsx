'use client';
import Reveal from "./components/RevealText";
import CustomCursor from "./components/CustomCursor";
import IconCloud from "./components/DynamicIconCloud";
import { SetStateAction, useState, useRef } from "react";
import Hero from "./components/Hero";

export default function Home() {
  const options = ["Everyone", "Students", "Devs", "Recruiters"];
  const [selectedOption, setSelectedOption] = useState("Everyone");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option: SetStateAction<string>) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="*:h-dvh *:w-full *:justify-center *:flex">
        <Hero></Hero>
      </div>
    </div>
  );
}
