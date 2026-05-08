"use client";

import { useState } from "react";
import Masthead from "@/components/Masthead";
import ModuleCard from "@/components/ModuleCard";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import CertificationCard from "@/components/CertificationCard";
import { modules, milestones, certifications } from "@/data/modules";
import { Search, Bell } from "lucide-react";

export default function Home() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const avgPct = Math.round(
    modules.reduce((s, m) => s + m.pct, 0) / modules.length
  );
  const totalDone = modules.reduce((s, m) => s + m.done.length, 0);
  const totalTopics = modules.reduce((s, m) => s + m.topics.length, 0);
  const mockScore = 50;

  return (
    <div className="min-h-screen bg-parchment-50 flex">
      <Navigation />

      <main className="flex-1 md:ml-64 flex flex-col xl:flex-row">
        <div className="flex-1 w-full max-w-5xl mx-auto">
          {/* Top Header */}
          <header className="h-20 px-8 flex items-center justify-between border-b border-border-color/30 bg-parchment-50/80 backdrop-blur-md sticky top-0 z-40">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border-color/50 shadow-sm w-72">
              <Search size={16} className="text-muted" />
              <input
                type="text"
                placeholder="Search modules..."
                className="bg-transparent border-none outline-none text-sm w-full text-ink placeholder:text-muted/60"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-muted hover:text-ink transition-colors">
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rust rounded-full border-2 border-parchment-50"></span>
              </button>
              <div className="w-9 h-9 rounded-full bg-slate border-2 border-white shadow-sm flex items-center justify-center text-white font-serif text-sm">
                SA
              </div>
            </div>
          </header>

          <Masthead
            avgPct={avgPct}
            totalDone={totalDone}
            totalTopics={totalTopics}
            mockScore={mockScore}
          />

          <div className="px-8 pb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-ink">Certifications & Achievements</h2>
            </div>
            
            <div className="flex flex-col gap-4 mb-10">
              {certifications.map((cert) => (
                <CertificationCard key={cert.id} certification={cert} />
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-ink">Learning Modules</h2>
              <div className="font-mono text-xs uppercase tracking-widest text-muted bg-white px-3 py-1.5 rounded-md border border-border-color/30 shadow-sm">
                Completed
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {modules.map((m) => (
                <ModuleCard
                  key={m.code}
                  module={m}
                  isActive={activeModule === m.code}
                  onClick={() =>
                    setActiveModule((prev) => (prev === m.code ? null : m.code))
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <Sidebar
          avgPct={avgPct}
          totalDone={totalDone}
          totalTopics={totalTopics}
          mockScore={mockScore}
          milestones={milestones}
        />
      </main>
    </div>
  );
}
