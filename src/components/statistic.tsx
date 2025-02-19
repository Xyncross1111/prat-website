"use client";
import { motion } from 'framer-motion'
import Image from "next/image";

export const Stats = () => {

  const AnimatedNumber = ({ number, className = '' }: { number: string; className?: string }) => {
    return (
      <motion.h3
        className={`${className} text-4xl md:text-5xl font-bold text-white mb-2 hover:text-white`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60% 0px -40% 0px" }}
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
        viewport={{ once: true, margin: "-60% 0px -40% 0px" }}
        transition={{ duration: 0.7 }}
        src={image}
      />
    )
  }

  const stats = [
    { number: "20+", label: "EVENTS", image: "/assets/image/events_stat.png" },
    { number: "4+", label: "DAYS", image: "/assets/image/days_stat.png" },
    { number: "20+", label: "SPONSORS", image: "/assets/image/sponsors_stat.png" },
    { number: "8000+", label: "ATTENDEES", image: "/assets/image/attendees_stat.png" },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 ">
          PRATISHRUTI &apos;25
          <br />
          <span className="text-white"> IN NUMBERS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-md p-6 rounded-3xl transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:text-white ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
            >
              {/* For even cards add a background image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={index % 2 === 0 ? "/assets/image/stat_background_flip.jpg" : "/assets/image/stat_background.jpg"}
                  alt="card background"
                  fill
                  objectFit="cover"
                  className="rounded-3xl "
                />
              </div>

              <div className="flex items-center justify-between">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <AnimatedNumber number={stat.number} />
                      <p className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</p>
                    </div>
                    <AnimatedImage image={stat.image} />
                  </>
                ) : (
                  <>
                    <AnimatedImage image={stat.image} />
                    <div>
                      <AnimatedNumber number={stat.number} />
                      <p className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</p>
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