import type { Milestone } from "@/data/modules";
import { Flag, Activity, Trophy, MoveRight } from "lucide-react";

type SidebarProps = {
  avgPct: number;
  totalDone: number;
  totalTopics: number;
  mockScore: number;
  milestones: Milestone[];
};

export default function Sidebar({
  avgPct,
  totalDone,
  totalTopics,
  mockScore,
  milestones,
}: SidebarProps) {
  return (
    <div className="w-full xl:w-[320px] shrink-0 p-6 xl:border-l border-border-color/40 bg-parchment-100 xl:min-h-screen">
      <div className="sticky top-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity size={16} className="text-muted" />
          <h2 className="font-serif font-bold text-lg text-ink">Session Stats</h2>
        </div>
        
        <div className="bg-white rounded-2xl p-5 border border-border-color/30 shadow-sm mb-8">
          <div className="flex items-center justify-between py-2.5 border-b border-border-color/30">
            <span className="text-sm text-muted font-medium">Avg mastery</span>
            <span className="font-mono text-sm font-bold text-ink">{avgPct}%</span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-border-color/30">
            <span className="text-sm text-muted font-medium">Topics done</span>
            <span className="font-mono text-sm font-bold text-ink">
              {totalDone} / {totalTopics}
            </span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-border-color/30">
            <span className="text-sm text-muted font-medium">Mock score</span>
            <span className="font-mono text-sm font-bold text-ink">
              {mockScore} / 50
            </span>
          </div>
          <div className="flex items-center justify-between py-2.5 border-b border-border-color/30">
            <span className="text-sm text-muted font-medium">Strongest</span>
            <span className="font-mono text-sm font-bold text-forest">
              Foundation
            </span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-sm text-muted font-medium">Focus area</span>
            <span className="font-mono text-sm font-bold text-rust">
              Workflow
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 mt-8">
          <Trophy size={16} className="text-gold" />
          <h2 className="font-serif font-bold text-lg text-ink">Milestones</h2>
        </div>
        
        <div className="relative pl-3 border-l-2 border-warm-mid/60 space-y-6 mb-8 ml-2">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              <div
                className="absolute -left-[17px] top-1 w-3 h-3 rounded-full border-2 border-parchment-100"
                style={{ background: m.color }}
              ></div>
              <div className="pl-2">
                <div className="text-[13px] font-medium leading-relaxed text-ink shadow-sm">{m.label}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted mt-1">
                  {m.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 to-gold-light/5 border border-gold/20 p-5 cursor-pointer hover:border-gold/40 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <Flag size={14} className="text-gold" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-gold font-bold">
              Next Up
            </span>
          </div>
          <p className="text-sm font-medium leading-relaxed text-ink/90">
            Complete Oracle Forms (XXG5_STORE_TXN_FORM) integration with custom PL/SQL package
          </p>
          <div className="mt-4 flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
            Start module <MoveRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
