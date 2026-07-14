import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, BookOpen, User } from 'lucide-react';
import Hero from '../components/Hero';
import PromoBand from '../components/PromoBand';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBand />
      
      {/* Quick Insights / Navigation Section */}
      <section className="py-12 md:py-24 bg-white border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-brown tracking-tight">
              Explore Sowaka
            </h2>
            <p className="text-brand-brown/70 max-w-2xl mx-auto">
              Dive deeper into our handcrafted offerings, the story behind our beans, and the vibrant life of our café.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Insight */}
            <Link to="/menu" className="group block bg-[#F5F2EB] p-10 rounded-3xl border border-brand-sand hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-yellow text-brand-brown rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                Our Menu
              </h3>
              <p className="text-brand-brown/70 text-sm leading-relaxed mb-6">
                Discover our signature hot chocolates, perfectly pulled espresso, and seasonal cold brews.
              </p>
              <span className="text-brand-brown font-bold text-sm uppercase tracking-widest group-hover:underline">
                View Menu &rarr;
              </span>
            </Link>

            {/* Story Insight */}
            <Link to="/story" className="group block bg-[#F5F2EB] p-10 rounded-3xl border border-brand-sand hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-yellow text-brand-brown rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <User className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                Rohan's Story
              </h3>
              <p className="text-brand-brown/70 text-sm leading-relaxed mb-6">
                Learn about the vision that started it all and why every cup is made from the heart.
              </p>
              <span className="text-brand-brown font-bold text-sm uppercase tracking-widest group-hover:underline">
                Read Story &rarr;
              </span>
            </Link>

            {/* Blog Insight */}
            <Link to="/blog" className="group block bg-[#F5F2EB] p-10 rounded-3xl border border-brand-sand hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-yellow text-brand-brown rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3 group-hover:text-brand-yellow transition-colors duration-200">
                Café Journal
              </h3>
              <p className="text-brand-brown/70 text-sm leading-relaxed mb-6">
                Read our latest thoughts, brewing tips, and behind-the-scenes stories from the roastery.
              </p>
              <span className="text-brand-brown font-bold text-sm uppercase tracking-widest group-hover:underline">
                Read Blog &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
