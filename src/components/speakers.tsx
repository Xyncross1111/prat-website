import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { SpeakerCard } from "@/components/speaker-card"

export const Speakers = () => {
  return (
    // bg-gradient-to-b from-black to-purple-900/20
    <section className="py-12 md:py-24 w-full relative overflow-hidden">
      <div className="px-6 md:px-12 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">Artists</span>
          <br />
        </h2>
        {/* Full width speaker container */}
        <div className="w-full">
          <ScrollArea className="w-full">
            <div className="flex gap-6 pb-6">
              <SpeakerCard
                name="JORDAN MATTER"
                title='"Our" Youtuber in The World'
                image="/placeholder-logo.png"
                socials={true}
              />
              {[1, 2, 3].map((i) => (
                <SpeakerCard
                  key={i}
                  name={`Speaker ${i}`}
                  title="Influential Creator"
                  image="/placeholder-logo.png"
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {/*
          <div className="flex justify-center mt-12">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 transition-colors">
                MORE SPEAKERS
              </Button>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}