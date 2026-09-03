/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MailOpen, X, FileText, MessageSquareCode, Compass, Trophy, ArrowUpRight, Terminal, Sparkles, BookOpen } from 'lucide-react';
import ResumeModal from './ResumeModal';

interface HeaderProps {
  onOpenMessages: () => void;
  messageCount: number;
}

export default function Header({ onOpenMessages, messageCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuSections = [
    { num: '01', name: 'Origin', id: 'origin' },
    { num: '02', name: 'Process', id: 'philosophy' },
    {  num: '03', name: 'Projects', id: 'projects' },
    { num: '04', name: 'Arsenal', id: 'skills' },
    { num: '05', name: 'Experience', id: 'experience' },
    { num: '06', name: 'Roadmap', id: 'roadmap' },
    { num: '07', name: "Let's Talk", id: 'contact' },
  ];

  return (
    <>
      <header className="relative w-full z-40 bg-transparent py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        {/* Mini Profile Signature */}
        <div className="flex items-center gap-3">
          {/* Typographic Avatar Seal */}
          <div className="relative group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-11 h-11 rounded-full bg-ink-dark flex items-center justify-center border border-accent-mute text-canvas text-sm font-serif font-bold italic tracking-wide transition-all duration-500 shadow-md transform group-hover:rotate-12 group-hover:scale-105">
              SK
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border border-canvas animate-pulse" title="Available immediately" />
          </div>

          {/* Written Name Signature */}
          <div>
            <span 
              onClick={() => scrollToSection('hero')}
              className="font-serif italic text-xl md:text-2xl font-bold tracking-wide text-ink-dark cursor-pointer hover:text-[#B19470] transition-colors duration-300 animate-fade-in"
            >
              Shivansh Kumar — Suvii
            </span>
            <div className="font-mono text-[9px] text-ink-light tracking-widest uppercase leading-none mt-0.5">
              B.TECH CSE • 2nd Year
            </div>
          </div>
        </div>

        {/* Anchor Navigation for desktop */}
        <nav id="nav-desktop" className="hidden lg:flex items-center gap-8 font-mono text-[11px] tracking-widest text-[#666663] uppercase">
          {menuSections.map((sec) => (
            <button 
              key={sec.id}
              onClick={() => scrollToSection(sec.id)} 
              className="hover:text-ink-dark transition-colors cursor-pointer py-1 block relative group font-semibold"
            >
              {sec.num} // {sec.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-ink-dark transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FAF6EE] text-[#B19470] border border-[#B19470]/30 hover:border-[#B19470] hover:bg-[#FAF6EE]/80 rounded-md text-xs font-mono font-semibold transition-all duration-300 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <FileText size={12} />
            <span>Resume</span>
          </button>
        </nav>

        {/* Elegant hanging bookmark menu badge as in the screenshots */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="relative block h-14 w-11 bg-ink-dark hover:bg-ink-gray text-canvas transition-colors duration-300 shadow-md cursor-pointer group rounded-b-md"
            title="Open navigation & message drawer"
            id="menu-badge"
          >
            {/* Accent border edge */}
            <div className="absolute top-0 inset-x-0 h-1 bg-accent-mute" />
            
            <div className="flex flex-col items-center justify-center h-full pt-1">
              {/* The vertical three stripes '|||' strictly as shown in the mockup */}
              <div className="flex gap-[3px] justify-center items-center h-5">
                <span className="w-[2.5px] h-4 bg-canvas group-hover:bg-[#B19470] transition-colors inline-block" />
                <span className="w-[2.5px] h-4 bg-canvas group-hover:bg-[#B19470] transition-colors inline-block" />
                <span className="w-[2.5px] h-4 bg-canvas group-hover:bg-[#B19470] transition-colors inline-block" />
              </div>
              {messageCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[8px] font-mono text-ink-dark font-bold border border-canvas shadow animate-bounce">
                  {messageCount}
                </span>
              )}
            </div>
          </button>
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
                className="w-screen max-w-md bg-[#FAF6EE] text-ink-dark shadow-2xl border-l border-[#B19470]/15 flex flex-col justify-between py-8 px-6 md:px-10 h-full relative"
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
                      <span className="font-mono text-[9px] tracking-widest text-[#B3A994]">
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
                      className="w-full flex items-center justify-between p-4.5 bg-ink-dark hover:bg-[#B19470] text-canvas rounded-lg cursor-pointer shadow-md transition-all duration-300 group"
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
                      className="w-full flex items-center justify-between p-4.5 border border-[#B19470]/30 bg-canvas/40 hover:bg-canvas text-ink-dark rounded-lg cursor-pointer transition-all duration-300 group"
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
                    <p className="font-mono text-[9px] tracking-widest text-[#B3A994] uppercase font-bold mb-3 pl-2">
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
                            <span className="font-mono text-[10px] text-[#B3A994] font-bold">
                              {sec.num}
                            </span>
                            <span className="font-serif text-lg font-semibold text-ink-dark group-hover:italic group-hover:text-[#B19470] transition-all duration-300">
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
                  <p className="font-mono text-[9px] text-[#B3A994] uppercase tracking-wider mb-2">
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
