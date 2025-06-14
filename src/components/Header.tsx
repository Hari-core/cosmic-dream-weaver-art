
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
          {/* Logo and splash, FIRM LEFT */}
          <div className="relative flex items-center">
            {/* Splash directly behind and sized to logo/text */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -z-10">
              <svg
                viewBox="0 0 140 56"
                className="w-36 h-14 md:w-48 md:h-16 fill-orange-500/30 animate-subtle-wobble"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M71.9,8.5c7.5-5.4,20.7-7.7,32.4-6.6c12.4,1.2,22.7,6.3,26.2,13.4c2.5,4.7,1.1,10.3-3.2,14.9c-4.2,4.5-11.1,7.9-18.9,9.7
                  c-10.5,2.5-19.2,5-29,7.9c-12.9,4-19.7,8.9-35-1.2c-10.7-6.9-20.3-18.9-13.1-28C39.1,2.8,61.2,16.4,71.9,8.5z"
                />
              </svg>
            </span>
            <span className="relative z-10 text-3xl md:text-4xl font-extrabold font-poppins text-orange-500"
              style={{ letterSpacing: '0.01em', lineHeight: 1 }}>
              Hari&apos;s Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 bg-gray-800/70 rounded-lg text-gray-200 hover:text-orange-400 transition-all duration-300 group font-poppins text-lg font-medium hover:animate-bounce"
                style={{ fontFamily: 'Poppins, sans-serif' }}
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
            aria-label="Toggle menu"
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
                  className="text-gray-200 hover:text-orange-400 transition-colors duration-300 py-2 font-poppins px-4 bg-gray-800/70 rounded-lg hover:bg-orange-500/20 text-lg font-medium"
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
