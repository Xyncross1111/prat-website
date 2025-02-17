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
// export const TickerSponsor = () => {

//     return ( // Applied gradient classes to the text
//         <div className="overflow-hidden py-3 md:py-6 bg-black">
//             <div className="animate-marquee whitespace-nowrap">
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• TOKYO</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• MONGOLIA</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• LOS ANGELES</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• BANGALORE</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• SINGAPORE</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• TOKYO</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• MONGOLIA</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">• LOS ANGELES</span>
//             </div>

//             <div className="animate-marqueeReverse whitespace-nowrap">
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• TOKYO</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• MONGOLIA</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• LOS ANGELES</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• BANGALORE</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• SINGAPORE</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• TOKYO</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• MONGOLIA</span>
//                 <span className="mx-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">• LOS ANGELES</span>
//             </div>
//         </div>
//     )
// }