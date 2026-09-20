/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Trophy, Terminal, Award, BookOpen, MapPin } from 'lucide-react';
import StackOverflowIcon from './ui/StackOverflowIcon';
import TypingText from './ui/TypingText';
import XIcon from './ui/XIcon';
import { PERSONAL_INFO, HERO_INFO } from '../data';
import { scrollToId } from '../utils/scroll';
import portrait from '../assets/hero-portrait.webp';
import portraitSm from '../assets/hero-portrait-sm.webp';
import { REACT_PATH, PYTHON_PATH, C_PATH, LINUX_PATH } from '../techIcons';

// Floating tech badge — bobs via a CSS keyframe animation (runs on the compositor)
function Badge({
  className,
  delay = 0,
  duration = 5,
  children
}: {
  className: string;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`float-y absolute w-[52px] h-[52px] md:w-[62px] md:h-[62px] rounded-xl bg-white shadow-[0_10px_28px_rgba(30,20,60,0.14)] flex items-center justify-center ${className}`}
      style={{
        animation: `float-y ${duration}s ease-in-out ${delay}s infinite`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}

const SOCIALS = [
  { href: PERSONAL_INFO.github, label: 'GitHub', Icon: Github },
  { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: PERSONAL_INFO.stackoverflow, label: 'Stack Overflow', Icon: StackOverflowIcon },
  { href: PERSONAL_INFO.instagram, label: 'Instagram', Icon: Instagram },
  { href: PERSONAL_INFO.twitter, label: 'X (Twitter)', Icon: XIcon },
  { href: PERSONAL_INFO.blog, label: 'Blog', Icon: BookOpen },
  { href: PERSONAL_INFO.leetcode, label: 'LeetCode', Icon: Trophy },
  { href: PERSONAL_INFO.hackerrank, label: 'HackerRank', Icon: Terminal },
  { href: PERSONAL_INFO.codechef, label: 'CodeChef', Icon: Award }
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    scrollToId(id);
  };

  return (
    <section
      id="hero"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-[120px] pb-28 lg:pb-32 lg:min-h-screen grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-6 items-center font-jost"
    >
      {/* ---------- Left: copy ---------- */}
      <div className="order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 border border-brand/20 text-brand-gray rounded-full text-[11px] md:text-xs tracking-wider uppercase font-medium select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span>Currently: Student · Builder · Hungry. · Open to full-time opportunity</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-brand text-[28px] md:text-[34px] font-normal leading-none mb-3"
        >
          Hello, I&rsquo;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-black font-medium tracking-tight leading-[1.02] text-[clamp(44px,6.4vw,84px)] mb-6"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-black text-xl md:text-[27px] leading-snug mb-3"
        >
          <TypingText lines={HERO_INFO.typedLines} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="font-body italic text-brand-gray text-[15px] md:text-base leading-snug mb-5"
        >
          &ldquo;{HERO_INFO.quote}&rdquo;
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="space-y-2 mb-5"
        >
          {HERO_INFO.positions.map((pos, i) => (
            <li key={pos.company} className="flex items-start gap-3 text-black text-[17px] md:text-xl leading-snug">
              <span className={`mt-[9px] md:mt-[11px] w-2 h-2 rounded-full shrink-0 ${i % 2 === 0 ? 'bg-brand-green' : 'bg-brand-purple'}`} />
              <span>
                {pos.role} <span className="text-ink-light">@</span>{' '}
                <span className="font-medium text-brand">{pos.company}</span>
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="font-body text-brand-gray text-base md:text-[17px] leading-[1.85] max-w-[36rem] mb-6"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8"
        >
          <span
            className="inline-flex items-center px-4 py-2 rounded-md bg-white/90 border border-[#E4E1EE] text-black text-[14px] md:text-[15px] font-medium shadow-[0_6px_20px_rgba(110,100,170,0.10)]"
            style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace" }}
          >
            ~ {HERO_INFO.tagline}
          </span>
          <span className="inline-flex items-center gap-1.5 text-black text-[17px] md:text-lg">
            <MapPin size={19} className="text-brand" />
            {HERO_INFO.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="flex flex-wrap items-center gap-x-7 gap-y-5"
        >
          <button onClick={() => scrollToSection('origin')} className="btn-wipe" style={{ padding: '1rem 2.4rem', fontSize: '1.15rem' }}>
            About Me
          </button>

          <div className="flex items-center gap-5">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="text-black hover:text-brand hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon size={22} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ---------- Right: portrait + floating tech badges ---------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="order-1 lg:order-2 relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] mx-auto lg:mr-0 lg:ml-auto"
      >
        <div className="relative w-full aspect-[500/560]">
          <img
            src={portrait}
            srcSet={`${portraitSm} 720w, ${portrait} 1300w`}
            sizes="(max-width: 1023px) 92vw, 580px"
            fetchPriority="high"
            loading="eager"
            alt="Shivansh Kumar watching the sunset by the sea"
            width={1300}
            height={1414}
            decoding="async"
            className="absolute max-w-none select-none pointer-events-none"
            style={{ left: '-8.04%', top: '-6.38%', width: '116.07%', height: 'auto' }}
          />
        </div>

        {/* JavaScript */}
        <Badge className="left-[-3%] top-[9%]" duration={5.2}>
          <span className="w-full h-full rounded-xl bg-[#F7DF1E] flex items-end justify-end p-1.5 md:p-2 text-black font-bold text-lg md:text-xl leading-none">
            JS
          </span>
        </Badge>

        {/* React */}
        <Badge className="right-[8%] top-[0%]" delay={0.8} duration={6}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9" fill="#61DAFB" aria-label="React">
            <path d={REACT_PATH} />
          </svg>
        </Badge>

        {/* AWS */}
        <Badge className="right-[-5%] top-[38%]" delay={0.4} duration={5.6}>
          <svg viewBox="0 0 64 40" className="w-9 md:w-11" aria-label="AWS">
            <text x="32" y="22" textAnchor="middle" fontFamily="Jost, Arial, sans-serif" fontWeight="700" fontSize="24" fill="#252F3E">
              aws
            </text>
            <path d="M8 29 C22 38 42 38 56 28" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
            <path d="M51 25.5 L57 27.5 L54.5 33" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Badge>

        {/* C */}
        <Badge className="left-[1%] md:left-[-7%] top-[47%]" delay={0.6} duration={6.4}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9" aria-label="C">
            <path d={C_PATH} fill="#00599C" />
          </svg>
        </Badge>

        {/* Linux */}
        <Badge className="left-[2%] md:left-[-5%] top-[71%]" delay={1.0} duration={5.9}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9" aria-label="Linux">
            <path d={LINUX_PATH} fill="#141414" />
          </svg>
        </Badge>

        {/* Java */}
        <Badge className="right-[-1%] bottom-[9%]" delay={1.6} duration={5.4}>
          <svg viewBox="0 0 64 64" className="w-9 h-9 md:w-10 md:h-10" aria-label="Java">
            <path d="M32 4c-6 7 6 10-1 18M40 10c-4 5 4 7-1 13" fill="none" stroke="#E76F00" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M13 33h29v9c0 8-6 13-14.5 13S13 50 13 42z" fill="#5382A1" />
            <path d="M42 36c9 0 9 12 0 12" fill="none" stroke="#5382A1" strokeWidth="3.6" strokeLinecap="round" />
            <path d="M9 59h37" stroke="#E76F00" strokeWidth="3.4" strokeLinecap="round" />
          </svg>
        </Badge>

        {/* Python */}
        <Badge className="left-[26%] bottom-[-4%]" delay={1.2} duration={5.8}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-9 md:h-9" aria-label="Python">
            <defs>
              <linearGradient id="py-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0.5" stopColor="#3776AB" />
                <stop offset="0.5" stopColor="#FFD43B" />
              </linearGradient>
            </defs>
            <path d={PYTHON_PATH} fill="url(#py-grad)" />
          </svg>
        </Badge>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection('stats')}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block"
      >
        <span className="flex justify-center pt-2 w-[28px] h-[46px] rounded-full border-2 border-black">
          <span
            className="scroll-wheel block w-[3px] h-2.5 rounded-full bg-black"
            style={{ animation: 'scroll-wheel 1.7s ease-in-out infinite' }}
          />
        </span>
      </motion.button>
    </section>
  );
}
