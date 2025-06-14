
import { Code, Database, Award, TrendingUp } from "lucide-react";
import { AnimatedSplashBehindTitle } from "@/components/AnimatedSplashBehindTitle";

const stats = [
  {
    icon: <Code className="h-8 w-8 text-orange-400" />,
    value: "4+",
    label: "Projects",
    description: "Built with passion"
  },
  {
    icon: <Database className="h-8 w-8 text-orange-400" />,
    value: "8+",
    label: "Technologies",
    description: "Mastered & counting"
  },
  {
    icon: <Award className="h-8 w-8 text-orange-400" />,
    value: "3+",
    label: "Certifications",
    description: "Achieved & ongoing"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-orange-400" />,
    value: "100%",
    label: "Dedication",
    description: "To continuous learning"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-['Poppins'] relative flex items-center justify-center">
            <AnimatedSplashBehindTitle svgWidth={180} svgHeight={65}>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                About Me
              </span>
            </AnimatedSplashBehindTitle>
          </h2>
          
          <p className="text-xl text-orange-400 mb-12 italic animate-fade-in">
            "Detail-driven and growth-fueled, solving real-world problems one dataset at a time."
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-left animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Data Analyst and Java Developer with a unique background in electronics. 
                I love transforming raw data into meaningful insights and building scalable backend solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently exploring data analytics, Kafka pipelines, and real-world dashboards. 
                I'm always eager to learn new technologies and tackle challenging problems.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-6 rounded-lg border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                <p className="text-orange-400 font-semibold mb-2">Fun Fact:</p>
                <p className="text-gray-300">Electronics guy turned data guy! 🔧➡️📊</p>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="w-72 h-72 bg-[#0D0D0D] rounded-full flex items-center justify-center border border-orange-500/30">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-6 rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 animate-[fadeInUp_0.6s_ease-out] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-orange-400 font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
