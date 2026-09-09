import React, { useState, useEffect } from 'react';
import { Download, Check, Copy, Terminal, Sparkles, Monitor, Cpu } from 'lucide-react';
import { OS_DOWNLOADS } from '../config/downloads';

export const DownloadSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedCmdId, setCopiedCmdId] = useState<string | null>(null);
  const [detectedOS, setDetectedOS] = useState<'windows' | 'macos' | 'linux' | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setDetectedOS('windows');
    else if (userAgent.includes('mac')) setDetectedOS('macos');
    else if (userAgent.includes('linux')) setDetectedOS('linux');
  }, []);

  const copyToClipboard = (text: string, id: string, isCmd = false) => {
    navigator.clipboard.writeText(text);
    if (isCmd) {
      setCopiedCmdId(id);
      setTimeout(() => setCopiedCmdId(null), 2000);
    } else {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="download" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-radial-glow border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>OFFICIAL DESKTOP BINARIES</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-100 mb-4">
            Download VPN Analyzer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Choose your operating system and install the local analysis engine.
          </p>

          {detectedOS && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/80 border border-cyan-500/20 text-xs font-mono text-cyan-300">
              <Monitor className="w-3.5 h-3.5 text-cyan-400" />
              <span>Detected System: <strong className="uppercase font-bold text-cyan-200">{detectedOS}</strong></span>
            </div>
          )}
        </div>

        {/* 3 OS Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {OS_DOWNLOADS.map((item) => {
            const isHighlighted = item.highlighted;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  isHighlighted
                    ? 'glass-card glass-card-highlight border border-cyan-400/80 shadow-[0_0_25px_rgba(0,240,255,0.15)]'
                    : 'glass-card hover:border-cyan-400/60'
                }`}
              >

                <div>
                  {/* Platform Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-cyan-500/15">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-slate-100 flex items-center gap-2">
                        {item.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400/90 font-medium mt-1">
                        {item.subName}
                      </p>
                    </div>

                    {/* Platform Icon Rendering */}
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                      {item.id === 'windows' && <Monitor className="w-6 h-6 text-cyan-400" />}
                      {item.id === 'linux' && <Terminal className="w-6 h-6 text-cyan-400" />}
                      {item.id === 'macos' && <Cpu className="w-6 h-6 text-cyan-400" />}
                    </div>
                  </div>

                  <h4 className="font-display font-semibold text-sm text-slate-200 mb-4">
                    VPN Analyzer for {item.name === 'LINUX' ? 'Linux' : item.name === 'WINDOWS' ? 'Windows' : 'macOS'}
                  </h4>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-cyan-300 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions & Metadata */}
                <div>
                  {/* Primary Download Button */}
                  <a
                    href={item.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-display font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md mb-4 ${
                      isHighlighted
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                        : 'bg-cyan-950/60 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download for {item.name}</span>
                  </a>

                  {/* Quick Terminal Command Copy Box */}
                  <div className="mb-4 p-2.5 rounded-xl bg-slate-950/80 border border-cyan-500/15 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400 truncate pr-2" title={item.command}>
                      $ {item.command}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item.command, item.id, true)}
                      className="p-1 rounded bg-slate-800 hover:bg-cyan-950 text-cyan-400 transition-colors shrink-0"
                      title="Copy install command"
                    >
                      {copiedCmdId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Metadata Strip */}
                  <div className="pt-4 border-t border-cyan-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/10 text-cyan-400 font-semibold">
                      {item.fileFormat}
                    </span>
                    <span>{item.architecture}</span>
                    <span>{item.version}</span>
                  </div>

                  {/* SHA-256 Checksum Button */}
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="truncate max-w-[180px]">SHA256: {item.sha256.substring(0, 12)}...</span>
                    <button
                      onClick={() => copyToClipboard(item.sha256, item.id, false)}
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      {copiedId === item.id ? 'Copied Hash!' : 'Copy SHA256'}
                    </button>
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
