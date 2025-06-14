
import { useRef, useEffect } from "react";
import gsap from "gsap";

type SectionProps = {
  id: string;
  heading: string;
  bg?: string;
  textColor?: string;
  lineColor?: string;
  lineWidth?: number;
  children?: React.ReactNode;
  headingClassName?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Section = ({
  id,
  heading,
  bg = "#0D0D0D",
  textColor = "#FFA500",
  lineColor = "#FFA500",
  lineWidth = 120,
  children,
  headingClassName,
  className = "",
  style,
}: SectionProps) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const selfRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // When section enters viewport
    const handleScroll = () => {
      if (!selfRef.current || !headingRef.current || !lineRef.current) return;
      const rect = selfRef.current.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2;
      if (inView) {
        gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        gsap.to(lineRef.current, { width: lineWidth, backgroundColor: lineColor, duration: 0.7, ease: "power2.out" });
      } else {
        gsap.to(headingRef.current, { opacity: 0, y: -40, duration: 0.7 });
        gsap.to(lineRef.current, { width: 60, backgroundColor: "#333", duration: 0.7 });
      }
    };

    // Set initial state
    gsap.set(headingRef.current, { opacity: 0, y: -40 });
    gsap.set(lineRef.current, { width: 60, backgroundColor: "#333" });

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100); // For initial paint

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lineColor, lineWidth]);

  return (
    <section
      id={id}
      ref={selfRef}
      className={`snap-start flex flex-col items-center justify-center min-h-screen w-full py-20 ${className}`}
      style={{ background: bg, color: textColor, ...style }}
    >
      <div className="mb-2 mt-4 flex flex-col items-center">
        <h1
          ref={headingRef}
          className={`text-4xl md:text-6xl font-bold transition-all duration-500 font-['Poppins'] ${headingClassName || ""}`}
          style={{ color: textColor }}
        >
          {heading}
        </h1>
        <div
          ref={lineRef}
          className="h-1 mt-3 rounded line"
          style={{ backgroundColor: lineColor, width: 60, minHeight: "4px", transition: "width 0.5s" }}
        />
      </div>
      <div className="flex-1 w-full flex flex-col justify-center">{children}</div>
    </section>
  );
};
