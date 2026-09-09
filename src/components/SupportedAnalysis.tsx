import React from 'react';
import { Lock, Cpu, Shield, Key, Network, FileCode, CheckCircle2 } from 'lucide-react';

export const SupportedAnalysis: React.FC = () => {
  const protocols = [
    {
      title: 'IKEv1 / IKEv2',
      tag: 'CONTROL PLANE',
      desc: 'Full parsing of IKE_SA_INIT, IKE_AUTH, CREATE_CHILD_SA, and legacy Phase 1 / Phase 2 ISAKMP payloads.',
      icon: Lock
    },
    {
      title: 'IPsec',
      tag: 'DATA PLANE',
      desc: 'Tunnel and Transport mode encapsulation analysis, SPI lookup, and sequence number verification.',
      icon: Shield
    },
    {
      title: 'ESP',
      tag: 'PROTO 50',
      desc: 'Encapsulating Security Payload inspection, trailer detection, IV length checks, and integrity ICV parsing.',
      icon: Network
    },
    {
      title: 'AH',
      tag: 'PROTO 51',
      desc: 'Authentication Header parsing, ICV authentication calculation verification, and anti-replay window inspection.',
      icon: CheckCircle2
    },
    {
      title: 'NAT-T',
      tag: 'UDP 4500',
      desc: 'NAT Traversal encapsulation (UDP Port 4500), Non-ESP marker detection, and NAT Keepalive packet demuxing.',
      icon: Network
    },
    {
      title: 'Security Associations',
      tag: 'SA MANAGEMENT',
      desc: 'Phase 1 & Phase 2 Security Association state extraction, lifetime parameters, and traffic selector matching.',
      icon: Key
    },
    {
      title: 'Cryptographic Algorithms',
      tag: 'CIPHER MATRIX',
      desc: 'Detection of AES-GCM, AES-CBC, ChaCha20-Poly1305, HMAC-SHA256/384/512, and DH Groups 2, 5, 14–21.',
      icon: Cpu
    },
    {
      title: 'Authentication Methods',
      tag: 'IDENTITY & PKI',
      desc: 'Pre-Shared Key (PSK), RSA Digital Signatures, ECDSA (P-256/P-384), and Extensible Authentication Protocol (EAP).',
      icon: Key
    },
    {
      title: 'PCAP / PCAPNG',
      tag: 'TRACE FORMATS',
      desc: 'Native parsing of Wireshark/tcpdump .pcap and libpcap .pcapng files with microsecond packet timestamping.',
      icon: FileCode
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-radial-glow border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4 inline-block">
            PROTOCOL & SPECIFICATION MATRIX
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            What Our VPN Analyzer Detects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Analyze captured VPN traffic to identify protocols, cryptographic algorithms, authentication methods, and security configurations.
          </p>
        </div>

        {/* Compact Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocols.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 flex flex-col justify-between hover:border-cyan-400/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400/90 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
