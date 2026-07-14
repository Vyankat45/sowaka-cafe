import React, { useState, useEffect } from 'react';
import heroColdCappuccino from '../assets/hero_cold_cappuccino.png';
import heroMatchaLatte from '../assets/hero_matcha_latte.png';
import heroCaramelFrappe from '../assets/hero_caramel_frappe.png';
import { ArrowRight, Snowflake } from 'lucide-react';

const CoffeeBean = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 2c-3.2 0-7.8 2.2-8.5 6.4-.6 3.6 1.3 7 4.5 9 3 1.8 7.3 2.8 11.2 1.3 2.7-1 4.5-3.8 4.7-6.7.3-4.5-3.4-9.9-8.4-9.9z" />
    <path d="M10.8 19.3c-2.4-3.5-2.2-7.8.2-11.2" />
  </svg>
);

const CoffeeCup = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "Fresh on the Menu",
      title: "COLD<br/>CAPPUCCINO",
      description: "Experience the perfect blend of bold coffee, creamy milk, and a touch of sweetness. Chilled to perfection for your every mood.",
      image: heroColdCappuccino
    },
    {
      subtitle: "Zen in a Cup",
      title: "MATCHA<br/>LATTE",
      description: "A soothing blend of premium matcha green tea and steamed milk. Earthy, creamy, and perfectly balanced for a calm morning.",
      image: heroMatchaLatte
    },
    {
      subtitle: "Sweet Indulgence",
      title: "CARAMEL<br/>FRAPPE",
      description: "A rich, icy blend of espresso and caramel, topped with whipped cream and a decadent drizzle. The ultimate sweet treat.",
      image: heroCaramelFrappe
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="pt-20 bg-[#F5F2EB] flex flex-col justify-between overflow-hidden min-h-screen">
      
      {/* Top Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          
          {/* Left Text Content */}
          <div className="text-left space-y-6 order-2 md:order-1 relative z-10 pt-10 md:pt-0">
            <h3 className="uppercase tracking-widest text-[13px] font-extrabold text-[#4A0D00] animate-fade-in-up" key={`subtitle-${currentSlide}`}>
              {slides[currentSlide].subtitle}
            </h3>
            
            <h1 
              className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-black text-[#4A0D00] leading-[0.9] tracking-tighter drop-shadow-sm animate-fade-in-up" 
              key={`title-${currentSlide}`}
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            >
            </h1>
            
            <p className="text-[#4A0D00]/70 text-[15px] md:text-[17px] max-w-md font-semibold pt-3 pb-5 leading-relaxed animate-fade-in-up" key={`desc-${currentSlide}`}>
              {slides[currentSlide].description}
            </p>
            
            <a
              href="#menu"
              className="inline-flex items-center space-x-3 bg-[#4A0D00] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#FECD07] hover:text-[#4A0D00] transition-colors shadow-lg"
            >
              <span>ORDER NOW</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Slider Dots */}
            <div className="flex items-center space-x-3 pt-8 md:pt-16">
              {slides.map((_, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                    currentSlide === idx ? 'bg-[#4A0D00] scale-125' : 'bg-[#4A0D00]/20 hover:bg-[#4A0D00]/50'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end items-center -mr-0 md:-mr-16 h-[250px] md:h-[500px]">
            {slides.map((slide, idx) => (
              <img 
                key={`img-${idx}`}
                src={slide.image} 
                alt="Coffee Product" 
                className={`absolute w-full max-w-[500px] md:max-w-[650px] lg:max-w-[800px] lg:scale-125 object-contain mix-blend-multiply drop-shadow-2xl transition-all duration-700 ease-in-out ${
                  currentSlide === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                }`} 
              />
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Features Banner */}
      <div className="bg-[#FAF7F2] py-14 border-t border-[#4A0D00]/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#4A0D00]/15">
            
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-5 pt-6 md:pt-0 md:px-8 first:pt-0">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#4A0D00]/15 flex items-center justify-center text-[#4A0D00]">
                <CoffeeBean className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-[#4A0D00] text-sm tracking-wider">PREMIUM COFFEE</h4>
                <p className="text-[#4A0D00]/60 text-[13px] mt-1.5 leading-relaxed font-medium">
                  We use the finest coffee beans from around the world.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-5 pt-6 md:pt-0 md:px-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#4A0D00]/15 flex items-center justify-center text-[#4A0D00]">
                <CoffeeCup className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-[#4A0D00] text-sm tracking-wider">PERFECT BLEND</h4>
                <p className="text-[#4A0D00]/60 text-[13px] mt-1.5 leading-relaxed font-medium">
                  A balanced blend of flavors for the perfect coffee experience.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-5 pt-6 md:pt-0 md:px-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#4A0D00]/15 flex items-center justify-center text-[#4A0D00]">
                <Snowflake className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-[#4A0D00] text-sm tracking-wider">ALWAYS FRESH</h4>
                <p className="text-[#4A0D00]/60 text-[13px] mt-1.5 leading-relaxed font-medium">
                  Made fresh daily to ensure the best taste in every sip.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  );
}
