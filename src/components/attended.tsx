import Image from "next/image";

export const Attended = () => {

    return ( // bg-gradient-to-b from-black to-purple-900/20
        <section className="py-24 ">
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
    )
}