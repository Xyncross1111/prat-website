export const Stats = () => {

    return ( // bg-gradient-to-b from-purple-900/20 to-black
        <section className="py-24 ">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
            WORLDS TOP
            <br />
            <span className="text-gradient">CREATORS GATHERING</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "120+", label: "SPEAKERS" },
              { number: "40+", label: "TRAFFIC SOURCES" },
              { number: "160+", label: "ADVERTISERS" },
              { number: "170+", label: "AFFILIATE NETWORKS" },
              { number: "16,209+", label: "ATTENDEES" },
              { number: "10+", label: "CITIES" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-md p-6 rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</h3>
                <p className="text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}