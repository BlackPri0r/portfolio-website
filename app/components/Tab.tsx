import React, { useRef } from "react";
import { TabProps } from "../types/TabProps";

export default function Tab({children, setPosition}: TabProps){
    const ref = useRef<null | HTMLLIElement>(null);
    return(
        <li 
            ref={ref}
            onClick={()=>{
                if (!ref.current) return;
                const {width} = ref.current.getBoundingClientRect();
                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                });

            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    )
}