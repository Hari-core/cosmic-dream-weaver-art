
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
  <div className="w-full overflow-hidden bg-transparent" style={{ lineHeight: 0 }}>
    <svg viewBox="0 0 1600 70" className="block w-full h-12" preserveAspectRatio="none">
      <path
        d="M0,20 Q450,40 850,25 T1600,20 L1600,70 L0,70 Z"
        fill="#914916"
      />
    </svg>
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
      {/* Custom wave separator to match reference */}
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

