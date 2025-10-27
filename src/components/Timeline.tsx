import { useEffect, useState, useRef } from "react";

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const timelineData = [
    {
      year: "2010",
      title: "Foundation",
      description: "KNP Consultants was founded with a vision to revolutionize modern architecture.",
      icon: "🏗️",
    },
    {
      year: "2015",
      title: "Growth",
      description: "Expanded to 50+ team members and completed 25 landmark projects.",
      icon: "📈",
    },
    {
      year: "2018",
      title: "Innovation",
      description: "Introduced sustainable architecture and green building technologies.",
      icon: "🌱",
    },
    {
      year: "2022",
      title: "Excellence",
      description: "Awarded for best architecture firm and completed 150+ projects globally.",
      icon: "🏆",
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Leading digital transformation in real estate and architecture industry.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 bg-gradient-to-b from-white via-white to-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-black/60 font-poppins font-bold text-sm uppercase tracking-widest mb-4">
            Our Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            Building Excellence <span className="text-black">Over Time</span>
          </h2>
          <p className="text-gray-600 font-poppins text-lg max-w-2xl leading-relaxed">
            Our journey has been defined by innovation, dedication, and a commitment to transforming dreams into reality.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black/40 via-black/20 to-black/5 -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`opacity-0 transition-all duration-700 ${
                    isVisible ? "opacity-100" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                      }`}
                    >
                      <div
                        className={`p-6 rounded-sm border border-black/10 hover:border-black/30 
                        hover:shadow-lg transition-all duration-500 group cursor-pointer
                        bg-white/50 backdrop-blur-sm hover:bg-white/80`}
                      >
                        <div className="text-sm font-poppins font-bold text-black/60 mb-2 uppercase tracking-widest">
                          {item.year}
                        </div>
                        <h3
                          className="text-2xl font-bold text-black mb-3 group-hover:text-black transition-colors"
                          style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-poppins leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-0 flex justify-center relative">
                      <div
                        className={`w-12 h-12 rounded-full border-4 border-black/40 bg-white flex items-center justify-center text-xl
                        transition-all duration-500 ${
                          activeIndex === index
                            ? "shadow-lg shadow-black/20 scale-125"
                            : "hover:scale-110"
                        }`}
                      >
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black/40 via-black/20 to-black/5" />

            {/* Mobile Timeline Items */}
            <div className="space-y-8 pl-20">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`opacity-0 transition-all duration-700 ${
                    isVisible ? "opacity-100" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0">
                    <div
                      className={`w-12 h-12 rounded-full border-4 border-black/40 bg-white flex items-center justify-center text-lg
                      transition-all duration-500 ${
                        activeIndex === index
                          ? "shadow-lg shadow-black/20 scale-125"
                          : "hover:scale-110"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-4 rounded-sm border border-black/10 hover:border-black/30 
                    hover:shadow-lg transition-all duration-500 group cursor-pointer
                    bg-white/50 backdrop-blur-sm hover:bg-white/80`}
                  >
                    <div className="text-xs font-poppins font-bold text-black/60 mb-2 uppercase tracking-widest">
                      {item.year}
                    </div>
                    <h3
                      className="text-xl font-bold text-black mb-2 group-hover:text-black transition-colors"
                      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-poppins leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
