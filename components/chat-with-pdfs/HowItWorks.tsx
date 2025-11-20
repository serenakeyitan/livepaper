"use client";

import { Upload, MessageSquare, Network, FileText, Plus, Sparkles, Box, Zap, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [stage1Ref, stage1Visible] = useScrollAnimation();
  const [stage2Ref, stage2Visible] = useScrollAnimation();
  const [stage3Ref, stage3Visible] = useScrollAnimation();
  
  return (
    <section id="how-it-works" ref={sectionRef} className={`w-full py-12 sm:py-16 lg:py-24 bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 ${sectionVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
      <div className="container mx-auto px-10 sm:px-12 lg:px-16">
        <div className="flex w-full max-w-[900px] mx-auto flex-col items-center gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center animate-fade-in-up px-4">
            Kael Research Flow
          </h2>
          
          <div className="flex w-full flex-col items-center gap-1">
            {/* Stage 1: Upload Papers */}
            <div ref={stage1Ref} className={`flex w-full flex-col items-start gap-4 sm:gap-6 rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-30 border-2 border-solid border-primary/30 bg-neutral-100 dark:bg-neutral-800/90 backdrop-blur-md ring-2 ring-primary/20 ring-inset hover:scale-[1.01] transition-transform duration-300 ${stage1Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
              <div className="flex w-full items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                  <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex grow flex-col items-start gap-1 min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                    Stage 1: Upload Papers
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Drop your research PDFs and let Kael extract the knowledge
                  </span>
                </div>
                <Badge variant="default" className="text-xs sm:text-sm flex-shrink-0">Step 1</Badge>
              </div>
              
              <div className="flex w-full items-center gap-2 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 py-3 sm:py-4 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="flex flex-col items-start gap-1 min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate">
                      paper_01.pdf
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      2.4 MB
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 py-3 sm:py-4 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <div className="flex flex-col items-start gap-1 min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white truncate">
                      paper_02.pdf
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      1.8 MB
                    </span>
                  </div>
                </div>
                
                <div className="flex h-16 w-28 sm:h-20 sm:w-36 items-center justify-center gap-2 rounded-lg border-2 border-dashed border-neutral-300">
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400" />
                </div>
              </div>
            </div>

            {/* Stage 2: AI Chat */}
            <div ref={stage2Ref} className={`flex w-full flex-col items-start gap-4 sm:gap-6 rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-20 border-2 border-solid border-primary/30 bg-neutral-100 dark:bg-neutral-800/90 backdrop-blur-md ring-2 ring-primary/20 ring-inset hover:scale-[1.01] transition-transform duration-300 ${stage2Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
              <div className="flex w-full items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex grow flex-col items-start gap-1 min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                    Stage 2: AI Chat
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Ask questions and explore mathematical concepts interactively
                  </span>
                </div>
                <Badge variant="default" className="text-xs sm:text-sm flex-shrink-0">Step 2</Badge>
              </div>
              
              <div className="flex w-full flex-col items-start gap-3 sm:gap-4">
                <div className="flex w-full items-start gap-2 sm:gap-3 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 py-3 sm:py-4 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex-shrink-0">
                    K
                  </div>
                  <div className="flex grow flex-col items-start gap-2 min-w-0">
                    <span className="text-sm sm:text-base text-neutral-900 dark:text-white">
                      What does this equation represent?
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm italic text-neutral-700 dark:text-neutral-300 break-all">h_t = RNN_enc(x_t, h_t-1)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex w-full items-start gap-2 sm:gap-3 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 py-3 sm:py-4 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-primary/20 flex-shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="flex grow flex-col items-start gap-2 min-w-0">
                    <span className="text-sm sm:text-base text-neutral-900 dark:text-white">
                      This is the encoder hidden state equation from an RNN. It computes the context representation at each timestep.
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="default" className="gap-1 text-xs">
                        <Box className="w-3 h-3" />
                        RNN Component
                      </Badge>
                      <Badge variant="secondary" className="text-xs">Sequential Processing</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3: Knowledge Map */}
            <div ref={stage3Ref} className={`flex w-full flex-col items-start gap-4 sm:gap-6 rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10 border-2 border-solid border-primary/30 bg-neutral-100 dark:bg-neutral-800/90 backdrop-blur-md ring-2 ring-primary/20 ring-inset hover:scale-[1.01] transition-transform duration-300 ${stage3Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
              <div className="flex w-full items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                  <Network className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex grow flex-col items-start gap-1 min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white">
                    Stage 3: Knowledge Map
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Visualize connections between concepts and related research
                  </span>
                </div>
                <Badge variant="default" className="text-xs sm:text-sm flex-shrink-0">Step 3</Badge>
              </div>
              
              <div className="flex w-full items-center justify-center gap-2 sm:gap-3 lg:gap-4 rounded-lg border border-solid border-neutral-300 dark:border-neutral-600 px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 shadow-sm bg-neutral-50 dark:bg-neutral-700/50 backdrop-blur-sm overflow-x-auto">
                <div className="flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center gap-2 rounded-full border-2 border-solid border-primary">
                    <Box className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                    RNN Core
                  </span>
                </div>
                
                <div className="flex h-1 w-8 sm:w-12 lg:w-16 bg-primary/60 flex-shrink-0" />
                
                <div className="flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center gap-2 rounded-full border-2 border-solid border-primary/60">
                    <Box className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    LSTM
                  </span>
                </div>
                
                <div className="flex h-1 w-8 sm:w-12 lg:w-16 bg-primary/60 flex-shrink-0" />
                
                <div className="flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center gap-2 rounded-full border-2 border-solid border-primary/60">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    GRU
                  </span>
                </div>
              </div>
              
              <div className="flex w-full items-center justify-center gap-2 sm:gap-4 flex-wrap">
                <Button size="sm" className="gap-2 text-xs sm:text-sm px-3 sm:px-4 w-full sm:w-auto">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  Explore Network
                </Button>
                <Button variant="secondary" size="sm" className="gap-2 text-xs sm:text-sm px-3 sm:px-4 w-full sm:w-auto">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  Export Graph
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
