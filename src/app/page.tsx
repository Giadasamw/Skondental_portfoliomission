import { HeroSection } from "@/components/hero-section";
import { PopularTreatments } from "@/components/popular-treatments";
import { AbcConcept } from "@/components/abc-concept";
import { WhyChoose } from "@/components/why-choose";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <PopularTreatments />
      <AbcConcept />
      <WhyChoose />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
