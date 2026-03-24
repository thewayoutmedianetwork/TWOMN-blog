import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

const headlines = [
  "Global Markets Rally Amid Tech Sector Surge",
  "New Breakthrough in Renewable Energy Storage Announced",
  "Exclusive: Inside the World's Most Expensive Mega-Yacht",
  "Tech Giants Face New Regulatory Scrutiny in EU",
  "Championship Finals Set to Break Viewership Records"
];

export default function BreakingNews() {
  return (
    <div className="bg-[var(--color-ink)] text-white flex items-center h-10 overflow-hidden relative">
      <div className="bg-[var(--color-gold)] text-[var(--color-ink)] font-bold px-4 h-full flex items-center gap-2 z-10 uppercase text-xs tracking-wider flex-shrink-0">
        <Zap size={14} className="animate-pulse" />
        Breaking
      </div>
      
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <motion.div
          className="flex whitespace-nowrap gap-12 absolute left-0"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {headlines.map((headline, index) => (
            <span key={index} className="text-sm font-medium flex items-center gap-12">
              {headline}
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] inline-block"></span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
