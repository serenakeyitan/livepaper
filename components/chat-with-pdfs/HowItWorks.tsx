"use client";

import {
  Upload,
  FileText,
  Sparkles,
  MessageSquare,
  Network,
  ExternalLink,
  Plus,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { START_FOR_FREE_URL } from "./constants";
import { gtagSendEvent } from "./gtag-utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [stage1Ref, stage1Visible] = useScrollAnimation();
  const [stage2Ref, stage2Visible] = useScrollAnimation();
  const [stage3Ref, stage3Visible] = useScrollAnimation();

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`w-full py-12 sm:py-16 lg:py-24 bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 ${
        sectionVisible ? "animate-on-scroll visible" : "animate-on-scroll"
      }`}
    >
      <div className="container mx-auto px-10 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
              Three steps to transform your paper
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
              Upload once, and let LivePaper turn static PDFs into interactive, shareable research experiences.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Stage 1 */}
            <div
              ref={stage1Ref}
              className={`rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 transition-all ${
                stage1Visible ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      Step 1 — Upload PDF
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Drag and drop, paste a link, or import from cloud storage.
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="rounded-full px-4 py-1">
                  Step 1
                </Badge>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/60 p-4 flex items-start gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">paper_01.pdf</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">2.4 MB • 24 pages</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/60 p-4 flex items-start gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">paper_02.pdf</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">1.8 MB • 16 pages</p>
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-transparent p-4 flex flex-col items-center justify-center text-neutral-400">
                  <Plus className="w-6 h-6" />
                  <p className="text-sm mt-1">Add more</p>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div
              ref={stage2Ref}
              className={`rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 transition-all ${
                stage2Visible ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      Step 2 — AI Reconstruction
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Interactive charts, animations, and explanations appear instantly.
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="rounded-full px-4 py-1">
                  Step 2
                </Badge>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/60 p-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                      K
                    </div>
                    Question
                  </div>
                  <p className="mt-2 font-semibold text-neutral-900 dark:text-white">
                    What does this equation represent?
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">hₜ = RNN_enc(xₜ, hₜ₋₁)</p>
                </div>

                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 space-y-3">
                  <p className="text-sm text-primary font-medium">LivePaper Response</p>
                  <p className="text-neutral-900 dark:text-white">
                    This is the encoder hidden state equation from an RNN. It keeps context from every previous token
                    so the model can interpret the entire sequence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/15 text-primary border border-primary/20">RNN Component</Badge>
                    <Badge variant="secondary" className="text-xs">Sequential Processing</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div
              ref={stage3Ref}
              className={`rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 transition-all ${
                stage3Visible ? "animate-on-scroll visible" : "animate-on-scroll"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      Step 3 — Publish & Share
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Get a hosted LivePaper page with analytics and custom domains.
                    </p>
                  </div>
                </div>
                <Badge variant="default" className="rounded-full px-4 py-1">
                  Step 3
                </Badge>
              </div>

              <div className="mt-6 space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/60 p-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">
                        LivePaper URL ready
                      </div>
                    </div>
                    <div className="flex-1 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                      <span className="font-semibold text-neutral-900 dark:text-white">kael.livepaper.ai/paper/attention</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      gtagSendEvent(START_FOR_FREE_URL);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Publish LivePaper
                  </Button>
                  <Button
                    className="w-full sm:w-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      gtagSendEvent(START_FOR_FREE_URL);
                    }}
                  >
                    Export as Interactive Page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
