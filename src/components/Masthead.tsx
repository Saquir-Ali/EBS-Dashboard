"use client";

import { useEffect, useState } from "react";
import { Award, Target, BookOpenCheck } from "lucide-react";

type MastheadProps = {
  avgPct: number;
  totalDone: number;
  totalTopics: number;
  mockScore: number;
};

export default function Masthead({
  avgPct,
  totalDone,
  totalTopics,
  mockScore,
}: MastheadProps) {
  const [liveDate, setLiveDate] = useState("");
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const d = new Date();
    setLiveDate(
      d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    );
    setTimeout(() => setBarWidth(avgPct), 100);
  }, [avgPct]);

  return (
    <div className="relative overflow-hidden bg-slate rounded-3xl p-8 text-white shadow-xl mb-8 border border-white/10 mt-6 mx-6">
      {/* Background gradients */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold rounded-full opacity-20 blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-forest rounded-full opacity-30 blur-3xl mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/80">Oracle EBS R12 Mastery</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-2">
            Progress Report
          </h1>
          <p className="text-white/60 font-light tracking-wide text-sm flex items-center gap-2">
            Pune Campus <span className="w-1 h-1 rounded-full bg-white/30"></span> {liveDate}
          </p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="glass-dark px-5 py-4 rounded-2xl flex-1 md:flex-none border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 mb-2 text-white/50">
              <Target size={14} className="text-gold-light" />
              <span className="font-mono text-[10px] uppercase tracking-wider">Mock Score</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold text-white">{mockScore}</span>
              <span className="font-mono text-xs text-white/40">/ 50</span>
            </div>
          </div>

          <div className="glass-dark px-5 py-4 rounded-2xl flex-1 md:flex-none border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 mb-2 text-white/50">
              <BookOpenCheck size={14} className="text-gold-light" />
              <span className="font-mono text-[10px] uppercase tracking-wider">Topics</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold text-white">{totalDone}</span>
              <span className="font-mono text-xs text-white/40">/ {totalTopics}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest flex items-center gap-1.5">
            <Award size={12} className="text-gold" /> Overall Completion
          </span>
          <span className="font-mono text-xs text-gold-light font-medium">{avgPct}%</span>
        </div>
        <div className="h-2 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden"
            style={{ width: `${barWidth}%`, background: "linear-gradient(90deg, #c9922a, #f0c96e)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
