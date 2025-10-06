import { Button } from "@/components/ui/button";
import { Code, CheckCircle, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 px-4 bg-[var(--gradient-background)] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 rotate-12">
          <Code className="w-32 h-32 text-primary/20" />
        </div>
        <div className="absolute bottom-10 right-20 -rotate-12">
          <Zap className="w-24 h-24 text-primary/15" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            Transform Your Business with
            <br />
            <span className="text-primary">Innovative IT Solutions</span>
          </h1>

          <p className="text-xl mb-8 text-muted-foreground">
            Expert IT consulting and development services
            <br />
            From websites to AI tools, we build solutions that drive growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              GET STARTED
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              VIEW PORTFOLIO
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <CheckCircle className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">500+</h3>
              <p className="text-lg text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">200+</h3>
              <p className="text-lg text-muted-foreground">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <Zap className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">10+</h3>
              <p className="text-lg text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;