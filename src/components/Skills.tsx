
import { Database, Code, Wrench, Globe, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Data Tools",
    icon: <Database className="h-8 w-8 text-orange-400" />,
    skills: ["SQL", "Excel", "Power BI", "Python", "Pandas", "NumPy", "Matplotlib"],
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    title: "Backend",
    icon: <Code className="h-8 w-8 text-orange-400" />,
    skills: ["Java", "Apache Kafka", "Docker"],
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    title: "Programming Languages",
    icon: <Terminal className="h-8 w-8 text-orange-400" />,
    skills: ["C++", "HTML", "CSS"],
    color: "from-orange-500/20 to-orange-600/20"
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative overflow-hidden">
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical toolkit spans across data analysis, backend development, and various supporting technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} p-6 rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-white font-['Poppins'] group-hover:text-orange-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-[#0D0D0D]/50 px-3 py-2 rounded-lg text-gray-300 text-sm hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-200 hover:shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
