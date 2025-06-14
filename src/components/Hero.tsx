
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Harikrishnan H
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Data Enthusiast | Java Developer | Tech Explorer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about transforming raw data into meaningful insights and building scalable backend solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 text-white px-8 py-3 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};
