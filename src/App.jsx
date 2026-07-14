import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import ReelsPage from './pages/ReelsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-soft-white min-h-screen text-brand-brown antialiased selection:bg-brand-yellow selection:text-brand-brown flex flex-col">
        {/* Persistent Navbar across all pages */}
        <Navbar />

        {/* Page Content injected here based on URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Persistent Footer across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
