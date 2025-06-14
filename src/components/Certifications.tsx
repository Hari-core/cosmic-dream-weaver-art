
import { Award, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    status: "Completed",
    icon: <CheckCircle className="h-6 w-6 text-orange-400" />
  },
  {
    title: "Basics of Electronics & Robotics",
    issuer: "Technical Institute",
    status: "Completed",
    icon: <CheckCircle className="h-6 w-6 text-orange-400" />
  },
  {
    title: "Data Analyst Bootcamp",
    issuer: "Professional Training",
    status: "Ongoing",
    description: "Excel, Power BI, SQL, Python",
    icon: <Calendar className="h-6 w-6 text-orange-400" />
  }
];

export const Certifications = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated star background */}
      <div className="absolute top-1/4 right-16 w-64 h-64 opacity-25">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-[float_6s_ease-in-out_infinite] transform rotate-12"
        >
          <defs>
            <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FF6347" />
            </linearGradient>
          </defs>
          <polygon
            points="100,20 115,70 165,70 125,100 140,150 100,120 60,150 75,100 35,70 85,70"
            fill="url(#star-gradient)"
            className="blur-md"
          />
        </svg>
      </div>
      
      {/* Floating parallelogram */}
      <div className="absolute bottom-1/3 left-20 w-72 h-40 opacity-20">
        <div className="w-full h-full bg-gradient-to-tr from-orange-400 to-orange-600 transform skew-x-12 skew-y-3 blur-lg animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in data analysis and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Award className="h-8 w-8 text-orange-400" />
                  {cert.icon}
                </div>
                <CardTitle className="text-white text-lg font-['Poppins']">{cert.title}</CardTitle>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={cert.status === "Completed" ? "default" : "secondary"}
                    className={cert.status === "Completed" ? "bg-orange-600 hover:bg-orange-700" : "bg-orange-500/20 text-orange-300 border-orange-500/30"}
                  >
                    {cert.status}
                  </Badge>
                </div>
                {cert.description && (
                  <p className="text-gray-400 text-sm mt-3">{cert.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
