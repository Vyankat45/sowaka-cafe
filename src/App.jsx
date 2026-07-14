import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import PromoBand from './components/PromoBand';
import Story from './components/Story';
import Reels from './components/Reels';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-soft-white min-h-screen text-brand-brown antialiased selection:bg-brand-yellow selection:text-brand-brown">
      {/* Sticky Header Nav */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Showcase */}
        <Hero />

        {/* 2. Menu selection grid with logo badges */}
        <Menu />

        {/* 3. Seasonal Promo strip */}
        <PromoBand />

        {/* 4. Owner Backstory */}
        <Story />

        {/* 5. Instagram Reels Showcase */}
        <Reels />

        {/* 6. Guest Testimonial Reviews */}
        <Reviews />

        {/* 7. Accordion Q&A for AIO */}
        <FAQ />

        {/* 8. Contact Details & Maps & Form */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
