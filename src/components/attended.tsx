import Image from "next/image";

const sponsors = [
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png",
  "/placeholder-logo.png"
]

export const Attended = () => {

  // return ( 
    return (
      //  bg-gradient-to-b from-black to-purple-900/20
              <section className="py-12 ">
              <h3 className="text-3xl font-bold mb-12 text-center">Our Sponsors</h3>
      
              <div className="overflow-hidden py-3 md:py-6 bg-black">
                <div className="animate-marquee whitespace-nowrap">
                  {
                    sponsors.map( (sponsor, i) => {
                      return (<span key={i} className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{sponsor}</span>
                      )
                    })
                  }
                </div>
              </div>
            </section>
          )
 // )
}


//     return ( // bg-gradient-to-b from-black to-purple-900/20
//         <section className="py-12 ">
//         <h3 className="text-3xl font-bold mb-12 text-center">ATTENDED COMPANIES</h3>

//         <div className="overflow-hidden py-3 md:py-6 bg-black">
//           <div className="animate-marquee whitespace-nowrap">
//             {
//               sponsors.map( (sponsor, i) => {
//                 return (<span key={i} className="mx-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{sponsor}</span>
//                 )
//               })
//             }
//           </div>
//         </div>
//       </section>
//     )
