import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import SlidingTabsCursor from "./SlidingTabCursor";

export default function SlidingTabs() {
    const items = ["Home", "About", "Projects", "Contact"];
    const scrollTo = ["#home", "#about", "#projects", "#contact"]
    const [activeIndex, setActiveIndex] = useState(0);
    const [position, setPosition] = useState({
        left: 4,
        width: 88,
        opacity: 1,
    });

    useEffect(() => {
        const handleScroll = () => {
            const sectionOffsets = scrollTo
                .map((selector: string | number, index: number) => {
                    if (typeof selector === "string") {
                        const section = document.querySelector<HTMLElement>(selector);
                        return section ? { index, offset: section.getBoundingClientRect().top } : null;
                    }
                    return null;
                })
                .filter((section): section is { index: number; offset: number } => section !== null);
    
            if (sectionOffsets.length === 0) return;
    
            const closestSection = sectionOffsets.reduce((closest, section) => {
                return Math.abs(section.offset) < Math.abs(closest.offset) ? section : closest;
            }, sectionOffsets[0]);
    
            if (closestSection && closestSection.index !== activeIndex) {
                setActiveIndex(closestSection.index);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeIndex, scrollTo]);
    

    return (
        <ul className="relative mx-auto flex rounded-full border-2 border-white p-1 my-5 z-10">
            {items.map((item, key) => (
                <Tab 
                    setPosition={setPosition} 
                    key={key} 
                    scrollItem={scrollTo[key]} 
                    isActive={activeIndex === key}
                >
                    {item}
            </Tab>
            ))}
            <SlidingTabsCursor position={position}/>
        </ul>
    );
}
