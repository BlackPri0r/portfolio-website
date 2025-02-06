import React, { useState } from "react";
import Tab from "./Tab";
import SlidingTabsCursor from "./SlidingTabCursor";

export default function SlidingTabs() {
    const items = ["Home", "About", "Projects", "Contact"]
    const [position, setPosition] = useState({
        left: 4,
        width: 88,
        opacity: 1,
    });

    return(
        <ul className="relative mx-auto flex w-fit rounded-full border-2 border-white p-1 my-5">
            {items.map((item, key) => {
                return(
                    <Tab setPosition={setPosition} key={key}>{item}</Tab>
                )
            })}
            <SlidingTabsCursor position={position}/>
        </ul>
    )
}