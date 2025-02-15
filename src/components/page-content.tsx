"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Events } from "@/components/events";
import { Stats } from "@/components/statistic";
import { Ticker } from "@/components/ticker";
import { WhatIs } from "@/components/whatIs";
import { Attended } from "@/components/attended";
import { Speakers } from "@/components/speakers";
import { Recap } from "@/components/recap";
import { Socials } from "@/components/socials";
import { Footer } from "@/components/footer";
import { Sections } from "@/components/section";
import { Sponsors } from "@/components/sponsors";

export function PageContent() {
  return (
    <motion.main
      key="content"
      className="min-h-screen relative text-black"
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          clipPath: "inset(0 0 100% 0)",
        },
        animate: {
          clipPath: "inset(0 0 0% 0)",
        },
      }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="fixed inset-0 -z-10 opacity-10">
        <Image
          src="/assets/image/background.svg"
          fill
          alt="Background"
          className="object-cover"
        />
      </div>

      <div>
        <div className="bg-gradient-to-b from-[#c662d6] via-[#e83625] to-[#3d6cfa] fixed inset-0 -z-20" />
        <Navbar />
        <Hero />
        <Events />
        <Ticker />
        <Stats />
        <WhatIs />
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