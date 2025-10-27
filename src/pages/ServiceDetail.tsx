import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import architectureImg from "@/assets/service-architecture.jpg";
import engineeringImg from "@/assets/service-engineering.jpg";
import pmcImg from "@/assets/service-pmc.jpg";

const ServiceDetail = () => {
  const { id } = useParams();

  const servicesData: Record<string, any> = {
    architecture: {
      title: "Architecture",
      shortTitle: "Architectural Design & Planning",
      image: architectureImg,
      description: "Creating stunning, functional spaces that inspire and endure.",
      overview: "Our architectural services combine innovative design thinking with practical engineering principles to create spaces that are not only beautiful but also sustainable and efficient. We specialize in residential, commercial, and mixed-use developments.",
      keyServices: [
        "Conceptual Design & Master Planning",
        "3D Visualization & Rendering",
        "Sustainable Architecture Solutions",
        "Interior Space Planning",
        "Heritage & Restoration Projects",
        "Commercial & Retail Design",
      ],
      benefits: [
        "Award-winning design team with 25+ years experience",
        "LEED & Green Building expertise",
        "Latest CAD and BIM technology",
        "Client-centric approach",
        "On-time project delivery",
        "Cost-effective solutions",
      ],
      process: [
        {
          title: "Consultation & Analysis",
          description: "Understanding your vision, requirements, and site constraints through detailed consultation.",
        },
        {
          title: "Concept Development",
          description: "Creating multiple design concepts and renderings for your selection and feedback.",
        },
        {
          title: "Detailed Design",
          description: "Developing comprehensive drawings and specifications based on chosen concept.",
        },
        {
          title: "Documentation & Permits",
          description: "Preparing detailed construction documents and securing all necessary approvals.",
        },
      ],
      caseStudies: [
        {
          name: "Metropolitan Tower Complex",
          location: "New York, USA",
          description: "45-story sustainable office complex with LEED Platinum certification",
        },
        {
          name: "Residential Community",
          location: "Mumbai, India",
          description: "Mixed-use residential development with 500+ units",
        },
      ],
      team: "Our architecture team includes AIIA members, LEED consultants, and award-winning designers.",
    },
    engineering: {
      title: "Engineering",
      shortTitle: "Structural & MEP Engineering",
      image: engineeringImg,
      description: "Innovative engineering solutions for complex challenges.",
      overview: "We provide comprehensive engineering services including structural design, MEP (Mechanical, Electrical, Plumbing) systems, and infrastructure development. Our team ensures every project meets highest safety and performance standards.",
      keyServices: [
        "Structural Design & Analysis",
        "MEP Systems Design",
        "Building Services Engineering",
        "Sustainability Engineering",
        "Infrastructure Development",
        "Specialized Systems Design",
      ],
      benefits: [
        "Experienced civil and MEP engineers",
        "Advanced engineering software (SAP, STAAD, Revit MEP)",
        "Energy-efficient systems design",
        "Cost optimization expertise",
        "Code compliance assurance",
        "Innovation in green technology",
      ],
      process: [
        {
          title: "Site Assessment",
          description: "Comprehensive analysis of site conditions and geological factors.",
        },
        {
          title: "System Design",
          description: "Designing efficient structural and MEP systems for the project.",
        },
        {
          title: "Analysis & Testing",
          description: "Detailed analysis and simulation for performance validation.",
        },
        {
          title: "Implementation Support",
          description: "On-site support and coordination during construction phase.",
        },
      ],
      caseStudies: [
        {
          name: "Eco-Friendly Commercial Hub",
          location: "Berlin, Germany",
          description: "Net-zero energy building with renewable systems",
        },
        {
          name: "Smart City Infrastructure",
          location: "Singapore, Asia",
          description: "Advanced infrastructure for modern urban development",
        },
      ],
      team: "Our engineering team comprises BE/BTech graduates, certified engineers, and specialists in sustainable systems.",
    },
    pmc: {
      title: "PMC",
      shortTitle: "Project Management & Consulting",
      image: pmcImg,
      description: "Expert project management from concept to completion.",
      overview: "Our Project Management and Consulting services ensure your project is delivered on time, within budget, and to the highest quality standards. We manage all aspects from planning to execution and handover.",
      keyServices: [
        "Project Planning & Scheduling",
        "Budget Management & Cost Control",
        "Quality Assurance & Compliance",
        "Risk Management",
        "Stakeholder Management",
        "Resource Optimization",
      ],
      benefits: [
        "25+ years of project management experience",
        "PMP certified professionals",
        "Advanced project management software",
        "Proven track record with 150+ projects",
        "Risk mitigation strategies",
        "Transparent reporting and communication",
      ],
      process: [
        {
          title: "Project Initiation",
          description: "Setting up project structure, team, and baseline plans.",
        },
        {
          title: "Planning & Scheduling",
          description: "Creating detailed schedules and resource allocation plans.",
        },
        {
          title: "Execution & Monitoring",
          description: "Daily management, monitoring, and reporting of project progress.",
        },
        {
          title: "Closeout & Handover",
          description: "Final quality checks, documentation, and project closure.",
        },
      ],
      caseStudies: [
        {
          name: "Corporate Campus Development",
          location: "Singapore, Asia",
          description: "$200M project managing 800,000 sq ft development",
        },
        {
          name: "Multi-Phase Urban Complex",
          location: "Dubai, UAE",
          description: "Complex coordination of multiple contractors and phases",
        },
      ],
      team: "Our PMC team includes PMP certified managers, quantity surveyors, and business analysts.",
    },
  };

  const service = servicesData[id as string] || servicesData.architecture;

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white">
        <Header />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden pt-20">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {service.title}
            </h1>
            <p className="text-white/90 font-poppins text-lg max-w-2xl">{service.shortTitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-sm p-8 sticky top-28">
              <h3 className="text-lg font-bold text-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Quick Links
              </h3>
              <div className="space-y-3">
                {["architecture", "engineering", "pmc"].map((s) => (
                  <Link
                    key={s}
                    to={`/service/${s}`}
                    className={`block px-4 py-2 rounded-sm font-poppins transition-all ${
                      id === s
                        ? "bg-accent text-black font-bold"
                        : "text-primary hover:bg-gray-100"
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full mt-8 px-6 py-3 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm">
                Get Consultation
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Overview
              </h2>
              <p className="text-gray-600 font-poppins leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Key Services */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Key Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.keyServices.map((svc: string, idx: number) => (
                  <div key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-sm hover:bg-gray-100 transition-colors">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-poppins text-gray-700">{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Why Choose Us
              </h2>
              <div className="space-y-3">
                {service.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="font-poppins text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step: any, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black font-bold font-grotesk">
                        {idx + 1}
                      </div>
                      {idx < service.process.length - 1 && (
                        <div className="w-0.5 h-20 bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 font-poppins">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Featured Projects
              </h2>
              <div className="space-y-4">
                {service.caseStudies.map((study: any, idx: number) => (
                  <div key={idx} className="p-6 border border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {study.name}
                    </h3>
                    <p className="text-sm text-accent font-poppins font-bold mb-2">{study.location}</p>
                    <p className="text-gray-600 font-poppins">{study.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-sm p-8">
              <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Expert Team
              </h3>
              <p className="text-gray-600 font-poppins mb-6">{service.team}</p>
              <Link to="/team" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm">
                Meet Our Team
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </PageWrapper>
  );
};

export default ServiceDetail;
