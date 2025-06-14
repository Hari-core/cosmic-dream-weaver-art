
import { Database, Code, Wrench, Globe } from "lucide-react";

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
    title: "Programming",
    icon: <Wrench className="h-8 w-8 text-orange-400" />,
    skills: ["Git", "GitHub", "Jupyter", "VS Code"],
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    title: "Web",
    icon: <Globe className="h-8 w-8 text-orange-400" />,
    skills: ["HTML", "CSS"],
    color: "from-orange-500/20 to-orange-600/20"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical toolkit spans across data analysis, backend development, and various supporting technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
