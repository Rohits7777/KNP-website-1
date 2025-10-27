import { Link } from "react-router-dom";
import { Award, Users, Target, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import aboutBg from "@/assets/about-background.png";

const AboutPage = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white">
        <Header />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden pt-20">
        <img
          src={aboutBg}
          alt="About KNP Consultants"
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              About KNP Consultants
            </h1>
            <p className="text-xl font-poppins text-white/90 max-w-2xl">
              Building Tomorrow's World Through Innovation and Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-poppins font-bold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-bold text-primary mt-2 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                25 Years of Excellence
              </h2>
              <p className="text-gray-600 font-poppins leading-relaxed mb-4">
                Founded in 1999, KNP Consultants has grown from a small architectural firm to a comprehensive consulting organization serving clients across residential, commercial, and industrial sectors. Our journey is marked by innovation, dedication, and a commitment to transforming visions into reality.
              </p>
              <p className="text-gray-600 font-poppins leading-relaxed mb-6">
                With over 150 completed projects and a team of 120+ professionals, we have established ourselves as a leader in the architecture, engineering, and project management consulting industry. Our success is built on the foundation of client satisfaction, quality delivery, and ethical business practices.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm"
              >
                Explore Our Services
                <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-square rounded-sm overflow-hidden">
                <img src={aboutBg} alt="Office" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Mission, Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 border border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Mission
              </h3>
              <p className="text-gray-600 font-poppins leading-relaxed">
                To deliver world-class architectural, engineering, and consulting services that enhance quality of life while promoting sustainability and innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 border border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Vision
              </h3>
              <p className="text-gray-600 font-poppins leading-relaxed">
                To be a global leader in creating sustainable, innovative solutions that shape the future of urban development and infrastructure.
              </p>
            </div>

            {/* Values */}
            <div className="p-8 border border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Values
              </h3>
              <p className="text-gray-600 font-poppins leading-relaxed">
                Excellence • Integrity • Innovation • Sustainability • Client Focus • Teamwork
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "25+ Years Experience",
                description: "Quarter century of delivering exceptional projects across diverse sectors",
                icon: "⏰",
              },
              {
                title: "150+ Projects Completed",
                description: "Proven track record of successful delivery across residential, commercial, and industrial",
                icon: "🏗️",
              },
              {
                title: "120+ Team Members",
                description: "Diverse team of architects, engineers, and consultants with specialized expertise",
                icon: "👥",
              },
              {
                title: "Industry Recognition",
                description: "Multiple awards for architecture, design, and project management excellence",
                icon: "🏆",
              },
              {
                title: "Sustainable Solutions",
                description: "LEED certified projects and commitment to environmental responsibility",
                icon: "🌱",
              },
              {
                title: "Client Satisfaction",
                description: "95%+ client retention rate and consistent positive feedback",
                icon: "😊",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-sm hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 font-poppins">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Overview */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-sm p-12">
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 font-poppins mb-6 max-w-2xl">
              Our team comprises accomplished professionals with diverse backgrounds, expertise, and passion for creating exceptional solutions. From architects and engineers to project managers and consultants, every team member brings value to our projects.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm"
            >
              View Full Team
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-gray-600 font-poppins mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your project and discover how we can help bring your vision to life.
          </p>
          <Link
            to="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm"
          >
            Contact Us Today
            <span>→</span>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
    </PageWrapper>
  );
};

export default AboutPage;
