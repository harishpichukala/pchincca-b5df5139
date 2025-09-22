import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Medal, Award, CheckCircle } from "lucide-react";

const Certification = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Certification info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground text-center">
              A Driving School You Can <span className="text-primary">Rely On</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-primary shadow-lg">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Medal className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-xl">MTO Certified</CardTitle>
                    <CardDescription>Ministry of Transportation Approved</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our school is fully certified by the Ministry of Transportation Ontario, ensuring 
                    you receive quality education that meets all official requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-lg">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Award className="w-8 h-8 text-secondary mr-4" />
                  <div>
                    <CardTitle className="text-xl">Expert Instructors</CardTitle>
                    <CardDescription>Experienced & Professional</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our certified driving instructors provide industry-leading techniques with 
                    personalized attention to ensure your success.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Check Certification
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                Learn to Drive Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;