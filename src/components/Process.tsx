import { useEffect, useState, useRef } from "react";

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Strategy & Planning",
      description: "We analyze market trends, client requirements, and project scope to create comprehensive strategic plans.",
      icon: "📊",
      delay: 0,
    },
    {
      number: "02",
      title: "Design & Visualization",
      description: "Our architects create stunning 3D visualizations and design concepts that bring your vision to life.",
      icon: "🎨",
      delay: 100,
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "We execute the project with precision, using cutting-edge technology and sustainable practices.",
      icon: "🏗️",
      delay: 200,
    },
    {
      number: "04",
      title: "Quality & Delivery",
      description: "Final quality checks, inspections, and delivery ensure excellence in every project we undertake.",
      icon: "✅",
      delay: 300,
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 bg-gradient-to-b from-background via-white to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gray-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-black/60 font-poppins font-bold text-sm uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
          >
            Our Process for <span className="text-black">Success</span>
          </h2>
          <p className="text-gray-600 font-poppins text-lg max-w-2xl leading-relaxed">
            A systematic approach to delivering exceptional results, from initial concept to final delivery.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12 hidden md:block">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-black/40 to-black/20 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative opacity-0 transition-all duration-700 ${
                isVisible ? "opacity-100" : ""
              }`}
              style={{
                transitionDelay: `${step.delay}ms`,
                transform: isVisible ? "translateY(0) translateX(0)" : "translateY(30px) translateX(-20px)",
              }}
            >
              {/* Connecting Line (visible on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-black/20 to-transparent" />
              )}

              {/* Card */}
              <div
                className={`h-full p-8 rounded-sm border border-black/10 bg-white/50 backdrop-blur-sm
                hover:border-black/30 hover:shadow-xl transition-all duration-500 group-hover:bg-white
                transform hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="inline-block mb-4">
                    <div className="text-4xl font-bold font-grotesk text-black/20 group-hover:text-black/40 transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors duration-300"
                    style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-0.5 w-0 bg-black/40 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center opacity-0 transition-all duration-1000 ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-gray-600 font-poppins mb-6 max-w-2xl mx-auto">
            Ready to start your project with us? Let's discuss your vision and bring it to reality.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-poppins font-bold 
            text-sm uppercase tracking-widest hover:bg-black/80 transition-all duration-300 hover:shadow-lg 
            hover:-translate-y-1 active:translate-y-0">
            <span>Start Your Project</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
