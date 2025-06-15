
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./header/Logo";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileNavigation } from "./header/MobileNavigation";
import { ScrollProgressBar } from "./header/ScrollProgressBar";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const HEADER_HEIGHT = 80; // px

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "projects",
      "skills",
      "certifications",
      "github",
      "contact",
    ];

    const handleScroll = () => {
      // Calculate and set scroll progress
      const totalScrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollPosition = window.scrollY;
      const progress =
        totalScrollableHeight > 0
          ? (currentScrollPosition / totalScrollableHeight) * 100
          : 0;
      setScrollProgress(progress);

      const scrollPosition = window.scrollY + HEADER_HEIGHT + 1;

      if (window.scrollY < 10) {
        setActiveSection("hero");
        return;
      }

      // Explicitly set 'contact' when at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        setActiveSection('contact');
        return;
      }

      let currentSection = 'hero';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          if (element.offsetTop <= scrollPosition) {
            currentSection = sectionId;
          } else {
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-orange-500/30 z-50 transition-all duration-300 overflow-hidden shadow-lg">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-1/4 w-32 h-32 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-lg animate-[float_4s_ease-in-out_infinite]"></div>
      </div>
      <div className="absolute top-0 left-1/3 w-24 h-24 opacity-15">
        <div className="w-full h-full bg-gradient-to-l from-orange-500 to-orange-600 transform rotate-45 rounded-sm blur-md animate-[float_5s_ease-in-out_infinite_reverse]"></div>
      </div>
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Logo handleNavClick={handleNavClick} />

          <DesktopNavigation navItems={navItems} activeSection={activeSection} handleNavClick={handleNavClick} />

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
          <MobileNavigation 
            navItems={navItems} 
            activeSection={activeSection} 
            handleNavClick={handleNavClick}
            closeMenu={() => setIsMenuOpen(false)}
          />
        )}
      </div>
      
      <ScrollProgressBar scrollProgress={scrollProgress} />
    </header>
  );
};
