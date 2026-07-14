import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import coldBrewImg from '../assets/cold_brew.jpg';
import espressoRomanoImg from '../assets/espresso_romano.jpg';
import heroMatchaLatteImg from '../assets/hero_matcha_latte.png';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'The Secret Behind the Perfect Cold Brew',
      excerpt: 'Discover why our 18-hour steeping process creates the smoothest, most flavorful cold brew you will ever taste in Bandra East.',
      date: 'July 10, 2026',
      author: 'Rohan',
      image: coldBrewImg,
      category: 'Brewing Secrets'
    },
    {
      id: 2,
      title: 'Why Espresso Romano is Making a Comeback',
      excerpt: 'A slice of lemon with your espresso? Explore the rich history of the Espresso Romano and why it is our summer favorite.',
      date: 'June 28, 2026',
      author: 'Rohan',
      image: espressoRomanoImg,
      category: 'Coffee History'
    },
    {
      id: 3,
      title: 'Mastering the Art of the Matcha Latte',
      excerpt: 'From ceremonial grade powder to the perfect whisking technique, learn how we achieve "Zen in a Cup" every single time.',
      date: 'June 15, 2026',
      author: 'Sowaka Team',
      image: heroMatchaLatteImg,
      category: 'Behind the Bar'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-brand-cream border-b border-brand-sand scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white border border-brand-sand px-4 py-2 rounded-full shadow-sm mx-auto">
            <BookOpen className="w-4 h-4 text-brand-yellow" />
            <span className="text-brand-brown text-xs font-bold uppercase tracking-widest pt-0.5">Café Journal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-brown tracking-tight">
            Fresh from the Roastery
          </h2>
          <p className="text-brand-brown/70 text-base md:text-lg">
            Read our latest thoughts, brewing tips, and stories behind the coffee at Sowaka Café.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-3xl overflow-hidden border border-brand-sand shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#F5F2EB]">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-multiply" 
                />
                <div className="absolute top-4 left-4 bg-brand-yellow text-brand-brown text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                  {blog.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="flex items-center text-xs font-bold text-brand-brown/50 tracking-wide uppercase">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {blog.author}</span>
                </div>
                
                <h3 className="text-xl font-extrabold text-brand-brown leading-snug group-hover:text-brand-yellow transition-colors duration-200">
                  {blog.title}
                </h3>
                
                <p className="text-brand-brown/70 text-sm flex-grow">
                  {blog.excerpt}
                </p>
                
                <div className="pt-4 mt-auto">
                  <span className="inline-flex items-center space-x-2 text-brand-brown font-bold text-sm group-hover:text-brand-yellow transition-colors duration-200">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="bg-brand-brown text-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-yellow hover:text-brand-brown transition-colors shadow-lg">
            View All Posts
          </button>
        </div>

      </div>
    </section>
  );
}
