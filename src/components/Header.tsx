import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-foreground text-background py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Phone: (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Email: info@itconsulting.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>INNOVATIVE SOLUTIONS • FREE CONSULTATION</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background shadow-[var(--shadow-soft)] py-4 px-4 border-b border-border">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Tech<span className="text-secondary">Solutions</span>
            </h1>
            <span className="ml-3 text-sm text-muted-foreground">
              IT Consulting & Services
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

          <Button variant="default" size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
            GET A QUOTE
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;