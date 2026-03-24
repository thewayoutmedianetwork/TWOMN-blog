import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Healthcare",
    category: "Technology",
    image: "https://picsum.photos/seed/tech1/1920/1080?blur=2",
    author: "Dr. Sarah Chen",
    date: "Mar 24, 2026"
  },
  {
    id: 2,
    title: "Global Economic Summit Reaches Historic Agreement",
    category: "World News",
    image: "https://picsum.photos/seed/world1/1920/1080?blur=2",
    author: "James Wilson",
    date: "Mar 23, 2026"
  },
  {
    id: 3,
    title: "Sustainable Architecture: Building Tomorrow's Cities",
    category: "Innovation",
    image: "https://picsum.photos/seed/arch1/1920/1080?blur=2",
    author: "Elena Rodriguez",
    date: "Mar 22, 2026"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-[var(--color-gold)] text-[var(--color-ink)] text-xs font-bold uppercase tracking-wider mb-4">
                {slides[current].category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4 max-w-4xl">
                {slides[current].title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300 text-sm font-medium">
                <span>By {slides[current].author}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]"></span>
                <span>{slides[current].date}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[var(--color-royal-blue)] hover:border-transparent transition-all pointer-events-auto"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[var(--color-royal-blue)] hover:border-transparent transition-all pointer-events-auto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-[var(--color-gold)]' : 'w-4 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
