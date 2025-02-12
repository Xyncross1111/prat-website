import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Events } from "@/components/events"
import { Stats } from "@/components/statistic"
import { Ticker, TickerSponsor } from "@/components/ticker"
import { WhatIs } from "@/components/whatIs"
import { Attended } from "@/components/attended"
import { Topics } from "@/components/topics"
import { Feature } from "@/components/feature"
import { Speakers } from "@/components/speakers"
import { Recap } from "@/components/recap"
import { Meet } from "@/components/meet"
import { Socials } from "@/components/socials"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Sections } from "@/components/section";
import Image from "next/image";

// bg-gradient-to-b from-[#984ca4] via-[#f04c3c] to-[#a0ccfc]
export default function Home() {

  return (
    <main className="min-h-screen relative text-black">
      <div className="fixed inset-0 -z-10 opacity-20">
        <Image
          src="/assets/image/background.png"
          fill
          alt="Background"
          className="object-cover"
        />
      </div>
      {/* className="bg-gradient-to-b from-[#984ca4] via-[#f04c3c] to-[#a0ccfc] */}

      <div>
      <div className="bg-gradient-to-b from-[#984ca4] via-[#f04c3c] to-[#a0ccfc] fixed inset-0 -z-20" ></div>
        <Navbar />

        <Hero />

        <Events />

        <Ticker />

        <Stats />

        <WhatIs />

        {/* <TickerSponsor /> */}

        <Attended />

        {/* <Topics /> */}

        <Sections />

        {/* <Feature /> */}

        <Speakers />

        <Recap />
        <Socials />

      </div>


      {/* <Meet /> */}


      {/* <CTA /> */}

      <Footer />
    </main>
  )
}

