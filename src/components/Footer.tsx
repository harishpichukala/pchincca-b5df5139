import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const technologies = [
    "React", "Node.js", "Python", "TypeScript", "AWS", "Azure",
    "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "GraphQL", 
    "Next.js", "Vue.js"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Location badges */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto py-8 px-4">
          <h3 className="text-xl font-semibold text-center mb-6">Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="bg-white/10 px-3 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">
              Tech<span className="text-secondary">Solutions</span>
            </h4>
            <p className="text-primary-foreground/80 mb-4">
              Leading IT consulting and development firm delivering innovative digital solutions 
              that drive business growth and transformation.
            </p>
            <p className="text-sm text-primary-foreground/60">
              "Innovation Through Technology" - Your digital success partner.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Information</h5>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@itconsulting.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Serving clients worldwide<br />Remote & on-site available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Website Development</li>
              <li>• Web Hosting</li>
              <li>• Automation Services</li>
              <li>• AI Tools & Integration</li>
              <li>• Desktop Applications</li>
              <li>• Mobile App Development</li>
              <li>• IT Consulting</li>
            </ul>
          </div>

          {/* Business hours */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Business Hours</h5>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <div>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
              <p className="text-sm font-semibold text-secondary">Free Consultation Available!</p>
              <p className="text-xs text-primary-foreground/70">Contact us for a project quote</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center text-primary-foreground/60">
          <p>&copy; 2024 TechSolutions. All rights reserved. | IT Consulting & Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;