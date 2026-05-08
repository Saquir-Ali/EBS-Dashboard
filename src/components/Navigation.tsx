"use client";

import { LayoutDashboard, BookOpen, GraduationCap, Settings, LogOut, Bell } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="w-64 h-screen fixed left-0 top-0 border-r border-border-color/60 bg-cream/80 backdrop-blur-xl flex flex-col justify-between hidden md:flex z-50">
      <div>
        <div className="p-6">
          <div className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold text-white flex items-center justify-center text-lg shadow-md">
              <BookOpen size={18} />
            </div>
            Ledger
          </div>
        </div>

        <div className="px-4 mt-4 flex flex-col gap-1.5">
          <div className="font-mono text-[10px] tracking-widest uppercase text-muted mb-2 px-3">
            Main Menu
          </div>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white shadow-sm border border-gold/20 text-ink font-medium transition-all">
            <LayoutDashboard size={18} className="text-gold" />
            Dashboard
          </a>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 text-muted hover:text-ink transition-all">
            <BookOpen size={18} />
            My Modules
          </a>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 text-muted hover:text-ink transition-all">
            <GraduationCap size={18} />
            Certifications
          </a>
        </div>
      </div>

      <div className="p-4">
        <div className="px-4 mb-4">
          <div className="glass-panel p-4 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rounded-bl-full"></div>
            <p className="font-serif font-bold text-ink text-sm mb-1">Go Premium</p>
            <p className="text-xs text-muted leading-relaxed mb-3">Unlock advanced PL/SQL mock exams.</p>
            <button className="w-full py-1.5 bg-ink text-white rounded-md text-xs font-medium hover:bg-slate transition-colors">
              Upgrade
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1 px-4">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 text-muted hover:text-ink transition-all">
            <Settings size={18} />
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 text-muted hover:text-ink transition-all">
            <LogOut size={18} />
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}
