/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExperienceItem, SkillCategory, VolunteerItem, AchievementItem, LanguageItem, CertificationItem } from './types';

export const PERSONAL_INFO = {
  name: 'Shivansh Kumar',
  title: '2nd Year B.Tech CSE Student & AI Builder',
  subtitle: 'Passionate about Computer Vision, Open Source & Modern Web Architectures',
  institution: 'SRM University AP',
  branch: 'Computer Science and Engineering (Core)',
  location: 'Andhra Pradesh, India',
  email: 'shivansh07adi@gmail.com',
  github: 'https://github.com/shivansh07adi-cloud',
  linkedin: 'https://www.linkedin.com/in/shivansh-kumar-adi',
  instagram: 'https://instagram.com/triples.2008',
  instagramUser: 'triples.2008',
  hackerrank: 'https://www.hackerrank.com/profile/shivansh07adi',
  codechef: 'https://www.codechef.com/users/shivanhd07adi',
  leetcode: 'https://leetcode.com/u/shivansh07adi/',
  bio: "I'm drawn to the gap between 'this AI research is cool' and 'this actually works in production.' I build on both sides — frontend interfaces that users enjoy, and models that don't fall apart on real-world input. Fuelled by curiosity, bad sleep, and an unreasonable amount of ice cream. Currently pursuing CSE Core at SRM University AP.",
  status: 'Open for research internships, remote developer roles, and open-source hacking.',
};

export const ORIGIN_STORY = {
  section_num: '01',
  section_title: 'ORIGIN',
  title: 'Why I exist?',
  paragraphs: [
    'I was that kid who didn\'t just want to use the app — I wanted to know what was running underneath it. Every loading spinner, every autocomplete, every recommendation felt like a question I hadn\'t answered yet.',
    'Somewhere between that curiosity and now, I realized the world isn\'t changed by people who understand technology. It\'s changed by people who understand what technology still can\'t do — and then go build that thing.',
    'I sit at that edge. Frontend that doesn\'t break on real users. Models that don\'t fail on real data. Open source that actually gets merged. That\'s not a skill set. That\'s a standard I hold myself to.'
  ]
};

