"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LandingProps {
    onInteraction: () => void;
    shakeKey: number;
    opacity: number;
}

export function Landing({ onInteraction, shakeKey, opacity }: LandingProps) {
    const shakeAnimation = {
        rotate: [0, -2, 2, -2, 0],
        y: [0, -5, 0],
    };

    const buttonColors = ['#ffffff', '#ffe598', '#ffde52', '#ffa052', '#ff5252', '#ff2121', '#000000'];
    const [colorIndex, setColorIndex] = useState(0);

    const handleButtonClick = () => {
        setColorIndex((prev) => (prev + 1) % buttonColors.length);
        onInteraction();
    };

    return (
        <motion.div
            className="relative flex flex-col items-center justify-center min-h-screen gap-8"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="landing"
        >
            <Image
                src="/assets/image/starsky.webp"
                alt="Starry Sky Background"
                fill
                className="object-cover opacity-50 bg-repeat-y absolute inset-0 z-[-1]"
            />

            <Image
                src="/assets/image/logo.svg"
                alt="Pratishruti Logo"
                width={200 * opacity}
                height={200}
                className="select-none fixed"
                style={{ transform: "translateY(-50px)" }}
            />

            <motion.div
                key={shakeKey}
                animate={shakeAnimation}
                transition={{ duration: 0.3 }}
                style={{ opacity }}
                onClick={onInteraction}
                className="cursor-pointer"
            >
                <Image
                    src="/assets/image/hands.svg"
                    alt="Hands of Fate"
                    width={468}
                    height={500}
                    className="select-none"
                />
            </motion.div>
            <motion.button
                className="px-8 py-4 text-black border font-bold border-black/20 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleButtonClick}
                style={{ backgroundColor: buttonColors[colorIndex] }}
            >
                #FullPowerमें 🦖💥
            </motion.button>
        </motion.div>
    );
}