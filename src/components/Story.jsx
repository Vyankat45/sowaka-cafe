import React from 'react';
import rohanImg from '../assets/rohan.jpg';
import { Heart, Sparkles, Quote } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-12 md:py-24 bg-brand-cream border-b border-brand-sand scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Owner Photo (Rohan) Column - Takes 5 cols on desktop */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute top-0 left-0 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl -translate-x-6 -translate-y-6"></div>
            
            <div className="relative w-full max-w-sm">
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                <img 
                  src={rohanImg} 
                  alt="Rohan, Founder of Sowaka Café" 
                  className="w-full aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <p className="text-white font-extrabold text-lg leading-none">Rohan</p>
                  <p className="text-brand-yellow text-xs uppercase tracking-widest font-bold mt-1">Founder & Head Barista</p>
                </div>
              </div>

              {/* Heart Badge Sticker */}
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-brown p-4 rounded-full shadow-2xl border-4 border-white transform rotate-12 animate-float">
                <Heart className="w-8 h-8 fill-brand-brown" />
              </div>
            </div>
          </div>

          {/* Backstory Column - Takes 7 cols on desktop */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white border border-brand-sand px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span className="font-script text-2xl text-brand-brown font-semibold leading-none pt-1">Our Heart & Soul</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-brown tracking-tight">
              Meet Rohan & The Story Behind Sowaka Café
            </h2>

            <div className="space-y-4 text-brand-brown/80 leading-relaxed text-base">
              <p>
                Founded by **Rohan**, Sowaka Café was born out of a simple, beautiful vision: to create a cozy, neighborhood haven where every cup of coffee feels like a handcrafted gift. The name "Sowaka" and our signature logo—a cursive script paired with a fingerprint heart—represent this core philosophy: <strong>your coffee is personal, handcrafted, and made from the heart.</strong>
              </p>
              
              <p>
                Rohan spent years studying coffee beans, experimenting with flavor balances, and roasting profiles. For him, a café is more than a place to buy a drink—it's a sanctuary. That is why our whipped creams are made fresh in-house, our salted caramel is slow-cooked, and our watermarks are stamped by hand as a promise of quality.
              </p>

              <p>
                When you visit Sowaka Café, you are stepping into Rohan's second home. Whether you sit at the counter to talk roast profiles or curl up in a corner with an Artisan Hot Chocolate, you are part of the Sowaka family.
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white/80 border-l-4 border-brand-yellow p-6 rounded-r-3xl shadow-sm space-y-2 relative">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-sand/50 pointer-events-none" />
              <p className="italic text-brand-brown font-medium">
                "We don't believe in mass production. We believe in the fingerprint of the maker. Every cup of coffee that leaves our counter carries our signature passion and dedication."
              </p>
              <p className="text-xs uppercase tracking-widest font-bold text-brand-brown-light">
                — Rohan, Founder
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