export const WORK_PHILOSOPHY = {
  section_num: '02',
  section_title: 'THE WORK',
  title: 'What do I even do?',
  tagline: 'Honestly? A bit of everything and that\'s exactly how I like it.',
  items: [
    {
      title: 'Ship software real people use',
      desc: 'Deployed on Firebase, used by real users — not just running on localhost.'
    },
    {
      title: 'Build interfaces that see and respond',
      desc: 'Gesture detection, MediaPipe pipelines, real-time CV — wired into React frontends that feel alive.'
    },
    {
      title: 'Lead Open-Source Integrations',
      desc: 'Merged PRs, resolved issues, and had actual conversations with maintainers at GsSoC and NSOC — not just star-and-forget.'
    },
    {
      title: 'Build with LLMs, not just talk about them',
      desc: 'Implementing modern SDKs like the Gemini API, prompt workflows, and AI assistance to ship features at 10x pace.'
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-cv',
    name: 'AI & Computer Vision',
    description: 'Sensing models, image processing & intelligence',
    skills: [
      'Artificial Intelligence (AI)',
      'Computer Vision',
      'OpenCV',
      'MediaPipe',
      'Gesture Recognition',
      'Image Processing',
      'Gemini Api',
      'AI Application Development',
      'AI Tools',
      'Python (Programming Language)',
      'NumPy',
      'Azure AI Services'
    ]
  },
  {
    id: 'web-frontend',
    name: 'Web & Front-End Architecture',
    description: 'Delightful UX/UI with interactive state design',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript',
      'Vite',
      'Front-End Development',
      'HTML5',
      'CSS3',
      'Responsive Web Design',
      'DOM Manipulation',
      'REST APIs',
      'Web Development',
      'Streamlit'
    ]
  },
  {
    id: 'backend-data',
    name: 'Backend & Data Pipelines',
    description: 'Async processing, automation & systems design',
    skills: [
      'Node.js',
      'BullMQ',
      'Application Programming Interfaces (API)',
      'Automation',
      'Data Pipelines',
      'Systems Design',
      'Software Development',
      'Software Quality Assurance',
      'QA Automation',
      'Telegram Bot API'
    ]
  },
  {
    id: 'systems-db',
    name: 'Languages & Relational Databases',
    description: 'Robust core foundations & structured querying',
    skills: [
      'C (Programming Language)',
      'C++',
      'Java',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'SQL CRUD',
      'Relational Databases',
      'Oracle Database',
      'Object-Oriented Programming (OOP)',
      'Data Structures'
    ]
  },
  {
    id: 'cloud-tools',
    name: 'Cloud, Hosting & Collaboration',
    description: 'Deploying platforms and team workflows',
    skills: [
      'Amazon Web Services (AWS)',
      'Firebase Hosting',
      'GitHub',
      'Git',
      'Docker',
      'Visual Studio',
      'Code Review',
      'Open-Source Software',
      'OSC',
      'Research Skills',
      'Problem Solving',
      'Project Management',
      'Project Planning',
      'Product Development'
    ]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'exp-nutrithy-fde',
    role: 'Forward Deployed Engineer',
    company: 'Nutrithy Wellness',
    logoColor: 'from-[#0F9D58] to-[#4285F4]',
    period: 'Jul 2026 - Present',
    duration: '3 mos',
    type: 'Full-time · Remote',
    location: 'Mumbai, Maharashtra, India',
    description: 'Working full-time as a Forward Deployed Engineer, embedded directly with the founding team to ship product and internal tooling across the marketing-tech and consumer wellness stack.',
    media: [],
    skills: ['Software Development', 'Software Quality Assurance', 'React.js', 'Next.js', 'Node.js', 'AWS']
  },
  {
    id: 'exp-nutrithy-swe-intern',
    role: 'Software Engineer Intern',
    company: 'Nutrithy Wellness',
    logoColor: 'from-[#4285F4] to-[#0F9D58]',
    period: 'Jun 2026 - Jul 2026',
    duration: '2 mos',
    type: 'Internship · On-site',
    description: [
      'Built and scaled Sendura, a cold outreach engine managing 12+ concurrent email campaigns with automated daily lead addition (50/day) and Day+4 follow-up sequencing.',
      'Analyzed outreach performance across 11 campaigns and 43 replies, driving data-informed messaging improvements.',
      'Operated Prospekt, a lead enrichment pipeline (Prospeo API + BullMQ) with cross-campaign deduplication for ongoing lead extraction.',
      'Executed QA testing across 6-7 company platforms (e-commerce, manager/vendor/staff portals, apps), identifying and resolving critical bugs.'
    ],
    media: [],
    skills: ['QA Automation', 'Software Development', 'REST APIs', 'Node.js', 'React.js']
  },
  {
    id: 'exp-deepmind',
    role: 'Open Source Contributor',
    company: 'Google DeepMind',
    logoColor: 'from-[#4285F4] to-[#34A853]',
    period: 'Aug 2026 - Present',
    duration: '2 mos',
    type: 'Part-time · Remote',
    description: [
      'Resolved a multi-year open gap (#804) on OpenSpiel: implemented Windows wheel support for C++ extensions via cibuildwheel and PEP 517/518, unblocking pip installation for all Windows users.',
      'Contribution acknowledged by the project maintainer and featured in the upcoming OpenSpiel 2.0 release blog.',
      'Ongoing: monitoring Windows-specific CI failures and triaging community issues on the official tracking thread.'
    ],
    media: [],
    skills: ['Open-Source Software', 'GitHub', 'C++', 'Code Review']
  },
  {
    id: 'exp-synthica',
    role: 'Computer Vision Research Intern',
    company: 'Synthica',
    logoColor: 'from-[#3A1C71] to-[#D76D77]',
    period: 'May 2026 - Present',
    duration: '1 mo',
    type: 'Internship · Remote',
    description: 'Executing specialized analysis and algorithmic building for computer vision frameworks. Designing and tuning gesture recognition and image processing modules with Python, OpenCV, and MediaPipe vectors.',
    media: [
      { name: 'Certificate', fileType: 'pdf' }
    ],
    skills: ['Computer Vision', 'OpenCV', 'MediaPipe', 'Image Processing', 'Gesture Recognition', 'Python (Programming Language)', 'NumPy']
  },
  {
    id: 'exp-moe',
    role: 'Campus Ambassador',
    company: 'MINISTRY OF EDUCATION, GOVERNMENT OF INDIA',
    logoColor: 'from-[#E1533E] to-[#F39A59]',
    period: 'Nov 2025 - Present',
    duration: '7 mos',
    type: 'Part-time · Remote',
    description: [
      'Selected inside highly-competitive guidelines as National MyGov Campus Ambassador representing SRM University AP in countrywide socio-civic initiatives.',
      'Promoting tech innovation, research initiatives, civil awareness, and leadership events among extensive student nodes.',
      'Hosting university networking panels and collaborating with direct peer leaders to execute central impact programs.'
    ],
    media: [
      { name: '29764.jpg', fileType: 'image' }
    ],
    skills: ['Research Skills', 'Problem Solving', 'Public Relations']
  },
  {
    id: 'exp-inamigos',
    role: 'Front-End Developer & AI Writer I',
    company: 'InAmigos Foundation (IAF)',
    logoColor: 'from-[#FF512F] to-[#DD2476]',
    period: 'Jan 2026 - Feb 2026',
    duration: '2 mos',
    type: 'Internship · Hybrid',
    description: 'Selected via Internshala for frontend development and core content delivery. Built high-fidelity interactive templates, translated complex designer wireframes into production React components, and authored articles discussing emerging AI paradigms.',
    media: [],
    skills: ['Front-End Development', 'Web Development', 'Responsive Web Design', 'HTML5', 'CSS3']
  }
];

