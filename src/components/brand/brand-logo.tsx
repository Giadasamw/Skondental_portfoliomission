import Image from "next/image";
import { SheetRow, SheetCard, CardLabel } from "./sheet-primitives";

export function BrandLogo() {
  return (
    <SheetRow label="Logo">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Primary */}
        <SheetCard>
          <div className="flex flex-1 items-center justify-center bg-parchment px-8 py-14">
            <Image
              src="/images/skon-dental-logo.png"
              alt="SKŌN Dental primary logo"
              width={220}
              height={84}
              className="h-auto w-[170px]"
            />
          </div>
          <CardLabel>Primary</CardLabel>
        </SheetCard>

        {/* Reverse */}
        <SheetCard>
          <div className="flex flex-1 items-center justify-center bg-terracotta-seal px-8 py-14">
            <Image
              src="/images/skon-dental-logo.png"
              alt="SKŌN Dental reversed logo on terracotta"
              width={220}
              height={84}
              className="h-auto w-[170px] brightness-0 invert"
            />
          </div>
          <CardLabel>Reverse</CardLabel>
        </SheetCard>

        {/* Logomark — just the ō */}
        <SheetCard>
          <div className="flex flex-1 items-center justify-center bg-parchment px-8 py-14">
            <span
              aria-label="Skōn logomark, the letter o with a macron"
              className="font-financier-display text-[96px] leading-none text-ink"
            >
              ō
            </span>
          </div>
          <CardLabel>Logomark</CardLabel>
        </SheetCard>
      </div>
    </SheetRow>
  );
}
