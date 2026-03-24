import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "The Silent Rise of Quantum Computing in Finance",
    category: "Technology",
    image: "https://picsum.photos/seed/tech2/800/600",
    excerpt: "How major banks are quietly integrating quantum algorithms to optimize portfolios and detect fraud in real-time.",
    author: "David Chen",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "Modern Art's New Frontier: The Digital Canvas",
    category: "Culture",
    image: "https://picsum.photos/seed/art1/800/600",
    excerpt: "Exploring how traditional artists are adopting digital tools to create immersive, interactive exhibitions.",
    author: "Sophia Martinez",
    time: "4 hours ago"
  },
  {
    id: 3,
    title: "Global Supply Chains Adapt to New Climate Realities",
    category: "Business",
    image: "https://picsum.photos/seed/biz1/800/600",
    excerpt: "Companies are rethinking logistics as extreme weather events become more frequent and unpredictable.",
    author: "Marcus Johnson",
    time: "6 hours ago"
  },
  {
    id: 4,
    title: "The Psychology of Deep Work in a Distracted World",
    category: "Analysis",
    image: "https://picsum.photos/seed/mind1/800/600",
    excerpt: "Why the ability to focus without distraction is becoming the most valuable skill in the 21st century economy.",
    author: "Dr. Elena Rostova",
    time: "8 hours ago"
  }
];

export default function ArticleGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 border-b-2 border-gray-100 pb-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[var(--color-royal-blue)]">Latest Stories</h2>
            <div className="w-16 h-1 bg-[var(--color-gold)] mt-2"></div>
          </div>
          <a href="/news" className="text-sm font-semibold text-gray-500 hover:text-[var(--color-royal-blue)] flex items-center gap-1 transition-colors">
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[var(--color-royal-blue)] text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-bold leading-tight mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                  <a href={`/article/${article.id}`}>{article.title}</a>
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium pt-4 border-t border-gray-100">
                  <span>{article.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.time}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
