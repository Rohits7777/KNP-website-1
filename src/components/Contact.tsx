import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <div className="inline-block accent-border pl-4 mb-3">
            <h2 className="text-3xl md:text-4xl font-light text-primary tracking-tight">
              Get In Touch
            </h2>
          </div>
          <div className="h-px w-16 bg-accent mx-auto mb-4" />
          <p className="text-sm text-corporate max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="minimal"
                className="w-full font-light"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="slide-up delay-100">
            <div className="space-y-6">
              <div className="flex items-start gap-3 pb-6 border-b border-border/50">
                <div className="w-10 h-10 bg-accent/5 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-light text-primary mb-1 uppercase tracking-wider">Email</h3>
                  <a
                    href="mailto:info@knpconsultants.com"
                    className="text-sm text-corporate hover:text-accent transition-colors"
                  >
                    info@knpconsultants.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-6 border-b border-border/50">
                <div className="w-10 h-10 bg-accent/5 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-light text-primary mb-1 uppercase tracking-wider">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-corporate hover:text-accent transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-6 border-b border-border/50">
                <div className="w-10 h-10 bg-accent/5 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-light text-primary mb-1 uppercase tracking-wider">Office</h3>
                  <p className="text-sm text-corporate leading-relaxed">
                    Mumbai, Maharashtra<br />
                    India - 400001
                  </p>
                </div>
              </div>

              <div className="bg-accent/5 p-5 rounded-sm mt-6 border border-accent/10">
                <h3 className="text-sm font-light text-primary mb-3 uppercase tracking-wider">Business Hours</h3>
                <div className="space-y-1 text-xs text-corporate">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
