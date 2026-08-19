import { HeroSection } from "@/components/hero-section";
import { PopularTreatments } from "@/components/popular-treatments";
import { AbcConcept } from "@/components/abc-concept";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <PopularTreatments />
      <AbcConcept />
    </main>
  );
}
