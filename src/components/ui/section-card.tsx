"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SectionCardProps {
  title: string
  description: string
  image: string
}

const containerVariants = {
  initial: { backgroundColor: "#ffffff" },
  inView: { backgroundColor: "#000000", transition: { duration: 0.3 } },
}

const titleVariants = {
  initial: { color: "#000000" },
  inView: { color: "#f7cde0", transition: { duration: 0.3 } },
}

const descriptionVariants = {
  initial: { color: "#4B5563" }, // Tailwind gray-600
  inView: { color: "#ffffff", transition: { duration: 0.3 } },
}

export function SectionCard({ title, description, image }: SectionCardProps) {
  return (
    <motion.div
      className="w-full rounded-[32px] overflow-hidden transition-colors duration-300 cursor-pointer relative"
      variants={containerVariants}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="p-6 md:p-12 flex flex-col md:flex-row gap-4 md:gap-8 items-start relative z-10">
        <div className="flex-1">
          <motion.h2
            className="text-3xl md:text-[64px] font-black leading-none tracking-tight transition-colors duration-300"
            variants={titleVariants}
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {title}
          </motion.h2>
        </div>
        <div className="flex-1">
          <motion.p
            className="text-base md:text-lg transition-colors duration-300 text-justify"
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
        </div>
      </div>
      <motion.div
        className="relative z-0 mt-4 md:mt-0 md:absolute md:inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="relative w-full h-64 md:h-full overflow-hidden rounded-[24px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rotate-0 md:-rotate-6 transform scale-90 md:scale-110 rounded-[24px]"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}