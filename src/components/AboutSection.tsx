import React from 'react';
import { Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const archSteps = [
    { label: 'PCAP / Live Traffic', sub: 'Layer 2 / 3 Frames' },
    { label: 'Packet Parser', sub: 'Native C++ Demuxer' },
    { label: 'Protocol Detection', sub: 'ISAKMP / IKEv2 / ESP' },
    { label: 'IKE / IPsec Analyzer', sub: 'SA State Machine' },
    { label: 'Cryptographic Metadata', sub: 'Cipher Suite Extraction' },
    { label: 'Security Rule Engine', sub: 'NIST / CIS Benchmarks' },
    { label: 'Findings / Reports', sub: 'JSON / GUI Telemetry' }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4 inline-block">
            OPEN SECURITY RESEARCH PROJECT
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            About VPN Analyzer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            VPN Analyzer is a cybersecurity analysis framework focused on helping users inspect VPN and IPsec traffic, understand cryptographic configurations, and identify potential security issues.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          <div className="glass-card p-5">
            <h4 className="font-display font-bold text-sm text-cyan-300 mb-2">
              Project Purpose
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Empower network engineers, SOC analysts, and security researchers to inspect VPN control and data plane traffic without relying on proprietary cloud parsers.
            </p>
          </div>

          <div className="glass-card p-5">
            <h4 className="font-display font-bold text-sm text-cyan-300 mb-2">
              Core Technology
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Written in modern C++ with Qt/React desktop UI abstractions, optimized for high-throughput packet demuxing and low latency.
            </p>
          </div>

          <div className="glass-card p-5">
            <h4 className="font-display font-bold text-sm text-cyan-300 mb-2">
              Supported Platforms
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Native cross-platform binaries available for Linux x86_64, Windows 10/11 (64-bit), and macOS (Apple Silicon & Intel).
            </p>
          </div>

          <div className="glass-card p-5">
            <h4 className="font-display font-bold text-sm text-cyan-300 mb-2">
              Local Analysis
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              100% offline analysis posture ensuring packet data and IPsec negotiation proposals never leave the local user workstation.
            </p>
          </div>

          <div className="glass-card p-5">
            <h4 className="font-display font-bold text-sm text-cyan-300 mb-2">
              Security Research
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designed as an open research utility for analyzing legacy VPN deployments, weak DH groups, and unencrypted ESP transport proposals.
            </p>
          </div>
        </div>

        {/* Technical Architecture Diagram */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-cyan-500/25">
          <h3 className="font-display font-bold text-lg text-slate-100 mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            <span>Technical Architecture Pipeline Diagram</span>
          </h3>
          <p className="text-xs font-mono text-cyan-400/80 mb-8">
            Modular packet demuxer to ruleset evaluation sequence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 text-center">
            {archSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex flex-col justify-center items-center">
                  <span className="font-mono text-[10px] font-bold text-cyan-400/70 mb-1">
                    0{idx + 1}
                  </span>
                  <span className="font-display font-bold text-xs text-slate-100 mb-1">
                    {step.label}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    {step.sub}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
