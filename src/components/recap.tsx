export const Recap = () => {
  return (
    <section className="py-6 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/im3ZhUT0JuQ"
              title="2025 Teaser Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
        <h2 className="py-8 text-3xl md:text-5xl font-bold text-center ">
          <span className="text-white">OFFICIAL TEASER</span>
          <br />
        </h2>
      </div>
    </section>
  );
};