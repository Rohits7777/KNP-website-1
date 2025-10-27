import { useEffect, useState } from "react";

const ProjectStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "150",
      suffix: "+",
      label: "Projects Completed",
      description: "Diverse portfolio spanning residential, commercial, and mixed-use developments",
    },
    {
      number: "25",
      suffix: "+",
      label: "Years of Excellence",
      description: "Two decades of industry expertise and proven track record",
    },
    {
      number: "50",
      suffix: "M+",
      label: "Sq.ft Delivered",
      description: "Massive scale of successful constructions across regions",
    },
    {
      number: "500",
      suffix: "+",
      label: "Team Members",
      description: "Dedicated professionals committed to quality and innovation",
    },
  ];

  return (
    <section id="stats-section" className="py-20 md:py-32 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-block accent-border pl-4 mb-3">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-primary tracking-tight">
              Our Achievements
            </h2>
          </div>
          <div className="h-px w-16 bg-accent mx-auto mb-4" />
          <p className="text-sm text-corporate max-w-2xl mx-auto">
            Delivering excellence through innovative design and meticulous execution
          </p>
        </div>

        {/* Stats Grid with Animated Sliders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="group relative">
                {/* Animated Background Slider */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-sm 
                    ${isVisible ? "animate-slider-popup" : ""}`}
                  style={{
                    animationDelay: isVisible ? `${index * 80}ms` : "0ms",
                  }}
                />

                {/* Card Content */}
                <div className="relative p-8 border border-border/50 rounded-sm bg-card/50 backdrop-blur-sm
                  hover:border-accent/30 hover:bg-card/80 transition-all duration-500 shadow-subtle hover:shadow-md">
                  
                  {/* Animated Number with Smooth Glide */}
                  <div
                    className={`text-5xl md:text-6xl font-grotesk font-bold text-accent mb-2 
                      ${isVisible ? "animate-slider-glide" : ""}`}
                    style={{
                      animationDelay: isVisible ? `${index * 120}ms` : "0ms",
                    }}
                  >
                    {stat.number}
                    <span className="text-3xl font-light">{stat.suffix}</span>
                  </div>

                  {/* Animated Label with Scale Slide */}
                  <h3
                    className={`text-lg font-grotesk font-bold text-primary mb-2 tracking-tight
                      ${isVisible ? "animate-scale-slide-in" : ""}`}
                    style={{
                      animationDelay: isVisible ? `${index * 150}ms` : "0ms",
                    }}
                  >
                    {stat.label}
                  </h3>

                  {/* Description with Delayed Fade */}
                  <p
                    className={`text-xs text-corporate leading-relaxed 
                      ${isVisible ? "opacity-100" : "opacity-0"}`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150 + 200}ms` : "0ms",
                    }}
                  >
                    {stat.description}
                  </p>

                  {/* Animated Divider Line */}
                  <div
                    className={`mt-4 h-px w-12 bg-accent/50 rounded-full 
                      ${isVisible ? "animate-slider-glide" : ""} 
                      group-hover:w-full group-hover:bg-accent transition-all duration-500`}
                    style={{
                      animationDelay: isVisible ? `${index * 100 + 100}ms` : "0ms",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section with Slider Animation */}
        <div
          className={`mt-20 p-8 md:p-12 border border-border/50 rounded-sm bg-card/40 backdrop-blur-sm
            transform transition-all duration-700 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            transitionDelay: isVisible ? "400ms" : "0ms",
          }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                desc: "Every project undergoes rigorous quality checks at every stage of construction",
              },
              {
                title: "Sustainable Design",
                desc: "Environmentally conscious building practices for a greener future",
              },
              {
                title: "Client Satisfaction",
                desc: "Delivering projects on time with exceptional craftsmanship and attention to detail",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`${isVisible ? "animate-scale-slide-in" : ""}`}
                style={{
                  animationDelay: isVisible ? `${500 + idx * 100}ms` : "0ms",
                }}
              >
                <h4 className="text-base font-light text-primary mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-corporate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
