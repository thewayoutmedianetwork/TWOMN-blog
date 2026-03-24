import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[var(--color-royal-blue)] py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 tracking-tight">
              Let's Start a <span className="text-[var(--color-gold)]">Conversation</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Have a story tip, a question about our coverage, or want to partner with us? We're always listening. Reach out and our team will get back to you.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Contact Form */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500">Fill out the form below and we'll be in touch shortly.</p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center justify-center h-64 animate-in fade-in duration-500">
                  <CheckCircle2 size={48} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We've received your message and will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-royal-blue)] focus:border-transparent transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-royal-blue)] focus:border-transparent transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-royal-blue)] focus:border-transparent transition-all outline-none bg-white"
                    >
                      <option>General Inquiry</option>
                      <option>News Tip / Story Idea</option>
                      <option>Advertising & Partnerships</option>
                      <option>Technical Support</option>
                      <option>Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-royal-blue)] focus:border-transparent transition-all outline-none resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue-light)] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:w-2/5 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-royal-blue)] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[var(--color-gold)] group-hover:text-gray-900 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email Us</h4>
                      <a href="mailto:hello@twomn.com" className="text-lg font-medium hover:text-[var(--color-gold)] transition-colors">hello@twomn.com</a>
                      <p className="text-sm text-gray-500 mt-1">For general inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[var(--color-gold)] group-hover:text-gray-900 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Call Us</h4>
                      <a href="tel:+15551234567" className="text-lg font-medium hover:text-[var(--color-gold)] transition-colors">+1 (555) 123-4567</a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-[var(--color-gold)] group-hover:text-gray-900 transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Visit Us</h4>
                      <p className="text-lg font-medium">120 Media Avenue<br/>New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-gray-900 transition-all duration-300">
                      <Globe size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Reach Out?</h2>
              <p className="text-gray-500 mt-2">We value our community and are always looking to connect.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-[var(--color-royal-blue)] rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Submit a News Tip</h3>
                <p className="text-gray-600 mb-4">Have an inside scoop or a story that needs to be told? Our investigative team guarantees confidentiality.</p>
                <a href="#" className="text-[var(--color-royal-blue)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-[var(--color-royal-blue)] rounded-lg flex items-center justify-center mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advertise With Us</h3>
                <p className="text-gray-600 mb-4">Reach millions of engaged readers and viewers across our digital, audio, and video platforms.</p>
                <a href="#" className="text-[var(--color-royal-blue)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  View Media Kit <ArrowRight size={16} />
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-[var(--color-royal-blue)] rounded-lg flex items-center justify-center mb-4">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Join the Team</h3>
                <p className="text-gray-600 mb-4">We are always looking for talented journalists, producers, and engineers to join our growing newsroom.</p>
                <a href="#" className="text-[var(--color-royal-blue)] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  See Open Roles <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
