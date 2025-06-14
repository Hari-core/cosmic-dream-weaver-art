
import { Database, Code, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Data",
    icon: <Database className="h-8 w-8 text-blue-400" />,
    skills: ["SQL", "Excel", "Power BI", "Python", "Pandas", "NumPy", "Matplotlib"],
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Backend",
    icon: <Code className="h-8 w-8 text-yellow-400" />,
    skills: ["Java", "Apache Kafka", "Docker"],
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    title: "Tools",
    icon: <Wrench className="h-8 w-8 text-green-400" />,
    skills: ["Git", "GitHub", "Jupyter", "VS Code"],
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Web",
    icon: <Globe className="h-8 w-8 text-purple-400" />,
    skills: ["HTML", "CSS"],
    color: "from-purple-500/20 to-purple-600/20"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
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
              className={`bg-gradient-to-br ${category.color} p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800/50 px-3 py-2 rounded-lg text-gray-300 text-sm hover:bg-gray-700/50 transition-colors"
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
