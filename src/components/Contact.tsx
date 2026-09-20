/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, CheckCircle, ArrowUpRight, MessageSquareCode, Linkedin, Github, Instagram, Trophy, Terminal, Award, Mail, BookOpen } from 'lucide-react';
import XIcon from './ui/XIcon';
import SectionHeading from './ui/SectionHeading';
import Deco from './ui/Deco';
import splash from '../assets/deco/splash.webp';
import { PERSONAL_INFO, CONTACT_FORM } from '../data';
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
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState(''); // bots fill this hidden field, people never see it

  // Free email-forwarding service (web3forms.com). The access key is public by design and is tied to
  // the inbox you registered. Set it as VITE_WEB3FORMS_KEY (see README). Without it, the form falls back
  // to opening the visitor's own mail app, addressed to you.
  const WEB3FORMS_KEY = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || CONTACT_FORM.web3formsKey;
  const [sentVia, setSentVia] = useState<'api' | 'mail'>('api');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || honeypot) return;

    setIsSubmitting(true);
    setError(null);

    const openMailApp = () => {
      const a = document.createElement('a');
      a.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Message from ${name} (portfolio)`)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      a.click();
    };

    try {
      let via: 'api' | 'mail' = 'api';
      if (WEB3FORMS_KEY) {
        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: WEB3FORMS_KEY,
              subject: `New message from ${name} via your portfolio`,
              from_name: 'Portfolio contact form',
              name,
              email,
              message
            })
          });
          const data = await res.json().catch(() => ({}));
          if (!res.ok || !data.success) throw new Error(data.message || 'Send failed');
        } catch (err) {
          // A rejected request (bad key, etc.) is an error; a blocked/offline request falls back to the mail app
          if (err instanceof TypeError) {
            via = 'mail';
            openMailApp();
          } else {
            throw err;
          }
        }
      } else {
        via = 'mail';
        openMailApp();
      }
      setSentVia(via);

      // keep a copy in the local log (used by the "View local log history" drawer)
      onMessageLogged({
        id: `msg-${Date.now()}`,
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });

      setShowSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setShowSuccess(false), 6000);
    } catch {
      setError(`Sorry, that didn't go through. Please try again, or email me directly at ${PERSONAL_INFO.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const rows = [
    { title: 'LinkedIn', value: 'shivansh-kumar-adi', href: PERSONAL_INFO.linkedin, Icon: Linkedin },
    { title: 'GitHub', value: 'shivansh07adi-cloud', href: PERSONAL_INFO.github, Icon: Github },
    { title: 'Instagram', value: '@triples.2008', href: PERSONAL_INFO.instagram, Icon: Instagram },
    { title: 'X (Twitter)', value: '@shivanshXsuvii', href: PERSONAL_INFO.twitter, Icon: XIcon },
    { title: 'Blog', value: 'blog.shivanshonline.in', href: PERSONAL_INFO.blog, Icon: BookOpen },
    { title: 'LeetCode', value: 'shivansh07adi', href: PERSONAL_INFO.leetcode, Icon: Trophy },
    { title: 'HackerRank', value: 'shivansh07adi', href: PERSONAL_INFO.hackerrank, Icon: Terminal },
    { title: 'CodeChef', value: 'shivanhd07adi', href: PERSONAL_INFO.codechef, Icon: Award },
    { title: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, Icon: Mail }
  ];
  const TINTS = [
    { bg: '#FBDBD6', fg: '#F75023' },
    { bg: '#DFF6E5', fg: '#1CBE59' },
    { bg: '#E6E1FB', fg: '#8069F0' },
    { bg: '#FBEFD0', fg: '#E0A21A' }
  ];

  const field =
    'w-full bg-white border border-[#E4E1EE] rounded-md px-6 py-4 text-base font-body text-black placeholder-ink-light focus:outline-none focus:border-brand transition-colors duration-300 cursor-text';

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <Deco src={splash} className="left-[-2%] top-[3%] w-[130px]" />

      <SectionHeading
        label="Let's Talk"
        title={<>Let's make something real.</>}
        subtitle="Seeking engineering partnerships, open-source hacking opportunities, or research milestones? Drop me a direct line."
        className="mb-14"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: contact rows */}
        <div className="lg:col-span-5 space-y-6">
          {rows.map(({ title, value, href, Icon }, i) => {
            const tint = TINTS[i % TINTS.length];
            return (
              <a key={title} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" className="group flex items-center gap-5">
                <span className="w-[62px] h-[62px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: tint.bg, color: tint.fg }}>
                  <Icon size={22} strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block font-jost text-black text-[22px] font-medium leading-tight group-hover:text-brand transition-colors">{title}</span>
                  <span className="flex items-center gap-1 font-body text-brand-gray text-[15px] break-all">
                    {value}
                    <ArrowUpRight size={13} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </span>
              </a>
            );
          })}

          <div className="flex items-center gap-5">
            <span className="w-[62px] h-[62px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#FBDBD6', color: '#F75023' }}>
              <MapPin size={22} strokeWidth={2} />
            </span>
            <span>
              <span className="block font-jost text-black text-[22px] font-medium leading-tight">Location</span>
              <span className="block font-body text-brand-gray text-[15px]">SRM University AP, Andhra Pradesh, India</span>
              <span className="block font-body text-ink-light text-[13px] mt-0.5">Available for remote collaborations and on-site internships worldwide.</span>
            </span>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input id="name-input" type="text" required aria-label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className={field} />
              <input id="email-input" type="email" required aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className={field} />
            </div>
            <textarea
              id="message-input"
              required
              aria-label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={7}
              placeholder="Tell me about your project, research inquiry, or web roadmap idea..."
              className={`${field} resize-none`}
            />

            {/* honeypot: hidden from people, tempting for bots */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
            />

            {error && (
              <p role="alert" className="font-body text-[14px] text-[#C93A17] bg-[#FFF1EC] border border-brand/30 rounded-md px-4 py-3">
                {error}
              </p>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-5 justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-wipe ${isSubmitting ? 'opacity-85 pointer-events-none' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-brand animate-ping block" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenDrawer}
                className="font-jost text-base text-brand-gray hover:text-brand flex items-center gap-2 underline decoration-dotted underline-offset-4 cursor-pointer transition-colors"
              >
                <MessageSquareCode size={16} />
                <span>View local log history</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="fixed bottom-6 right-6 z-[60] bg-white border border-[#E4E1EE] max-w-md p-5 rounded-md shadow-[0_20px_60px_rgba(70,60,120,0.25)] flex gap-4"
          >
            <CheckCircle className="text-brand-green shrink-0 mt-0.5" size={20} />
            <div className="space-y-1">
              <h4 className="font-jost text-black text-lg font-medium">{sentVia === 'api' ? 'Message sent!' : 'Almost there!'}</h4>
              <p className="font-body text-brand-gray text-[13px] leading-relaxed">
                {sentVia === 'api'
                  ? 'Thanks for reaching out. Your message is in my inbox and I will reply to the email you gave.'
                  : 'Your email app should have opened with the message ready. Press send there to deliver it to me.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
