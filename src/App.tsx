import { useState, useEffect } from 'react';
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
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  const handleOpenDocs = (topicId?: string) => {
    setActiveDocTopic(topicId);
    setDocModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030912] text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 bg-cyber-grid">
      {/* Ambient Static Radial Accent */}
      <div className="fixed inset-0 bg-radial-glow opacity-50 pointer-events-none z-0" />

      {/* Interactive Dynamic Cursor Glow Spotlight */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `
            radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.16), rgba(0, 102, 255, 0.06) 40%, transparent 80%),
            radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.22), transparent 75%)
          `
        }}
      />

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
