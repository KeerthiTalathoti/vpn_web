/**
 * VPN Analyzer Download URLs & Platform Configuration
 * 
 * Replace these placeholder URLs with actual installer download links
 * when releasing new binaries.
 */

export const DOWNLOAD_WINDOWS_URL = "https://github.com/LalThota/vpn-ipsec-analyzer/releases/download/v1.0.0/IPsec.VPN.Analyzer.Setup.0.0.0.exe";
export const DOWNLOAD_MACOS_URL = "https://github.com/vpn-analyzer/vpn-analyzer/releases/download/v2.4.1/VPN-Analyzer-2.4.1.dmg";
export const DOWNLOAD_LINUX_URL = "https://github.com/charan242726/Linux-Desktop-ipsec-vpn-Analyzer";
export const GITHUB_REPO_URL = "https://github.com/vpn-analyzer/vpn-analyzer";

export interface OSConfig {
  id: 'windows' | 'macos' | 'linux';
  name: string;
  subName: string;
  osRequirement: string;
  downloadUrl: string;
  fileFormat: string;
  architecture: string;
  version: string;
  fileSize: string;
  sha256: string;
  command: string;
  highlighted?: boolean;
  features: string[];
}

export const OS_DOWNLOADS: OSConfig[] = [
  {
    id: 'windows',
    name: 'WINDOWS',
    subName: 'Windows 10 / 11',
    osRequirement: 'Windows 10+ (64-bit)',
    downloadUrl: DOWNLOAD_WINDOWS_URL,
    fileFormat: '.EXE',
    architecture: 'x64 (64-bit)',
    version: 'v0.0.0',
    fileSize: '335.5 MB',
    sha256: '',
    command: 'winget install VPNAnalyzer.LocalEngine',
    features: [
      'PCAP & PCAPNG analysis',
      'IPsec / IKEv1 & IKEv2 inspection',
      'Local desktop processing (0% cloud upload)',
      'Npcap / WinPcap driver support for live capture',
      'Security rule engine & weak crypto warnings'
    ]
  },
  {
    id: 'linux',
    name: 'LINUX',
    subName: 'Linux x86_64',
    osRequirement: 'Modern Linux Distribution (Kernel 5.4+)',
    downloadUrl: DOWNLOAD_LINUX_URL,
    fileFormat: 'GitHub Repo',
    architecture: 'x86_64 / ARM',
    version: 'Source',
    fileSize: '-',
    sha256: '',
    command: 'git clone https://github.com/charan242726/Linux-Desktop-ipsec-vpn-Analyzer.git',
    highlighted: true, // VISUALLY HIGHLIGHTED DEFAULT CARD AS REQUESTED
    features: [
      'PCAP & PCAPNG analysis',
      'IPsec / IKEv1 & IKEv2 inspection',
      'Local desktop processing (0% cloud upload)',
      'Native AF_PACKET & raw socket live capture',
      'Security rule engine & weak crypto warnings'
    ]
  },
  {
    id: 'macos',
    name: 'macOS',
    subName: 'macOS 12+ (Monterey, Ventura, Sonoma, Sequoia)',
    osRequirement: 'macOS 12.0 or later',
    downloadUrl: DOWNLOAD_MACOS_URL,
    fileFormat: '.DMG',
    architecture: 'Apple Silicon (M1/M2/M3/M4) & Intel',
    version: 'v2.4.1 (Stable)',
    fileSize: '51.4 MB',
    sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    command: 'brew install --cask vpn-analyzer',
    features: [
      'PCAP & PCAPNG analysis',
      'IPsec / IKEv1 & IKEv2 inspection',
      'Local desktop processing (0% cloud upload)',
      'Native BPF interface live capture integration',
      'Security rule engine & weak crypto warnings'
    ]
  }
];
