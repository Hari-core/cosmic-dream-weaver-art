import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { GitHubStats } from "@/components/GitHubStats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

// SCROLL SNAP STYLES ON CONTAINER
export default function Index() {
  return (
    <div
      className="w-full min-h-screen h-screen overflow-y-scroll scroll-smooth"
      style={{
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <Section
        id="section1"
        heading="Welcome to Hari's Portfolio"
        bg="linear-gradient(120deg, #0D0D0D 60%, #141414 100%)"
        textColor="#fff"
        lineColor="#fff"
        lineWidth={160}
        className="relative"
      >
        <Hero showKenBurns />
      </Section>
      <Section
        id="section2"
        heading="About Me"
        bg="#141414"
        textColor="#FFA500"
        lineColor="#FFA500"
        lineWidth={160}
      >
        <About />
      </Section>
      <Section
        id="section3"
        heading="Projects"
        bg="#181818"
        textColor="#FFA500"
        lineColor="#FFA500"
        lineWidth={180}
      >
        <Projects />
      </Section>
      <Section
        id="section4"
        heading="Get In Touch"
        bg="#232323"
        textColor="#FFA500"
        lineColor="#FFA500"
        lineWidth={130}
      >
        <Contact />
      </Section>
      {/* Keep any footer as non-snapping */}
      <Footer />
    </div>
  );
}
