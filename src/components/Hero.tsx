
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroProps = { showKenBurns?: boolean };

export const Hero = ({ showKenBurns }: HeroProps) => {
  return (
    <section className="flex items-center justify-center min-h-[70vh] bg-transparent relative overflow-hidden">
      {/* Animated Ken Burns background */}
      {showKenBurns && (
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <img
              src="https://source.unsplash.com/random/1920x1080?data,tech"
              alt=""
              className="w-full h-full object-cover scale-100 animate-kenburns bg-[#111] brightness-[.6]"
              style={{ animation: "kenBurns 16s ease-in-out infinite alternate" }}
            />
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Poppins'] relative">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Hari's Portfolio
            </span>
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
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-orange-400" />
        </div>
      </div>
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1);}
          100% { transform: scale(1.18);}
        }
      `}</style>
    </section>
  );
};
