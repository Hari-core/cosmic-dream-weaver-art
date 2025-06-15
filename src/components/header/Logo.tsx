
import { BarChart2 } from "lucide-react";

interface LogoProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const Logo = ({ handleNavClick }: LogoProps) => {
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
    <div className="relative flex items-center">
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
      <a
        href="#hero"
        onClick={(e) => handleNavClick(e, "#hero")}
        className="flex items-center"
        aria-label="Go to top of page"
      >
        <BarChart2 className="h-8 w-8 text-orange-400 mr-2 animate-bounce-slow" />
        <span
          className="relative z-10 text-3xl md:text-4xl font-extrabold font-dancing text-orange-500"
          style={{ letterSpacing: '0.01em', lineHeight: 1 }}
        >
          {logoLetters}
        </span>
      </a>
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
    </div>
  );
};
