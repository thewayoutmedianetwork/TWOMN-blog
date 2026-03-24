import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white pt-20 pb-10 border-t-4 border-[var(--color-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="font-serif text-4xl font-black tracking-tighter text-white mb-6 block">
              twomn<span className="text-[var(--color-gold)]">.</span>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              The premier destination for global news, in-depth magazine features, expert opinions, and live multimedia broadcasting. Stay informed, stay ahead.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-[var(--color-gold)]">Sections</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/news" className="hover:text-white transition-colors">World News</a></li>
              <li><a href="/tech" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="/business" className="hover:text-white transition-colors">Business</a></li>
              <li><a href="/video" className="hover:text-white transition-colors">Video Blog</a></li>
              <li><a href="/audio" className="hover:text-white transition-colors">Audio Blog & Podcasts</a></li>
              <li><a href="/live" className="hover:text-white transition-colors">Live Radio & TV</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-[var(--color-gold)]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-gold)] shrink-0 mt-0.5" />
                <span>120 Media Avenue, Suite 400<br />London, UK W1A 1AA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-gold)] shrink-0" />
                <span>+44 (0) 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-gold)] shrink-0" />
                <span>contact@twomn.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-[var(--color-gold)]">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our daily briefing and never miss a headline.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-gold)] text-white"
                required
              />
              <button 
                type="submit" 
                className="bg-[var(--color-gold)] text-[var(--color-ink)] font-bold py-2.5 rounded hover:bg-[var(--color-gold-light)] transition-colors text-sm uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} twomn Media Network. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
