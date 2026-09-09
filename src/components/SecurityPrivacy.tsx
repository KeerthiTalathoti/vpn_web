import React from 'react';
import { ShieldCheck, HardDrive, Cpu, ArrowRight, Lock, CheckCircle2, Shield, Radio, Key } from 'lucide-react';

export const SecurityPrivacy: React.FC = () => {
  const steps = [
    { num: '01', label: 'LOCAL MACHINE', desc: 'Your Desktop OS', icon: HardDrive },
    { num: '02', label: 'PCAP / TRACE', desc: 'Local Packet File', icon: Lock },
    { num: '03', label: 'VPN ANALYZER', desc: 'Native C++ Engine', icon: Cpu },
    { num: '04', label: 'ANALYSIS', desc: 'In-Memory Parse', icon: ShieldCheck },
    { num: '05', label: 'SECURITY FINDINGS', desc: 'Local Report', icon: CheckCircle2 }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-cyan-500/20 relative overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
          {/* Ambient Radial Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>LOCAL-FIRST ANALYSIS ARCHITECTURE</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-100 mb-4 tracking-tight">
              Your Packet Data Stays Local
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              VPN Analyzer is designed around local analysis. Users can import packet captures and inspect VPN traffic without requiring cloud-based packet processing.
            </p>
          </div>

          {/* 1-Line Flowing Data Pipeline Diagram */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#040b14]/90 border border-cyan-500/25 shadow-[inset_0_0_40px_rgba(0,240,255,0.05)] overflow-x-auto">
            <div className="flex items-center justify-between min-w-[860px] gap-2 lg:gap-3 py-2">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={idx}>
                    {/* Step Node Card */}
                    <div className="flex-1 flex flex-col items-center p-5 rounded-2xl bg-[#081524]/80 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/80 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:-translate-y-1.5 relative">
                      {/* Step Number Tag */}
                      <span className="absolute top-2.5 right-3 font-mono text-[10px] font-bold text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                        {step.num}
                      </span>

                      {/* Icon Box with Glow Aura */}
                      <div className="relative w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 shadow-[inset_0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center text-cyan-400 mb-3.5 transition-all duration-300">
                        <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
                      </div>

                      {/* Step Title & Subtitle */}
                      <span className="font-mono text-xs font-bold text-slate-100 uppercase tracking-wider text-center group-hover:text-cyan-300 transition-colors">
                        {step.label}
                      </span>
                      <span className="text-[11px] font-mono text-cyan-400/80 text-center mt-1">
                        {step.desc}
                      </span>
                    </div>

                    {/* Flowing Animated Line Connector */}
                    {idx < steps.length - 1 && (
                      <div className="flex items-center justify-center shrink-0 w-10 lg:w-16 relative">
                        {/* Line Track */}
                        <div className="w-full h-[2px] bg-cyan-950 relative overflow-hidden rounded-full border-t border-cyan-500/25">
                          {/* Flowing laser packet dot */}
                          <div 
                            className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-flow-packet" 
                            style={{ animationDelay: `${idx * 0.35}s` }}
                          />
                        </div>
                        <ArrowRight className="w-4 h-4 text-cyan-400 absolute right-0 translate-x-1/2 filter drop-shadow-[0_0_8px_#00f0ff] animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Security Posture Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-cyan-500/15 hover:border-cyan-500/35 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <h4 className="font-mono font-bold text-cyan-300 uppercase tracking-wider text-xs">
                  Zero Cloud Dependencies
                </h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                All frame decodes and cryptographic audits run offline inside local memory. No packet telemetry is dispatched to external endpoints.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-cyan-500/15 hover:border-cyan-500/35 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Radio className="w-4 h-4 text-cyan-400" />
                <h4 className="font-mono font-bold text-cyan-300 uppercase tracking-wider text-xs">
                  Air-Gapped Operation
                </h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Run analysis seamlessly inside air-gapped security operations centers (SOCs) or isolated laboratory environments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-cyan-500/15 hover:border-cyan-500/35 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Key className="w-4 h-4 text-cyan-400" />
                <h4 className="font-mono font-bold text-cyan-300 uppercase tracking-wider text-xs">
                  Open Inspection Scope
                </h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Engine binaries are packaged transparently with verified SHA-256 signatures for reproducible security auditing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
