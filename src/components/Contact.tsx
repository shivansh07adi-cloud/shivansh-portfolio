/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, CheckCircle, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';

interface ContactProps {
  onMessageLogged: (msg: ContactMessage) => void;
  onOpenDrawer: () => void;
}

export default function Contact({ onMessageLogged, onOpenDrawer }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate network delay for premium visual interactive feedback
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      };

      // Emit up to App where lists are synchronized onto localStorage
      onMessageLogged(newMessage);
      
      setIsSubmitting(false);
      setShowSuccess(true);

      // Clear form
      setName('');
      setEmail('');
      setMessage('');

      // Auto dismiss success toast
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto relative">
      {/* Visual background grain */}
      <div className="absolute inset-x-0 -bottom-10 h-32 bg-[#CEC0A8]/5 blur-3xl pointer-events-none rounded-full" />

      {/* Category header tag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">07</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">LET'S TALK</span>
      </div>

      {/* Main giant display headline */}
      <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-ink-dark mb-12 sm:mb-16 leading-none">
        Let's make <br className="hidden sm:inline" />
        something real.
      </h2>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Column: Social Table & Location */}
        <div className="lg:col-span-5 space-y-12">
          
          <div className="space-y-4">
            <p className="font-body text-base text-ink-gray leading-relaxed">
              Seeking engineering partnerships, open-source hacking opportunities, or research milestones? Drop me a direct line.
            </p>
          </div>

          {/* Social Rows Table strictly aligned with last screenshot */}
          <div className="border-t border-accent-mute/30 divide-y divide-accent-mute/30 font-mono text-xs text-ink-gray">
            
            {/* LinkedIn row */}
            <div className="py-4.5 flex justify-between items-center group">
              <span className="text-ink-light uppercase tracking-wider font-semibold">LinkedIn</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dark hover:text-accent-mute transition-colors flex items-center gap-1 font-semibold"
              >
                <span>shivansh-kumar-adi</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* GitHub row */}
            <div className="py-4.5 flex justify-between items-center group">
              <span className="text-ink-light uppercase tracking-wider font-semibold">GitHub</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dark hover:text-accent-mute transition-colors flex items-center gap-1 font-semibold"
              >
                <span>shivansh07adi-cloud</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Instagram row */}
            <div className="py-4.5 flex justify-between items-center group">
              <span className="text-ink-light uppercase tracking-wider font-semibold">Instagram</span>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dark hover:text-accent-mute transition-colors flex items-center gap-1 font-semibold"
              >
                <span>@triples.2008</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* LeetCode row */}
            <div className="py-4.5 flex justify-between items-center group">
              <span className="text-ink-light uppercase tracking-wider font-semibold">LeetCode</span>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dark hover:text-accent-mute transition-colors flex items-center gap-1 font-semibold"
              >
                <span>shivansh07adi</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* HackerRank row */}
            <div className="py-4.5 flex justify-between items-center group">
              <span className="text-ink-light uppercase tracking-wider font-semibold">HackerRank</span>
              <a
                href={PERSONAL_INFO.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dark hover:text-accent-mute transition-colors flex items-center gap-1 font-semibold"
              >
                <span>shivansh07adi</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* CodeChef row */}
            <div className="py-4.5 flex justify-between items-center group">
              <span className="text-ink-light uppercase tracking-wider font-semibold">CodeChef</span>
              <a
                href={PERSONAL_INFO.codechef}
                target="_blank"
                rel="noreferrer"
                className="text-ink-dark hover:text-accent-mute transition-colors flex items-center gap-1 font-semibold"
              >
                <span>shivanhd07adi</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Email row */}
            <div className="py-4.5 flex justify-between items-center group">
              <span className="text-ink-light uppercase tracking-wider font-semibold">Email</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-ink-dark hover:text-accent-mute transition-colors flex items-center gap-1 font-semibold underline decoration-dotted"
              >
                <span>{PERSONAL_INFO.email}</span>
                <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Location Block exactly matching the template layout */}
          <div className="space-y-3 pt-4 border-l-2 border-accent-mute/30 pl-5">
            <span className="font-mono text-[9px] tracking-widest text-[#B3A994] uppercase block">
              LOCATION
            </span>
            <div className="font-serif text-lg font-bold italic text-ink-dark flex items-center gap-2">
              <MapPin size={16} className="text-accent-mute animate-pulse" />
              <span>SRM University AP</span>
            </div>
            <p className="font-body text-xs text-ink-gray leading-relaxed">
              Andhra Pradesh, India
              <br />
              <span className="text-ink-light font-light italic">Available for remote collaborations and on-site internships worldwide.</span>
            </p>
          </div>

        </div>

        {/* Right Column: Interaction Bottom-Border Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-10 md:space-y-12">
            
            {/* Name Input */}
            <div className="relative group">
              <label htmlFor="name-input" className="block font-mono text-[10px] md:text-xs text-ink-light uppercase tracking-widest mb-2 group-focus-within:text-ink-dark transition-colors duration-300">
                NAME_
              </label>
              <input
                id="name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-accent-mute/50 py-3 text-sm font-body text-ink-dark placeholder-ink-light/50 focus:outline-none focus:border-ink-dark transition-all duration-300 rounded-none cursor-text"
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <label htmlFor="email-input" className="block font-mono text-[10px] md:text-xs text-ink-light uppercase tracking-widest mb-2 group-focus-within:text-ink-dark transition-colors duration-300">
                EMAIL_
              </label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full bg-transparent border-b border-accent-mute/50 py-3 text-sm font-body text-ink-dark placeholder-ink-light/50 focus:outline-none focus:border-ink-dark transition-all duration-300 rounded-none cursor-text"
              />
            </div>

            {/* Message Input */}
            <div className="relative group">
              <label htmlFor="message-input" className="block font-mono text-[10px] md:text-xs text-ink-light uppercase tracking-widest mb-2 group-focus-within:text-ink-dark transition-colors duration-300">
                MESSAGE_
              </label>
              <textarea
                id="message-input"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell me about your project, research inquiry, or web roadmap idea..."
                className="w-full bg-transparent border-b border-accent-mute/50 py-3 text-sm font-body text-ink-dark placeholder-ink-light/50 focus:outline-none focus:border-ink-dark transition-all duration-300 rounded-none resize-none cursor-text"
              />
            </div>

            {/* Action block & Button precisely matching UI */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-10 py-4 font-mono text-xs tracking-widest uppercase font-bold text-canvas bg-ink-dark border border-ink-dark hover:bg-canvas hover:text-ink-dark transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                  isSubmitting ? 'opacity-85 pointer-events-none' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-canvas animate-ping block" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND_MESSAGE</span>
                    <Send size={12} className="group-hover:translate-x-1.5 transition-transform" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenDrawer}
                className="font-mono text-[10px] text-ink-light hover:text-ink-dark flex items-center gap-1.5 underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                <MessageSquareCode size={13} />
                <span>View local log history</span>
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Success banner absolutely mounted for tactile reassurance */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="fixed bottom-6 right-6 z-40 bg-ink-dark text-canvas border border-accent-mute max-w-md p-5 rounded-md shadow-2xl flex gap-4"
          >
            <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
            <div className="space-y-1">
              <h4 className="font-serif text-sm font-bold italic">Message Saved Successfully!</h4>
              <p className="font-body text-xs text-[#CEC0A8] leading-relaxed">
                Your message has been safely appended to the client-side log database. Click the "LOG" hanging badge at the top to inspect details.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