export const VOLUNTEER_LIST: VolunteerItem[] = [
  {
    id: 'vol-gdg',
    role: 'Community Member',
    organization: 'Google Developers Group',
    period: 'Nov 2025 - Present',
    duration: '11 mos',
    cause: 'Science & Technology',
    description: 'Engaging with the local developer community around talks, meetups, and hands-on sessions on emerging tech.',
    icon: 'users',
    colorFrom: '#4285F4',
    colorTo: '#34A853'
  },
  {
    id: 'vol-msc',
    role: 'Events Team Member',
    organization: 'Microsoft Student Community, SRMAP',
    period: 'Sep 2025 - Dec 2025',
    duration: '4 mos',
    cause: 'Education',
    description: 'Helped plan and run campus tech events, handling logistics and on-ground coordination for the student chapter.',
    icon: 'laptop',
    colorFrom: '#F35325',
    colorTo: '#05A6F0'
  },
  {
    id: 'vol-sports-council',
    role: 'Management & Registration',
    organization: 'Sports Council, SRM University AP',
    period: 'Ongoing',
    duration: '',
    cause: 'Campus Life',
    description: 'Handling registration and on-ground management for Sports Council events at SRM University AP.',
    icon: 'trophy',
    colorFrom: '#B19470',
    colorTo: '#8E8E8A'
  },
  {
    id: 'vol-research',
    role: 'Research Volunteer',
    organization: 'SRM University, AP',
    period: 'Ongoing',
    duration: '',
    cause: 'Education',
    description: 'Supporting ongoing research initiatives at the university, contributing time outside of coursework.',
    icon: 'flask',
    colorFrom: '#8E8E8A',
    colorTo: '#CEC0A8'
  }
];

