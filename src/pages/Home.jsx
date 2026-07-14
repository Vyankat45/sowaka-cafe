import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, BookOpen, User, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import PromoBand from '../components/PromoBand';
import Reviews from '../components/Reviews';

// Import images for card backgrounds
import menuBg from '../assets/cold_brew.jpg';
import storyBg from '../assets/rohan.jpg';
import blogBg from '../assets/coffee_branded_1.jpg';

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBand />
      
      {/* Quick Insights / Navigation Section */}
      <section className="py-12 md:py-24 bg-white border-b border-brand-sand relative">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-brand-brown blur-3xl"></div>
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[60%] rounded-full bg-brand-yellow blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-brown tracking-tight">
              Explore Sowaka
            </h2>
            <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
              Dive deeper into our handcrafted offerings, the story behind our beans, and the vibrant life of our café.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Menu Insight */}
            <Link to="/menu" className="group relative block h-[420px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img src={menuBg} alt="Menu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A0D00]/90 via-[#4A0D00]/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
                <div className="w-12 h-12 bg-brand-yellow text-brand-brown rounded-full flex items-center justify-center mb-5 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-md">
                  Our Menu
                </h3>
                <p className="text-brand-cream/90 text-sm leading-relaxed mb-6 max-w-[90%] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Discover our signature hot chocolates, perfectly pulled espresso, and seasonal cold brews.
                </p>
                <div className="flex items-center text-brand-yellow font-bold text-sm uppercase tracking-widest">
                  <span>View Menu</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Story Insight */}
            <Link to="/story" className="group relative block h-[420px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img src={storyBg} alt="Our Story" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A0D00]/90 via-[#4A0D00]/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
                <div className="w-12 h-12 bg-brand-yellow text-brand-brown rounded-full flex items-center justify-center mb-5 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-md">
                  Rohan's Story
                </h3>
                <p className="text-brand-cream/90 text-sm leading-relaxed mb-6 max-w-[90%] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Learn about the vision that started it all and why every cup is made from the heart.
                </p>
                <div className="flex items-center text-brand-yellow font-bold text-sm uppercase tracking-widest">
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Blog Insight */}
            <Link to="/blog" className="group relative block h-[420px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img src={blogBg} alt="Café Journal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A0D00]/90 via-[#4A0D00]/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
                <div className="w-12 h-12 bg-brand-yellow text-brand-brown rounded-full flex items-center justify-center mb-5 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-md">
                  Café Journal
                </h3>
                <p className="text-brand-cream/90 text-sm leading-relaxed mb-6 max-w-[90%] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Read our latest thoughts, brewing tips, and behind-the-scenes stories from the roastery.
                </p>
                <div className="flex items-center text-brand-yellow font-bold text-sm uppercase tracking-widest">
                  <span>Read Blog</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Delivery Partners Section */}
      <section className="py-12 bg-brand-soft-white border-b border-brand-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 p-8 md:p-10 rounded-3xl border border-brand-sand shadow-sm space-y-5 max-w-3xl mx-auto">
            <p className="text-xs md:text-sm uppercase font-extrabold tracking-widest text-brand-brown/60">
              Order Delivery From Our Partners
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noreferrer"
                className="bg-[#E23744] border border-[#E23744] px-10 py-4 rounded-full text-base font-bold text-white hover:bg-[#cb303b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Order on Zomato</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
