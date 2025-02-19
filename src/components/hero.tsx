export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-24">
            <div className="absolute inset-0 z-0">
                <video
                    src="/assets/video/hero.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
            </div>
            <div className="relative z-10 max-w-4xl">
                {/* <h1 className="text-7xl md:text-8xl leading-tight mb-6 animate-float drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Full
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c662d6] to-[#e83625]">Power</span>
                    <br />
                    में
                </h1>
                <p className="text-xl text-gray-300 mb-8">Nas summit is for crazy people who create something from nothing</p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full transition-colors">
                    Linktree
                </Button> */}
                {/* <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 animate-pulse">
                    Register
                    <br />
                    Now
                </div> */}
            </div>
        </section>
    )
}