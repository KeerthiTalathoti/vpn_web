import React from 'react';
import { Laptop, Lock, ShieldCheck, Cpu, RefreshCw } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const nodes = [
    {
      id: 1,
      title: 'Local Endpoint',
      subtitle: '192.168.1.105',
      tag: 'CLIENT DEVICE',
      icon: Laptop,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'IPsec / IKE Tunnel',
      subtitle: 'UDP 500 / 4500',
      tag: 'ESP / AH TUNNEL',
      icon: Lock,
      color: 'from-cyan-400 to-teal-400',
    },
    {
      id: 3,
      title: 'Analysis Engine',
      subtitle: 'Local PCAP Parser',
      tag: 'VPN ANALYZER CORE',
      icon: Cpu,
      color: 'from-cyan-300 to-blue-600',
    },
    {
      id: 4,
      title: 'Security Findings',
      subtitle: 'Cryptographic Audit',
      tag: 'VERIFICATION REPORT',
      icon: ShieldCheck,
      color: 'from-emerald-400 to-cyan-400',
    }
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl glass-panel p-6 sm:p-8 lg:p-10 border border-cyan-500/25 shadow-[0_0_50px_rgba(0,240,255,0.1)] overflow-hidden">
      {/* Background Grid Accent & Scanning Line */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse" />

      {/* Header bar of visual container */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-cyan-500/15">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider uppercase">
            LIVE TRAFFIC PIPELINE VISUALIZER
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900/60 border border-cyan-500/20 text-cyan-400">
            <RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />
            LOCAL ENGINE ACTIVE
          </span>
          <span className="hidden sm:inline-block text-slate-500">|</span>
          <span className="hidden sm:inline-block">UDP 500 / 4500 (IKE / ESP)</span>
        </div>
      </div>

      {/* Nodes & Pipeline Graphic */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 my-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div key={node.id} className="relative flex flex-col items-center">
              {/* Connector line between nodes for desktop */}
              {index < nodes.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] right-[-40%] h-0.5 z-0 pointer-events-none">
                  {/* Glowing Track Line */}
                  <div className="w-full h-full bg-cyan-500/20" />
                  {/* Moving Particle Pulse */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-1.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full shadow-[0_0_10px_#00f0ff]"
                    style={{
                      animation: `moveParticle 2.5s infinite linear ${index * 0.4}s`
                    }}
                  />
                </div>
              )}

              {/* Node Card */}
              <div className="relative w-full z-10 flex flex-col items-center p-5 rounded-2xl bg-[#081524]/80 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/70 transition-all duration-300 text-center group hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] hover:-translate-y-1">
                {/* Badge Tag */}
                <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400/80 mb-3 uppercase px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
                  {node.tag}
                </span>

                {/* Node Icon Avatar */}
                <div className={`w-13 h-13 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${node.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-[#06111c] rounded-[10px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
                  </div>
                </div>

                <h4 className="font-display font-bold text-sm text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                  {node.title}
                </h4>
                <p className="font-mono text-[11px] text-cyan-400/90 font-medium">
                  {node.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* inline CSS keyframe animation for moving particles */}
      <style>{`
        @keyframes moveParticle {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
