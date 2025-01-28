import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { MapPin, Users, Building, Star, Tv, Share2, ChevronRight } from "lucide-react"
import { PlayButton } from "@/components/play-button"
import { SpeakerCard } from "@/components/speaker-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { SocialPost } from "@/components/social-post"
import { Footer } from "@/components/footer"
import { TopicCard } from "@/components/topic-card"
import { AttendeeCard } from "@/components/attendee-card"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"

export default function Home() {
  const events = [
    {
      city: "JAKARTA",
      country: "INDONESIA",
      location: "Museum di tengah",
      date: "15 March 2024",
      image: "/public/placeholder-logo.png",
    },
    {
      city: "LONDON",
      country: "UK",
      location: "Greenwich hotel & tower bridge",
      date: "18 June 2024",
      image: "/public/placeholder-logo.png",
    },
    {
      city: "NEW YORK",
      country: "USA",
      location: "Plaza, NY",
      date: "21 June 2024",
      image: "/public/placeholder-logo.png",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      {/* Events Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Upcoming Events</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-6">
              {events.map((event) => (
                <Card
                  key={event.city}
                  className="w-[350px] bg-zinc-900/50 backdrop-blur-md text-white p-6 rounded-3xl transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <Image src={event.image || "/placeholder.svg"} alt={event.city} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold">{event.city}</h3>
                      <p className="text-sm text-gray-300">{event.country}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-lg font-semibold">{event.date}</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                      BOOK NOW <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
            WORLDS TOP
            <br />
            <span className="text-gradient">CREATORS GATHERING</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</h3>
                <p className="text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden py-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4 text-lg font-semibold">• TOKYO</span>
          <span className="mx-4 text-lg font-semibold">• MONGOLIA</span>
          <span className="mx-4 text-lg font-semibold">• LOS ANGELES</span>
          <span className="mx-4 text-lg font-semibold">• BANGALORE</span>
          <span className="mx-4 text-lg font-semibold">• SINGAPORE</span>
          <span className="mx-4 text-lg font-semibold">• TOKYO</span>
          <span className="mx-4 text-lg font-semibold">• MONGOLIA</span>
          <span className="mx-4 text-lg font-semibold">• LOS ANGELES</span>
        </div>
      </div>

      {/* What is NAS Summit Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
            WHAT IS
            <br />
            <span className="text-gradient">NAS SUMMIT?</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Nas Summit is a global gathering of creators and entrepreneurs. It is the ultimate place to find your
              passion, your next partner, a brand deal, or at least 10 friends. Experts will take the stage and present
              their knowledge, experiences and strategies only for you to be the next biggest creator in your country.
            </p>
            <p>
              Nas Summit Asia is going to be our last biggest event of the year, and we are bringing the top creators
              from Singapore, Malaysia, Thailand, Indonesia, Philippines and many other countries for 2 full days on the
              7th and 8th of December, to 2023 Suntec City, Singapore.
            </p>
            <p className="font-semibold">See you there!</p>
          </div>
        </div>
      </section>

      {/* Attended Companies */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-3xl font-bold mb-12 text-center">ATTENDED COMPANIES</h3>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-24 h-24 bg-zinc-900/50 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <Image src="/placeholder.svg" alt="Company logo" width={48} height={48} className="opacity-50" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            EXPLORE OUR <span className="text-gradient">TOPICS</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <TopicCard
              title="CONTENT CREATION"
              description="Understanding Your Audience, Content Strategy, Storytelling, Copywriting, Video, Sharing Secrets of Viral Posts, Building Your Personal Brand"
              image="/public/placeholder-logo.png"
            />
            <TopicCard
              title="STARTUPS & BRANDS"
              description="Building a Brand, Scalability, Marketing Strategy, Time Management, Post Templates, Company Values, Community Building & Collaboration"
            />
            <TopicCard
              title="TRADITIONAL MEDIA & TV"
              description="Does Traditional media still exist? We will talk about the future of Media, TV, Broadcasting, and the news industry"
            />
            <TopicCard
              title="NETWORKING & ACTIVATIONS"
              description="Nas Summit brings the most interesting people together under one roof. This is your chance to network, create your next content piece, and collaborate with other creators. We promise you a fun-filled meet and a memorable experience."
            />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "LEARN",
                image:
                  "/public/placeholder-logo.png",
              },
              {
                title: "NETWORK",
                image:
                  "/public/placeholder-logo.png",
              },
              {
                title: "2023 RECAP",
                image:
                  "/public/placeholder-logo.png",
              },
              {
                title: "REVIEWS",
                image:
                  "/public/placeholder-logo.png",
              },
            ].map((feature) => (
              <Card key={feature.title} className="relative aspect-square overflow-hidden bg-black rounded-3xl group">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <PlayButton />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Speakers */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            THE BEST <span className="text-gradient">SPEAKERS</span>
            <br />
            IN THE FIELD
          </h2>
          <div className="max-w-6xl mx-auto">
            <ScrollArea className="w-full">
              <div className="flex gap-6 pb-6">
                <SpeakerCard
                  name="JORDAN MATTER"
                  title='"Our" Youtuber in The World'
                  image="/public/placeholder-logo.png"
                  socials={true}
                />
                {[1, 2, 3].map((i) => (
                  <SpeakerCard
                    key={i}
                    name={`Speaker ${i}`}
                    title="Influential Creator"
                    image="/public/placeholder-logo.png"
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 transition-colors">
                MORE SPEAKERS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recap Video */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <Image
                src="/public/placeholder-logo.png"
                alt="2023 Recap"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>
              <div className="absolute top-12 left-12">
                <h2 className="text-6xl font-bold">
                  <span className="text-gradient">2023</span>
                  <br />
                  RECAP
                  <br />
                  VIDEO
                </h2>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex gap-4 justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </div>
            </div>
            <div className="flex gap-6 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-1/3 aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src="/public/placeholder-logo.png"
                    alt={`Speaker ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                        <PlayButton />
                      </div>
                      <span className="text-sm font-medium">PRATISHRUTI</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Will You Meet Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            WHO WILL YOU
            <br />
            MEET AT THE
            <br />
            <span className="text-gradient">SUMMIT</span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto">
            Nas Summit brings together a diverse group of creators, entrepreneurs, and industry leaders. Heres a
            glimpse of who youll meet:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AttendeeCard
              icon={<Users className="w-12 h-12 text-purple-400" />}
              title="Like-minded Attendees"
              description="Connect with fellow creators and entrepreneurs who share your passion and drive."
            />
            <AttendeeCard
              icon={<Building className="w-12 h-12 text-blue-400" />}
              title="Top Brands and Companies"
              description="Engage with representatives from leading brands and companies in the digital space."
            />
            <AttendeeCard
              icon={<Star className="w-12 h-12 text-yellow-400" />}
              title="Influential People"
              description="Meet and learn from some of the most influential figures in the creator economy."
            />
            <AttendeeCard
              icon={<Tv className="w-12 h-12 text-green-400" />}
              title="Content Creators"
              description="Interact with the region's biggest content creators and learn from their experiences."
            />
            <AttendeeCard
              icon={<Share2 className="w-12 h-12 text-red-400" />}
              title="Social Media Platforms"
              description="Get insights directly from representatives of major social media platforms."
            />
            <AttendeeCard
              icon={<Users className="w-12 h-12 text-orange-400" />}
              title="Industry Experts"
              description="Gain knowledge from industry experts in various fields of digital media and technology."
            />
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8">What Attendees Say</h3>
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex space-x-6 pb-6">
                <TestimonialCard
                  name="TSU BEEU"
                  title="@tsu_beeu"
                  quote="If you are not flying here NOW, I have to tell you that this is the best conference that I've ever attended. You're yet to experience something magical!"
                  image="/public/placeholder-logo.png"
                  backgroundColor="bg-gradient-to-br from-blue-600 to-blue-800"
                />
                <TestimonialCard
                  name="HIRAL NAGORI"
                  title="@hiral_nagori"
                  quote="This is how to be one of the best when we leave a part of what a power packed community so looks like, right here in the city of dreams!"
                  image="/public/placeholder-logo.png"
                  backgroundColor="bg-gradient-to-br from-yellow-500 to-yellow-700"
                />
                <TestimonialCard
                  name="MARTINA"
                  title="International traveler and linguist"
                  quote="Nas summit is all about creating a community of like-minded people to make a positive impact"
                  image="/public/placeholder-logo.png"
                  backgroundColor="bg-gradient-to-br from-orange-500 to-orange-700"
                />
                <TestimonialCard
                  name="RICHARD"
                  title="International traveler and linguist"
                  quote="The networking opportunities at Nas Summit are unparalleled. I've made connections that have transformed my business."
                  image="/public/placeholder-logo.png"
                  backgroundColor="bg-gradient-to-br from-purple-600 to-purple-800"
                />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Join?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dont miss this opportunity to connect with the brightest minds in the creator economy. Secure your spot
              at the Nas Summit today!
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              REGISTER NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Widget Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            EMBEDDED SOCIAL
            <br />
            <span className="text-gradient">MEDIA WIDGET</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/public/placeholder-logo.png"
              content="Nas summit is all about creating a community of like-minded people to make a positive impact"
              platform="twitter"
            />
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/public/placeholder-logo.png"
              content="We'd like to have a moment to thank all our sponsors, speakers and attendees. We hope to see you in person at our next event!"
              platform="facebook"
            />
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/public/placeholder-logo.png"
              image="/public/placeholder-logo.png"
              content="MINDVALLEY CEO'S SECRET TO TRANSFORMING LIVES"
              platform="instagram"
              engagement="326k views • 8,569 likes"
            />
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/public/placeholder-logo.png"
              image="/public/placeholder-logo.png"
              content="PRATISHRUTI DUBAI - The Creators Conference"
              platform="instagram"
              engagement="Coming January 2024"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black text-white text-center relative">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
            COME LEARN HOW TO BUILD A BUSINESS FROM <span className="text-gradient">ASIAS</span>
            <br />
            <span className="text-gradient">MOST SUCCESSFUL</span> ONLINE
            <br />
            ENTREPRENEURS AND THE
            <br />
            SECRETS OF GOING <span className="text-gradient">VIRAL</span>
            <br />
            ON <span className="text-gradient">SOCIAL MEDIA</span>
          </h2>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            JOIN THE COMMUNITY
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

