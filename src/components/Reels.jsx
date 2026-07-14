import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import new local videos added by the user
import reelVideo1 from '../assets/Barista_preparing_coffee_for_Sowaka_202607141446.mp4';
import reelVideo2 from '../assets/Cappuccino_advertisement_for_Sow._202607141446.mp4';
import reelVideo3 from '../assets/Coffee_advertisement_Sowaka_Cafe_202607141447.mp4';
import reelVideo4 from '../assets/Coffee_beans_falling_on_table_202607141447.mp4';
import reelVideo5 from '../assets/Coffee_pour-over_commercial_Sowa._202607141447.mp4';
import reelVideo6 from '../assets/Sowaka_Cafe_closing_advertisement_202607141446.mp4';
import reelVideo7 from '../assets/Barista_pours_coffee_beans_grinder_202607141432_gwr_video_mvp (1).mp4';

// Import local assets to use as poster fallbacks
import coffee1 from '../assets/cold_brew.jpg';
import coffee2 from '../assets/rohan.jpg';
import coffee3 from '../assets/coffee_branded_1.jpg';
import coffee4 from '../assets/hero_cold_cappuccino.png';
import coffee5 from '../assets/pistachio_mocha.jpg';
import coffee6 from '../assets/espresso_romano.jpg';
import coffee7 from '../assets/hazelnut_frappe.jpg';

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

// Sub-component to manage playing/pausing a single video card dynamically
const ReelCard = ({ link, poster, isActive }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().catch((err) => {
        console.log("Video auto-play was interrupted or blocked:", err);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <video 
      ref={videoRef}
      src={link}
      poster={poster}
      loop 
      muted 
      playsInline
      className="absolute inset-0 w-full h-full object-cover rounded-[2.2rem] opacity-95 hover:opacity-100 transition-opacity duration-500"
    />
  );
};

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  
  // Touch swipe states for mobile optimization
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const baseReelsData = [
    {
      id: 0,
      link: reelVideo1,
      poster: coffee1,
    },
    {
      id: 1,
      link: reelVideo2,
      poster: coffee2,
    },
    {
      id: 2,
      link: reelVideo3,
      poster: coffee3,
    },
    {
      id: 3,
      link: reelVideo4,
      poster: coffee4,
    },
    {
      id: 4,
      link: reelVideo5,
      poster: coffee5,
    },
    {
      id: 5,
      link: reelVideo6,
      poster: coffee6,
    },
    {
      id: 6,
      link: reelVideo7,
      poster: coffee7,
    }
  ];

  // Clone array to allow seamless infinite loops
  const reelsData = [
    ...baseReelsData.slice(-3), // Pad 3 items at start
    ...baseReelsData,
    ...baseReelsData,
    ...baseReelsData.slice(0, 3) // Pad 3 items at end
  ];

  // Auto-play the carousel, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, isTransitioning]);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Boundary check to reset the position silently (for 7 items, max offset is 10 and min offset is 2)
  useEffect(() => {
    if (currentIndex === 10) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(3);
      }, 700); // Wait for transition duration
    } else if (currentIndex === 2) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(9);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  // Re-enable transitions after reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Calculate items per view for transform logic
  const getTransformPercentage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return currentIndex * 100;
      if (window.innerWidth < 1024) return currentIndex * 50;
    }
    return currentIndex * (100 / 3);
  };

  return (
    <section id="reels" className="py-16 md:py-32 bg-[#F5F2EB] border-y border-brand-sand scroll-mt-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 max-w-xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white border border-brand-sand px-5 py-2.5 rounded-full shadow-md mx-auto transform hover:scale-105 transition-transform duration-300">
            <Instagram className="w-5 h-5 text-brand-brown" />
            <span className="text-brand-brown text-[11px] font-black uppercase tracking-[0.25em] pt-0.5">Sowaka on Instagram</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-brown tracking-tight">
            Visual <span className="text-brand-yellow drop-shadow-sm">Storytelling</span>
          </h2>
          <p className="text-brand-brown/70 text-lg max-w-md mx-auto font-medium">
            Immerse yourself in the art of the pour. Watch our signature creations come to life.
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-y-0 -left-4 md:-left-8 flex items-center z-20 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handlePrev}
              className="bg-white/90 backdrop-blur-md text-brand-brown p-4 rounded-full shadow-lg border border-brand-sand hover:bg-brand-yellow hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 -right-4 md:-right-8 flex items-center z-20 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handleNext}
              className="bg-white/90 backdrop-blur-md text-brand-brown p-4 rounded-full shadow-lg border border-brand-sand hover:bg-brand-yellow hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-visible w-full py-6">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}`}
              style={{ transform: `translateX(-${getTransformPercentage()}%)` }}
            >
              {reelsData.map((reel, idx) => {
                const isCenter = typeof window !== 'undefined' && window.innerWidth >= 1024 
                  ? idx === currentIndex + 1
                  : idx === currentIndex;

                return (
                  <div 
                    key={`${reel.id}-${idx}`}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4 md:px-6 transition-all duration-700 ease-in-out"
                    style={{
                      transform: isCenter ? 'scale(1.05)' : 'scale(0.95)',
                      opacity: isCenter ? 1 : 0.6
                    }}
                  >
                    <div className="relative bg-black rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center p-0 h-[500px] sm:h-[600px] transition-all duration-500 hover:border-brand-yellow hover:shadow-[0_20px_50px_rgba(254,205,7,0.2)]">
                      <div className="absolute inset-0 bg-brand-cream animate-pulse -z-10"></div>
                      
                      {/* Sub-component to manage active/inactive play state */}
                      <ReelCard 
                        link={reel.link}
                        poster={reel.poster}
                        isActive={isCenter}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
