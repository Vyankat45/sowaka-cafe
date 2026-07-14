import React from 'react';
import coffeeBrandedImg from '../assets/coffee_branded_1.jpg';
import logoImg from '../assets/logo.jpg';
import { Tag, Sparkles, ArrowRight } from 'lucide-react';

export default function PromoBand() {
  const handlePromoInquiry = () => {
    const contactForm = document.getElementById('contact-form-message');
    if (contactForm) {
      contactForm.value = `Hi Rohan, I saw your seasonal promo for the Salted Caramel Iced Coffee (₹260 promo). Is this available for pick up today?`;
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-brown text-brand-soft-white py-20 overflow-hidden border-b border-brand-sand">
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Promo Details (Left) */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-yellow/10 border border-brand-yellow/30 px-4 py-2 rounded-full">
              <Tag className="w-4 h-4 text-brand-yellow" />
              <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest pt-0.5">Seasonal Feature</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
                NEW <span className="text-brand-yellow font-script font-normal normal-case text-5xl md:text-7xl block md:inline ml-1">affection</span>
                <span className="block text-brand-yellow">DRINK</span>
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">Salted Caramel Iced Coffee</h3>
              <p className="text-brand-soft-white/80 max-w-lg">
                A rich espresso pour layered over cold milk and fresh ice, sweetened with artisanal salted caramel syrup, and topped with our signature velvety cold foam. It's the perfect sweet and salty pick-me-up!
              </p>
            </div>

            {/* Pricing details and discount badge */}
            <div className="flex items-center space-x-6 py-2">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-brand-yellow">₹260</span>
                <span className="text-sm line-through text-brand-soft-white/40">₹300</span>
              </div>
              <div className="bg-brand-yellow text-brand-brown font-black px-4 py-2 rounded-2xl text-sm uppercase tracking-wider shadow-md transform -rotate-2">
                15% OFF
              </div>
            </div>

            {/* Features check */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-soft-white/10 text-xs text-brand-soft-white/70">
              <div>
                <p className="font-bold text-brand-yellow">3 Syrups</p>
                <p>Vanilla, caramel, and fudge</p>
              </div>
              <div>
                <p className="font-bold text-brand-yellow">With</p>
                <p>Espresso + cold foam + ice</p>
              </div>
              <div>
                <p className="font-bold text-brand-yellow">100%</p>
                <p>Organic Arabica beans</p>
              </div>
            </div>

            <button
              onClick={handlePromoInquiry}
              className="mt-6 inline-flex items-center space-x-2 bg-brand-yellow text-brand-brown px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-brown transition-all duration-300 shadow-lg"
            >
              <span>Ask Rohan For A Cup</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Promo Image (Right) */}
          <div className="flex items-center justify-center relative">
            
            {/* Visual background circle */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-yellow/20 -z-10 animate-pulse"></div>
            
            {/* Composited Product Photo Card */}
            <div className="relative w-72 h-[340px] md:w-80 md:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 group animate-float">
              
              {/* Product Photo */}
              <img 
                src={coffeeBrandedImg} 
                alt="Salted Caramel Iced Coffee Cup" 
                className="w-full h-full object-cover"
              />
              
              {/* Watermark Sticker */}
              <div className="absolute top-4 right-4 w-14 h-14 rounded-full overflow-hidden border-2 border-brand-yellow shadow-lg transform -rotate-12 bg-white">
                <img 
                  src={logoImg} 
                  alt="Sowarka logo badge" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tagline sticker overlay on image */}
              <div className="absolute bottom-4 left-4 bg-brand-brown/90 backdrop-blur-sm px-4 py-2 rounded-xl text-left border border-brand-yellow/20">
                <p className="font-script text-xl text-brand-yellow leading-none">Made with love</p>
                <p className="text-[10px] text-white/70 uppercase tracking-widest font-semibold mt-0.5">by Owner Rohan</p>
              </div>
            </div>

            {/* Sparkle indicators */}
            <div className="absolute top-4 left-8 text-brand-yellow animate-bounce">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
