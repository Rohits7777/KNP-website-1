import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  // Sample project data - in a real app, this would come from an API
  const projectImages = [project1, project2, project3];
  
  const project = {
    title: "Luxury Residential Tower",
    location: "Andheri West, Mumbai, Maharashtra",
    category: "Residential",
    area: "2.5 Lakh sq.ft",
    mainImage: project1,
    description:
      "A premium residential development featuring state-of-the-art amenities and contemporary architecture. This project exemplifies our commitment to creating sustainable and luxurious living spaces.",
    amenities: [
      "24/7 Security",
      "Swimming Pool",
      "Gymnasium",
      "Landscaped Gardens",
      "Children's Play Area",
      "Club House",
      "Indoor Games",
      "Yoga & Meditation Hall",
    ],
    features: [
      "40 Floors",
      "2 & 3 BHK Apartments",
      "Earthquake Resistant Structure",
      "Rainwater Harvesting",
      "Solar Power Backup",
      "Covered Parking",
      "High-Speed Elevators",
      "Smart Home Features",
    ],
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Hero Section */}
          <div className="mb-12 slide-up">
            <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {projectImages.map((image, idx) => (
                <div key={idx} className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Gallery ${idx + 1}`}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="slide-up">
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-light text-primary mt-2 mb-4">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2 text-corporate mb-6">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>{project.location}</span>
                </div>
                <p className="text-lg text-corporate leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="slide-up">
                <h2 className="text-2xl font-medium text-primary mb-6 accent-border pl-6">
                  Amenities
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 bg-card p-4 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-corporate">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="slide-up">
                <h2 className="text-2xl font-medium text-primary mb-6 accent-border pl-6">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-card p-4 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-corporate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="slide-up delay-100">
              <div className="bg-card p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-medium text-primary mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Project Area
                    </div>
                    <div className="text-lg font-medium text-primary">
                      {project.area}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Category
                    </div>
                    <div className="text-lg font-medium text-primary">
                      {project.category}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Location
                    </div>
                    <div className="text-lg font-medium text-primary">
                      {project.location}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-medium text-primary mb-4">
                    Interested?
                  </h3>
                  <p className="text-sm text-corporate mb-4">
                    Get in touch with us to learn more about this project.
                  </p>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </PageWrapper>
  );
};

export default ProjectDetail;
