import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export const toTitle = (s: string) =>
  s.toLowerCase().replace(/(^|[\s'’-])([a-z])/g, (_, p, c) => p + c.toUpperCase());

// Small orange label + big centred Jost title + gray subtitle (section header from the reference)
export default function SectionHeading({
  label,
  title,
  subtitle,
  className = 'mb-14 md:mb-16'
}: {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`text-center ${className}`}
    >
      <p className="font-jost text-brand text-xl md:text-[22px] font-medium mb-2">{label}</p>
      <h2 className="font-jost text-black font-medium text-[34px] md:text-[46px] leading-[1.15] mb-5">{title}</h2>
      {subtitle && (
        <p className="font-body text-brand-gray max-w-2xl mx-auto text-base md:text-[17px] leading-[1.8]">{subtitle}</p>
      )}
    </motion.div>
  );
}
