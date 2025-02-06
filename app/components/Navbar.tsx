import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import SlidingTabs from "./SlidingTabs";
import { useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (typeof previous === "number" && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return(
        <motion.nav 
            className="flex mx-auto justify-center items-center fixed w-full"
            variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
            }}
            animate={hidden ? "hidden": "visible"}
            transition={{duration: 0.2, ease: "easeInOut"}}
        >
            <SlidingTabs></SlidingTabs>
        </motion.nav>
    )
}