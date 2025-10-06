import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Server, Workflow, Brain, Laptop, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies for optimal performance.",
      features: ["Responsive design", "SEO optimized", "Fast loading", "Modern frameworks"],
      buttonText: "Start Project"
    },
    {
      icon: Server,
      title: "Web Hosting",
      description: "Reliable, secure hosting solutions with 99.9% uptime and 24/7 monitoring.",
      features: ["99.9% uptime", "SSL certificates", "Daily backups", "24/7 support"],
      buttonText: "Get Hosting"
    },
    {
      icon: Workflow,
      title: "Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      features: ["Process optimization", "Workflow automation", "Integration services", "Time-saving tools"],
      buttonText: "Automate Now"
    },
    {
      icon: Brain,
      title: "AI Tools",
      description: "Leverage cutting-edge AI technology to enhance your business capabilities.",
      features: ["AI integration", "Machine learning", "Data analytics", "Smart solutions"],
      buttonText: "Explore AI"
    },
    {
      icon: Laptop,
      title: "Desktop Applications",
      description: "Powerful desktop software tailored to your specific business requirements.",
      features: ["Cross-platform", "Custom features", "High performance", "User-friendly"],
      buttonText: "Build App"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android", "Native performance", "Intuitive UI/UX", "App store ready"],
      buttonText: "Create App"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to elevate your business to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-l-4 border-l-primary bg-card shadow-[var(--shadow-soft)] hover:translate-y-[-2px]">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300" 
                  size="lg"
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;