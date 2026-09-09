import React from 'react';
import { Shield } from 'lucide-react';
import { GITHUB_REPO_URL } from '../config/downloads';

interface FooterProps {
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocs }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030912] border-t border-cyan-500/15 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cyan-500/15">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-slate-100 tracking-wider">
                VPN ANALYZER
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Local VPN & IPsec Security Analysis Engine. Inspect packet captures, verify cryptographic proposals, and audit VPN configurations offline.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300 hover:border-cyan-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Repo</span>
              </a>

              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400">
                v2.4.1 Stable
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => scrollTo('overview')} className="hover:text-cyan-300 transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-cyan-300 transition-colors">
                  Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('download')} className="hover:text-cyan-300 transition-colors font-semibold text-cyan-300">
                  Downloads
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('permissions')} className="hover:text-cyan-300 transition-colors">
                  Permissions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pipeline')} className="hover:text-cyan-300 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-cyan-300 transition-colors">
                  About Project
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Specs & License */}
          <div>
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">
              Technical Metadata
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400">
              <li>Engine: Native C++ Demuxer</li>
              <li>Supported: Linux, Windows, macOS</li>
              <li>Formats: .pcap / .pcapng</li>
              <li>Ports: UDP 500 / UDP 4500</li>
              <li>License: Security Open Source</li>
              <li>Cloud Sync: Disabled (0% Upload)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; 2026 VPN Analyzer. Built for security operations & cryptographic analysis.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenDocs} className="hover:text-cyan-300 transition-colors">
              Documentation
            </button>
            <span>&bull;</span>
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
              Release Hashes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
