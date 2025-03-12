import React, { useEffect, useRef } from "react";
import { TabProps } from "../types/TabProps";
import { useLenisUtils } from "../context/LenisScroll";

export default function Tab({children, setPosition, scrollItem, isActive}: TabProps){
    const ref = useRef<null | HTMLLIElement>(null);
    const { handleScrollTo } = useLenisUtils();
    
    useEffect(() => {
        if (isActive && ref.current) {
            const { width } = ref.current.getBoundingClientRect();
            setPosition({
                width,
                opacity: 1,
                left: ref.current.offsetLeft,
            });
        }
    }, [isActive, setPosition]);

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
                handleScrollTo(scrollItem)

            }}
            className="relative z-10 block cursor-pointer uppercase text-xl text-white mix-blend-difference px-5 py-1 select-none"
        >
            {children}
        </li>
    )
}