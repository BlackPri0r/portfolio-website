'use client'
import { easeInOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const LETTER_DELAYY = 0.025;
const SWAP_DELAY_IN_MS = 3500;

export default function TypeWrtier(){
    const [index, setIndex] = useState(0)
    const items = ["a Third Year CS Student @ UoA", "a Recovering video game addict", "Unemployed D:"]

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setIndex((pv) => (pv + 1) % items.length);
        }, SWAP_DELAY_IN_MS)

        return () => clearInterval(intervalId)
    }, [])

    return(
        <>
            <div>
                {"I am "}
                {items[index].split("").map((letter, key) => {
                    return(
                        <span className="relative" key={`${index}-${key}`}>
                            <motion.span
                            initial={{
                                opacity:0,
                            }}
                            animate={{
                                opacity:1,
                            }}
                            transition={{
                                delay: key * LETTER_DELAYY,
                                duration: 0,
                            }}
                            >
                                {letter}
                            </motion.span>
                            <motion.span className="bg-white right-0 left-[1px] min-w-[2px] absolute inset-0"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    delay: key * LETTER_DELAYY,
                                    times: [0, 0.1, 1],
                                    duration: 0.05,
                                }}
                            >
                            </motion.span>
                        </span>
                    )
                })}
                <motion.span
                    className="bg-white right-0 left-[1px] min-w-[4px] inset-0 ml-1"
                    animate={{
                        opacity: [1, 1, 0, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "steps(1, end)"
                    }}
                >
                    |
                </motion.span>

            </div>
        </>
    )
}