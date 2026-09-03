/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Origin from './components/Origin';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Roadmap from './components/Roadmap';
import Volunteering from './components/Volunteering';
import Achievements from './components/Achievements';
import Languages from './components/Languages';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import MessageDrawer from './components/MessageDrawer';
import { ContactMessage } from './types';

export default function App() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load sent messages log on initial load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('shivansh_portfolio_messages');
      if (stored) {
        setMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse messages from localStorage', e);
    }
  }, []);

  // Save new contact message to localStorage and update state
  const handleNewMessage = (msg: ContactMessage) => {
    const updated = [msg, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem('shivansh_portfolio_messages', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to commit message to localStorage', e);
    }
  };

  // Clear messages log
  const handleClearMessages = () => {
    if (window.confirm('Are you sure you want to clear your local message history logs? This cannot be undone.')) {
      setMessages([]);
      try {
        localStorage.removeItem('shivansh_portfolio_messages');
      } catch (e) {
        console.error('Failed to clear messages from localStorage', e);
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-canvas text-ink-dark selection:bg-accent-mute selection:text-ink-dark overflow-x-hidden pb-12 flex flex-col justify-between">
      {/* Decorative Outer Page Frame Borders for High-Fidelity Editorial Feel */}
      <div className="fixed top-0 inset-x-0 h-1.5 bg-ink-dark z-50" />
      <div className="fixed inset-y-0 left-0 w-1.5 bg-ink-dark z-50 hidden md:block" />
      <div className="fixed inset-y-0 right-0 w-1.5 bg-ink-dark z-50 hidden md:block" />

      {/* Main Core View Area */}
      <div className="flex-1">
        {/* Navigation & Branding Header */}
        <Header 
          onOpenMessages={() => setIsDrawerOpen(true)} 
          messageCount={messages.length} 
        />

        {/* Hero Landing Stage */}
        <Hero />

        {/* Section 01: Narrative Biography */}
        <Origin />

        {/* Section 02: Structural Deliverables */}
        <Philosophy />

        {/* Section 03: The Work - Project Grid */}
        <Projects />

        {/* Section 04: Tactile filterable Skills Grid */}
        <Skills 
          selectedSkill={selectedSkill} 
          onSkillSelect={setSelectedSkill} 
        />

        {/* Section 05: Connected Experiences Timeline */}
        <Experience 
          selectedSkill={selectedSkill} 
        />

        {/* Section 06: Volunteering & Community — mosaic card grid */}
        <Volunteering />

        {/* Section 08: Honors & Awards — ribbon shelf layout */}
        <Achievements />

        {/* Section 09: Languages — compact proficiency row */}
        <Languages />

        {/* Section 10: Certifications — dense badge wall */}
        <Certifications />

        {/* Section 11: Looking into the future Roadmap */}
        <Roadmap />

        {/* Section 07: Direct messaging and social connections */}
        <Contact 
          onMessageLogged={handleNewMessage} 
          onOpenDrawer={() => setIsDrawerOpen(true)} 
        />
      </div>

      {/* Structured Minimalist Footer matching screenshots precisely */}
      <footer className="w-full mt-16 px-6 md:px-12 max-w-5xl mx-auto border-t border-accent-mute/35 pt-10 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-ink-light">
        <div className="flex flex-col gap-2 max-w-xl text-left">
          <p className="text-[#4A4A48] font-medium leading-relaxed">
            Built with curiosity, caffeine, and too much ice cream. Year 02 of N, The best is still being written, Still learning, Still hungry
          </p>
        </div>
        <div className="font-serif italic text-ink-dark text-sm font-bold tracking-wide shrink-0">
          Shivansh Kumar &lt;Suvii&gt;
        </div>
      </footer>

      {/* Interactive persistent Message Logger Drawer */}
      <MessageDrawer
        isOpen={isDrawerOpen}
        messages={messages}
        onClose={() => setIsDrawerOpen(false)}
        onClear={handleClearMessages}
      />
    </div>
  );
}
