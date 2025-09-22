import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Packages", href: "#packages" },
    { name: "Check Certification", href: "#certification" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Phone: (416) 555-DRIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Email: info@skilldrivepro.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>MTO-APPROVED COURSES • BOOK YOUR ROAD TEST FOR FREE</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              SkillDrive<span className="text-secondary">Pro</span>
            </h1>
            <span className="ml-3 text-sm text-muted-foreground">
              DRIVING SCHOOL
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90">
            REGISTER ONLINE
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;