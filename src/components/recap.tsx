import { PlayButton } from "@/components/play-button";

export const Recap = () => {
  return (
    <section className="md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/im3ZhUT0JuQ"
              title="2023 Recap Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30" /> */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <PlayButton />
            </div> */}
            {/* <div className="absolute top-12 left-12">
              <h2 className="text-6xl font-bold">
                <span className="text-gradient">2023</span>
                <br />
                RECAP
                <br />
                VIDEO
              </h2>
            </div> */}
          </div>
          {/* <div className="mt-8">
            <div className="flex gap-4 justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
            </div>
          </div> */}
          {/* ...other code... */}
        </div>
      </div>
    </section>
  );
};