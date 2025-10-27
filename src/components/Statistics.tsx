import { useEffect, useState, useRef } from "react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    years: 0,
    team: 0,
    clients: 0,
  });
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Counter animation using requestAnimationFrame
    let animationFrameId: number;
    const startTime = Date.now();
    const duration = 2000; // 2 seconds

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        projects: Math.floor(progress * 150),
        years: Math.floor(progress * 25),
        team: Math.floor(progress * 120),
        clients: Math.floor(progress * 200),
      });

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounters);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounters);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * 0.5;
        setParallaxOffset(offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      number: counters.projects,
      suffix: "+",
      label: "Projects Completed",
      icon: "🏢",
      color: "from-black/40 to-black/20",
    },
    {
      number: counters.years,
      suffix: "+",
      label: "Years Experience",
      icon: "⏰",
      color: "from-black/30 to-black/10",
    },
    {
      number: counters.team,
      suffix: "+",
      label: "Team Members",
      icon: "👥",
      color: "from-black/40 to-black/20",
    },
    {
      number: counters.clients,
      suffix: "+",
      label: "Happy Clients",
      icon: "😊",
      color: "from-black/30 to-black/10",
    },
  ];

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Blobs */}
        <div
          className="absolute top-0 -left-40 w-80 h-80 bg-gray-300/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
        <div
          className="absolute bottom-0 -right-40 w-80 h-80 bg-gray-300/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-200/10 rounded-full blur-3xl"
          style={{ transform: `translate(calc(-50% + ${parallaxOffset * 0.1}px), -50%)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`mb-16 text-center opacity-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "translate-y-10"
          }`}
        >
          <span className="inline-block text-black/60 font-poppins font-bold text-sm uppercase tracking-widest mb-4">
            Track Record
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            By The Numbers
          </h2>
          <p className="text-gray-600 font-poppins text-lg max-w-2xl mx-auto leading-relaxed">
            Our impact and success measured through years of dedicated service and exceptional project delivery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`opacity-0 transition-all duration-700 ${
                isVisible ? "opacity-100" : ""
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              }}
            >
              {/* Stat Card with Gradient Background */}
              <div
                className={`relative group cursor-pointer h-full overflow-hidden rounded-sm
                border border-black/10 hover:border-black/30 transition-all duration-500
                hover:shadow-2xl hover:-translate-y-3`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                />

                {/* Animated Line Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black/0 via-black/40 to-black/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                    {stat.icon}
                  </div>

                  {/* Counter Number with Animation */}
                  <div className="mb-4">
                    <div
                      className={`text-5xl md:text-6xl font-bold text-black font-grotesk group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.number}
                      <span className="text-2xl ml-1">{stat.suffix}</span>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 font-poppins font-medium text-sm uppercase tracking-widest group-hover:text-black transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-black/0 to-black/40 mx-auto group-hover:w-12 transition-all duration-500" />
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black/0 via-black/40 to-black/0 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Insight */}
        <div
          className={`mt-16 p-8 rounded-sm border border-black/10 bg-gradient-to-r from-gray-100/30 to-gray-50/30
          opacity-0 transition-all duration-1000 ${isVisible ? "opacity-100" : ""}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">⭐</div>
            <div>
              <h3
                className="text-xl font-bold text-black mb-2"
                style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
              >
                Trusted by Leading Organizations
              </h3>
              <p className="text-gray-600 font-poppins leading-relaxed">
                Our commitment to excellence has earned us recognition from industry leaders and satisfied clients worldwide. 
                We continue to set new standards in architecture, engineering, and project management consulting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
