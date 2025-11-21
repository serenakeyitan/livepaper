import type { Metadata } from "next";

import Header from "@/components/chat-with-pdfs/Header";
import Hero from "@/components/chat-with-pdfs/Hero";
import Features from "@/components/chat-with-pdfs/Features";
import HowItWorks from "@/components/chat-with-pdfs/HowItWorks";
import SocialProof from "@/components/chat-with-pdfs/SocialProof";
import UseCases from "@/components/chat-with-pdfs/UseCases";
import FAQ from "@/components/chat-with-pdfs/FAQ";
import FinalCTA from "@/components/chat-with-pdfs/FinalCTA";
import Footer from "@/components/chat-with-pdfs/Footer";

const pageTitle = "LivePaper — Turn Your Research Paper Into Motion";
const pageDescription =
  "Upload a PDF and LivePaper transforms static research into an animated, interactive experience with interactive charts, motion diagrams, and multimedia.";
const pageUrl = "https://www.kael.im";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function Home() {
  return (
    <div className="chat-with-pdfs-theme min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <UseCases />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
