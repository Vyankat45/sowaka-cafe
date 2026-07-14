import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';
import hotChocolateImg from '../assets/hot_chocolate.png';
import icedLatteImg from '../assets/iced_latte.png';
import coffeeBrandedImg from '../assets/coffee_branded_1.jpg';
import espressoRomanoImg from '../assets/espresso_romano.jpg';
import coldBrewImg from '../assets/cold_brew.jpg';
import redVelvetLatteImg from '../assets/red_velvet_latte.jpg';
import pistachioMochaImg from '../assets/pistachio_mocha.jpg';
import hazelnutFrappeImg from '../assets/hazelnut_frappe.jpg';
import { Coffee, ArrowUpRight, Check } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedItem, setCopiedItem] = useState(null);

  const categories = ['All', 'Hot Coffee', 'Iced Coffee', 'Hot Chocolate', 'Specialty', 'Sweet Drinks'];

  const menuItems = [
    {
      id: 'hot-chocolate',
      name: 'Artisan Hot Chocolate',
      category: 'Hot Chocolate',
      description: 'Luxurious hot chocolate topped with fresh whipped cream, dark chocolate chips, and a dusting of premium cocoa powder.',
      price: 180,
      image: hotChocolateImg,
      badgeText: 'Classic'
    },
    {
      id: 'iced-sowarka-latte',
      name: 'Iced Sowarka Latte',
      category: 'Iced Coffee',
      description: 'Rich espresso and cold milk poured over ice in a tall cup. Smooth, refreshing, and handcrafted.',
      price: 220,
      image: icedLatteImg,
      badgeText: 'Bestseller'
    },
    {
      id: 'salted-caramel-iced',
      name: 'Salted Caramel Iced Coffee',
      category: 'Iced Coffee',
      description: 'Premium espresso layered with sweet cream and rich salted caramel syrup. Finished with a cold foam top.',
      price: 260,
      image: coffeeBrandedImg,
      badgeText: 'Signature'
    },
    {
      id: 'espresso-romano',
      name: 'Espresso Romano',
      category: 'Hot Coffee',
      description: 'A robust double shot of espresso brewed with fresh lemon zest, giving a bright citrus note to the rich crema.',
      price: 140,
      image: espressoRomanoImg,
      badgeText: 'Pure'
    },
    {
      id: 'sowarka-cold-brew',
      name: 'Sowarka Cold Brew',
      category: 'Iced Coffee',
      description: 'Slow-steeped for 18 hours in cold filtered water to produce an exceptionally smooth, low-acid coffee taste.',
      price: 190,
      image: coldBrewImg,
      badgeText: 'Slow Brew'
    },
    {
      id: 'red-velvet-latte',
      name: 'Red Velvet Latte',
      category: 'Specialty',
      description: 'Sweet cocoa blend and red velvet infusion layered with steamed whole milk and topped with delicate latte art.',
      price: 250,
      image: redVelvetLatteImg,
      badgeText: 'Seasonal'
    },
    {
      id: 'rose-pistachio-mocha',
      name: 'Rose Pistachio Mocha',
      category: 'Specialty',
      description: 'Artisanal white chocolate espresso mocha infused with sweet rosewater, topped with roasted pistachios.',
      price: 280,
      image: pistachioMochaImg,
      badgeText: 'Artisanal'
    },
    {
      id: 'hazelnut-frappe',
      name: 'Hazelnut Frappe',
      category: 'Sweet Drinks',
      description: 'Blended espresso with hazelnut syrup, cream, crushed ice, whipped cream, and caramelized crunch drizzle.',
      price: 270,
      image: hazelnutFrappeImg,
      badgeText: 'Sweet Treat'
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleInquiry = (itemName) => {
    setCopiedItem(itemName);
    setTimeout(() => setCopiedItem(null), 3000);
    // Find contact section and prefill or focus
    const contactForm = document.getElementById('contact-form-message');
    if (contactForm) {
      contactForm.value = `Hi Rohan, I am interested in inquiring about the "${itemName}" from your menu. Could you tell me more about its availability today?`;
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-24 bg-brand-soft-white border-b border-brand-sand scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="space-y-4 max-w-xl mx-auto mb-16">
          <p className="font-script text-3xl text-brand-yellow font-bold">Menu Showcase</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-brown tracking-tight">
            Discover Our Coffee Blends
          </h2>
          <p className="text-brand-brown/70">
            Handcrafted with love by Rohan and using premium ethically-sourced beans. Click any item to ask about it!
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border ${
                selectedCategory === category
                  ? 'bg-brand-brown text-brand-yellow border-brand-brown scale-105 shadow-md'
                  : 'bg-white text-brand-brown border-brand-sand hover:bg-brand-cream'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden border border-brand-sand shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              
              {/* Branded Product Image with Sticker Overlay */}
              <div className="relative aspect-square w-full bg-brand-cream overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* 1. Category Tag */}
                <div className="absolute top-4 left-4 bg-brand-brown/85 backdrop-blur-sm text-brand-yellow text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {item.badgeText}
                </div>

                {/* 2. Instagram Watermark Sticker Overlay (Sowarka Yellow Badge Logo) */}
                <div 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow shadow-lg transform rotate-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 bg-white"
                  title="Sowarka Café Authenticity Sticker"
                >
                  <img 
                    src={logoImg} 
                    alt="Sowarka sticker" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content Details */}
              <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-brown group-hover:text-brand-yellow transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-brand-brown/70 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-brand-sand">
                  <span className="text-2xl font-black text-brand-brown">
                    ₹{item.price}
                  </span>
                  
                  <button
                    onClick={() => handleInquiry(item.name)}
                    className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm border ${
                      copiedItem === item.name
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'bg-brand-cream text-brand-brown border-brand-sand hover:bg-brand-yellow hover:border-brand-yellow hover:shadow-md'
                    }`}
                  >
                    {copiedItem === item.name ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Ready in Form!</span>
                      </>
                    ) : (
                      <>
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state (in case of weird filtering) */}
        {filteredItems.length === 0 && (
          <div className="py-12 bg-white rounded-3xl border border-brand-sand max-w-md mx-auto">
            <Coffee className="w-12 h-12 text-brand-brown/30 mx-auto mb-4" />
            <p className="text-brand-brown/70 font-semibold">No drinks found in this category.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-sm font-bold text-brand-yellow hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
