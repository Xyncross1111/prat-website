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
    isDark: true
  },
]

// FILE: events.tsx
export const Events = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Upcoming Events</h2>
        <ScrollArea className="w-full">
          <div className="relative">
            {/* Cards container */}
            <div className="flex gap-6 px-8">
              <div className="flex space-x-6 animate-scroll">
                {events.map((event, index) => (
                  <div key={index}>
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ScrollBar orientation="horizontal" className="z-20" />
        </ScrollArea>
      </div>
    </section>
  )
}