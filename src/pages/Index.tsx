import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { GitHubStats } from "@/components/GitHubStats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedSeparator } from "@/components/AnimatedSeparator";

const WaveSeparator = () => (
  <div className="w-full overflow-hidden bg-transparent relative" style={{ lineHeight: 0 }}>
    <svg viewBox="0 0 1600 70" className="block w-full h-12" preserveAspectRatio="none">
      <defs>
        <radialGradient id="waveGlow" cx="50%" cy="40%" r="40%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FF9100" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#914916" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M0,20 Q450,40 850,25 T1600,20 L1600,70 L0,70 Z"
        fill="#914916"
      />
      {/* Animated moving/breathing glowy ellipse */}
      <ellipse
        className="wave-glow-ellipse pointer-events-none"
        cx="800"
        cy="25"
        rx="180"
        ry="20"
        fill="url(#waveGlow)"
        style={{ opacity: 0.8 }}
      />
    </svg>
    {/* Custom animation styles using Tailwind's layer */}
    <style>
      {`
        @keyframes wave-glow-move {
          0% {
            transform: translateX(-520px) scale(0.93);
            opacity: 0.7;
          }
          40% {
            transform: translateX(0px) scale(1.1);
            opacity: 1;
          }
          60% {
            transform: translateX(0px) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateX(520px) scale(0.93);
            opacity: 0.7;
          }
        }
        .wave-glow-ellipse {
          animation: wave-glow-move 3.8s ease-in-out infinite alternate;
          transition: opacity 0.2s, filter 0.2s;
          filter: blur(1.5px) drop-shadow(0 2px 8px #FFB347bb);
        }
      `}
    </style>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      <Header />
      <Hero />
      {/* Changed from diagonal (which had 3 dots) to swipe */}
      <AnimatedSeparator type="swipe" />
      <About />
      {/* Custom wave separator to match reference and glow */}
      <WaveSeparator />
      <Projects />
      <AnimatedSeparator type="flowing" />
      <Skills />
      <AnimatedSeparator type="brush" />
      <Certifications />
      {/* Changed type from "pulse" to "swipe" */}
      <AnimatedSeparator type="swipe" />
      <GitHubStats />
      <AnimatedSeparator type="swipe" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
