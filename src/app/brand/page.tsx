import type { Metadata } from "next";
import { BrandNav } from "@/components/brand/brand-nav";
import { BrandHero } from "@/components/brand/brand-hero";
import { BrandLogo } from "@/components/brand/brand-logo";
import { BrandColors } from "@/components/brand/brand-colors";
import { BrandTypography } from "@/components/brand/brand-typography";
import { BrandComponents } from "@/components/brand/brand-components";
import { BrandMoodboard } from "@/components/brand/brand-moodboard";

export const metadata: Metadata = {
  title: "Brand Guidelines — Skōn Dental",
  description:
    "The Skōn Dental brand sheet: logo, palette, typography, components, and moodboard.",
};

export default function BrandPage() {
  return (
    <main className="bg-parchment">
      <BrandNav />
      <div className="page-container flex flex-col gap-section py-section">
        <BrandHero />
        <BrandLogo />
        <BrandColors />
        <BrandTypography />
        <BrandComponents />
        <BrandMoodboard />
      </div>
    </main>
  );
}
