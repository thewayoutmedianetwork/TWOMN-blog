import { PlayCircle, Headphones } from 'lucide-react';

const mediaItems = [
  {
    id: 1,
    title: "Inside the Mind of a Grandmaster",
    type: "video",
    duration: "14:20",
    image: "https://picsum.photos/seed/chess/600/400"
  },
  {
    id: 2,
    title: "The Economics of Space Tourism",
    type: "audio",
    duration: "45:00",
    image: "https://picsum.photos/seed/space/600/400"
  },
  {
    id: 3,
    title: "Culinary Secrets from Tokyo's Best Chefs",
    type: "video",
    duration: "22:15",
    image: "https://picsum.photos/seed/food/600/400"
  },
  {
    id: 4,
    title: "Understanding the New Tax Laws",
    type: "audio",
    duration: "30:45",
    image: "https://picsum.photos/seed/money/600/400"
  }
];

export default function MultimediaSection() {
  return (
    <section className="py-16 bg-[var(--color-paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 border-b-2 border-gray-200 pb-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[var(--color-royal-blue)]">Multimedia</h2>
            <div className="w-16 h-1 bg-[var(--color-gold)] mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-black">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <PlayCircle size={48} className="text-white opacity-80 group-hover:scale-110 group-hover:text-[var(--color-gold)] transition-all" />
                  ) : (
                    <Headphones size={48} className="text-white opacity-80 group-hover:scale-110 group-hover:text-[var(--color-gold)] transition-all" />
                  )}
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-mono px-2 py-1 rounded">
                  {item.duration}
                </div>
              </div>
              <h3 className="font-bold text-lg leading-tight group-hover:text-[var(--color-royal-blue)] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                {item.type === 'video' ? 'Video Blog' : 'Audio Podcast'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
