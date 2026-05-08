import type { Certification } from "@/data/modules";
import { Award, Calendar, FileText, User } from "lucide-react";

type CertificationCardProps = {
  certification: Certification;
};

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <div className="bg-white border border-border-color/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#0070ad]/5 rounded-full blur-2xl group-hover:bg-[#0070ad]/10 transition-colors pointer-events-none"></div>
      
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-inner">
          <Award size={24} className="text-[#0070ad]" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-serif text-lg font-bold text-ink">
              {certification.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted bg-parchment-100 px-2 py-1 rounded border border-border-color/50">
              Verified
            </span>
          </div>
          
          <p className="text-sm font-medium text-[#0070ad] mb-3">
            {certification.issuer}
          </p>
          
          <p className="text-[13px] leading-relaxed text-ink/80 mb-4">
            {certification.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border-color/30">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-muted" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-muted font-mono">Date</span>
                <span className="text-xs font-medium text-ink">{certification.issueDate}</span>
              </div>
            </div>
            
            {certification.referenceNo && (
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-muted" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-muted font-mono">Ref No.</span>
                  <span className="text-xs font-medium text-ink">{certification.referenceNo}</span>
                </div>
              </div>
            )}

            {certification.mentor && (
              <div className="flex items-center gap-2">
                <User size={14} className="text-muted" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-muted font-mono">Mentor</span>
                  <span className="text-xs font-medium text-ink">{certification.mentor}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
