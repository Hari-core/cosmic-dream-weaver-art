
import { Award, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    status: "Completed",
    icon: <CheckCircle className="h-6 w-6 text-green-400" />
  },
  {
    title: "Basics of Electronics & Robotics",
    issuer: "Technical Institute",
    status: "Completed",
    icon: <CheckCircle className="h-6 w-6 text-green-400" />
  },
  {
    title: "Data Analyst Bootcamp",
    issuer: "Professional Training",
    status: "Ongoing",
    description: "Excel, Power BI, SQL, Python",
    icon: <Calendar className="h-6 w-6 text-yellow-400" />
  }
];

export const Certifications = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in data analysis and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Award className="h-8 w-8 text-blue-400" />
                  {cert.icon}
                </div>
                <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={cert.status === "Completed" ? "default" : "secondary"}
                    className={cert.status === "Completed" ? "bg-green-600" : "bg-yellow-600"}
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
