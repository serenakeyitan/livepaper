"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { START_FOR_FREE_URL } from "./constants";
import { gtagSendEvent } from "./gtag-utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const [feature1Ref, feature1Visible] = useScrollAnimation();
  const [feature2Ref, feature2Visible] = useScrollAnimation();
  const [feature3Ref, feature3Visible] = useScrollAnimation();
  const [feature4Ref, feature4Visible] = useScrollAnimation();
  
  return (
    <section id="features" className="w-full py-12 sm:py-16 lg:py-24 bg-neutral-800">
      <div className="container mx-auto px-10 sm:px-12 lg:px-16">
        {/* Feature 1 — Dynamic Paper Page */}
        <div ref={feature1Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-40 max-w-[1800px] mx-auto ${feature1Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Dynamic</span> Paper Page
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                A modern page built for dynamic research
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              LivePaper creates a paper layout designed for <strong className="text-white">interactive content</strong>. <strong className="text-white">Charts, animations, and video</strong> blend naturally into a <strong className="text-white">clean, structured reading experience</strong> across any device.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Charts, animations, and video integrated</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Works on desktop/tablet/phone</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Clear structure & navigation</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">No plugins required</span>
              </div>
            </div>
          </div>
          <div className="lg:pl-8 animate-fade-in-right animation-delay-200">
            <div className="flex w-full max-w-[640px] min-h-[420px] mx-auto flex-col rounded-[32px] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-[0_25px_80px_rgba(15,23,42,0.25)] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-900/60">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 flex-1 bg-white/70 dark:bg-neutral-800/60 rounded-lg px-3 py-1 border border-neutral-200 dark:border-neutral-700">
                  🔒 livepaper.ai/p/attention
                </div>
                <button className="text-xs text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-600 hover:border-primary hover:text-primary transition-colors">
                  Preview
                </button>
              </div>

              <div className="grid grid-cols-[220px_1fr]">
                {/* sidebar */}
                <div className="border-r border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-900/70 p-5 space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-500">
                    <span>Outline</span>
                    <span className="text-primary cursor-pointer">+ Section</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    {["Overview", "Architecture", "Training", "Ablations", "Appendix"].map((item, index) => (
                      <button
                        key={item}
                        className={`w-full text-left px-3 py-2 rounded-2xl border transition-all ${
                          index === 1
                            ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm"
                            : "border-transparent text-neutral-500 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 hover:text-neutral-800"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <div className="pt-3 text-[11px] font-semibold text-neutral-500">Assets</div>
                  <div className="space-y-2 text-xs text-neutral-500">
                    {["Interactive charts (4)", "Motion diagrams (3)", "Video explainers (2)", "Code snippets (6)"].map(
                      (asset) => (
                        <div key={asset} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                          {asset}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* canvas */}
                <div className="p-6 space-y-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>LivePaper Canvas</span>
                    <button className="text-primary flex items-center gap-1">Edit ➜</button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/70 p-4 space-y-3">
                      <div className="text-xs text-neutral-500">Hero motion</div>
                      <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 flex items-center justify-center text-xs text-primary">
                        📽️ Auto-play animation
                      </div>
                      <div className="flex justify-between text-[11px] text-neutral-500">
                        <span>Duration 12s</span>
                        <span>Loop • Sound off</span>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/70 p-4 space-y-3">
                      <div className="text-xs text-neutral-500">Chart block</div>
                      <div className="bg-neutral-50 dark:bg-neutral-900/60 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-neutral-700 dark:text-neutral-200">Model Accuracy</span>
                          <button className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-[10px]">Sync</button>
                        </div>
                        <div className="mt-4 flex items-end gap-2 h-24">
                          {[45, 60, 80, 70].map((height, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center">
                              <div
                                className="w-full rounded-t bg-gradient-to-t from-primary to-primary/60"
                                style={{ height: `${height}%` }}
                              ></div>
                              <span className="text-[10px] text-neutral-500 mt-2">Layer {idx + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 text-[11px] text-neutral-500">
                        <span>Hover states</span>•<span>Playable timeline</span>•<span>Download data</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/70 p-4">
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                      <span>Reader comments (auto sync)</span>
                      <span className="text-primary cursor-pointer">Show all</span>
                    </div>
                    <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs">Sarah</span>
                        <span>“The attention visualization made the math intuitive.”</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs">Li</span>
                        <span>“I embedded this section into our lab syllabus.”</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-[11px] text-neutral-500">
                    <span>Auto-saves every 30s</span>
                    <span>Clickable hotspots &amp; keyboard navigation ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 — Interactive Data Visualization */}
        <div ref={feature2Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-40 max-w-[1800px] mx-auto ${feature2Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="lg:pr-8 order-2 lg:order-1">
            <div className="flex w-full max-w-[640px] min-h-[420px] mx-auto flex-col rounded-[32px] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-[0_25px_80px_rgba(15,23,42,0.25)] overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900/70">
                <div>
                  <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Interactive Chart Studio</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Hover, compare, and export in one place</div>
                </div>
                <div className="flex gap-2 text-xs">
                  <button className="px-3 py-1 rounded-full bg-primary text-white flex items-center gap-1">Compare</button>
                  <button className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-200">
                    Export
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-primary"></span> Baseline
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> Fine-tuned
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-primary/5 text-primary">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> LivePaper
                  </div>
                </div>

                <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-6">
                  <div className="absolute inset-6 flex flex-col justify-between">
                    {[...Array(4)].map((_, idx) => (
                      <div key={idx} className="border-t border-dashed border-neutral-200 dark:border-neutral-700"></div>
                    ))}
                  </div>
                  <svg viewBox="0 0 320 150" className="relative w-full h-36">
                    <polyline
                      points="0,110 40,100 80,90 120,80 160,75 200,70 240,60 280,50 320,45"
                      fill="none"
                      strokeWidth="3"
                      className="stroke-primary"
                    />
                    <polyline
                      points="0,130 40,125 80,120 120,100 160,85 200,82 240,75 280,65 320,50"
                      fill="none"
                      strokeWidth="3"
                      className="stroke-purple-400/80"
                    />
                    <polyline
                      points="0,140 40,130 80,118 120,95 160,70 200,55 240,42 280,35 320,28"
                      fill="none"
                      strokeWidth="3"
                      className="stroke-emerald-400"
                    />
                  </svg>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl px-3 py-2 text-xs shadow-lg">
                    <div className="font-semibold text-neutral-700 dark:text-neutral-200">Epoch 42</div>
                    <div className="text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span> LP Accuracy 91.4%
                    </div>
                    <div className="text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span> FT Accuracy 85.2%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  {["Hover to inspect", "Drag to zoom", "Shift + Click to pin"].map((tip) => (
                    <div
                      key={tip}
                      className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 text-neutral-600 dark:text-neutral-300 px-3 py-2"
                    >
                      {tip}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="flex-1 min-w-[140px] rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-2 text-xs">
                    Toggle Legends
                  </button>
                  <button className="flex-1 min-w-[140px] rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-2 text-xs">
                    Sync Viewports
                  </button>
                  <button className="flex-1 min-w-[140px] rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-2 text-xs">
                    Copy Snapshot
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Interactive</span> Data Visualization
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                Turn static figures into explorable data
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              LivePaper <strong className="text-white">reconstructs</strong> your charts so readers can <strong className="text-white">inspect values</strong>, <strong className="text-white">zoom into details</strong>, switch conditions, compare views, and <strong className="text-white">export data</strong> for deeper understanding.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Hover for exact values</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Condition & legend switching</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Zoom, compare, export</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Multi-view displays (e.g., train/val)</span>
                    </div>
                    </div>
                  </div>
                </div>
                
        {/* Feature 3 — Animated Concepts */}
        <div ref={feature3Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-40 max-w-[1800px] mx-auto ${feature3Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Animated</span> Concepts
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                Turn complex ideas into clear visual explanations
              </p>
                </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Model architectures, algorithm flows, time dynamics, and causal relationships become <strong className="text-white">animated visual explanations</strong>—making difficult concepts <strong className="text-white">intuitive</strong> and easy to follow.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Algorithm flow animations</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Model structure motion</span>
                    </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Time-series visualizations</span>
                </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Causal/relationship diagrams</span>
                        </div>
                      </div>
                    </div>
          <div className="lg:pl-8 animate-fade-in-right animation-delay-200">
            <div className="flex w-full max-w-[640px] min-h-[420px] mx-auto flex-col rounded-[32px] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-[0_25px_80px_rgba(15,23,42,0.25)] overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900/70">
                <div>
                  <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Concept Animation Editor</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Transform math into motion</div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-200">
                    Keyframes
                  </button>
                  <button className="px-3 py-1 rounded-full bg-primary text-white flex items-center gap-1">
                    ▶ Preview
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-[150px_1fr_120px] gap-4">
                  <div className="space-y-3 text-xs text-neutral-500">
                    {["Inputs", "Attention", "Decoder"].map((label, idx) => (
                      <div key={label} className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-2xl border border-primary/50 bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold animate-pulse"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-700 dark:text-neutral-200">{label}</div>
                          <div className="text-[10px]">Layer {idx + 1}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative h-32 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-primary/5 to-primary/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-between px-8">
                      {["x₁", "x₂", "h₁", "h₂", "ŷ"].map((node, idx) => (
                        <div key={node} className="text-center space-y-2">
                          <div
                            className={`w-12 h-12 rounded-full border-2 ${
                              idx >= 2 ? "border-primary bg-white dark:bg-neutral-900" : "border-primary/40 bg-primary/10"
                            } flex items-center justify-center text-xs font-semibold text-primary animate-pulse`}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                          >
                            {node}
                          </div>
                          <div className="text-[10px] text-neutral-500">{idx < 2 ? "Input" : idx < 4 ? "Hidden" : "Output"}</div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-between px-8">
                      {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="flex-1 h-px bg-gradient-to-r from-primary/20 to-primary/60"></div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-neutral-600 dark:text-neutral-200">
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 p-3">
                      <div className="font-semibold text-neutral-800 dark:text-white">Narration</div>
                      <p className="text-[11px] text-neutral-500 mt-1">“Attention redistributes focus frame by frame...”</p>
                    </div>
                    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 p-3">
                      <div className="font-semibold text-neutral-800 dark:text-white">Timing</div>
                      <p className="text-[11px] text-emerald-500 font-semibold">Sync: +120%</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span>Timeline (frames)</span>
                    <span>Loop · Auto ease</span>
                  </div>
                  <div className="h-14 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 flex items-center px-4 gap-2">
                    {[15, 30, 60, 90, 120].map((mark) => (
                      <div key={mark} className="flex-1 relative text-[10px] text-neutral-500">
                        <div className="h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2">{mark}</span>
                      </div>
                    ))}
                    <div className="px-3 py-1 rounded-full bg-primary text-white text-[10px]">Playhead ▸</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs">
                  <button className="flex-1 min-w-[120px] rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-2">
                    Add Voiceover
                  </button>
                  <button className="flex-1 min-w-[120px] rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-2">
                    Export GIF
                  </button>
                  <button className="flex-1 min-w-[120px] rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 py-2">
                    Share Snippet
                  </button>
                </div>
              </div>
            </div>
          </div>
                    </div>

        {/* Feature 4 — Visibility & Sharing */}
        <div ref={feature4Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-[1800px] mx-auto ${feature4Visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          <div className="lg:pr-8 order-2 lg:order-1">
            <div className="flex w-full max-w-[640px] min-h-[420px] mx-auto flex-col rounded-[32px] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-[0_25px_80px_rgba(15,23,42,0.25)] overflow-hidden">
              <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-primary/5 to-transparent">
                <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Visibility Dashboard</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Monitor reach, shares, and engagement</div>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Visits", value: "24,180", delta: "+12%" },
                    { label: "Shares", value: "1,842", delta: "+22%" },
                    { label: "Avg. Read", value: "06:24", delta: "+31%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-900/70 border border-neutral-200 dark:border-neutral-800 p-3"
                    >
                      <div className="text-xs text-neutral-500">{stat.label}</div>
                      <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs text-emerald-500 font-semibold">{stat.delta}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-900/60">
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-neutral-600 dark:text-neutral-300">Traffic Sources</span>
                    <div className="flex gap-2 text-xs">
                      <button className="px-2 py-1 rounded-full bg-primary text-white">7d</button>
                      <button className="px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-300">
                        30d
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                    {["Direct", "Scholar", "Social", "Embedded"].map((chip) => (
                      <span key={chip} className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-end gap-1 h-24">
                    {[50, 65, 75, 68, 72, 90, 85].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-primary/60 rounded-t relative overflow-hidden"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {[
                    { icon: "🔗", label: "Copy Share Link", action: "Link copied" },
                    { icon: "📧", label: "Send to Email List", action: "1,200 recipients" },
                    { icon: "🧠", label: "Embed into LMS", action: "Canvas & Moodle" },
                    { icon: "📱", label: "Post to Social", action: "Auto preview ready" },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 px-3 py-3 flex items-center gap-2 text-left hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <span className="text-base">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-neutral-700 dark:text-neutral-200">{item.label}</div>
                        <div className="text-neutral-500 dark:text-neutral-400">{item.action}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-primary">Visibility</span> & <span className="text-primary">Sharing</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-semibold">
                Make your research easier to discover
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-semibold">
              Dynamic content is easier to share and reference. LivePaper boosts <strong className="text-white">search visibility</strong> and provides <strong className="text-white">reader analytics</strong> to help your work reach a <strong className="text-white">wider audience</strong>.
            </p>
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Shareable animated figures</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Social-friendly previews</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">SEO-optimized structure</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Reader & audience stats</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
