import Image from "next/image";
import { PlayButton } from "@/components/play-button";


export const Recap = () => {

    return (
        <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <Image
                src="/placeholder-logo.png"
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
                    src="/placeholder-logo.png"
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
    )
}