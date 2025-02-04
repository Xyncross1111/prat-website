"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface SectionCardProps {
  title: string
  description: string
  image: string
}

export function SectionCard({ title, description, image }: SectionCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="w-full rounded-[32px] overflow-hidden bg-white hover:bg-black transition-colors duration-300 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
    >
      <div className="p-6 md:p-12 flex flex-col md:flex-row gap-4 md:gap-8 items-start relative z-10">
        <div className="flex-1">
          <h2
            className={`text-3xl md:text-[64px] font-black leading-none tracking-tight transition-colors duration-300 ${isHovered ? "text-[#67E8F9]" : "text-black"
              }`}
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {title}
          </h2>
        </div>
        <div className="flex-1">
          <p
            className={`text-base md:text-lg transition-colors duration-300 ${isHovered ? "text-white" : "text-gray-600"
              }`}
          >
            {description}
          </p>
        </div>
      </div>
      <motion.div
        className="relative z-0 mt-4 md:mt-0 md:absolute md:inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-64 md:h-full overflow-hidden rounded-[24px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt=""
              layout="fill"
              objectFit="contain"
              className="rotate-0 md:-rotate-6 transform scale-90 md:scale-110 rounded-[24px]"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}