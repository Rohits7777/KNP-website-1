import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      title: "Address",
      content: "123 Architecture Plaza, Design District, City 400001, India",
      icon: MapPin,
    },
    {
      title: "Phone",
      content: "+91 22 1234 5678",
      icon: Phone,
    },
    {
      title: "Email",
      content: "info@knp-consultants.com",
      icon: Mail,
    },
    {
      title: "Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      icon: Clock,
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
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 font-poppins max-w-2xl mx-auto">
            We'd love to hear about your project and discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Contact Information
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent">
                        <Icon className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {info.title}
                      </h3>
                      <p className="text-gray-600 font-poppins">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-96 bg-gray-200 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 font-poppins">Google Map Integration</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2 font-poppins">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-poppins"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2 font-poppins">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-poppins"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2 font-poppins">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-poppins"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2 font-poppins">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-poppins"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="architecture">Architecture Inquiry</option>
                  <option value="engineering">Engineering Inquiry</option>
                  <option value="pmc">Project Management Inquiry</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2 font-poppins">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-poppins resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-black font-poppins font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Office Locations */}
        <section className="mt-20 pt-20 border-t border-gray-200">
          <h2 className="text-4xl font-bold text-primary text-center mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Mumbai",
                address: "123 Architecture Plaza, Design District",
                phone: "+91 22 1234 5678",
                email: "mumbai@knp-consultants.com",
              },
              {
                city: "Delhi",
                address: "456 Business Hub, Corporate Zone",
                phone: "+91 11 9876 5432",
                email: "delhi@knp-consultants.com",
              },
              {
                city: "Bangalore",
                address: "789 Tech Park, Innovation District",
                phone: "+91 80 5678 1234",
                email: "bangalore@knp-consultants.com",
              },
            ].map((office, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-sm hover:border-accent hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-accent font-poppins font-bold uppercase mb-1">Address</p>
                    <p className="text-gray-600 font-poppins">{office.address}</p>
                  </div>
                  <div>
                    <p className="text-xs text-accent font-poppins font-bold uppercase mb-1">Phone</p>
                    <p className="text-gray-600 font-poppins">{office.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-accent font-poppins font-bold uppercase mb-1">Email</p>
                    <p className="text-gray-600 font-poppins">{office.email}</p>
                  </div>
                </div>
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

export default ContactPage;
