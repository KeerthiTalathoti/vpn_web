import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      q: 'What is VPN Analyzer?',
      a: 'VPN Analyzer is a local desktop cybersecurity application designed to inspect VPN and IPsec network traffic. It decodes packet captures to evaluate protocol behavior, cryptographic algorithm proposals, security associations (SAs), and compliance against security ruleets.'
    },
    {
      q: 'Which operating systems are supported?',
      a: 'VPN Analyzer natively supports 64-bit Windows 10/11 (.exe installer), macOS 12+ on both Apple Silicon (M1/M2/M3/M4) and Intel architectures (.dmg package), and modern 64-bit Linux distributions (.AppImage, .deb, .rpm).'
    },
    {
      q: 'Does VPN Analyzer require an internet connection?',
      a: 'No. VPN Analyzer operates 100% offline. All packet parsing, protocol demuxing, Diffie-Hellman group validation, and security rule evaluation are executed locally within your workstation memory without sending telemetry to any cloud server.'
    },
    {
      q: 'What permissions does live packet capture require?',
      a: 'Live packet capture binds raw socket or BPF interface handles to read raw frames from your physical network adapter. On Windows, Npcap driver permission is required. On Linux and macOS, administrator or root privileges are requested to open network capture sockets.'
    },
    {
      q: 'Can I analyze an existing PCAP file?',
      a: 'Yes. You can drag and drop or open any offline .pcap or .pcapng trace captured from Wireshark, tcpdump, or enterprise routers. Analyzing existing PCAP files requires standard user file read permissions and does NOT require administrator or root rights.'
    },
    {
      q: 'Does VPN Analyzer upload my packet captures?',
      a: 'No. VPN Analyzer is designed around a strict local-first security architecture. Your packet data, cryptographic key proposals, and network payload content remain entirely local on your machine.'
    },
    {
      q: 'What is the difference between PCAP analysis and live capture?',
      a: 'PCAP analysis inspects pre-recorded trace files offline without accessing your network interface or requiring driver privileges. Live capture hooks into your active network interface to analyze real-time IPsec/IKE handshakes as they occur on the wire.'
    },
    {
      q: 'What VPN protocols can VPN Analyzer analyze?',
      a: 'VPN Analyzer focuses primarily on IPsec suite standards including IKEv1, IKEv2, Encapsulating Security Payload (ESP / IP Proto 50), Authentication Header (AH / IP Proto 51), NAT Traversal (UDP Port 4500), and ISAKMP (UDP Port 500).'
    }
  ];

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4 inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base">
            Everything you need to know about VPN Analyzer features, architecture, and local privacy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card transition-all duration-300 ${
                  isOpen ? 'border-cyan-400/60 bg-slate-900/90 shadow-[0_0_20px_rgba(0,240,255,0.1)]' : 'hover:border-cyan-500/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-slate-100 group"
                >
                  <span className="group-hover:text-cyan-300 transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/20 border-cyan-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-cyan-500/10 mt-1">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
