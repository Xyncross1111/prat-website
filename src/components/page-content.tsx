"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Events } from "@/components/events";
import { Stats } from "@/components/statistic";
import { Ticker } from "@/components/ticker";
import { WhatIs } from "@/components/whatIs";
import { Speakers } from "@/components/speakers";
import { Recap } from "@/components/recap";
import { Socials } from "@/components/socials";
import { Footer } from "@/components/footer";
import { Sections } from "@/components/section";
import { Sponsors } from "@/components/sponsors";

export default function PageContent() {
  return (
    <motion.main
      key="content"
      className="min-h-screen relative text-black"
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          // clipPath: "inset(0 0 100% 0)",
          opacity: 0,
        },
        animate: {
          // clipPath: "inset(0 0 0% 0)",
          opacity: 1
        },
      }}
      transition={{
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="fixed inset-0 opacity-30 -z-10 ">
        <Image
          src="/assets/image/bg_test2.jpg"
          fill
          alt="Background"
          className="object-cover bg-blend-color-burn"
        />
      </div>

      <div>
        <div className="bg-gradient-to-b from-[#773c81] via-[#852016] to-[#253f8e] fixed inset-0 -z-20" />
        <Navbar short={false} />
        <Hero />
        <Events />
        <Ticker />
        
        <WhatIs />
        <Stats />
        {/* <Attended /> */}
        <Sponsors />
        <Sections />
        <Speakers />
        <Recap />
        <Socials />
        <Footer />
      </div>
    </motion.main>
  );
}