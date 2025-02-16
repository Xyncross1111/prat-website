"use client";

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

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen gap-8 relative"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="landing"
        >

            {/* <motion.div
                key={shakeKey}
                animate={shakeAnimation}
                transition={{ duration: 0.3 }}
                style={{ opacity }}
                onClick={onInteraction}
                className="cursor-pointer"
            >
                
            </motion.div> */}

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
                className="px-8 py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                // animate={{ scale: opacity * 2.2 }}
                whileHover={{ scale: 1.05}}
                whileTap={{ scale: 0.95}}
                onClick={onInteraction}
            >
                #FullPowerमें
            </motion.button>
        </motion.div>
    );
}