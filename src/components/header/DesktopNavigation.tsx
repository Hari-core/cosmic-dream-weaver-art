
interface NavItem {
  name: string;
  href: string;
  id: string;
}

interface DesktopNavigationProps {
  navItems: NavItem[];
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const DesktopNavigation = ({ navItems, activeSection, handleNavClick }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex space-x-3">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href)}
          className={`relative px-4 py-2 rounded-lg transition-all duration-300 group font-poppins text-lg font-medium ${
            activeSection === item.id
              ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
              : "bg-gray-800/70 text-gray-200 hover:text-orange-400 hover:-translate-y-[2px]"
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {item.name}
          <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-orange-400 transition-all duration-300 rounded-lg ${
            activeSection === item.id ? "w-3/4" : "w-0 group-hover:w-3/4"
          }`}></span>
        </a>
      ))}
    </nav>
  );
};
