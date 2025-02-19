export const Ticker = () => {
    const events = [
        "Art Affairs",
        "Footsteps",
        "Vibrato",
        "Picasso",
        "Naqaab",
        "Family Fued",
        "Ingenium",
        "Persona",
        "Happy Hours",
        "RBU's Got Talent",
        "Festive Freeway",
        "Dalal Street",
        "Minute to Win it ",
        "Escape Room",
        "Quizzeus",
        "Virtual Gaming",
        "Detox Room",
        "Movie Eve",
        "Auto Expo ",
        "AARAMBH"
    ];

    const duplicatedEvents = [...events, ...events];

    return (
        <div className="overflow-hidden py-3 md:py-6 bg-black">
            <div className="animate-marquee whitespace-nowrap">

                {duplicatedEvents.map((event, index) => (
                    <span key={index} className="mx-4 text-lg font-semibold bg-gradient-to-r from-[#f9d1e3] to-[#e3eaf5] bg-clip-text text-transparent uppercase ">• {event}</span>
                ))}


            </div>
        </div>
    )
}