export const PROJECTS_DATA = {
  section_num: '03',
  section_title: 'THE WORK',
  title: 'Stuff I Lost Sleep Over.',
  subtitle: '(My ice cream melted for these.)',
  projects: [
    {
      id: 'proj-flashbook',
      title: 'FlashBook — High-Concurrency Booking System',
      desc: "A learning project built in phases to master distributed-systems concepts through a real flash-sale booking flow. A Redis distributed lock serializes booking attempts per drop, with Postgres row-level locking (SELECT ... FOR UPDATE) as the actual correctness guarantee against overselling. A Redis sorted-set waiting room admits users in strict FIFO order via a background worker, with per-user rate limiting and a circuit breaker around the booking path. Payments run through an idempotent state machine keyed on a client-generated idempotency key — retried or duplicate payment calls only ever charge once, verified by firing 8 concurrent requests at the same key. Background jobs (confirmation, analytics, cleanup) run on BullMQ queues, and a k6 load test simulates a 200-virtual-user flash-sale stampede against real Postgres and Redis. The Next.js frontend has its own custom-built animated components — a split-flap slot counter, a 3D dome gallery for live drops, a curved marquee, and a splash cursor — all respecting prefers-reduced-motion.",
      tags: ['Node.js', 'Redis', 'PostgreSQL', 'BullMQ', 'Next.js', 'Systems Design'],
      sleepLost: '🌙🌙🌙🌙🌙',
      iceCreamConsumed: '🍦🍦🍦🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/queuelock-backend',
      githubFrontend: 'https://github.com/shivansh07adi-cloud/queuelock-frontend',
      live: 'https://queuelock-frontend.vercel.app'
    },
    {
      id: 'proj-sendura',
      title: 'Sendura — Cold Outreach Automation Engine',
      desc: 'Built and shipped for Nutrithy Wellness, running 12+ concurrent email campaigns across multiple sending domains. Automated daily lead addition (50 new leads per campaign per day) with Day+4 follow-up sequencing for non-responders — processing 500+ new leads daily in production. Replaced what would otherwise require 2-3 dedicated manual outreach executives, turning a manual marketing workflow into fully automated infrastructure. Built and shipped within a month; in active production use since July 2026.',
      tags: ['Node.js', 'JavaScript', 'Automation', 'REST APIs', 'Systems Design'],
      sleepLost: '🌙🌙🌙',
      iceCreamConsumed: '🍦🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/Sendura-Cold-Outreach-Automation-Engine'
    },
    {
      id: 'proj-prospekt',
      title: 'Prospekt — Lead Enrichment Pipeline',
      desc: 'Designed and built for Nutrithy Wellness using the Prospeo API with a two-step search-and-enrich flow. Built on BullMQ for async job processing, with a state machine driving lead status transitions and cross-campaign deduplication to protect API usage and domain reputation. Managed lead batching in sets of 50, processing 11,900+ leads across 240+ batches to date — powering outreach data for Sendura\'s campaigns. Built and shipped within a month; in active production use since July 2026.',
      tags: ['Node.js', 'REST APIs', 'BullMQ', 'Automation', 'Systems Design'],
      sleepLost: '🌙🌙🌙',
      iceCreamConsumed: '🍦🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/Prospekt---Lead-Enrichment-pipeline-'
    },
    {
      id: 'proj-tracenut',
      title: 'TraceNut — Traceability & Inventory Prototype',
      desc: "A raw-material-to-dispatch traceability and inventory system for Nutrithy's makhana product line — batches, lot codes, warehouse registry, categorized destinations, scan-to-pack, and a full accountability log. Generates real EAN-13 barcodes (valid GS1 check digit) for both batches and cartons, with camera-based barcode scanning via ZXing restricted to EAN-13 for speed and accuracy. Full warehouse CRUD with search/filter/sort, capacity utilisation tracking, and a right-side drawer form with dirty-state tracking and a discard-changes confirmation. Supports registering pre-existing stock (skipping material deduction) while preserving the box's original barcode alongside a new TraceNut-generated one, so old boxes stay scannable without relabeling.",
      tags: ['React.js', 'Vite', 'JavaScript', 'Barcode Scanning', 'Systems Design'],
      sleepLost: '🌙🌙🌙',
      iceCreamConsumed: '🍦🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/tracenut---frontend',
      live: 'https://tracenut-frontend.vercel.app/'
    },
    {
      id: 'proj-evabot',
      title: 'WhatsApp Bot',
      desc: 'A full-blown WhatsApp bot platform, not a toy script. Movie/course search & download with daily limits, Instagram/Twitter media downloading, sticker creation & stealing, live IPO/stock analysis, AI-powered resume tailoring against a JD, scheduled news & GitHub feed posting, timed reminders, translation, weather, Wikipedia lookups, XP/rank tracking, and Gemini-powered chat — all wired into one bot serving multiple groups and DMs.',
      tags: ['Node.js', 'WhatsApp API', 'Gemini API', 'BullMQ', 'Automation'],
      sleepLost: '🌙🌙🌙🌙',
      iceCreamConsumed: '🍦🍦🍦🍦'
    },
    {
      id: 'proj-referral-portal',
      title: 'Community Referral Portal',
      desc: 'A full-stack web application that connects job seekers with companies offering referrals. Companies register once to list themselves in a public directory; students and professionals can browse, search, and reach out directly — no login or middleman required. Live search across company and contact names, persistent data via a real PostgreSQL database, fully responsive across mobile and desktop, and open access with zero authentication required.',
      tags: ['Next.js', 'React.js', 'Supabase', 'PostgreSQL'],
      sleepLost: '🌙🌙',
      iceCreamConsumed: '🍦🍦',
      live: 'https://referral-portel-for-companies-and-e.vercel.app/',
      github: 'https://github.com/shivansh07adi-cloud/Referral-Portel-for-companies-and-employees'
    },
    {
      id: 'proj-image-enhancement',
      title: 'Image Enhancement & Preprocessing System',
      desc: 'A computer vision pipeline built with Python, OpenCV, and Streamlit. Upload any image, apply 12+ enhancement techniques (CLAHE, Bilateral Filter, HDR Effect, Pencil Sketch, Canny Edge Detection) with real-time parameter tuning, compare before/after side by side, and download the result. Also includes 5 preprocessing operations — resize, rotate, flip, grayscale, and denoising — plus real-time before/after comparison with image statistics. Supports JPG, PNG, BMP, and TIFF formats, no installation needed via the live app.',
      tags: ['Python', 'OpenCV', 'Streamlit', 'NumPy', 'Pillow'],
      sleepLost: '🌙🌙',
      iceCreamConsumed: '🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/Image-enhancement-and-preprocessing',
      live: 'https://image-enhancement-and-preprocessing-bwjmr2nxumbxsdfpmaoqye.streamlit.app'
    },
    {
      id: 'proj-hackjudge',
      title: 'HackJudge AI',
      desc: 'An AI that judges hackathon projects like an actual panel — scoring innovation, technical depth, feasibility, and presentation. Built because judging always felt unfair and opaque.',
      tags: ['Gemini API', 'Frontend', 'REST APIs'],
      sleepLost: '🌙🌙🌙',
      iceCreamConsumed: '🍦🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/HackJudgeAI',
      live: 'https://hack-judge-ai.vercel.app/'
    },
    {
      id: 'proj-handgesture',
      title: 'Hand Gesture Media Controller',
      desc: 'Control your media player with just your hand — no touch needed. Real-time gesture detection through webcam, mapped to play, pause, volume, and track controls.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Computer Vision'],
      sleepLost: '🌙🌙🌙',
      iceCreamConsumed: '🍦🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/Hand-gesture-project-python'
    },
    {
      id: 'proj-consentguard',
      title: 'ConsentGuard',
      desc: 'Built at Code4Her 2026. A platform for requesting, approving, and recording digital consent — with timestamps and a full history dashboard. Serious problem, real solution.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Hackathon'],
      sleepLost: '🌙🌙',
      iceCreamConsumed: '🍦🍦',
      github: 'https://github.com/shivansh07adi-cloud/ConcernGuard'
    },
    {
      id: 'proj-snaprecipe',
      title: 'SnapRecipe',
      desc: 'Upload a photo of your fridge, get a recipe back. Combines image recognition and AI text generation into something people actually want to use.',
      tags: ['JavaScript', 'Firebase', 'OpenAI API'],
      sleepLost: '🌙🌙',
      iceCreamConsumed: '🍦🍦'
    }
  ]
};

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'ach-ioqm',
    title: 'IOQM National Level Maths Olympiad Qualifier',
    issuer: 'Mathematics Teachers\' Association of India',
    date: 'Oct 2025',
    description: 'Awarded a Certificate of Merit for securing a position in the top 10% nationwide among all participants in IOQM 2024-25.',
    tags: ['Mathematics', 'Olympiad'],
    rank: 'Top 10%'
  },
  {
    id: 'ach-analytics-hackathon',
    title: 'Analytics Hackathon Winner',
    issuer: 'GDI & Harvard India Conference (Hybrid Mode)',
    date: 'Jul 2025',
    description: 'Won the Analytics Track First Prize (Hybrid Mode) and was a Policy Hackathon Finalist at the 22nd edition of the India Conference at Harvard, applying advanced analytics to real-world policy challenges.',
    tags: ['Analytics', 'Policy', 'Harvard'],
    rank: '1st Prize'
  },
  {
    id: 'ach-astronomy-olympiad',
    title: 'Indian National Astronomy Olympiad',
    issuer: 'Homi Bhabha Centre for Science Education, TIFR, Mumbai',
    date: '2022',
    description: 'Received a Certificate of Merit after securing a spot in the top 44 nationally in the Indian Olympiad Qualifier (Part II), earning eligibility to represent India at the International Olympiad on Astronomy and Astrophysics 2023.',
    tags: ['Astronomy', 'Astrophysics', 'Olympiad'],
    rank: 'Top 44 Nationally'
  },
  {
    id: 'ach-bigcode',
    title: 'Top 50 in "The Big Code" 2026',
    issuer: 'Google',
    date: '2026',
    description: 'Secured a position in the Top 50 of The Big Code 2026, demonstrating strong problem-solving abilities and consistent performance in a highly competitive coding environment.',
    tags: ['Competitive Programming'],
    rank: 'Top 50'
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  { id: 'cert-swtest', title: 'Certified in Software Testing', issuer: 'University of Minnesota', date: 'Aug 2026', skills: ['QA Automation', 'Testing'], accent: '#7A0019' },
  { id: 'cert-git', title: 'Version Control with Git', issuer: 'Atlassian', date: 'Aug 2026', skills: ['GitHub', 'Git'], accent: '#0052CC' },
  { id: 'cert-linalg', title: 'Linear Algebra for Machine Learning and Data Science', issuer: 'DeepLearning.AI', date: 'Aug 2026', skills: ['Mathematics', 'NumPy'], accent: '#E4405F' },
  { id: 'cert-gpm', title: 'Google Certified – Project Management Foundations', issuer: 'Google', date: 'Aug 2026', skills: ['Project Management', 'Project Planning'], accent: '#4285F4' },
  { id: 'cert-oracle-ai', title: 'Oracle Certified Foundations Associate – Agentic AI', issuer: 'Oracle', date: 'Aug 2026', skills: ['Oracle Database', 'Artificial Intelligence (AI)'], accent: '#C74634' },
  { id: 'cert-mckinsey', title: 'Forward', issuer: 'McKinsey & Company', date: 'Jun 2026', skills: ['Project Management'], accent: '#051C2C' },
  { id: 'cert-ea-sim', title: 'Software Development Job Simulation', issuer: 'Electronic Arts (EA) via Forage', date: 'Jan 2026', skills: ['Software Development'], accent: '#FF4C00' },
  { id: 'cert-infosys-frontend', title: 'Full Front-End Development Certification', issuer: 'Infosys Springboard', date: 'Jan 2026', skills: ['HTML5', 'CSS3'], accent: '#007CC3' },
  { id: 'cert-infosys-net', title: 'Networking and Web Technology Certification', issuer: 'Infosys', date: 'Jan 2026', skills: ['Networking', 'Web Technology'], accent: '#007CC3' },
  { id: 'cert-ms-foundry', title: 'Develop an AI App with the Microsoft Foundry SDK', issuer: 'Microsoft', date: 'Jan 2026', skills: ['AI Application Development', 'Python (Programming Language)'], accent: '#00A4EF' },
  { id: 'cert-aws-essentials', title: 'AWS Certified - Cloud Technical Essentials', issuer: 'Amazon Web Services (AWS)', date: 'Jan 2026', skills: ['Amazon Web Services (AWS)'], accent: '#FF9900' },
  { id: 'cert-ibm-cloud', title: 'Cloud Computing Fundamentals', issuer: 'IBM', date: 'Jan 2026', skills: ['Cloud Computing'], accent: '#0F62FE' },
  { id: 'cert-nasa', title: 'Developing Sustainable Earth Science Applications - Module 1', issuer: 'NASA', date: 'Feb 2026', skills: ['Earth Science', 'Applications'], accent: '#0B3D91' },
  { id: 'cert-sql-crud', title: 'SQL CRUD', issuer: 'HackerRank', date: 'Dec 2025', skills: ['SQL', 'Relational Databases'], accent: '#2EC866' },
  { id: 'cert-nxtwave', title: 'Front End Developing', issuer: 'NxtWave', date: 'Nov 2025', skills: ['Front-End Development'], accent: '#6C3EF0' },
  { id: 'cert-css-basic', title: 'CSS (Basic)', issuer: 'HackerRank', date: 'Dec 2025', skills: ['Front-End Development'], accent: '#2EC866' }
];

