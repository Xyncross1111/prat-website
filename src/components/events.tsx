import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { EventCard } from "./ui/event-card";

const events = [
  {
    city: "JAKARTA",
    country: "INDONESIA",
    venue: "Madinat Jumeirah",
    mainImage: "/placeholder-logo.png",
    secondaryImage: "/placeholder-logo.png",
    date: "12 June 2023",
    isDark: true,
  },
  {
    city: "LONDON",
    country: "UK",
    venue: "Leonardo royal event & tower bridge",
    mainImage: "/placeholder-logo.png",
    secondaryImage: "/placeholder-logo.png",
    date: "12 June 2023",
  },
  {
    city: "NEW YORK",
    country: "USA",
    venue: "Hilton Tel NY",
    mainImage: "/placeholder-logo.png",
    secondaryImage: "/placeholder-logo.png",
    date: "12 June 2023",
  },
]

export const Events = () => {

  return ( // bg-gradient-to-b from-black to-purple-900/20
    <section className="py-24 ">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Upcoming Events</h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-6">
            <div className="flex space-x-6 overflow-x-auto pb-6 -mx-8 px-8 scrollbar-hide">
                    {events.map((event, index) => (
                      <EventCard key={index} {...event} />
                    ))}
                  </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}