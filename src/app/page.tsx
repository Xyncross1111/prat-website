import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Events } from "@/components/events"
import { Stats } from "@/components/statistic"
import { Ticker } from "@/components/ticker"
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

export default function Home() {

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Events />

      <Stats />

      <Ticker />

      <WhatIs />

      <Attended />

      <Topics />

      <Feature />

      <Speakers />

      <Recap />

      <Meet />

      <Socials />

      <CTA />

      <Footer />
    </main>
  )
}

