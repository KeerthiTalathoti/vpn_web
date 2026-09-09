import React, { useState } from 'react';
import { Layers, Cpu, ShieldCheck, Lock, FileSearch, CheckCircle2, ChevronRight } from 'lucide-react';

export const HowItWorksPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    {
      num: '01',
      title: 'CAPTURE / IMPORT',
      subtitle: 'PCAP or Live Socket',
      icon: Layers,
      tags: ['PCAP', 'Ethernet', 'IPv4 / IPv6'],
      desc: 'Import offline .pcap/.pcapng trace files or capture raw frames live via system network interfaces.'
    },
    {
      num: '02',
      title: 'PACKET PARSING',
      subtitle: 'Demux & Protocol Headers',
      icon: FileSearch,
      tags: ['UDP 500 / 4500', 'IP Header', 'Payload Parsing'],
      desc: 'Extract IP headers, UDP datagrams, and Demux control frames targeting standard VPN listening ports.'
    },
    {
      num: '03',
      title: 'IKE / IPsec DETECTION',
      subtitle: 'SA & Phase Negotiations',
      icon: Lock,
      tags: ['IKEv1 / IKEv2', 'ESP (Proto 50)', 'AH (Proto 51)'],
      desc: 'Identify IKE_SA_INIT, IKE_AUTH exchanges, Security Associations, SPI keys, and ESP tunnel/transport modes.'
    },
    {
      num: '04',
      title: 'CRYPTOGRAPHIC ANALYSIS',
      subtitle: 'Algorithm Extraction',
      icon: Cpu,
      tags: ['Encryption', 'Integrity', 'Authentication'],
      desc: 'Parse cipher proposals (AES-GCM, ChaCha20-Poly1305), PRF, Diffie-Hellman groups, and digital certificate chains.'
    },
    {
      num: '05',
      title: 'SECURITY EVALUATION',
      subtitle: 'Rule Engine Audit',
      icon: ShieldCheck,
      tags: ['DH Group 1-5 Alert', 'Null Encryption Check', 'PFS Status'],
      desc: 'Evaluate detected crypto configurations against CIS / NIST security benchmarks and highlight vulnerabilities.'
    },
    {
      num: '06',
      title: 'REPORT / FINDINGS',
      subtitle: 'Structured Telemetry Output',
      icon: CheckCircle2,
      tags: ['JSON Export', 'SOC Console', 'Summary Dashboard'],
      desc: 'Generate interactive security audit reports with line-by-line packet references and remediation recommendations.'
    }
  ];

  return (
    <section id="pipeline" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4 inline-block">
            ARCHITECTURE & EXECUTION FLOW
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            How VPN Analyzer Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A 6-stage local security analysis pipeline built to decode, inspect, and evaluate IPsec traffic from raw packets to actionable security findings.
          </p>
        </div>

        {/* Pipeline Horizontal Node Sequence for Desktop / Vertical for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx + 1;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx + 1)}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'border-2 border-cyan-400 bg-slate-900/90 shadow-[0_0_25px_rgba(0,240,255,0.2)] -translate-y-1'
                    : 'hover:border-cyan-400/50'
                }`}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-cyan-400/80">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-slate-100 mb-1">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-cyan-400/90 font-medium mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Telemetry Tag Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cyan-500/15">
                  {step.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/20 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Technical Telemetry Detail Box */}
        <div className="p-6 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-950/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-400 text-slate-950 font-mono font-black text-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_#00f0ff]">
              {steps[activeStep - 1].num}
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
                <span>Stage {activeStep}: {steps[activeStep - 1].title}</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  PIPELINE STAGE
                </span>
              </h4>
              <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                {steps[activeStep - 1].subtitle} &bull; {steps[activeStep - 1].desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveStep(prev => (prev % steps.length) + 1)}
              className="px-4 py-2 rounded-xl text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Next Stage</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
