import { HeroSection } from "@/components/hero-section";
import { PopularTreatments } from "@/components/popular-treatments";
import { AbcConcept } from "@/components/abc-concept";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <PopularTreatments />
      <AbcConcept />
      <FaqSection />
    </main>
  );
}
