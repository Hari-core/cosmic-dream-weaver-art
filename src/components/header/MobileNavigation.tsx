
interface NavItem {
  name: string;
  href: string;
  id: string;
}

interface MobileNavigationProps {
  navItems: NavItem[];
  activeSection: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  closeMenu: () => void;
}

export const MobileNavigation = ({ navItems, activeSection, handleNavClick, closeMenu }: MobileNavigationProps) => {
  return (
    <nav className="md:hidden mt-4 pb-4 border-t border-orange-500/30 animate-fade-in">
      <div className="flex flex-col space-y-2 mt-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`transition-colors duration-300 py-2 font-poppins px-4 rounded-lg text-lg font-medium ${
              activeSection === item.id
                ? "text-orange-400 bg-orange-500/20 border border-orange-500/30"
                : "text-gray-200 hover:text-orange-400 bg-gray-800/70 hover:bg-orange-500/20 active:bg-orange-500/25"
            }`}
            onClick={(e) => {
              handleNavClick(e, item.href);
              closeMenu();
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
