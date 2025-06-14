
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-orange-900/10 to-[#0D0D0D] relative overflow-hidden">
      {/* Animated blob background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Additional floating blobs */}
      <div className="absolute top-1/3 right-20 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-orange-400 to-orange-500 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Poppins'] relative">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Harikrishnan H
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-['Poppins']">
            Data Enthusiast | Java Developer | Tech Explorer
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
    </section>
  );
};
