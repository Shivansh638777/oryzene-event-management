import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://oryzene.in"),
  title: {
    default: "Oryzene Event Management | Kanpur, Lucknow & Gorakhpur",
    template: "%s | Oryzene Event Management",
  },
  description:
    "Oryzene Event Management plans weddings, corporate events, celebrations, esports and live shows across Kanpur, Lucknow and Gorakhpur.",
  openGraph: {
    type: "website",
    siteName: "Oryzene Event Management",
    title: "Oryzene Event Management | Events, thoughtfully done",
    description:
      "A local event planning partner for memorable celebrations across Uttar Pradesh.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Oryzene Event Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oryzene Event Management",
    description: "Event planning across Kanpur, Lucknow and Gorakhpur.",
    images: ["/logo.png"],
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2JC77G1C5V"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2JC77G1C5V');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${rajdhani.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
