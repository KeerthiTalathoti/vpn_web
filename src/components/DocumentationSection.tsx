import React from 'react';
import { BookOpen, FileText, Terminal, Network, Shield, ArrowRight } from 'lucide-react';

interface DocumentationSectionProps {
  onOpenDocs: (topicId?: string) => void;
}

export const DocumentationSection: React.FC<DocumentationSectionProps> = ({ onOpenDocs }) => {
  const docCards = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Install VPN Analyzer and perform your first analysis.',
      icon: Terminal,
      readTime: '3 min read'
    },
    {
      id: 'pcap-analysis',
      title: 'PCAP Analysis',
      description: 'Learn how to import and inspect packet captures.',
      icon: FileText,
      readTime: '4 min read'
    },
    {
      id: 'live-capture',
      title: 'Live Capture',
      description: 'Learn about network-interface capture and required permissions.',
      icon: Network,
      readTime: '5 min read'
    },
    {
      id: 'ipsec-ike',
      title: 'IPsec / IKE Analysis',
      description: 'Understand how VPN negotiation and security parameters are analyzed.',
      icon: Shield,
      readTime: '6 min read'
    },
    {
      id: 'security-findings',
      title: 'Security Findings',
      description: 'Understand how detected configurations are evaluated.',
      icon: BookOpen,
      readTime: '4 min read'
    }
  ];

  return (
    <section id="docs" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 mb-3 inline-block">
              TECHNICAL REFERENCE & GUIDES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-100">
              Documentation & Guides
            </h2>
          </div>

          <button
            onClick={() => onOpenDocs('getting-started')}
            className="px-6 py-3 rounded-xl font-display font-semibold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center gap-2 shrink-0"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Documentation</span>
          </button>
        </div>

        {/* 5 Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {docCards.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.id}
                onClick={() => onOpenDocs(doc.id)}
                className="glass-card p-5 cursor-pointer flex flex-col justify-between hover:border-cyan-400/60 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/25 group-hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400/80">
                      {doc.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-cyan-500/15 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
