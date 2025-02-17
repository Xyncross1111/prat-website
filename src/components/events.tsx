"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EventCard } from "./ui/event-card";
import { useEffect, useState } from "react";

export const Events = () => {
  // Duplicate the events array twice for a continuous looping effect.

  const [events, setEvents] = useState([]);

  useEffect(() => {

    const getEvents = async () => {
      const response = await fetch("api/getEvents");
      const data = await response.json();
      setEvents(data);
    };
    getEvents();
  }, []);


  const repeatCount = 2; // Duplicated twice for a seamless scroll
  const loopedEvents = Array.from({ length: repeatCount }, () => events).flat();

  return (
    <section id="events" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-12">
        <h2 className="px-4 text-4xl md:text-5xl font-bold mb-12 text-center">
          Upcoming Events
        </h2>
        <ScrollArea className="w-full">
          <div className="relative">
            {/* Cards container */}
            <div className="flex gap-6 px-8">
              <div className="flex space-x-6 animate-scroll">
                {loopedEvents.map((event, index) => (
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
  );
};