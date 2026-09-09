import React from 'react';
import { Monitor, Cpu, Terminal, HardDrive } from 'lucide-react';

export const SystemRequirements: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-4 inline-block">
            HARDWARE & PLATFORM PREREQUISITES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100 mb-4">
            System Requirements
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Lightweight, high-performance desktop execution specs across all major desktop environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Platform Support Glass Card Table */}
          <div className="lg:col-span-2 rounded-2xl glass-panel p-6 border border-cyan-500/25">
            <h3 className="font-display font-bold text-lg text-slate-100 mb-6 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-cyan-400" />
              <span>Operating System Compatibility</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-cyan-500/20 text-cyan-400 uppercase">
                    <th className="py-3 px-4">Platform</th>
                    <th className="py-3 px-4">Minimum Version</th>
                    <th className="py-3 px-4">Architecture</th>
                    <th className="py-3 px-4">Capture Driver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyan-500/10 text-slate-300">
                  <tr className="hover:bg-cyan-500/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-100 flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-cyan-400" /> Windows
                    </td>
                    <td className="py-3.5 px-4">Windows 10 / 11</td>
                    <td className="py-3.5 px-4">x64 (64-bit)</td>
                    <td className="py-3.5 px-4 text-cyan-300">Npcap / WinPcap</td>
                  </tr>
                  <tr className="hover:bg-cyan-500/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-100 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" /> macOS
                    </td>
                    <td className="py-3.5 px-4">macOS 12.0+ (Monterey+)</td>
                    <td className="py-3.5 px-4">Apple Silicon / Intel</td>
                    <td className="py-3.5 px-4 text-cyan-300">Native BPF Subsystem</td>
                  </tr>
                  <tr className="hover:bg-cyan-500/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-100 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" /> Linux
                    </td>
                    <td className="py-3.5 px-4">Kernel 5.4+ (Ubuntu, Debian, Fedora, Arch)</td>
                    <td className="py-3.5 px-4">x86_64</td>
                    <td className="py-3.5 px-4 text-cyan-300">libpcap / raw socket</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hardware Resources Card */}
          <div className="rounded-2xl glass-panel p-6 border border-cyan-500/25 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-100 mb-6 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-cyan-400" />
                <span>Resource Allocation</span>
              </h3>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/15">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Disk Storage Space
                  </span>
                  <span className="text-cyan-300 font-bold text-sm">
                    ~150 MB (Binary & Symbol Tables)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/15">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    RAM Memory
                  </span>
                  <span className="text-cyan-300 font-bold text-sm">
                    4 GB Minimum (8 GB Recommended for 1GB+ PCAPs)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/15">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Packet Capture Library
                  </span>
                  <span className="text-emerald-300 font-bold text-sm">
                    Npcap 1.70+ (Win) / libpcap 1.9+ (Linux/macOS)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
