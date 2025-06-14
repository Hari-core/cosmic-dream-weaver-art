import { useState } from "react";
import { Menu, X, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Split the text into individual characters for animation
  const logoText = "Hari's Portfolio";
  const logoLetters = logoText.split('').map((char, index) => (
    <span
      key={index}
      className="inline-block animate-[elegantLetterFloat_3.8s_ease-in-out_infinite]"
      style={{
        animationDelay: `${index * 0.11}s`,
        animationFillMode: 'both',
        transition: 'color 0.3s'
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <header className="sticky top-0 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-orange-500/30 z-50 transition-all duration-300 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-1/4 w-32 h-32 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-lg animate-[float_4s_ease-in-out_infinite]"></div>
      </div>
      <div className="absolute top-0 left-1/3 w-24 h-24 opacity-15">
        <div className="w-full h-full bg-gradient-to-l from-orange-500 to-orange-600 transform rotate-45 rounded-sm blur-md animate-[float_5s_ease-in-out_infinite_reverse]"></div>
      </div>
      <div className="container mx-auto px-6 py-4 relative z-10">
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
            {/* Relevant data analysis icon next to the logo */}
            <BarChart2 className="h-8 w-8 text-orange-400 mr-2 animate-bounce-slow" />
            <span className="relative z-10 text-3xl md:text-4xl font-extrabold font-poppins text-orange-500"
              style={{ letterSpacing: '0.01em', lineHeight: 1 }}>
              {logoLetters}
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
      {/* Elegant, professional single-letter animation */}
      <style>
        {`
          @keyframes elegantLetterFloat {
            0% {
              transform: translateY(0) scale(1) translateX(0);
              opacity: 1;
            }
            10% {
              opacity: 0.92;
            }
            20% {
              transform: translateY(-4px) scale(1.03) translateX(3px);
              opacity: 1;
            }
            35% {
              transform: translateY(-8px) scale(1.04) translateX(0);
            }
            50% {
              transform: translateY(-10px) scale(1.045) translateX(-3px);
            }
            75% {
              transform: translateY(-5px) scale(1.01) translateX(1.5px);
              opacity: 0.97;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(0px) scale(1) translateX(0px);
              opacity: 1;
            }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-7px);}
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.6s infinite;
          }
        `}
      </style>
    </header>
  );
};
