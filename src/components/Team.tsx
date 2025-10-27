import teamAbhijeet from "@/assets/team-abhijeet.jpg";
import teamPrakash from "@/assets/team-prakash.jpg";
import teamSantosh from "@/assets/team-santosh.jpg";
import teamNarendra from "@/assets/team-narendra.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Abhijeet Patrepekar",
      role: "Structural Advisor",
      expertise: "Structural Engineering",
      image: teamAbhijeet,
    },
    {
      name: "Prakash Vichare",
      role: "Ex-BMC Officer",
      expertise: "Regulatory Compliance",
      image: teamPrakash,
    },
    {
      name: "Santosh Dubey",
      role: "Senior Architect",
      expertise: "Architectural Design",
      image: teamSantosh,
    },
    {
      name: "Narendra Panchal",
      role: "Project Manager",
      expertise: "PMC & Execution",
      image: teamNarendra,
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <div className="inline-block accent-border pl-4 mb-3">
            <h2 className="text-3xl md:text-4xl font-light text-primary tracking-tight">
              Our Team
            </h2>
          </div>
          <div className="h-px w-16 bg-accent mx-auto mb-4" />
          <p className="text-sm text-corporate max-w-2xl mx-auto">
            Meet our experienced professionals dedicated to delivering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-card border border-border/50 rounded-sm hover-lift slide-up overflow-hidden shadow-subtle"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-light text-primary mb-1 tracking-tight">
                  {member.name}
                </h3>

                <p className="text-accent text-xs font-light mb-2 uppercase tracking-wider">
                  {member.role}
                </p>

                <p className="text-xs text-corporate leading-relaxed">
                  {member.expertise}
                </p>

                <div className="mt-4 h-px w-12 bg-accent/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
