import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import team1 from "@/assets/team-abhijeet.jpg";
import team2 from "@/assets/team-narendra.jpg";
import team3 from "@/assets/team-prakash.jpg";
import team4 from "@/assets/team-santosh.jpg";
import { Mail, Linkedin, Phone } from "lucide-react";

const TeamPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const teamMembers = [
    {
      name: "Abhijeet Sharma",
      role: "Principal Architect",
      department: "architecture",
      image: team1,
      expertise: ["Sustainable Architecture", "Master Planning", "3D Design"],
      bio: "With 20+ years of experience, Abhijeet leads our architectural division with innovation and excellence.",
      email: "abhijeet@knp-consultants.com",
      phone: "+91 98765 43210",
    },
    {
      name: "Narendra Patel",
      role: "Lead Structural Engineer",
      department: "engineering",
      image: team2,
      expertise: ["Structural Design", "BIM Modeling", "Green Engineering"],
      bio: "Narendra brings 18 years of expertise in structural engineering and sustainable design practices.",
      email: "narendra@knp-consultants.com",
      phone: "+91 98765 43211",
    },
    {
      name: "Prakash Kumar",
      role: "Chief Project Manager",
      department: "pmc",
      image: team3,
      expertise: ["Project Planning", "Cost Management", "Quality Assurance"],
      bio: "Prakash's 22 years of PMC experience ensures every project is delivered with excellence.",
      email: "prakash@knp-consultants.com",
      phone: "+91 98765 43212",
    },
    {
      name: "Santosh Reddy",
      role: "MEP Systems Consultant",
      department: "engineering",
      image: team4,
      expertise: ["MEP Design", "Smart Building Systems", "Energy Efficiency"],
      bio: "Santosh specializes in advanced MEP systems and sustainable building technology solutions.",
      email: "santosh@knp-consultants.com",
      phone: "+91 98765 43213",
    },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "architecture", name: "Architecture" },
    { id: "engineering", name: "Engineering" },
    { id: "pmc", name: "Project Management" },
  ];

  const filteredTeam =
    selectedFilter === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.department === selectedFilter);

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
            Our Team
          </h1>
          <p className="text-xl text-white/90 font-poppins max-w-2xl mx-auto">
            Meet the talented professionals behind KNP Consultants' success
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            120+ Talented Professionals
          </h2>
          <p className="text-gray-600 font-poppins max-w-2xl">
            Our team comprises accomplished architects, engineers, project managers, and consultants with diverse backgrounds and expertise. Together, we create innovative solutions that transform visions into reality.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedFilter(dept.id)}
              className={`px-6 py-2 rounded-sm font-poppins font-bold text-sm uppercase tracking-widest transition-all ${
                selectedFilter === dept.id
                  ? "bg-accent text-black"
                  : "border border-accent text-primary hover:bg-gray-50"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTeam.map((member, index) => (
            <div
              key={member.name}
              className={`group opacity-0 animate-fadeInUp rounded-sm overflow-hidden border border-gray-200 hover:border-accent hover:shadow-2xl transition-all duration-500`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Overlay Contact */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 bg-accent text-black rounded-full hover:scale-110 transition-transform"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="p-3 bg-accent text-black rounded-full hover:scale-110 transition-transform"
                    title="Phone"
                  >
                    <Phone size={20} />
                  </a>
                  <a href="#" className="p-3 bg-accent text-black rounded-full hover:scale-110 transition-transform" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white group-hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-bold text-primary mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-poppins font-bold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 font-poppins mb-4 line-clamp-2">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-sm font-poppins font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <section className="mt-20 pt-20 border-t border-gray-200">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-sm p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join Our Team
            </h2>
            <p className="text-gray-600 font-poppins mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals to join our growing team. If you're passionate about architecture, engineering, or project management, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@knp-consultants.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm"
            >
              Apply Now
              <span>→</span>
            </a>
          </div>
        </section>

        {/* Team Stats */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Strength
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "120+", label: "Team Members" },
              { number: "25+", label: "Years Average Experience" },
              { number: "50+", label: "Certifications" },
              { number: "15+", label: "International Awards" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-sm hover:bg-gray-100 transition-colors">
                <div className="text-4xl font-bold text-accent mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-poppins font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
    </PageWrapper>
  );
};

export default TeamPage;
