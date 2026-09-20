/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, type ReactNode } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroBackdrop from './components/HeroBackdrop';
import StatsCounter from './components/StatsCounter';
import Origin from './components/Origin';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';
import Achievements from './components/Achievements';
import Languages from './components/Languages';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ToTop from './components/ui/ToTop';
import MessageDrawer from './components/MessageDrawer';
import { ContactMessage } from './types';

// Below-the-fold sections are mounted one at a time while the browser is idle, so the first paint and
// first interaction stay fast on phones. `portfolio:mount-all` (fired by nav clicks) mounts the rest at once.
function useProgressiveMount(total: number) {
  const [count, setCount] = useState(1); // the counter strip right under the hero renders immediately
  useEffect(() => {
    const all = () => setCount(total);
    window.addEventListener('portfolio:mount-all', all);
    return () => window.removeEventListener('portfolio:mount-all', all);
  }, [total]);
  useEffect(() => {
    if (count >= total) return;
    const w = window as any;
    const step = () => setCount((c) => Math.min(c + 1, total));
    const id = w.requestIdleCallback ? w.requestIdleCallback(step, { timeout: 500 }) : window.setTimeout(step, 160);
    return () => (w.cancelIdleCallback ? w.cancelIdleCallback(id) : window.clearTimeout(id));
  }, [count, total]);
  return count;
}

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

  const sections = useMemo<{ id: string; node: ReactNode }[]>(
    () => [
      { id: 'stats', node: <StatsCounter key="stats" /> },
      { id: 'origin', node: <Origin key="origin" /> },
      { id: 'philosophy', node: <Philosophy key="philosophy" /> },
      { id: 'projects', node: <Projects key="projects" /> },
      { id: 'skills', node: <Skills key="skills" selectedSkill={selectedSkill} onSkillSelect={setSelectedSkill} /> },
      { id: 'experience', node: <Experience key="experience" selectedSkill={selectedSkill} /> },
      { id: 'volunteering', node: <Volunteering key="volunteering" /> },
      { id: 'achievements', node: <Achievements key="achievements" /> },
      { id: 'languages', node: <Languages key="languages" /> },
      { id: 'certifications', node: <Certifications key="certifications" /> },
      {
        id: 'contact',
        node: <Contact key="contact" onMessageLogged={handleNewMessage} onOpenDrawer={() => setIsDrawerOpen(true)} />
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedSkill, messages]
  );
  const mounted = useProgressiveMount(sections.length);

  return (
    <div className="relative min-h-screen bg-white text-ink-dark overflow-x-hidden flex flex-col justify-between">
      <CustomCursor />
      <ToTop />

      {/* Main Core View Area */}
      <main className="flex-1">
        <div className="relative">
          {/* Watercolour splash backdrop behind header + hero */}
          <HeroBackdrop />

          {/* Navigation & Branding Header */}
          <Header 
            onOpenMessages={() => setIsDrawerOpen(true)} 
            messageCount={messages.length} 
          />

          {/* Hero Landing Stage */}
          <Hero />
        </div>

        {sections.slice(0, mounted).map((sec) => sec.node)}
        {mounted < sections.length && (
          <div aria-hidden="true" style={{ minHeight: (sections.length - mounted) * 640 }} />
        )}
      </main>

      {/* Footer band */}
      <footer className="w-full mt-20 bg-soft">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-body text-sm text-brand-gray">
          <p className="max-w-2xl leading-relaxed">
            Built with curiosity, caffeine, and too much ice cream. Year 02 of N, The best is still being written, Still learning, Still hungry
          </p>
          <div className="font-jost text-black text-base font-medium shrink-0">
            Shivansh Kumar &lt;Suvii&gt;
          </div>
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
