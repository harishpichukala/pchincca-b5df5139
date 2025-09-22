import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const locations = [
    "Barrie", "Brampton", "Cambridge", "Markham", "Milton", "Mississauga",
    "Newmarket", "North York", "Richmond Hill", "Scarborough", "Toronto", 
    "Vaughan", "Yonge-Eglinton"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Location badges */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto py-8 px-4">
          <h3 className="text-xl font-semibold text-center mb-6">Our Service Locations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <span 
                key={location} 
                className="bg-white/10 px-3 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer"
              >
                {location}
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
              OPD <span className="text-secondary">DRIVING SCHOOL</span>
            </h4>
            <p className="text-primary-foreground/80 mb-4">
              Ministry-Approved BDE Course Provider serving the Greater Toronto Area 
              with professional driving instruction since 1998.
            </p>
            <p className="text-sm text-primary-foreground/60">
              "We Strive for Better" - Your success is our commitment.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Information</h5>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(416) 555-DRIVE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@opddriving.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Multiple locations across GTA<br />See locations above</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• G1 Exit to G2 Courses</li>
              <li>• G2 Exit to G Courses</li>
              <li>• E-Learning Classes</li>
              <li>• In-Car Lessons</li>
              <li>• Vehicle for Hire (PTC)</li>
              <li>• Senior Driver Courses</li>
              <li>• New Immigrant Courses</li>
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
              <p className="text-sm font-semibold text-secondary">We book your road test for FREE!</p>
              <p className="text-xs text-primary-foreground/70">Call us to schedule your test</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center text-primary-foreground/60">
          <p>&copy; 2024 OPD Driving School. All rights reserved. | MTO Approved Course Provider</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;