import { ArtistCard } from "@/components/ui/speaker-card"

const artists = [
  {
    name: "AKHIL SACHDEVA",
    title: 'Nashaboy',
    image: "/assets/image/akhil.webp",
    instagram: "https://www.instagram.com/sachdevaakhilnasha",
    youtube: "https://www.youtube.com/watch?v=se9DDAwwGQY"
  },
  {
    name: "DJ KASHISH RATHORE",
    title: "Sunburn On Campus",
    image: "/assets/image/kashish.webp",
    instagram: "https://www.instagram.com/djkashish_rathore",
    youtube: "https://www.youtube.com/channel/UC3Y_bDS-9_qYkrpHwNnIuRA"
  },
  {
    name: "SOMESH SHARMA",
    title: 'Outstation Comic',
    image: "/assets/image/somesh.png",
    instagram: "https://www.instagram.com/outstationcomic",
    youtube: "https://youtube.com/@outstationcomic"
  },
  {
    name: "LUV JUYAL",
    title: "Luv",
    image: "/assets/image/kashish.webp",
    instagram: "https://www.instagram.com/luvjuyal",
    youtube: "https://youtube.com/@luvjuyal"
  },
]

export const Artists = () => {

  const repeatCount = 5; // Duplicated twice for a seamless scroll
  const loopedArtists = Array.from({ length: repeatCount }, () => artists).flat();
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-l from-[#f7cde0] to-[#fefbff] bg-clip-text text-transparent">Artists</span>
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
                  return (<ArtistCard
                    key={index}
                    name={artist.name}
                    title={artist.title}
                    image={artist.image}
                    instagram={artist.instagram}
                    youtube={artist.youtube}
                  />)
                })}
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}