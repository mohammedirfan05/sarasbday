import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The 30 Flaws Appeal Court | Case File #0820",
  description: "Official Court Docket: Transforming 30 Instagram story accusations into proof that Sara is irreplaceable. Happy Birthday!",
  openGraph: {
    title: "The 30 Flaws Appeal Court | Case File #0820",
    description: "Official Court Docket: Transforming 30 Instagram story accusations into proof that Sara is irreplaceable.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#2D0E3E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${caveat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-[#141018] text-[#1A1918] font-sans selection:bg-[#E05A47]/20 selection:text-[#E05A47]">
        {children}
      </body>
    </html>
  );
}
