import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsVpnAnalyzer } from './components/WhatIsVpnAnalyzer';
import { DownloadSection } from './components/DownloadSection';
import { PermissionsSection } from './components/PermissionsSection';
import { HowItWorksPipeline } from './components/HowItWorksPipeline';
import { SupportedAnalysis } from './components/SupportedAnalysis';
import { SecurityPrivacy } from './components/SecurityPrivacy';
import { DocumentationSection } from './components/DocumentationSection';
import { AboutSection } from './components/AboutSection';
import { SystemRequirements } from './components/SystemRequirements';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DocModal } from './components/DocModal';

export function App() {
  const [docModalOpen, setDocModalOpen] = useState(false);
  const [activeDocTopic, setActiveDocTopic] = useState<string | undefined>(undefined);

  const handleOpenDocs = (topicId?: string) => {
    setActiveDocTopic(topicId);
    setDocModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030912] text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 bg-cyber-grid">
      {/* Ambient Grid Accent & Scannable Lights */}
      <div className="fixed inset-0 bg-radial-glow opacity-60 pointer-events-none z-0" />

      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar
          onOpenDocs={() => handleOpenDocs()}
        />

        {/* Hero Section with Interactive Visual */}
        <Hero />

        {/* What does VPN Analyzer do? (4 Cards) */}
        <WhatIsVpnAnalyzer />

        {/* Download Section (MOST IMPORTANT: Windows, macOS, Linux highlighted) */}
        <DownloadSection />

        {/* Before You Install & Permissions */}
        <PermissionsSection />

        {/* How It Works (6-step pipeline) */}
        <HowItWorksPipeline />

        {/* Supported Analysis Specifications */}
        <SupportedAnalysis />

        {/* Security & Privacy Posture */}
        <SecurityPrivacy />

        {/* Documentation Portal Section */}
        <DocumentationSection
          onOpenDocs={(topicId) => handleOpenDocs(topicId)}
        />

        {/* About VPN Analyzer & Architecture */}
        <AboutSection />

        {/* System Requirements Matrix */}
        <SystemRequirements />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final CTA */}
        <FinalCta
          onOpenDocs={() => handleOpenDocs()}
        />

        {/* Footer */}
        <Footer
          onOpenDocs={() => handleOpenDocs()}
        />
      </div>

      {/* Interactive Documentation Modal Reader */}
      <DocModal
        isOpen={docModalOpen}
        onClose={() => setDocModalOpen(false)}
        initialTopicId={activeDocTopic}
      />
    </div>
  );
}

export default App;
