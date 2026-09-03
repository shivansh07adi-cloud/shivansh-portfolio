/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MediaItem {
  name: string;
  url?: string;
  fileType?: 'image' | 'pdf' | 'link' | 'badge';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logoColor?: string; // Hex color or Tailwind class for a stylized placeholder icon
  period: string;
  duration: string;
  type?: string; // "Internship" | "Part-time" | "Freelance" | "Remote" | etc.
  location?: string;
  description: string | string[];
  media?: MediaItem[];
  skills: string[];
  projectLink?: string;
}

export interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  cause: string;
  description: string;
  icon: 'users' | 'trophy' | 'flask' | 'laptop';
  colorFrom: string;
  colorTo: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  accent: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  level: number; // 1-4, used for the proficiency dots
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  rank?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
