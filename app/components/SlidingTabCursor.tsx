import { motion } from "framer-motion";
import { SlidingTabCursorProps } from "../types/TabProps";

export default function SlidingTabsCursor({position}: SlidingTabCursorProps) {
    return(
        <motion.li 
        animate={
            position
        }
        transition={{
            duration: 1.25,
            ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier animation
        }}
        className="absolute z-0 h-7 rounded-full w-22 bg-white md:h-12"/>
    )
}