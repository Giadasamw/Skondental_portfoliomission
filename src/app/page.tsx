import { HeroSection } from "@/components/hero-section";
import { PopularTreatments } from "@/components/popular-treatments";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <PopularTreatments />
    </main>
  );
}
