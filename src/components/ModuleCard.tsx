"use client";

import { useEffect, useState } from "react";
import type { Module } from "@/data/modules";
import { ChevronDown, CheckCircle2, Circle } from "lucide-react";

type ModuleCardProps = {
  module: Module;
  isActive: boolean;
  onClick: () => void;
};

export default function ModuleCard({
  module,
  isActive,
  onClick,
}: ModuleCardProps) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setBarWidth(module.pct), 200);
    return () => clearTimeout(timer);
  }, [module.pct]);

  return (
    <div
      onClick={onClick}
      className={`relative bg-white mb-4 rounded-2xl cursor-pointer transition-all duration-300 border 
      ${
        isActive
          ? "border-gold shadow-[0_8px_30px_rgba(201,146,42,0.12)] scale-[1.01]"
          : "border-border-color/50 hover:border-gold/50 hover:shadow-lg shadow-sm"
      }`}
    >
      <div className="p-4 sm:p-5 flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center font-serif text-sm font-bold shadow-sm"
          style={{ background: module.bg, color: module.color }}
        >
          {module.code}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[15px] font-medium text-ink tracking-tight">
              {module.label}
            </h3>
            <span className="font-mono text-[13px] font-semibold" style={{ color: module.color }}>
              {module.pct}%
            </span>
          </div>
          <div className="h-1.5 bg-warm-mid/50 rounded-full overflow-hidden w-full">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${barWidth}%`, background: module.color }}
            ></div>
          </div>
        </div>

        <div className="shrink-0 ml-2">
          <ChevronDown
            size={20}
            className={`text-muted transition-transform duration-300 ${isActive ? "rotate-180 text-gold" : ""}`}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-1 border-t border-warm-mid/30 mx-2">
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted mb-4 mt-3">
            Syllabus Topics
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {module.topics.map((t, ti) => {
              const isDone = module.done.includes(ti);
              return (
                <div
                  key={ti}
                  className={`flex items-start gap-2.5 p-2.5 rounded-lg border transition-colors ${
                    isDone
                      ? "bg-[#eef7f0]/50 border-[#b6dfc0]/50 text-forest"
                      : "bg-parchment-50 border-border-color/30 text-muted"
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 size={16} className="text-[#2a6b3e] shrink-0 mt-[1px]" />
                  ) : (
                    <Circle size={16} className="text-muted/40 shrink-0 mt-[1px]" />
                  )}
                  <span className="text-[12px] font-medium leading-relaxed">
                    {t}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
