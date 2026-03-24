import React from 'react';
import { Shield, Globe, Zap, Users, Target, Award, PlayCircle, Radio, Newspaper } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[var(--color-ink)] py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://picsum.photos/seed/newsroom/1920/1080" 
              alt="Newsroom background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)] to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-1 bg-[var(--color-gold)]"></span>
                <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm">About Us</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight">
                The Way Out <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-yellow-200">
                  Media Network
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We are a next-generation global news organization dedicated to uncovering the truth, telling compelling stories, and delivering comprehensive coverage across articles, live broadcasts, and interactive multimedia.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                  Redefining Modern Journalism
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded on the principle that information should be accessible, accurate, and engaging, <strong>twomn</strong> bridges the gap between traditional reporting and digital innovation. 
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you are reading our deep-dive analysis, tuning into our 24/7 live TV and radio streams, or exploring our interactive data documentaries, our mission remains the same: to provide clarity in a complex world.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-[var(--color-royal-blue)] pl-4">
                    <div className="text-3xl font-black text-gray-900 mb-1">50M+</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Monthly Readers</div>
                  </div>
                  <div className="border-l-4 border-[var(--color-gold)] pl-4">
                    <div className="text-3xl font-black text-gray-900 mb-1">120+</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Countries Reached</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-[var(--color-gold)] rounded-2xl transform rotate-3 opacity-20"></div>
                <img 
                  src="https://picsum.photos/seed/journalism/800/1000" 
                  alt="Journalist in the field" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <Award className="text-[var(--color-gold)]" size={32} />
                    <h4 className="font-bold text-gray-900">Award Winning</h4>
                  </div>
                  <p className="text-sm text-gray-600">Recognized globally for excellence in investigative journalism and digital media.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Platforms */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">A Multi-Platform Experience</h2>
              <p className="text-lg text-gray-600">We meet our audience wherever they are, delivering world-class content across every medium.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 text-[var(--color-royal-blue)] rounded-xl flex items-center justify-center mb-6">
                  <Newspaper size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">In-Depth Articles</h3>
                <p className="text-gray-600 leading-relaxed">
                  From breaking news to long-form investigative pieces, our written content provides the context and analysis you need to understand global events.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 text-[var(--color-royal-blue)] rounded-xl flex items-center justify-center mb-6">
                  <PlayCircle size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rich Multimedia</h3>
                <p className="text-gray-600 leading-relaxed">
                  Immerse yourself in our high-production video blogs, award-winning documentaries, and interactive data visualizations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 text-[var(--color-royal-blue)] rounded-xl flex items-center justify-center mb-6">
                  <Radio size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Broadcasting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay connected in real-time with our 24/7 Live TV network and twomn Radio, featuring live discussions, event coverage, and breaking updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-[var(--color-royal-blue)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">The principles that guide our reporting and shape our culture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-gold)]">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Uncompromising commitment to truth, accuracy, and ethical journalism in every story we publish.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-gold)]">
                  <Globe size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Looking beyond borders to understand how local events shape the international landscape.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-gold)]">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Pioneering new ways to tell stories through technology, data, and interactive media.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-[var(--color-gold)]">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Fostering meaningful dialogue and giving a voice to underrepresented communities worldwide.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