export const LANGUAGES_LIST: LanguageItem[] = [
  { name: 'English', proficiency: 'Professional working proficiency', level: 3 },
  { name: 'Hindi', proficiency: 'Full professional proficiency', level: 4 },
  { name: 'Marathi', proficiency: 'Elementary proficiency', level: 1 },
  { name: 'Punjabi', proficiency: 'Elementary proficiency', level: 1 }
];

export const ROADMAP_DATA = {
  section_num: '11',
  section_title: 'THE ROADMAP',
  title: 'Where I\'m headed.',
  subtitle: 'I don\'t have 5 years of experience. I have 5 years of runway — and a very specific plan for it.',
  blocks: [
    {
      id: 'roadmap-currently-learning',
      title: 'Currently Learning',
      text: 'Data structures are done — now deep in algorithms daily. Strengthening JavaScript through consistent HackerRank practice, and carving out an hour every day for OOP in C++. Also exploring Java and going deeper into backend development concepts. Slow is smooth. Smooth is fast.'
    },
    {
      id: 'roadmap-next-6-months',
      title: 'Next 6 Months',
      text: 'Getting genuinely strong in DSA and OOP as the foundation. Before switching lanes, building real depth in system design, data modelling & architecture, backend development, and DBMS. Once that base is solid, pivoting my career track toward data governance.'
    },
    {
      id: 'roadmap-bigger-picture',
      title: 'The Bigger Picture',
      text: 'Still being written. But the draft looks ambitious — and slightly unreasonable. Just how I like it.'
    }
  ]
};
