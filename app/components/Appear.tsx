'use client'
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {RevealProps} from "../types/RevealProps";

export default function Appear({ children, className }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect (() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    })


    return (
        <div ref={ref} className="overflow-hidden relative">
            <motion.div
                className={className}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.1
                }}
                initial="hidden"
                animate={mainControls}

            >
                {children}
            </motion.div>
        </div>
    );
}