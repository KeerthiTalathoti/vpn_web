import React from 'react';
import { ShieldCheck, HardDrive, Network, Lock, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export const PermissionsSection: React.FC = () => {
  return (
    <section id="permissions" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4 inline-block">
            TRANSPARENT SYSTEM REQUIREMENTS & PRIVACY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            Before You Install
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Understand the exact system permissions VPN Analyzer requests and how local packet processing operates on your device.
          </p>
        </div>

        {/* System Access Main Glass Panel */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-cyan-500/25 mb-10 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-cyan-500/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-slate-100 uppercase tracking-wider">
                  SYSTEM ACCESS OVERVIEW
                </h3>
                <p className="text-xs font-mono text-cyan-400/90">
                  Depending on operating system, VPN Analyzer may request permissions required for packet capture or network interface access.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% LOCAL PROCESSING GUARANTEE</span>
            </div>
          </div>

          {/* 4 Permission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-2.5 mb-3">
                <Network className="w-5 h-5 text-cyan-400" />
                <h4 className="font-display font-semibold text-sm text-slate-100">
                  Network Interface Access
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Required when performing live traffic capture directly from physical or virtual Ethernet/Wi-Fi interfaces.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                LIVE CAPTURE ONLY
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-2.5 mb-3">
                <Lock className="w-5 h-5 text-cyan-400" />
                <h4 className="font-display font-semibold text-sm text-slate-100">
                  Packet Capture Permission
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Allows the application driver (Npcap on Windows, BPF/libpcap on macOS & Linux) to read raw packets from selected interfaces.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                DRIVER DEPENDENT
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-2.5 mb-3">
                <HardDrive className="w-5 h-5 text-emerald-400" />
                <h4 className="font-display font-semibold text-sm text-slate-100">
                  PCAP File Access
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Allows users to select, open, and analyze locally stored packet capture files (.pcap, .pcapng, .cap) from standard user directories.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                NO ADMIN NEEDED
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-2.5 mb-3">
                <AlertCircle className="w-5 h-5 text-purple-400" />
                <h4 className="font-display font-semibold text-sm text-slate-100">
                  Elevated Privileges
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Some live-capture operations (e.g. promiscuous mode on raw sockets) may require administrator / root privileges during live capture launch.
              </p>
              <span className="inline-block text-[10px] font-mono font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                ROOT / ADMIN PROMPT
              </span>
            </div>
          </div>

          {/* Clear Distinction Banner: Offline PCAP vs Live Capture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <div>
                <h5 className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
                  Required for PCAP File Analysis:
                </h5>
                <p className="text-xs text-slate-300">
                  Only standard read access to user-selected .pcap/.pcapng files. No elevated privileges or network driver hooks required.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <div>
                <h5 className="font-mono text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  Required for Live Traffic Capture:
                </h5>
                <p className="text-xs text-slate-300">
                  Network interface access and packet capture driver permissions (Npcap / libpcap). Administrator or root privileges may be required once.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security / Privacy Message Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="text-xs font-mono text-cyan-200">
              <strong className="text-cyan-400 font-bold uppercase">IMPORTANT:</strong> VPN Analyzer processes analysis locally. Packet captures are not automatically uploaded to a remote server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
