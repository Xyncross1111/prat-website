"use client";
import { motion } from 'framer-motion'

export const Stats = () => {

  const AnimatedNumber = ({ number, className = '' }: { number: string; className?: string }) => {
    return (
      <motion.h3
        className={`${className} text-4xl md:text-5xl font-bold text-[#954ba4] mb-2 hover:text-white`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60% 0px -40% 0px" }} // detection point at the middle of the viewport
        transition={{ duration: 0.7 }}
      >
        {number}
      </motion.h3>
    )
  }

  const AnimatedImage = ({ image, className = '' }: { image: string; className?: string }) => {
    return (
      <motion.img
        className={`${className} w-16 h-16`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60% 0px -40% 0px" }} // detection point at the middle of the viewport
        transition={{ duration: 0.7 }}
        src={image}
      />
    )
  }

  const stats = [
    { number: "20+", label: "EVENTS", image: "/assets/image/sponsors_stat.svg" },
    { number: "4+", label: "DAYS", image: "/assets/image/sponsors_stat.svg" },
    { number: "20+", label: "SPONSORS", image: "/assets/image/sponsors_stat.svg" },
    { number: "8000+", label: "ATTENDEES", image: "/assets/image/sponsors_stat.svg" },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          IN
          <br />
          <span className="text-white">NUMBERS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-[#f5f5f5] backdrop-blur-md p-6 rounded-3xl transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:text-white ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            >
              <div className="flex items-center justify-between">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <AnimatedNumber number={stat.number} />
                      <p className="text-sm text-red-600 uppercase tracking-wider">{stat.label}</p>
                    </div>
                    <AnimatedImage image={stat.image} />
                  </>
                ) : (
                  <>
                    <AnimatedImage image={stat.image} />
                    <div>
                      <AnimatedNumber number={stat.number} />
                      <p className="text-sm text-red-600 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}