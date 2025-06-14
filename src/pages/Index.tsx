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

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      <Header />
      <Hero />
      {/* Changed from diagonal (which had 3 dots) to swipe */}
      <AnimatedSeparator type="swipe" />
      <About />
      {/* Use brush animation before Projects section for wavy effect */}
      <AnimatedSeparator type="brush" />
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
