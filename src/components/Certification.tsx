import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Users, Award } from "lucide-react";

const Certification = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee for all our solutions"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development process ensures quick turnaround without compromising quality"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with expertise across all modern tech stacks"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful projects delivering measurable business value"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Why Choose <span className="text-primary">TechSolutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in digital transformation with industry-leading expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 bg-card border-border shadow-[var(--shadow-soft)]">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent rounded-full w-fit">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;