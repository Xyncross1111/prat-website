"use client";
import { motion } from 'framer-motion'

export const Stats = () => {

  const AnimatedNumber = ({ number, className = '' }: { number: string; className?: string }) => {
    return (
      <motion.h3
        className={`${className} text-4xl md:text-5xl font-bold text-gradient mb-2`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60% 0px -40% 0px" }} // detection point at the middle of the viewport
        transition={{ duration: 0.7 }}
      >
        {number}
      </motion.h3>
    )
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          WORLDS TOP
          <br />
          <span className="text-gradient">CREATORS GATHERING</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { number: "120+", label: "SPEAKERS" },
            { number: "40+", label: "TRAFFIC SOURCES" },
            { number: "160+", label: "ADVERTISERS" },
            { number: "170+", label: "AFFILIATE NETWORKS" },
            { number: "16,209+", label: "ATTENDEES" },
            { number: "10+", label: "CITIES" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <AnimatedNumber number={stat.number} />
              <p className="text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}