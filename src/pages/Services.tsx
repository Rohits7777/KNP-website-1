import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import architectureImg from "@/assets/service-architecture.jpg";
import engineeringImg from "@/assets/service-engineering.jpg";
import pmcImg from "@/assets/service-pmc.jpg";

const ServicesPage = () => {
  const services = [
    {
      id: "architecture",
      title: "Architecture",
      description: "Innovative architectural design and planning services for residential, commercial, and mixed-use projects.",
      image: architectureImg,
      features: ["3D Visualization", "Sustainable Design", "Interior Planning", "Master Planning"],
    },
    {
      id: "engineering",
      title: "Engineering",
      description: "Comprehensive structural and MEP engineering solutions with expertise in sustainable systems.",
      image: engineeringImg,
      features: ["Structural Design", "MEP Systems", "Green Technology", "Infrastructure"],
    },
    {
      id: "pmc",
      title: "Project Management & Consulting",
      description: "Expert project management ensuring on-time, on-budget delivery with highest quality standards.",
      image: pmcImg,
      features: ["Planning & Scheduling", "Cost Management", "Quality Assurance", "Risk Management"],
    },
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white">
        <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] bg-gradient-to-br from-primary to-primary/80 pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Services
          </h1>
          <p className="text-xl text-white/90 font-poppins max-w-2xl mx-auto">
            Comprehensive solutions in architecture, engineering, and project management consulting
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.id} to={`/service/${service.id}`}>
              <div
                className={`group h-full rounded-sm overflow-hidden border border-gray-200 hover:border-accent hover:shadow-2xl transition-all duration-500 opacity-0 animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 bg-white group-hover:bg-gray-50 transition-colors">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-poppins mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-gray-600 font-poppins">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent font-poppins font-bold group-hover:gap-3 transition-all">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <section className="mt-20 pt-20 border-t border-gray-200">
          <h2 className="text-4xl font-bold text-primary text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Why Choose Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Team",
                description: "120+ professionals with diverse expertise and industry experience",
                icon: "👨‍💼",
              },
              {
                title: "Proven Track Record",
                description: "150+ successful projects completed across various sectors",
                icon: "✓",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality checks and compliance with international standards",
                icon: "✓✓",
              },
              {
                title: "Sustainability",
                description: "LEED certified projects and commitment to green practices",
                icon: "🌱",
              },
              {
                title: "Innovation",
                description: "Latest technology and cutting-edge solutions for every project",
                icon: "💡",
              },
              {
                title: "Client Focus",
                description: "Dedicated support and transparent communication throughout",
                icon: "🎯",
              },
              {
                title: "On-Time Delivery",
                description: "Reliable schedules and efficient project management",
                icon: "⏱️",
              },
              {
                title: "Cost Effective",
                description: "Optimized budgets without compromising quality",
                icon: "💰",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-sm hover:bg-gray-100 transition-colors text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-poppins">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-sm p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 font-poppins mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your needs.
          </p>
          <Link
            to="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm"
          >
            Get a Consultation
            <span>→</span>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
    </PageWrapper>
  );
};

export default ServicesPage;
