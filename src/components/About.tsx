
import { Code, Database, Award, TrendingUp } from "lucide-react";
import WireframeGlobe from "./WireframeGlobe";

const stats = [
  {
    icon: <Code className="h-8 w-8 text-orange-400" />,
    value: "4+",
    label: "Projects",
    description: "Built with passion",
    targetId: "projects",
  },
  {
    icon: <Database className="h-8 w-8 text-orange-400" />,
    value: "8+",
    label: "Technologies",
    description: "Mastered & counting",
    targetId: "skills",
  },
  {
    icon: <Award className="h-8 w-8 text-orange-400" />,
    value: "3+",
    label: "Certifications",
    description: "Achieved & ongoing",
    targetId: "certifications",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-orange-400" />,
    value: "100%",
    label: "Dedication",
    description: "To continuous learning",
    targetId: "footer",
  },
];

export const About = () => {
  const HEADER_HEIGHT = 80; // from Header.tsx

  const handleStatClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20 relative overflow-hidden">
      {/* Animated diamond background */}
      <div className="absolute top-1/4 right-16 w-80 h-80 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45 rounded-lg blur-xl animate-[float_7s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Floating circle */}
      <div className="absolute bottom-1/4 left-12 w-56 h-56 opacity-15">
        <div className="w-full h-full bg-gradient-to-l from-orange-500 to-orange-400 rounded-full blur-2xl animate-[float_9s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
            About Me
          </h2>
          
          <p className="text-lg sm:text-xl text-orange-400 mb-12 italic animate-fade-in">
            "Detail-driven and growth-fueled, solving real-world problems one dataset at a time."
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-left animate-fade-in">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a passionate Data Analyst and Java Developer with a unique background in electronics. 
                I love transforming raw data into meaningful insights and building scalable backend solutions.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Currently exploring data analytics, Kafka pipelines, and real-world dashboards. 
                I'm always eager to learn new technologies and tackle challenging problems.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-6 rounded-lg border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                <p className="text-orange-400 font-semibold mb-2">Fun Fact:</p>
                <p className="text-gray-300">Electronics guy turned data guy! 🔧➡️📊</p>
              </div>
            </div>
            
            <div className="relative animate-scale-in mx-auto w-64 h-64 sm:w-80 sm:h-80">
              {/* 3D rotating Wireframe Globe Aura - positioned behind */}
              <div className="absolute inset-0 z-0">
                <WireframeGlobe
                  width={200}
                  height={200}
                  color="#FF9100"
                />
              </div>
              {/* Profile image with neon orange aura glow - positioned in front */}
              <div
                className="relative z-10 w-full h-full mx-auto bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: "0 0 45px 16px #FF910099, 0 0 64px 12px #FFB34766",
                  filter: "drop-shadow(0 0 24px #FF910099)",
                }}
              >
                <div className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] bg-[#0D0D0D] rounded-full flex items-center justify-center border border-orange-500/30 shadow-none">
                  <span className="text-5xl sm:text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                onClick={() => handleStatClick(stat.targetId)}
                className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-6 rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 active:scale-100 active:bg-orange-500/20 animate-[fadeInUp_0.6s_ease-out] group cursor-pointer"
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
