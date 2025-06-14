
import { ExternalLink, BarChart3, Cpu, Database, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Attrition Intelligence Dashboard",
    description: "HR analytics dashboard built using Power BI to analyze employee attrition patterns and provide actionable insights.",
    icon: <BarChart3 className="h-8 w-8 text-orange-400" />,
    tools: ["Power BI", "Excel", "SQL"],
    github: "#"
  },
  {
    title: "Sudoku Solver",
    description: "Java + Python implementation of backtracking-based Sudoku solver with optimized algorithms.",
    icon: <Cpu className="h-8 w-8 text-orange-400" />,
    tools: ["Java", "Python", "Algorithms"],
    github: "#"
  },
  {
    title: "Kafka Data Pipeline",
    description: "Real-time streaming pipeline built with Apache Kafka and Docker for processing large-scale data streams.",
    icon: <Database className="h-8 w-8 text-orange-400" />,
    tools: ["Apache Kafka", "Docker", "Java"],
    github: "#"
  },
  {
    title: "Finance Portfolio Tracker",
    description: "Personal finance dashboard in Excel and Power BI for tracking investments and financial performance.",
    icon: <TrendingUp className="h-8 w-8 text-orange-400" />,
    tools: ["Excel", "Power BI", "DAX"],
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated pentagon background */}
      <div className="absolute top-1/4 left-16 w-80 h-80 opacity-20">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-[float_7s_ease-in-out_infinite] transform -rotate-12"
        >
          <defs>
            <linearGradient id="pentagon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
          </defs>
          <polygon
            points="100,20 180,70 150,150 50,150 20,70"
            fill="url(#pentagon-gradient)"
            className="blur-md"
          />
        </svg>
      </div>
      
      {/* Floating rounded square */}
      <div className="absolute bottom-1/3 right-20 w-60 h-60 opacity-25">
        <div className="w-full h-full bg-gradient-to-bl from-orange-400 to-orange-600 rounded-2xl transform rotate-12 blur-lg animate-[float_9s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in data analysis and backend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gray-900/50 border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 group 
                          ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} 
                          hover:border-2 hover:border-orange-500`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-400 hover:bg-orange-500/20">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-white group-hover:text-orange-400 transition-colors font-['Poppins']">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="secondary" 
                      className="bg-orange-500/20 text-orange-300 border border-orange-500/30 hover:bg-orange-500/30 hover:shadow-sm hover:shadow-orange-500/20 transition-all duration-200"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
