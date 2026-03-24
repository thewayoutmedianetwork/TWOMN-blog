import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Search, Menu, User, Radio, Video, CloudSun, ChevronDown,
  Newspaper, Cpu, Briefcase, Palette, Trophy, LineChart,
  Film, Headphones, MonitorPlay, BarChart3,
  Tv, Mic, CalendarDays, X
} from 'lucide-react';

const navigation = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Articles',
    featured: {
      title: "The Silent Rise of Quantum Computing in Finance",
      image: "https://picsum.photos/seed/tech2/600/400",
      link: "/article/1",
      category: "Technology"
    },
    items: [
      { name: 'Latest News', href: '/news', icon: Newspaper, desc: 'Breaking global stories' },
      { name: 'Technology', href: '/tech', icon: Cpu, desc: 'Future of innovation' },
      { name: 'Business', href: '/business', icon: Briefcase, desc: 'Markets & economy' },
      { name: 'Culture', href: '/culture', icon: Palette, desc: 'Art & lifestyle' },
      { name: 'Sports', href: '/sports', icon: Trophy, desc: 'Scores & highlights' },
      { name: 'Analysis', href: '/analysis', icon: LineChart, desc: 'In-depth perspectives' },
    ]
  },
  {
    name: 'Multimedia',
    featured: {
      title: "Inside the Mind of a Grandmaster",
      image: "https://picsum.photos/seed/chess/600/400",
      link: "/video/1",
      category: "Video Blog"
    },
    items: [
      { name: 'Video Blog', href: '/video', icon: Film, desc: 'Watch our latest stories' },
      { name: 'Audio & Podcasts', href: '/audio', icon: Headphones, desc: 'Listen on the go' },
      { name: 'Documentaries', href: '/documentaries', icon: MonitorPlay, desc: 'Deep dive features' },
      { name: 'Interactive Data', href: '/interactive', icon: BarChart3, desc: 'Visualized insights' },
    ]
  },
  {
    name: 'Live',
    featured: {
      title: "Global Economic Summit 2026",
      image: "https://picsum.photos/seed/summit/600/400",
      link: "/live-events/1",
      category: "Live Event"
    },
    items: [
      { name: 'Live TV', href: '/live-tv', icon: Tv, desc: '24/7 News broadcast' },
      { name: 'twomn Radio', href: '/radio', icon: Mic, desc: 'Live discussions & music' },
      { name: 'Live Events', href: '/events', icon: CalendarDays, desc: 'Upcoming coverage' },
    ]
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[var(--color-royal-blue)] text-white py-1 px-4 text-xs flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-medium tracking-wider uppercase">Tuesday, March 24, 2026</span>
          <div className="hidden md:flex items-center gap-2 text-[var(--color-gold)]">
            <CloudSun size={14} />
            <span>London 15°C</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/live-radio" className="flex items-center gap-1 hover:text-[var(--color-gold)] transition-colors">
            <Radio size={14} className="animate-pulse text-red-500" />
            <span>Live Radio</span>
          </Link>
          <Link to="/live-stream" className="flex items-center gap-1 hover:text-[var(--color-gold)] transition-colors">
            <Video size={14} className="animate-pulse text-red-500" />
            <span>Live TV</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button className="text-gray-700 hover:text-[var(--color-royal-blue)]">
              <Menu size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link to="/" className="font-serif text-4xl font-black tracking-tighter text-[var(--color-royal-blue)]">
              twomn<span className="text-[var(--color-gold)]">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 h-full">
            {navigation.map((category) => (
              <div key={category.name} className="group flex items-center h-full">
                {category.items ? (
                  <button className="flex items-center gap-1 text-gray-800 group-hover:text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider transition-colors h-full">
                    {category.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    to={category.href}
                    className="flex items-center text-gray-800 hover:text-[var(--color-gold)] font-semibold text-sm uppercase tracking-wider transition-colors h-full"
                  >
                    {category.name}
                  </Link>
                )}
                
                {/* Mega Menu Dropdown */}
                {category.items && (
                  <div className="absolute top-full left-4 right-4 lg:left-8 lg:right-8 bg-white shadow-2xl rounded-b-2xl border-t-4 border-[var(--color-gold)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform origin-top -translate-y-4 group-hover:translate-y-0 overflow-hidden z-50">
                    <div className="flex flex-col lg:flex-row">
                      {/* Links Section */}
                      <div className="lg:w-2/3 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                        {category.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="group/item flex items-start gap-4"
                            >
                              <div className="p-2.5 rounded-xl bg-gray-50 text-[var(--color-royal-blue)] group-hover/item:bg-[var(--color-royal-blue)] group-hover/item:text-white transition-all duration-300 shadow-sm">
                                <Icon size={22} strokeWidth={1.5} />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 group-hover/item:text-[var(--color-royal-blue)] transition-colors text-sm mb-1">
                                  {item.name}
                                </div>
                                <div className="text-xs text-gray-500 leading-relaxed">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      
                      {/* Featured Section */}
                      {category.featured && (
                        <div className="lg:w-1/3 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                          <div className="flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>
                            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                              Featured Story
                            </span>
                          </div>
                          <Link to={category.featured.link} className="block group/feature">
                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 shadow-md">
                              <img 
                                src={category.featured.image} 
                                alt={category.featured.title}
                                className="w-full h-full object-cover group-hover/feature:scale-105 transition-transform duration-700 ease-out"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-3 left-3 bg-[var(--color-royal-blue)] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                                {category.featured.category}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/feature:opacity-40 transition-opacity"></div>
                            </div>
                            <h4 className="font-serif font-bold text-xl leading-snug text-gray-900 group-hover/feature:text-[var(--color-royal-blue)] transition-colors">
                              {category.featured.title}
                            </h4>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-[var(--color-royal-blue)] transition-colors"
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-white bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue-light)] px-4 py-2 rounded-full transition-colors">
              <User size={16} />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md transition-all duration-300 overflow-hidden ${isSearchOpen ? 'max-h-24 py-4' : 'max-h-0 py-0 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="relative flex items-center" onSubmit={(e) => { e.preventDefault(); setIsSearchOpen(false); }}>
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search articles, videos, podcasts, and more..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-royal-blue)] focus:border-transparent transition-all"
            />
            <button type="submit" className="absolute right-2 bg-[var(--color-royal-blue)] text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[var(--color-royal-blue-light)] transition-colors">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
