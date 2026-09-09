import React from 'react';
import { Download, ChevronRight, Shield, HardDrive, Lock, FileCode } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glow background ambient radial highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Top Status Badge & Version Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-emerald-300 tracking-wider">ANALYSIS ENGINE ONLINE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/50 text-slate-300 text-xs font-mono">
            <span className="text-cyan-400">VPN ANALYZER v2.4</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">LOCAL ENGINE</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-100 leading-[1.1] mb-6">
            Analyze{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 text-glow-cyan">
              VPN Traffic.
            </span>
            <br />
            Understand What's Secured.
          </h1>

          {/* Supporting paragraph with highlighted IPsec & IKE */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Inspect <span className="font-semibold text-cyan-300">IPsec</span> and{' '}
            <span className="font-semibold text-cyan-300">IKE</span> traffic locally, identify cryptographic configurations, and analyze VPN security without sending packet data to the cloud.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollTo('download')}
              className="relative group px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 active:scale-95 flex items-center gap-2.5"
            >
              <Download className="w-4 h-4 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
              <span>Download VPN Analyzer</span>
              <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('capabilities')}
              className="px-6 py-3.5 rounded-xl font-display font-medium text-sm text-slate-200 bg-slate-900/80 border border-cyan-500/25 hover:border-cyan-400/60 hover:bg-cyan-950/40 hover:text-cyan-300 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Capabilities</span>
            </button>
          </div>

          {/* Glass Strip Metadata Labels */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-2xl glass-panel border border-cyan-500/20 mb-14 text-xs font-mono text-slate-300 shadow-md">
            <div className="flex items-center gap-2">
              <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-cyan-200">LOCAL ANALYSIS</span>
            </div>
            <span className="text-slate-600">/</span>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-emerald-300">NO CLOUD UPLOAD</span>
            </div>
            <span className="text-slate-600">/</span>
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-cyan-200">IPSEC / IKE</span>
            </div>
            <span className="text-slate-600">/</span>
            <div className="flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-cyan-200">PCAP SUPPORT</span>
            </div>
          </div>
        </div>

        {/* Hero Visualization Component */}
        <HeroVisual />
      </div>
    </section>
  );
};
