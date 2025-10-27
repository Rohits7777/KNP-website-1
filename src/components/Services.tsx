import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Building2, HardHat, ClipboardCheck } from "lucide-react";
import serviceArchitecture from "@/assets/service-architecture.jpg";
import serviceEngineering from "@/assets/service-engineering.jpg";
import servicePMC from "@/assets/service-pmc.jpg";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById("services-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "architecture",
      icon: Building2,
      title: "Architecture",
      description: "Innovative architectural design solutions that blend aesthetics with functionality, creating spaces that inspire and endure.",
      image: serviceArchitecture,
    },
    {
      id: "engineering",
      icon: HardHat,
      title: "Engineering",
      description: "Comprehensive engineering services ensuring structural integrity, sustainability, and compliance with industry standards.",
      image: serviceEngineering,
    },
    {
      id: "pmc",
      icon: ClipboardCheck,
      title: "Project Management & Consulting",
      description: "Expert PMC services overseeing every aspect of your project from planning to execution, ensuring timely and quality delivery.",
      image: servicePMC,
    },
  ];

  return (
    <section id="services-section" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block accent-border pl-4 mb-3">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-primary tracking-tight">
              Our Services
            </h2>
          </div>
          <div className={`h-1 w-16 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto ${
            isVisible ? "animate-expand-width" : ""
          }`} style={{ animationDelay: "100ms" }} />
          <p className="text-sm text-corporate max-w-2xl mx-auto mt-4 font-light">
            Comprehensive consultancy services designed to elevate your project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group"
              >
                <div
                  className={`h-full bg-card border border-border/50 rounded-sm overflow-hidden 
                  shadow-subtle hover:shadow-lg transition-all duration-500
                  transform ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}
                  hover:-translate-y-2`}
                  style={{
                    animationDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
                    transitionDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
                  }}
                >
                  {/* Image Container with Overlay */}
                  <div className="aspect-video overflow-hidden relative bg-primary/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                        transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent 
                      opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    {/* Icon centered on image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-white/80 group-hover:text-white 
                        transition-all duration-500 group-hover:scale-125" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-grotesk font-bold text-primary mb-3 tracking-tight 
                      group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-corporate leading-relaxed mb-4 font-light">
                      {service.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div className={`flex items-center justify-between group-hover:justify-between
                      transition-all duration-500`}>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-accent to-accent/50 rounded-full 
                        group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-accent 
                        group-hover:to-transparent transition-all duration-500" />
                    </div>
                  </div>

                  {/* Accent border top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`} style={{ transitionDelay: "500ms" }}>
          <p className="text-muted-foreground font-light mb-4">
            Ready to transform your project?
          </p>
          <Link to="/services" className="minimal-button group font-poppins font-semibold">
            Explore Services
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
