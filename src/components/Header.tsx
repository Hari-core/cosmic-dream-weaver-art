import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-orange-500/30 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-70">
              <svg
                viewBox="-30 -30 100 100"
                className="w-32 h-20 fill-orange-500/40 animate-subtle-wobble"
                // A simple organic splash/brush shape
                // Path source: hand-tweaked simple blob
              >
                <path d="M7.2,-19.9C10.4,-14.7,14.7,-11.9,19.9,-7.2C25.2,-2.5,31.4,4,30.3,9.6C29.1,15.2,20.6,19.9,12.8,22.8C5,25.7,-2.2,26.7,-9.9,24.9C-17.6,23,-25.8,18.2,-28.5,11.5C-31.2,4.8,-28.4,-3.9,-24.1,-11.1C-19.9,-18.3,-14.2,-24.1,-7.7,-26.1C-1.2,-28.1,6.1,-26.3,7.2,-19.9Z" />
              </svg>
            </div>
            <div className="relative z-10 text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-['Poppins']">
              Hari's Portfolio
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 hover:text-orange-400 transition-all duration-300 group font-['Poppins'] hover:animate-[bounce_0.6s_ease-in-out] border border-transparent hover:border-orange-500/30"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-orange-500/20 hover:text-orange-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-orange-500/30 animate-fade-in">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 py-2 font-['Poppins'] px-4 bg-gray-800/30 rounded-lg hover:bg-orange-500/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
