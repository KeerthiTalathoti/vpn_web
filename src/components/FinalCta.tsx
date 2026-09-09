import React from 'react';
import { Download, BookOpen, ChevronRight, Shield } from 'lucide-react';

interface FinalCtaProps {
  onOpenDocs: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDocs }) => {
  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-glow border-t border-cyan-500/15">
      {/* Glow background radial backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto rounded-3xl glass-panel p-8 sm:p-14 text-center border-2 border-cyan-500/30 shadow-[0_0_60px_rgba(0,240,255,0.15)]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-6">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span>START YOUR LOCAL TRAFFIC AUDIT TODAY</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 mb-6">
          Ready to Inspect Your VPN?
        </h2>

        <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Download VPN Analyzer and start analyzing VPN traffic locally on your workstation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToDownload}
            className="group px-8 py-4 rounded-xl font-display font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
            <span>Download VPN Analyzer</span>
            <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenDocs}
            className="px-8 py-4 rounded-xl font-display font-semibold text-sm text-slate-200 bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Read Documentation</span>
          </button>
        </div>
      </div>
    </section>
  );
};
