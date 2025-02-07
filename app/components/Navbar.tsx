import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import SlidingTabs from "./SlidingTabs";
import { useState } from "react";
import StaggerText from "./StaggerText";

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
            className="flex mx-auto justify-between items-center fixed w-full "
            variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
            }}
            animate={hidden ? "hidden": "visible"}
            transition={{duration: 0.2, ease: "easeInOut"}}
        >
            <SlidingTabs></SlidingTabs>
            
            <div className="text-white flex justify-between mr-8">
                <StaggerText href="https://github.com/BlackPri0r">Github</StaggerText>
                <StaggerText href="https://www.linkedin.com/in/lawrence-li-7bb116279/">LinkedIn</StaggerText>
            </div>
        </motion.nav>
    )
}