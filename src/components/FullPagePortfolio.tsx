
import { useEffect } from "react";

const sections = [
  {
    id: "section1",
    heading: "Welcome to Hari's Portfolio",
    bg: "#0D0D0D",
    textColor: "#FFFFFF",
    bgImg: "https://source.unsplash.com/random/1920x1080?data,tech",
  },
  {
    id: "section2",
    heading: "About Me",
    bg: "#111",
    textColor: "#FFA500",
  },
  {
    id: "section3",
    heading: "Projects",
    bg: "#0D0D0D",
    textColor: "#FFA500",
  },
  {
    id: "section4",
    heading: "Contact",
    bg: "#1A1A1A",
    textColor: "#FFFFFF",
  },
];

export const FullPagePortfolio = () => {
  useEffect(() => {
    // @ts-ignore - these will be available via the CDN scripts
    const fullpage = window.fullpage;
    const gsap = window.gsap;

    if (!document.getElementById("fullpage")) return;

    // Only initialize fullPage once
    // @ts-ignore - Remove previous instance if already exists (for hot reload dev)
    if(window.fullpage_api) window.fullpage_api.destroy("all");

    new fullpage("#fullpage", {
      scrollingSpeed: 1000,
      autoScrolling: true,
      navigation: false,
      onLeave: function (origin, destination, direction) {
        const leavingSection = origin.item;
        const enteringSection = destination.item;
        const leavingHeading = leavingSection.querySelector("h1");
        const enteringHeading = enteringSection.querySelector("h1");
        const leavingLine = leavingSection.querySelector(".line");
        const enteringLine = enteringSection.querySelector(".line");

        // Heading fade out & slide up
        if(leavingHeading) {
          gsap.to(leavingHeading, { opacity: 0, y: -80, duration: 1.0, ease: "power2.out" });
        }
        // Line shrink/opacity
        if(leavingLine) {
          gsap.to(leavingLine, { width: 75, backgroundColor: "#555", duration: 0.9, ease: "power2.out" });
        }
        // Heading fade in
        if(enteringHeading) {
          gsap.fromTo(
            enteringHeading,
            { y: 80, opacity: 0, color: enteringSection.getAttribute("data-text-color") },
            { y: 0, opacity: 1, color: enteringSection.getAttribute("data-text-color"), duration: 1.2, ease: "power2.out", delay: 0.3 }
          );
        }
        // Line grow/color
        if(enteringLine) {
          const newWidth = (destination.index + 1) * 140 + 50;
          gsap.fromTo(
            enteringLine,
            { width: 65, backgroundColor: "#555" },
            {
              width: newWidth,
              backgroundColor: enteringSection.getAttribute("data-text-color"),
              duration: 1.2,
              ease: "power2.out",
              delay: 0.3
            }
          );
        }
        // Animate background color (if no ken burns image)
        if(destination.index !== 0) {
          gsap.to(enteringSection, {
            backgroundColor: enteringSection.getAttribute("data-bg"),
            duration: 1.0,
            overwrite: "auto"
          });
        }
      }
    });

    // Initial fx for section 1: Ken Burns bg + show heading/line
    const firstSection = document.getElementById("section1");
    if (firstSection) {
      gsap.set(firstSection.querySelector("h1"), { opacity: 1, y: 0 });
      gsap.set(firstSection.querySelector(".line"), { width: 180, backgroundColor: "#fff" });
      // Animate Ken Burns bg (CSS only) -- see inline style below
    }

    // Clean up on unmount
    return () => {
      // @ts-ignore
      if(window.fullpage_api) window.fullpage_api.destroy("all");
    };
  }, []);

  return (
    <div
      id="fullpage"
      style={{
        fontFamily: "'Poppins', sans-serif",
        // Fallback bg if FullPage.js fails
        background: "#0D0D0D",
      }}
    >
      {sections.map((s, i) => (
        <div
          className="section"
          id={s.id}
          key={s.id}
          data-bg={s.bg}
          data-text-color={s.textColor}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100vh",
            position: "relative",
            color: s.textColor,
            zIndex: 1,
            // Special bg for section 1
            background: s.bgImg
              ? `url('${s.bgImg}') no-repeat center center/cover`
              : s.bg,
            // Ken Burns animation for section 1 via CSS if present
            animation:
              s.id === "section1"
                ? "kenBurns 16s ease-in-out infinite alternate"
                : undefined,
            overflow: "hidden"
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "0.01em",
              zIndex: 2,
              color: s.textColor,
              opacity: 1,
              transition: "color 0.4s",
              textShadow:
                s.id === "section1"
                  ? "0 2px 14px rgba(0,0,0,0.18)"
                  : "none",
            }}
          >
            {s.heading}
          </h1>
          <div
            className="line"
            style={{
              width: i === 0 ? 180 : 65,
              height: 4,
              margin: "24px auto 0",
              backgroundColor: s.textColor,
              borderRadius: 3,
              transition: "background .5s,width .5s"
            }}
          ></div>
          {/* Add custom content for each section if desired */}
        </div>
      ))}

      {/* Ken Burns CSS */}
      <style>
        {`
        @keyframes kenBurns {
          0% {
            transform: scale(1) translateY(0);
          }
          100% {
            transform: scale(1.14) translateY(-18px);
          }
        }
        `}
      </style>
    </div>
  );
};
