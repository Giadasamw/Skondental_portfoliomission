import type { Metadata } from "next";
import { BrandNav } from "@/components/brand/brand-nav";
import { BrandHero } from "@/components/brand/brand-hero";
import { BrandStory } from "@/components/brand/brand-story";
import { BrandLogo } from "@/components/brand/brand-logo";
import { BrandColors } from "@/components/brand/brand-colors";
import { BrandTypography } from "@/components/brand/brand-typography";
import { BrandComponents } from "@/components/brand/brand-components";
import { BrandClosing } from "@/components/brand/brand-closing";

export const metadata: Metadata = {
  title: "Brand Identity — Skōn Dental",
  description:
    "The Skōn Dental brand guidelines: voice, logo, palette, typography, and components.",
};

export default function BrandPage() {
  return (
    <main className="bg-parchment">
      <BrandNav />
      <BrandHero />
      <BrandStory />
      <BrandLogo />
      <BrandColors />
      <BrandTypography />
      <BrandComponents />
      <BrandClosing />
    </main>
  );
}
