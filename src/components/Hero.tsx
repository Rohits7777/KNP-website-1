import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto slide-up">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide">
            Designing Tomorrow's <span className="text-accent">Skylines</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <p className="text-sm md:text-base font-light text-white/80 tracking-widest uppercase">
              Architects · Engineers · PMC
            </p>
            <div className="h-px w-12 bg-accent/60" />
          </div>

          <p className="text-sm md:text-base font-light text-white/70 max-w-xl mx-auto leading-relaxed">
            Building legacies through precision, creativity, and unwavering commitment to excellence
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-0.5 h-2 bg-accent/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
