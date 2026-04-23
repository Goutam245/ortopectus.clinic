import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Results } from "@/components/sections/Results";
import { Technology } from "@/components/sections/Technology";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyChoose />
      <Results />
      <Technology />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Index;
