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
      {/* SVG blob background */}
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
                strokeDasharray: 105,
                strokeDashoffset: 105,
                animation: 'draw-zigzag 2s ease-out forwards 0.5s',
              }}
            >
              <defs>
                <marker
                  id="arrowhead"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>
              <path
                d="M 10 90 L 30 70 L 50 60 L 70 40 L 90 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd="url(#arrowhead)"
              />
            </svg>
            <div className="absolute top-0 -right-36 w-36 h-36 hidden md:block opacity-60">
                <div 
                    className="absolute top-[20%] left-[20%] w-4 h-4 bg-orange-500 rounded-full animate-[float_4s_ease-in-out_infinite_1s]"
                ></div>
                <div 
                    className="absolute top-[80%] left-[30%] w-6 h-6 bg-orange-500/80 rounded-sm animate-[float_6s_ease-in-out_infinite]"
                ></div>
                <div 
                    className="absolute top-[50%] left-[80%] w-3 h-3 bg-orange-500 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]"
                ></div>
            </div>
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
      `}</style>
    </section>
  );
};
