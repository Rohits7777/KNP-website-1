import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
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

    const element = document.getElementById("projects-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "1",
      title: "Luxury Residential Tower",
      location: "Mumbai, Maharashtra",
      category: "Residential",
      area: "2.5 Lakh sq.ft",
      image: project1,
    },
    {
      id: "2",
      title: "Commercial Complex",
      location: "Pune, Maharashtra",
      category: "Commercial",
      area: "1.8 Lakh sq.ft",
      image: project2,
    },
    {
      id: "3",
      title: "Society Redevelopment",
      location: "Mumbai, Maharashtra",
      category: "Redevelopment",
      area: "3.2 Lakh sq.ft",
      image: project3,
    },
    {
      id: "4",
      title: "Modern Office Space",
      location: "Navi Mumbai, Maharashtra",
      category: "Commercial",
      area: "1.2 Lakh sq.ft",
      image: project2,
    },
    {
      id: "5",
      title: "Residential Township",
      location: "Thane, Maharashtra",
      category: "Residential",
      area: "5 Lakh sq.ft",
      image: project1,
    },
    {
      id: "6",
      title: "Mixed-Use Development",
      location: "Mumbai, Maharashtra",
      category: "Mixed-Use",
      area: "4 Lakh sq.ft",
      image: project3,
    },
  ];

  return (
    <section id="projects-section" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block accent-border pl-4 mb-3">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-primary tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div className={`h-1 w-16 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto mb-4 ${
            isVisible ? "animate-expand-width" : ""
          }`} style={{ animationDelay: "100ms" }} />
          <p className="text-sm text-corporate max-w-2xl mx-auto font-light">
            Showcasing excellence in design, engineering, and project management across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`group bg-background border border-border/50 rounded-sm overflow-hidden 
                shadow-subtle hover:shadow-xl transition-all duration-500 
                transform hover:-translate-y-1 
                ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${index * 80 + 200}ms` : "0ms",
              }}
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative bg-primary/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                    transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/40 
                  opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent text-primary text-xs font-poppins font-semibold 
                    rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 
                    group-hover:translate-y-0 transition-all duration-500">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <span className="text-xs font-poppins font-semibold text-accent uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-grotesk font-bold text-primary mb-2 tracking-tight 
                  group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                <div className="space-y-1 text-xs text-corporate mb-4 font-light">
                  <p className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
                    {project.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0"></span>
                    {project.area}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="flex items-center gap-2 text-accent text-xs font-poppins font-semibold 
                  uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  View Details
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`mt-16 text-center transform transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`} style={{ transitionDelay: "800ms" }}>
          <button className="minimal-button group font-poppins font-semibold">
            View All Projects
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
