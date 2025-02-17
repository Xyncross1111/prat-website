import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { SpeakerCard } from "@/components/speaker-card"

const artists = [
  {
    name: "AKHIL SACHDEVA",
    title: '"Our" Youtuber in The World',
    image: "/assets/image/akhil.webp",
    socials: true,
  },
  {
    name: "DJ KASHISH RATHORE",
    title: "Influential Creator",
    image: "/assets/image/kashish.webp",
    socials: true,
  }
]

export const Speakers = () => {

  const repeatCount = 5; // Duplicated twice for a seamless scroll
  const loopedArtists = Array.from({ length: repeatCount }, () => artists).flat();
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-black">Artists</span>
          <br />
        </h2>
        {/* <ScrollArea className="w-full">
          <div className="relative">
            <div className="flex gap-6 px-8">
              <div className="flex space-x-6 animate-scroll">
                {loopedArtists.map((artist, index) => {
                  return (<SpeakerCard
                    key={index}
                    name={artist.name}
                    title={artist.title}
                    image={artist.image}
                    socials={artist.socials}
                  />)
                })}
              </div>
            </div>
          </div>
          <ScrollBar orientation="horizontal" className="z-20" />
        </ScrollArea> */}
          <div className="relative">
            <div className="flex gap-6 px-8">
              <div className="flex space-x-6 animate-scroll">
                {loopedArtists.map((artist, index) => {
                  return (<SpeakerCard
                    key={index}
                    name={artist.name}
                    title={artist.title}
                    image={artist.image}
                    socials={artist.socials}
                  />)
                })}
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

// // bg-gradient-to-b from-black to-purple-900/20
// <section className="py-12 md:py-24 w-full relative overflow-hidden">
// <div className="px-6 md:px-12 w-full">
//   <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
//     <span className="text-black">Artists</span>
//     <br />
//   </h2>
//   {/* Full width speaker container */}
//   <div className="w-full">

//     <ScrollArea className="w-full">
//     <div className="flex gap-6 pb-6">
//       {artists.map((artist, index) => {
//         return (<SpeakerCard
//           key={index}
//           name={artist.name}
//           title={artist.title}
//           image={artist.image}
//           socials={artist.socials}
//         />)
//       })}
//       </div>
//     </ScrollArea>



//     {/* <ScrollArea className="w-full">
//       <div className="flex gap-6 pb-6">
//         <SpeakerCard
//           name="JORDAN MATTER"
//           title='"Our" Youtuber in The World'
//           image="/assets/image/art1.webp"
//           socials={true}
//         />
//         {[1, 2, 3].map((i) => (
//           <SpeakerCard
//             key={i}
//             name={`Speaker ${i}`}
//             title="Influential Creator"
//             image="/assets/image/art1.webp"
//           />
//         ))}
//       </div>
//       <ScrollBar orientation="horizontal" />
//     </ScrollArea> */}
//     {/*
//     <div className="flex justify-center mt-12">
//         <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 transition-colors">
//           MORE SPEAKERS
//         </Button>
//     </div>
//     */}
//   </div>
// </div>
// </section>