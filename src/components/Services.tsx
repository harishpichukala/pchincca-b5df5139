import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Users, Car, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "E-Learning Classes",
      description: "Complete your theory portion online at your own pace with our interactive modules.",
      features: ["Self-paced learning", "Interactive modules", "Progress tracking", "MTO approved"],
      buttonText: "Start Online"
    },
    {
      icon: Users,
      title: "In-Class Training",
      description: "Traditional classroom setting with certified instructors for comprehensive learning.",
      features: ["Certified instructors", "Small class sizes", "Interactive sessions", "Q&A support"],
      buttonText: "Book Class"
    },
    {
      icon: Car,
      title: "In-Car Lessons",
      description: "Hands-on driving experience with professional instructors in dual-control vehicles.",
      features: ["Professional instructors", "Dual-control vehicles", "Flexible scheduling", "Personalized training"],
      buttonText: "Schedule Lesson"
    },
    {
      icon: Shield,
      title: "Vehicle For Hire (PTC)",
      description: "Specialized training for those seeking commercial driving licenses and certifications.",
      features: ["Commercial license prep", "PTC certification", "Industry standards", "Job placement support"],
      buttonText: "Learn More"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Driving Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of MTO-approved driving courses designed to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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