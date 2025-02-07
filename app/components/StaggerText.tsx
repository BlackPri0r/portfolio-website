'use client'

import { motion } from "framer-motion";
import { StaggerTextProps } from "../types/StaggerTextProps";

export default function StaggerText({children, href}: StaggerTextProps){
    return(
        <motion.a 
            initial="initial"
            whileHover="hovered"
            href={href}
            target='_blank'
            className="relative block overflow-hidden uppercase text-2xl mx-2"
        >   
            <div>
                {children.split("").map((l, i) =>{
                    return(
                        <motion.span 
                            className="inline-block"
                            variants={{
                                initial: {y: 0},
                                hovered: {y: "-100%"}
                            }}
                            key={i}
                            transition={{
                                duration: 0.25,
                                delay: 0.025 * i
                            }}
                        >
                            {l}
                        </motion.span>

                    )
                })}
            </div>

            <div className="absolute inset-0">
                {children.split("").map((l, i) =>{
                    return(
                        <motion.span 
                            className="inline-block"
                            variants={{
                                initial: {y: "100%"},
                                hovered: {y: 0},
                            }}
                            transition={{
                                duration: 0.25,
                                delay: 0.025 * i
                            }}
                            key={i}
                        >
                            {l}
                        </motion.span>

                    )
                })}
            </div>

        </motion.a>
    )
}