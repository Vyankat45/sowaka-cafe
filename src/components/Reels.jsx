import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reelsData = [
    {
      id: 0,
      link: 'https://www.instagram.com/p/DXj1pmSjW8k/',
    },
    {
      id: 1,
      link: 'https://www.instagram.com/p/DXeevWBjbL9/',
    },
    {
      id: 2,
      link: 'https://www.instagram.com/p/DXbdAbCDZDx/',
    },
    {
      id: 3,
      link: 'https://www.instagram.com/p/DZH81YhgeSU/',
    }
  ];

  // Auto-looping carousel every 5 seconds, pauses when hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reelsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reelsData.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reelsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reelsData.length) % reelsData.length);
  };

  // Calculate items per view for transform logic
  const getTransformPercentage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return currentIndex * 100;
      if (window.innerWidth < 1024) return currentIndex * 50;
    }
    // Default desktop: show 3, so slide by 33.33% per index
    // However, if we are at the last index and only have 4 items, we might see empty space.
    // To prevent empty space, we cap the max index
    const maxIndex = Math.max(0, reelsData.length - 3);
    const safeIndex = Math.min(currentIndex, maxIndex);
    return safeIndex * (100 / 3);
  };

  return (
    <section id="reels" className="py-12 md:py-24 bg-brand-soft-white border-b border-brand-sand scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-cream border border-brand-sand px-4 py-2 rounded-full shadow-sm mx-auto">
            <Instagram className="w-4 h-4 text-brand-brown" />
            <span className="text-brand-brown text-xs font-bold uppercase tracking-widest pt-0.5">Sowaka Reels</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-brown tracking-tight">
            Sowaka Moments
          </h2>
          <p className="text-brand-brown/70">
            Watch our Instagram reels directly here. Catch a glimpse of Rohan crafting your coffee.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Controls */}
          <div className="absolute inset-y-0 -left-4 md:-left-12 flex items-center z-10">
            <button 
              onClick={prevSlide}
              className="bg-brand-yellow text-brand-brown p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 -right-4 md:-right-12 flex items-center z-10">
            <button 
              onClick={nextSlide}
              className="bg-brand-yellow text-brand-brown p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Sliding Track */}
          <div className="overflow-hidden w-full py-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${getTransformPercentage()}%)` }}
            >
              {reelsData.map((reel) => (
                <div 
                  key={reel.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-brand-cream rounded-3xl overflow-hidden border border-brand-sand shadow-lg flex flex-col justify-center items-center p-2 h-[600px]">
                    {/* Instagram Embed iframe */}
                    <iframe 
                      src={`${reel.link}embed`}
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      scrolling="no" 
                      allowTransparency="true"
                      allow="encrypted-media"
                      className="rounded-2xl"
                      title={`Instagram Reel ${reel.id}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
