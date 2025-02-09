'use client'
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

const LETTER_DELAYY = 0.025;
const SWAP_DELAY_IN_MS = 3500;
const ERASE_SPEED = 30;

export default function TypeWriter() {
    const [index, setIndex] = useState(0);
    const items = useRef(["a Third Year CS Student @ UoA", "a Recovering video game addict", "Unemployed D:"]); 
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = items.current[index]; // Access `items` from `useRef`

        if (!isDeleting && text === currentText) {
            setTimeout(() => setIsDeleting(true), SWAP_DELAY_IN_MS);
            return;
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % items.current.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText((prev) =>
                isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
            );
        }, isDeleting ? ERASE_SPEED : LETTER_DELAYY);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]); // Remove `items` from dependencies

    return (
        <div>
            {"I am "}
            {text.split("").map((letter, key) => (
                <span className="relative" key={`${index}-${key}`}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: key * LETTER_DELAYY, duration: 0 }}
                    >
                        {letter}
                    </motion.span>
                    <motion.span
                        className="bg-white right-0 left-[1px] min-w-[2px] absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            delay: key * LETTER_DELAYY,
                            times: [0, 0.1, 1],
                            duration: 0.05,
                        }}
                    />
                </span>
            ))}
        </div>
    );
}
