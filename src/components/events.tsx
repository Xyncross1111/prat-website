import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
    {
      city: "JAKARTA",
      country: "INDONESIA",
      location: "Museum di tengah",
      date: "15 March 2024",
      image: "/placeholder-logo.png",
    },
    {
      city: "LONDON",
      country: "UK",
      location: "Greenwich hotel & tower bridge",
      date: "18 June 2024",
      image: "/placeholder-logo.png",
    },
    {
      city: "NEW YORK",
      country: "USA",
      location: "Plaza, NY",
      date: "21 June 2024",
      image: "/placeholder-logo.png",
    },
  ]

export const Events = () => {

    return (
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
    )
}