import React, { useState } from 'react';
import { X, Search, BookOpen, Terminal } from 'lucide-react';

interface DocModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicId?: string;
}

export interface DocTopic {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  codeExample?: string;
}

export const DOC_TOPICS: DocTopic[] = [
  {
    id: 'getting-started',
    title: 'Getting Started with VPN Analyzer',
    category: 'Installation & Setup',
    readTime: '3 min read',
    summary: 'Install VPN Analyzer on Windows, macOS, or Linux and execute your initial IPsec trace scan.',
    content: [
      'VPN Analyzer is shipped as a standalone desktop application. Download the appropriate package (.exe, .dmg, or .AppImage) for your target platform.',
      'Upon launching the application, you will be presented with two primary operational modes: Offline PCAP Import and Live Interface Capture.',
      'To verify your installation, launch the engine with a sample PCAP file or run `--version` from your command terminal.'
    ],
    codeExample: '# Launch VPN Analyzer CLI mode\nvpn-analyzer --file traces/ikev2_sample.pcap --export json'
  },
  {
    id: 'pcap-analysis',
    title: 'Importing & Inspecting PCAP Files',
    category: 'PCAP Processing',
    readTime: '4 min read',
    summary: 'Learn how to import Wireshark/tcpdump .pcap and .pcapng files to analyze control plane negotiations.',
    content: [
      'VPN Analyzer parses raw link-layer pcap files. Drag and drop any .pcap or .pcapng file directly into the application window.',
      'The packet parser demuxes Ethernet II, 802.1Q VLAN tags, IPv4, IPv6, and UDP datagrams targeting ports 500 (ISAKMP) and 4500 (NAT-T).',
      'Each packet trace displays timestamp, source IP, destination IP, SPI, Message ID, and extracted Cryptographic proposals.'
    ],
    codeExample: '# Inspecting specific UDP port traffic in tshark format\ntshark -r vpn_trace.pcap -Y "udp.port == 500 or udp.port == 4500"'
  },
  {
    id: 'live-capture',
    title: 'Live Network Interface Capture & Permissions',
    category: 'Live Traffic',
    readTime: '5 min read',
    summary: 'Understand live promiscuous capture, Npcap/BPF driver setup, and elevated privilege requirements.',
    content: [
      'Live capture requires direct access to network interface descriptors. On Windows, Npcap (or WinPcap) driver must be installed.',
      'On Linux and macOS, the process binds raw socket handles or `/dev/bpf*` devices, which requires Administrator or root access during launch.',
      'Filter rules can be applied before capture start (e.g. `ip proto 50 or udp port 500`) to isolate VPN handshake frames.'
    ],
    codeExample: '# Executing live capture with root privileges on eth0\nsudo vpn-analyzer --interface eth0 --filter "udp port 500 or udp port 4500"'
  },
  {
    id: 'ipsec-ike',
    title: 'IPsec & IKE Negotiation Analysis',
    category: 'Protocol Decoding',
    readTime: '6 min read',
    summary: 'Understand how IKE_SA_INIT, IKE_AUTH, and ESP Child SAs are reconstructed and validated.',
    content: [
      'IKEv2 negotiations begin with IKE_SA_INIT exchange. VPN Analyzer parses Security Association (SA) payloads to extract Transform Substructure proposals.',
      'Phase 1 evaluates Encryption algorithms (AES-GCM-256), Integrity hashes (HMAC-SHA384), Pseudo-Random Functions (PRF-HMAC-SHA256), and Diffie-Hellman Key Exchange Groups.',
      'Encapsulating Security Payload (ESP) data packets are tracked via Security Parameter Index (SPI) to detect out-of-order sequence numbers or replay attempts.'
    ],
    codeExample: 'IKEv2 SA_INIT Proposal Detected:\n  - Transform 1: ENCR_AES_GCM_16 (Key Length: 256-bit)\n  - Transform 2: PRF_HMAC_SHA384\n  - Transform 3: DH_GROUP_14 (2048-bit MODP)'
  },
  {
    id: 'security-findings',
    title: 'Evaluating Security Rule Engine & Alerts',
    category: 'Vulnerability Detection',
    readTime: '4 min read',
    summary: 'Understand how detected configurations are evaluated against security standards and CVE rulesets.',
    content: [
      'The security rule engine flags legacy or dangerous cryptographic choices, such as 3DES, DES, MD5, SHA-1, or DH Groups 1, 2, and 5.',
      'Warnings are generated when PFS (Perfect Forward Secrecy) is disabled in Phase 2 Child SA proposals.',
      'Audit reports categorize severity into CRITICAL, HIGH, MEDIUM, and INFORMATIONAL levels with detailed NIST RFC remediation links.'
    ],
    codeExample: 'WARNING [RULE-042]: Weak Diffie-Hellman Group Detected!\n  - Detected: DH Group 2 (1024-bit MODP)\n  - Recommendation: Upgrade to DH Group 14 (2048-bit) or ECDH Group 19 (P-256).'
  }
];

export const DocModal: React.FC<DocModalProps> = ({ isOpen, onClose, initialTopicId }) => {
  const [activeTopicId, setActiveTopicId] = useState<string>(initialTopicId || 'getting-started');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const filteredTopics = DOC_TOPICS.filter(t =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeTopic = DOC_TOPICS.find(t => t.id === activeTopicId) || DOC_TOPICS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-5xl h-[85vh] rounded-2xl glass-panel border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <h3 className="font-display font-bold text-lg text-slate-100">
              VPN Analyzer Documentation Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/20 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-3 border-b border-cyan-500/15 bg-slate-900/40">
          <div className="relative">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation, RFC topics, rules, commands..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-cyan-500/20 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Modal Body: Sidebar + Main Reader */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Sidebar */}
          <div className="md:col-span-4 border-r border-cyan-500/15 p-4 overflow-y-auto bg-slate-950/40 space-y-2">
            {filteredTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`w-full p-3 rounded-xl text-left transition-all duration-200 border ${
                  activeTopicId === topic.id
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    : 'bg-slate-900/40 border-cyan-500/10 text-slate-300 hover:bg-slate-900 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400/80 mb-1">
                  <span>{topic.category}</span>
                  <span>{topic.readTime}</span>
                </div>
                <h4 className="font-display font-semibold text-xs text-slate-100 mb-1 line-clamp-1">
                  {topic.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {topic.summary}
                </p>
              </button>
            ))}
          </div>

          {/* Main Article Content */}
          <div className="md:col-span-8 p-6 lg:p-8 overflow-y-auto bg-slate-900/20">
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 mb-2 inline-block">
                {activeTopic.category} &bull; {activeTopic.readTime}
              </span>
              <h2 className="font-display font-bold text-2xl text-slate-100 mb-3">
                {activeTopic.title}
              </h2>
              <p className="text-sm font-medium text-cyan-300/90 leading-relaxed p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                {activeTopic.summary}
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {activeTopic.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Code Snippet Box */}
            {activeTopic.codeExample && (
              <div className="rounded-xl bg-slate-950 border border-cyan-500/30 p-4 font-mono text-xs overflow-x-auto text-cyan-300">
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-cyan-500/15 text-[10px] text-slate-400 uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>COMMAND & SYNOPSIS EXAMPLES</span>
                </div>
                <pre>{activeTopic.codeExample}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
