import React from 'react';
import { Network, ShieldAlert, KeyRound, Search, CheckCircle2 } from 'lucide-react';

export const WhatIsVpnAnalyzer: React.FC = () => {
  const capabilities = [
    {
      id: 'packet',
      title: 'Packet Analysis',
      icon: Network,
      description: 'Inspect captured network packets and protocol structures with precise header-by-header decoding across Ethernet, IPv4, IPv6, and UDP frames.',
      tag: 'DEEP PARSING',
      metrics: 'PCAP / PCAPNG Supported'
    },
    {
      id: 'ipsec',
      title: 'IPsec / IKE Analysis',
      icon: Search,
      description: 'Identify IKEv1 & IKEv2 negotiations, Security Associations (SAs), Phase 1 & Phase 2 proposals, and Encapsulating Security Payload (ESP) parameters.',
      tag: 'PROTOCOL DECODE',
      metrics: 'UDP 500 / 4500 NAT-T'
    },
    {
      id: 'crypto',
      title: 'Cryptographic Inspection',
      icon: KeyRound,
      description: 'Detect cipher suites, integrity hashing (HMAC-SHA2), Diffie-Hellman Key Exchange Groups (MODP/ECP), and certificate authentication mechanisms.',
      tag: 'CIPHER SUITES',
      metrics: 'AES-GCM / ChaCha20 / DH'
    },
    {
      id: 'findings',
      title: 'Security Findings',
      icon: ShieldAlert,
      description: 'Compare detected configurations against automated security ruleets and highlight potential vulnerabilities, weak DH groups, and unencrypted proposals.',
      tag: 'RULE EVALUATION',
      metrics: 'Automated Audit Engine'
    }
  ];

  return (
    <section id="capabilities" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4 inline-block">
            APPLICATION CORE CAPABILITIES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            What does VPN Analyzer do?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            VPN Analyzer is a local desktop security analysis tool designed to inspect VPN and IPsec network traffic. It analyzes packet captures and identifies protocol behavior, cryptographic algorithms, authentication mechanisms, and potential security weaknesses.
          </p>
        </div>

        {/* 4 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card group p-6 flex flex-col justify-between hover:border-cyan-400/50"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400/80 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-100 mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer status metric inside card */}
                <div className="pt-4 border-t border-cyan-500/15 flex items-center justify-between text-xs font-mono text-cyan-400/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
