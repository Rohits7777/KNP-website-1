import { Link } from "react-router-dom";
import knpLogo from "@/assets/knp-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <img
              src={knpLogo}
              alt="KNP Consultants"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-xs text-primary-foreground/70 mb-3 font-light tracking-wide">
              Designing Tomorrow's Skylines
            </p>
            <p className="text-xs text-primary-foreground/60 font-light uppercase tracking-widest">
              Architects · Engineers · PMC
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-light uppercase tracking-wider mb-4 text-primary-foreground/90">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Our Team", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(
                          `#${item.toLowerCase().replace(" ", "-")}`
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="text-xs text-primary-foreground/70 hover:text-accent transition-all duration-400 font-light"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-light uppercase tracking-wider mb-4 text-primary-foreground/90">Contact</h3>
            <ul className="space-y-2 text-xs text-primary-foreground/70 font-light">
              <li>Mumbai, Maharashtra</li>
              <li>India - 400001</li>
              <li className="mt-4">
                <a
                  href="mailto:info@knpconsultants.com"
                  className="hover:text-accent transition-colors"
                >
                  info@knpconsultants.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-accent transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60 font-light">
            <p>© {currentYear} KNP Consultants. All Rights Reserved.</p>
            <p>
              In association with{" "}
              <a
                href="https://www.buzzealy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors"
              >
                BUZZ-EALY
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
