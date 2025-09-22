import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Medal, Award, CheckCircle, Calendar } from "lucide-react";

const Certification = () => {
  const upcomingCourses = [
    { date: "Oct 4,5,11,12", type: "Virtual & In Person Class" },
    { date: "Oct 7,14,21,28", type: "Virtual Class" },
    { date: "Oct 18,19,25,26", type: "Virtual & In Person Class" },
    { date: "Nov 1,2,8,9", type: "Virtual & In Person Class" },
    { date: "Nov 4,11,18,25", type: "Virtual Class" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Certification info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              A Driving School You Can <span className="text-primary">Rely On</span>
            </h2>
            
            <div className="space-y-8">
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

              <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right side - Upcoming courses */}
          <div>
            <Card className="shadow-xl border-0 bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-secondary" />
                  Upcoming 4-Day Courses
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Register now for our next available sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingCourses.map((course, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-white/10 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">{course.date}</p>
                      <p className="text-sm text-primary-foreground/80">{course.type}</p>
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      Available
                    </Badge>
                  </div>
                ))}
                
                <Button 
                  size="lg" 
                  className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
                >
                  REGISTER ONLINE
                </Button>
                
                <div className="text-center mt-4 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-primary-foreground/80">
                    📞 Call us at <span className="font-bold">(416) 555-DRIVE</span>
                  </p>
                  <p className="text-xs text-primary-foreground/60 mt-1">
                    We book your road test for FREE!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;