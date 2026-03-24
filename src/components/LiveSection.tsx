import { Radio, Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

export default function LiveSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 bg-[var(--color-royal-blue-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <h2 className="text-3xl font-serif font-bold">Live Now</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Video Stream */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-black aspect-video group border border-white/10">
            <img 
              src="https://picsum.photos/seed/live/1280/720" 
              alt="Live Stream" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-[var(--color-gold)]/90 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[var(--color-gold)]/20">
                <Play size={32} className="ml-2" />
              </button>
            </div>
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
              Live TV
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-xl font-bold mb-1">Global News Hour</h3>
              <p className="text-gray-300 text-sm">Live coverage from our London studio</p>
            </div>
          </div>

          {/* Live Radio */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-[var(--color-gold)]">
                <Radio size={24} />
                <span className="font-bold uppercase tracking-wider text-sm">twomn Radio</span>
              </div>
              <span className="text-xs font-medium bg-red-500/20 text-red-400 px-2 py-1 rounded">ON AIR</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-royal-blue)] to-[var(--color-gold)] p-1 mb-6 relative">
                <div className="w-full h-full rounded-full bg-[var(--color-ink)] flex items-center justify-center overflow-hidden">
                   <img src="https://picsum.photos/seed/radio/200/200" alt="Show Cover" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                {isPlaying && (
                  <div className="absolute -inset-2 border-2 border-[var(--color-gold)] rounded-full animate-ping opacity-20" />
                )}
              </div>
              <h4 className="text-xl font-bold text-center mb-1">Morning Briefing</h4>
              <p className="text-gray-400 text-sm text-center mb-8">with Sarah Jenkins</p>

              <div className="flex items-center gap-6 w-full justify-center">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Volume2 size={20} />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-[var(--color-gold)] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
