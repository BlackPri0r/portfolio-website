import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import SlidingTabs from "./SlidingTabs";
import { useState, useEffect } from "react";
import StaggerText from "./StaggerText";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isFirstRender, setFirstRender] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (typeof previous === "number" && latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 980);
        
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <motion.nav 
            className="flex mx-auto justify-between items-center fixed w-full z-10 backdrop-blur-xl"
            initial="hidden"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{
                duration: isFirstRender ? 0.5 : 0.2,
                ease: isFirstRender ? [0.5, 1, 0.89, 1] : "easeInOut",
                delay: isFirstRender ? 1 : 0,
            }}
            onAnimationComplete={() => setFirstRender(false)}
        >   
            <div className="flex flex-1 mr-8"></div>

            <div className="flex justify-center flex-1">
                <SlidingTabs />
            </div>
            
            <div className="text-white flex flex-1 justify-end mr-8">
                {isMobile ? (
                    <>
                        <a href="https://github.com/BlackPri0r" className="w-8 h-8">
                            <img src="/githubicon.svg" className="invert" alt="GitHub Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/lawrence-li-7bb116279/" className="ml-4">
                            <img src="/linkedin.svg" className="w-8 h-8" alt="LinkedIn Icon" />
                        </a>
                    </>
                ) : (
                    <>
                        <StaggerText href="https://github.com/BlackPri0r">Github</StaggerText>
                        <StaggerText href="https://www.linkedin.com/in/lawrence-li-7bb116279/">LinkedIn</StaggerText>
                    </>
                )}
            </div>
        </motion.nav>
    );
}
