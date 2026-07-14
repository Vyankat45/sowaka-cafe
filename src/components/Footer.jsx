import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-brand-soft-white border-t border-brand-brown-light">
      {/* Upper Footer: Logo, Links, Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Tagline (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-yellow">
                <img 
                  src={logoImg} 
                  alt="Sowaka Cafe Logo Sticker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-script text-3xl font-bold text-brand-yellow pt-1">
                Sowaka
              </span>
            </div>
            <p className="text-sm text-brand-soft-white/70 max-w-xs leading-relaxed">
              Every cup of coffee carries Rohan's signature and a promise of handcrafted perfection. Join us at our cozy downtown space.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://instagram.com/sowakacafe" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Link"
                className="p-2.5 bg-brand-yellow text-brand-brown rounded-full hover:bg-white hover:text-brand-brown transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-brand-soft-white/80">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors duration-150">Home</a></li>
              <li><a href="#menu" className="hover:text-brand-yellow transition-colors duration-150">Menu & Drinks</a></li>
              <li><a href="#story" className="hover:text-brand-yellow transition-colors duration-150">Rohan's Story</a></li>
              <li><a href="#reels" className="hover:text-brand-yellow transition-colors duration-150">Cafe Reels</a></li>
              <li><a href="#contact" className="hover:text-brand-yellow transition-colors duration-150">Contact & Hours</a></li>
            </ul>
          </div>

          {/* Contact Details (2 cols) */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">Visit Us</h4>
            <div className="space-y-3 text-xs text-brand-soft-white/80">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>WING-A, PRIME SERVICED ASHAPURA CHS, B, Maa Ashapura Cooperative Housing Society, Kala Nagar, Bandra East, Mumbai, Maharashtra 400051</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href="tel:+918369643876" className="hover:underline">+91 83696 43876</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href="mailto:rohan@sowakacafe.com" className="hover:underline">rohan@sowakacafe</a>
              </div>
            </div>
          </div>

          {/* Newsletter Form (3 cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-yellow">Newsletter</h4>
            <p className="text-xs text-brand-soft-white/70">
              Get notified of seasonal drinks, secret recipes, and special events.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-brand-brown-light border border-brand-brown-light rounded-full pl-4 pr-10 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow placeholder-brand-soft-white/45 transition-colors duration-200"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 p-1.5 bg-brand-yellow text-brand-brown rounded-full hover:bg-white transition-colors duration-150"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-brand-yellow font-bold animate-pulse">
                  Subscribed successfully! Thank you.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright & Map GEO details */}
      <div className="border-t border-brand-brown-light py-6 text-center text-xs text-brand-soft-white/50 bg-brand-brown-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p>© {currentYear} Sowaka Café. All rights reserved. Handcrafted by Rohan.</p>
          <p className="text-[10px]">
            Bandra East Coffee Shops | Coordinates: 19.0596° N, 72.8485° E | Local Coffee Mumbai Near Me
          </p>
        </div>
      </div>
    </footer>
  );
}
