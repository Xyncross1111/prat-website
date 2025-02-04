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
      <div className="p-12 flex flex-col md:flex-row gap-8 items-start relative z-10">
        <div className="flex-1">
          <h2
            className={`text-[64px] font-black leading-none tracking-tight transition-colors duration-300 ${
              isHovered ? "text-[#67E8F9]" : "text-black"
            }`}
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {title}
          </h2>
        </div>
        <div className="flex-1">
          <p className={`text-lg transition-colors duration-300 ${isHovered ? "text-white" : "text-gray-600"}`}>
            {description}
          </p>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt=""
            layout="fill"
            objectFit="cover"
            className="transform -rotate-6 scale-110"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

