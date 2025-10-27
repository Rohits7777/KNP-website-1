import { useEffect, useState } from "react";
import aboutBackground from "@/assets/about-background.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, projects: 0, members: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounters();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCounters({
        years: Math.floor(progress * 5),
        projects: Math.floor(progress * 22),
        members: Math.floor(progress * 1400),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="about-section" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="accent-border pl-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-primary mb-3 tracking-tight">
                About KNP Consultants
              </h2>
              <div className={`h-1 w-16 bg-gradient-to-r from-accent to-accent/50 rounded-full ${
                isVisible ? "animate-expand-width" : ""
              }`} />
            </div>

            <div className="space-y-5 text-corporate">
              <p className="text-base leading-relaxed font-light">
                KNP is a one-stop consultancy powered by experts in Architecture, Engineering, 
                Contracting, Project Management, Valuation and Law.
              </p>

              <p className="text-base leading-relaxed font-light">
                We provide integrated solutions to Societies, Developers, Clients, and Owners—from 
                project assessment and design to development and valuation—ensuring smarter, compliant, 
                and value-driven construction across India.
              </p>

              <div className={`bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-sm p-6 mt-8 ${
                isVisible ? "animate-fade-in-left" : ""
              }`} style={{ animationDelay: "200ms" }}>
                <p className="text-sm italic text-foreground/70 leading-relaxed font-light">
                  "KNP Consultants integrate values, ethics, and culture in their process to 
                  continue impacting the Construction Industry in India."
                </p>
              </div>

              {/* Stats Grid with Counter Animation */}
              <div className={`grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`} style={{ transitionDelay: "300ms" }}>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-grotesk font-bold text-accent mb-2 
                    group-hover:scale-110 transition-transform">
                    {counters.years}
                    <span className="text-lg font-light">+</span>
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold font-poppins">
                    Years
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-grotesk font-bold text-accent mb-2 
                    group-hover:scale-110 transition-transform">
                    {counters.projects}
                    <span className="text-lg font-light">+</span>
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold font-poppins">
                    Projects
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl md:text-4xl font-grotesk font-bold text-accent mb-2 
                    group-hover:scale-110 transition-transform">
                    {counters.members}
                    <span className="text-lg font-light">+</span>
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold font-poppins">
                    Members
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Parallax Effect */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className={`relative group ${isVisible ? "animate-image-zoom-in" : ""}`}>
              <img
                src={aboutBackground}
                alt="KNP Consultants Architecture"
                className="rounded-sm shadow-medium w-full h-auto object-cover 
                  group-hover:shadow-lg transition-all duration-700 grayscale-0 
                  brightness-100 group-hover:brightness-110"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 rounded-sm bg-gradient-to-tr from-primary/20 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent/30 rounded-sm" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-accent/30 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
