import { Button } from "@/components/ui/button";
import { Car, CheckCircle, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 rotate-12">
          <Car className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 right-20 -rotate-12">
          <Car className="w-24 h-24" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            #1 Driving School in
            <br />
            <span className="text-secondary">Greater Toronto Area</span>
          </h1>

          <p className="text-xl mb-8 opacity-90">
            MTO-Approved Beginner Driver Education Course Provider
            <br />
            Professional instructors with 98% passing rate
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold"
            >
              REGISTER NOW
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold"
            >
              CHECK CERTIFICATION
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-lg opacity-90">Passing Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">15,000+</h3>
              <p className="text-lg opacity-90">Students Trained</p>
            </div>
            <div className="flex flex-col items-center">
              <Car className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-lg opacity-90">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;