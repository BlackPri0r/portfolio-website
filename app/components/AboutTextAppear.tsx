'use client'
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { RevealProps } from "../types/RevealProps";

export default function AboutTextAppear({ children, className }: RevealProps) {
    const ref = useRef(null);

    return (
        <div ref={ref} className="relative">
            <motion.div
                key={children as React.Key}
                className={className}
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                    duration: 1.25,
                    ease: [0.25, 1, 0.5, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
