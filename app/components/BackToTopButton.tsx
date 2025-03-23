'use client'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { useLenisUtils } from "../context/LenisScroll"
import Image from 'next/image'



export default function BackToTopButton() {
    const {handleScrollTo} = useLenisUtils()
    const {scrollY} = useScroll()
    const [hidden, setHidden] = useState(true)
    

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    });

    return(
        <motion.button 
            className="text-white fixed z-20 bottom-6 md:right-8 cursor-pointer right-4 hidden md:block"
            initial={{
                opacity: 0, 
                y: "initial"
            }}
            variants={{
                visible: {opacity: 1},
                hidden: {opacity: 0}
            }}
            animate={hidden ? "hidden": "visible"}
            onClick={() => handleScrollTo("#home")}
            whileHover="hovered"
        >
            <motion.div
                initial={{y: 0}}
                variants={{
                    initial: { y: 0 },
                    hovered: {
                        y: ["0%", "-15%"],
                        transition: {
                            duration: 0.25,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: [0, 0.55, 0.45, 1],
                        },
                    },
                }}
            >
                <Image width={64} height={64} src="./up-arrow.svg" alt="Back to top button" />
            </motion.div>
        </motion.button>
    )
}