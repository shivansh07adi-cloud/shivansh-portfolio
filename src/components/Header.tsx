/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MailOpen, X, FileText, MessageSquareCode, Compass, Trophy, ArrowUpRight, Terminal, Sparkles, BookOpen, FastForward, Menu } from 'lucide-react';
import ResumeModal from './ResumeModal';
import { scrollToId } from '../utils/scroll';
import waypointLogo from '../assets/waypoint-logo.webp';

interface HeaderProps {
  onOpenMessages: () => void;
  messageCount: number;
}

export default function Header({ onOpenMessages, messageCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    scrollToId(id);
  };

  const menuSections = [
    { num: '01', name: 'Origin', id: 'origin' },
    { num: '02', name: 'Process', id: 'philosophy' },
    {  num: '03', name: 'Projects', id: 'projects' },
    { num: '04', name: 'Arsenal', id: 'skills' },
    { num: '05', name: 'Experience', id: 'experience' },
    { num: '06', name: "Let's Talk", id: 'contact' },
  ];

  // Top-bar links (the full section index still lives in the drawer)
  const topNav = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'origin' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];
  const [activeId, setActiveId] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const compute = () => {
      ticking = false;
      let current = 'hero';
      for (const item of topNav) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 160) current = item.id;
      }
      setActiveId(current);
      setScrolled(window.scrollY > 30);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 font-jost transition-all duration-300 ${
          scrolled ? 'bg-white shadow-[0_6px_28px_rgba(90,80,140,0.10)] py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src={waypointLogo}
              alt="Waypoint logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full shadow-md ring-1 ring-black/10 transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-brand-green border-2 border-white animate-pulse" title="Available immediately" />
          </div>

          <div>
            <span
              onClick={() => scrollToSection('hero')}
              className="text-xl md:text-[22px] font-semibold tracking-tight text-black cursor-pointer hover:text-brand transition-colors duration-300"
            >
              Shivansh Kumar — Suvii
            </span>
            <div className="text-[10px] text-brand-gray tracking-widest uppercase leading-none mt-0.5">
              B.TECH CSE • 2nd Year
            </div>
          </div>
        </div>

        {/* Nav + CTA */}
        <div className="flex items-center gap-4 xl:gap-9">
          <nav id="nav-desktop" className="hidden xl:flex items-center gap-9 text-[17px] font-medium">
            {topNav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeId === item.id ? 'text-brand' : 'text-black hover:text-brand'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="cursor-pointer text-black hover:text-brand transition-colors duration-300"
            >
              Resume
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn-wipe btn-wipe-outline hidden md:inline-flex"
          >
            <FastForward size={18} fill="currentColor" />
            <span>Connect with me</span>
          </button>

          {/* Menu / message drawer */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="relative w-11 h-11 rounded-full bg-white/95 border border-black/10 hover:border-brand hover:text-brand text-black flex items-center justify-center transition-colors duration-300 shadow-sm cursor-pointer"
            title="Open navigation & message drawer"
            aria-label="Open navigation and message drawer"
            id="menu-badge"
          >
            <Menu size={20} />
            {messageCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[9px] text-white font-bold border border-white shadow">
                {messageCount}
              </span>
            )}
          </button>
        </div>
        </div>
      </header>

      {/* Navigation and Actions slide-out Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#1A1A18]/60 backdrop-blur-xs transition-opacity"
            />

            {/* Panel drawer */}
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-screen max-w-md bg-[#F6F5FB] text-ink-dark shadow-2xl border-l border-[#F75023]/15 flex flex-col justify-between py-8 px-6 md:px-10 h-full relative"
              >
                {/* Decorative border matching appler style */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-ink-dark" />

                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-accent-mute/30">
                    <div className="flex flex-col">
                      <span className="font-serif italic text-lg font-bold text-ink-dark">
                        Shivansh Kumar
                      </span>
                      <span className="font-mono text-[9px] tracking-widest text-[#9A96AB]">
                        NAVIGATION PORTAL
                      </span>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-1.5 rounded-full hover:bg-black/5 text-ink-light hover:text-ink-dark transition-colors cursor-pointer"
                      title="Close panel"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Highlights Action Buttons */}
                  <div className="space-y-3 mb-8">
                    {/* Primary Resume Action Button */}
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsResumeOpen(true);
                      }}
                      className="w-full flex items-center justify-between p-4.5 bg-ink-dark hover:bg-[#F75023] text-canvas rounded-lg cursor-pointer shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-canvas/10 rounded-md text-canvas">
                          <FileText size={18} />
                        </div>
                        <div className="text-left">
                          <p className="font-serif italic font-bold text-sm leading-none text-canvas">
                            View & Save Resume
                          </p>
                          <p className="font-mono text-[9px] text-canvas/70 mt-1 uppercase tracking-wider">
                            Interactive printable CV
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight size={16} className="text-canvas group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {/* Local message history records button */}
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenMessages();
                      }}
                      className="w-full flex items-center justify-between p-4.5 border border-[#F75023]/30 bg-canvas/40 hover:bg-canvas text-ink-dark rounded-lg cursor-pointer transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-black/5 rounded-md text-ink-gray">
                          <MessageSquareCode size={18} />
                        </div>
                        <div className="text-left">
                          <p className="font-serif font-bold text-sm leading-none text-ink-dark group-hover:italic transition-all">
                            Local Message Logs
                          </p>
                          <p className="font-mono text-[9px] text-ink-light mt-1 uppercase tracking-wider">
                            {messageCount} records stored
                          </p>
                        </div>
                      </div>
                      {messageCount > 0 ? (
                        <span className="h-5 min-w-[20px] px-1.5 flex items-center justify-center rounded-full bg-amber-500 text-[10px] font-mono text-ink-dark font-bold">
                          {messageCount}
                        </span>
                      ) : (
                        <ArrowUpRight size={16} className="text-ink-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </button>
                  </div>

                  {/* Nav links block */}
                  <div className="space-y-0.5">
                    <p className="font-mono text-[9px] tracking-widest text-[#9A96AB] uppercase font-bold mb-3 pl-2">
                      Portfolio Index
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {menuSections.map((sec) => (
                        <div
                          key={sec.id}
                          onClick={() => scrollToSection(sec.id)}
                          className="flex items-center justify-between py-2 px-3 hover:bg-canvas rounded-md cursor-pointer group transition-all duration-300"
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[10px] text-[#9A96AB] font-bold">
                              {sec.num}
                            </span>
                            <span className="font-serif text-lg font-semibold text-ink-dark group-hover:italic group-hover:text-[#F75023] transition-all duration-300">
                              {sec.name}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-ink-light opacity-0 group-hover:opacity-100 transition-all duration-300">
                            GO //
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer and Info */}
                <div className="border-t border-accent-mute/30 pt-6">
                  <p className="font-mono text-[9px] text-[#9A96AB] uppercase tracking-wider mb-2">
                    Current Platform Status:
                  </p>
                  <p className="font-body text-[11px] text-ink-gray leading-relaxed text-justify">
                    Wired directly into offline storage. All messages sent through the platform are persistent locally in your device logger.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* High-Fidelity Printable CV Sheet Document Reader Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
