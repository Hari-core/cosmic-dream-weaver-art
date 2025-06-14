
import {
  Database,
  Code,
  Wrench,
  Globe,
  Terminal,
  BarChart2,
  Table2,
  FileCode2,
  FileSpreadsheet,
  Server,
  FileJson2,
} from "lucide-react";
import React from "react";

// Map each skill to a Lucide icon where available.
// Use only available icons. Use Server or FileCode2 for Docker, Java, Python as fallback.
const skillIconMap: Record<string, React.ReactNode> = {
  "SQL": <Database className="h-5 w-5 text-orange-400 animate-float-icon" />,
  "Excel": <FileSpreadsheet className="h-5 w-5 text-green-400 animate-float-icon" />,
  "Power BI": <BarChart2 className="h-5 w-5 text-yellow-400 animate-float-icon" />,
  "Python": <FileCode2 className="h-5 w-5 text-blue-400 animate-float-icon" />,
  "Pandas": <FileSpreadsheet className="h-5 w-5 text-purple-400 animate-float-icon" />,
  "NumPy": <FileSpreadsheet className="h-5 w-5 text-indigo-400 animate-float-icon" />,
  "Matplotlib": <BarChart2 className="h-5 w-5 text-pink-400 animate-float-icon" />,
  "Java": <FileCode2 className="h-5 w-5 text-red-400 animate-float-icon" />,
  "Apache Kafka": <Server className="h-5 w-5 text-teal-400 animate-float-icon" />,
  "Docker": <Server className="h-5 w-5 text-blue-500 animate-float-icon" />,
  "C++": <FileCode2 className="h-5 w-5 text-blue-300 animate-float-icon" />,
  "HTML": <FileCode2 className="h-5 w-5 text-orange-500 animate-float-icon" />,
  "CSS": <FileCode2 className="h-5 w-5 text-blue-500 animate-float-icon" />,
};

const skillCategories = [
  {
    title: "Data Tools",
    icon: <Database className="h-8 w-8 text-orange-400" />,
    skills: [
      "SQL",
      "Excel",
      "Power BI",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    title: "Backend",
    icon: <Code className="h-8 w-8 text-teal-400" />,
    skills: ["Java", "Apache Kafka", "Docker"],
    color: "from-teal-500/20 to-teal-600/20",
  },
  {
    title: "Programming Languages",
    icon: <Terminal className="h-8 w-8 text-purple-400" />,
    skills: ["C++", "HTML", "CSS"],
    color: "from-purple-500/20 to-purple-600/20",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Animated octagon background */}
      <div className="absolute top-1/3 right-24 w-72 h-72 opacity-20">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-[float_8s_ease-in-out_infinite] transform rotate-45"
        >
          <defs>
            <linearGradient id="octagon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#FF6347" />
            </linearGradient>
          </defs>
          <polygon
            points="100,20 150,35 180,70 165,120 135,155 65,155 35,120 20,70 35,35"
            fill="url(#octagon-gradient)"
            className="blur-sm"
          />
        </svg>
      </div>
      {/* Floating ellipse */}
      <div className="absolute bottom-1/4 left-16 w-80 h-48 opacity-25">
        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transform -rotate-12 blur-xl animate-[float_6s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical toolkit spans across data analysis, backend development, and various supporting technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} p-6 rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-foreground font-['Poppins'] group-hover:text-orange-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 bg-background/50 px-3 py-2 rounded-lg text-muted-foreground text-sm hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:shadow-sm"
                  >
                    {skillIconMap[skill] || (
                      <Wrench className="h-5 w-5 text-muted-foreground animate-float-icon" />
                    )}
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
        @keyframes float-icon {
          0% { transform: translateY(12px); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-float-icon {
          animation: float-icon 0.9s cubic-bezier(.44,1.2,.39,1) both;
        }
        `}
      </style>
    </section>
  );
};
