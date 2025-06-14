import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  // Smooth scroll to About section on arrow click
  const handleArrowClick = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-orange-900/10 to-[#0D0D0D] relative overflow-hidden">
      {/* Animated blob background - Live SVG splash effect */}
      <div className="absolute top-1/4 left-10 w-96 h-96 opacity-30">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-[float_8s_ease-in-out_infinite]"
        >
          <defs>
            <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="50%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#FF6347" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob-gradient)"
            className="animate-[morph_10s_ease-in-out_infinite]"
            d="M40,-65C50,-55,55,-35,65,-20C75,-5,90,5,95,20C100,35,95,55,85,70C75,85,60,95,40,100C20,105,0,105,-25,95C-50,85,-75,65,-85,40C-95,15,-90,-15,-80,-40C-70,-65,-55,-85,-35,-90C-15,-95,0,-85,20,-75C40,-65,40,-65,40,-65Z"
          />
        </svg>
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/3 right-20 w-64 h-64 opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-orange-400 to-orange-500 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite_reverse]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Poppins'] relative inline-block">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Hari's Portfolio
            </span>
            <svg
              className="absolute top-0 -right-24 w-24 h-24 text-orange-500 opacity-60 hidden md:block"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                strokeDasharray: 150,
                strokeDashoffset: 150,
                animation: 'draw-zigzag 2s ease-out forwards 0.5s',
              }}
            >
              <path
                d="M 5 80 L 25 60 L 45 70 L 65 50 L 85 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-['Poppins']">
            Data Enthusiast | Java Developer | Tech Explorer
          </p>
          <p className="text-lg md:text-xl text-orange-400 mb-8 font-['Poppins'] italic">
            "Once an electronics tinkerer, now decoding data stories."
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about transforming raw data into meaningful insights and building scalable backend solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-0 rounded-md border-2 border-orange-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" className="relative border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 group overflow-hidden">
              <div className="absolute inset-0 bg-orange-500 rounded-md blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-0 rounded-md border-2 border-orange-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Center and lower the Arrow */}
          <div className="flex justify-center mt-10">
            <button
              onClick={handleArrowClick}
              aria-label="Scroll to About"
              className="p-2 rounded-full hover:bg-orange-500/20 transition-all duration-200 group"
              style={{ outline: "none", border: "none" }}
            >
              <ChevronDown className="h-10 w-10 text-orange-400 animate-bounce group-hover:text-orange-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes draw-zigzag {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes morph {
          0%, 100% {
            d: path("M40,-65C50,-55,55,-35,65,-20C75,-5,90,5,95,20C100,35,95,55,85,70C75,85,60,95,40,100C20,105,0,105,-25,95C-50,85,-75,65,-85,40C-95,15,-90,-15,-80,-40C-70,-65,-55,-85,-35,-90C-15,-95,0,-85,20,-75C40,-65,40,-65,40,-65Z");
          }
          50% {
            d: path("M45.5,-75.5C57.6,-66.9,65.1,-50.2,70.3,-34.5C75.5,-18.8,78.4,-4.1,75.6,9.5C72.8,23.1,64.3,35.6,54.1,47.1C43.9,58.6,32,69.1,18.2,75.1C4.4,81.1,-11.4,82.6,-26.8,78.5C-42.2,74.4,-57.2,64.7,-66.4,51.8C-75.6,38.9,-79,22.8,-78.7,7.2C-78.4,-8.4,-74.4,-19.5,-66.9,-29.4C-59.4,-39.3,-48.4,-48,-36.8,-56.3C-25.2,-64.6,-12.6,-72.5,2.1,-75.9C16.8,-79.3,33.5,-78.2,45.5,-75.5Z");
          }
        }
        .animate-\\[morph_10s_ease-in-out_infinite\\] {
          animation: morph 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
