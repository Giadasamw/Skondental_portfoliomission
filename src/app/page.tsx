import { HeroSection } from "@/components/hero-section";
import { PopularTreatments } from "@/components/popular-treatments";
import { AbcConcept } from "@/components/abc-concept";
import { WhyChoose } from "@/components/why-choose";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { GallerySection } from "@/components/gallery-section";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <PopularTreatments />
      <AbcConcept />
      <WhyChoose />
      <FaqSection />
      <TestimonialsSection />
      <GallerySection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
