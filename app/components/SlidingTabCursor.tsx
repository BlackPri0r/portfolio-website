import { motion } from "framer-motion";
import { SlidingTabCursorProps } from "../types/TabProps";

export default function SlidingTabsCursor({position}: SlidingTabCursorProps) {
    return(
        <motion.li 
        animate={position}
        className="absolute z-0 h-7 rounded-full w-22 bg-white md:h-12"/>
    )
}