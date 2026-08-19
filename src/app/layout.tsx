import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skondental",
  description: "Skondental portfolio.",
};

export const viewport: Viewport = {
  // Matches the parchment canvas so mobile browser chrome blends in.
  themeColor: "#fef9ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
