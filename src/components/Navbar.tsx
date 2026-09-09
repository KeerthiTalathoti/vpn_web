import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronRight, Download } from 'lucide-react';

interface NavbarProps {
  onOpenDocs?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['overview', 'capabilities', 'download', 'permissions', 'pipeline', 'docs', 'about', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'download', label: 'Downloads' },
    { id: 'permissions', label: 'Permissions' },
    { id: 'pipeline', label: 'How It Works' },
    { id: 'docs', label: 'Documentation' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel bg-[#06111c]/80 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-2.5 px-4 sm:px-6'
            : 'bg-[#06111c]/40 backdrop-blur-md border border-cyan-500/10 py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left Logo Section */}
          <div className="flex items-center gap-3">
            <a
              href="#overview"
              onClick={(e) => { e.preventDefault(); scrollTo('overview'); }}
              className="flex items-center gap-3 group"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20 transition-all duration-300">
                <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base sm:text-lg tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
                    VPN ANALYZER
                  </span>
                  <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    v2.4
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400/70 uppercase">
                  Security Analysis Engine
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-950/40 p-1.5 rounded-xl border border-cyan-500/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.15)] font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo('download')}
              className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl font-display font-medium text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all duration-300 active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Analyzer</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => scrollTo('download')}
              className="px-3 py-1.5 rounded-lg font-display text-xs font-semibold bg-cyan-400 text-slate-950"
            >
              Download
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-slate-300 hover:text-cyan-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Expanded Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-cyan-500/15 flex flex-col gap-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
                  activeSection === item.id
                    ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400/50" />
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
