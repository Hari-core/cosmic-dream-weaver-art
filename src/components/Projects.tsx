
import { ExternalLink, BarChart3, Cpu, Database, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Attrition Intelligence Dashboard",
    description: "HR analytics dashboard built using Power BI to analyze employee attrition patterns and provide actionable insights.",
    icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
    tools: ["Power BI", "Excel", "SQL"],
    github: "#"
  },
  {
    title: "Sudoku Solver",
    description: "Java + Python implementation of backtracking-based Sudoku solver with optimized algorithms.",
    icon: <Cpu className="h-8 w-8 text-yellow-400" />,
    tools: ["Java", "Python", "Algorithms"],
    github: "#"
  },
  {
    title: "Kafka Data Pipeline",
    description: "Real-time streaming pipeline built with Apache Kafka and Docker for processing large-scale data streams.",
    icon: <Database className="h-8 w-8 text-green-400" />,
    tools: ["Apache Kafka", "Docker", "Java"],
    github: "#"
  },
  {
    title: "Finance Portfolio Tracker",
    description: "Personal finance dashboard in Excel and Power BI for tracking investments and financial performance.",
    icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
    tools: ["Excel", "Power BI", "DAX"],
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in data analysis and backend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="secondary" className="bg-gray-700 text-gray-300">
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
