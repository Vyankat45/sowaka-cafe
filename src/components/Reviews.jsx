import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function Reviews() {
  const reviewsData = [
    {
      name: "Amit Shinde",
      role: "Bandra Resident",
      review: "Rohan's Iced Sowaka Latte is hands down the best in Mumbai! Truly handcrafted and rich. The atmosphere in Bandra East is so cozy and makes for the perfect workspace.",
      rating: 5,
      date: "2 days ago"
    },
    {
      name: "Priya Mehta",
      role: "Food Blogger",
      review: "The Artisan Hot Chocolate is pure heaven. The whipped cream is so fresh, and the yellow signature sticker on the cup makes it feel so premium. Love the cozy, handcrafted vibe!",
      rating: 5,
      date: "1 week ago"
    },
    {
      name: "Kabir Roy",
      role: "Coffee Enthusiast",
      review: "Stumbled upon Sowaka Cafe last week. The Salted Caramel Iced Coffee is perfectly balanced, not overly sweet. Rohan really knows his roast profiles and bean selections.",
      rating: 5,
      date: "3 days ago"
    },
    {
      name: "Anjali Deshmukh",
      role: "Regular Guest",
      review: "Best cold brew coffee in Kala Nagar! The staff is extremely warm, and you can tell Rohan puts his heart into every single beverage. A must-visit place for relaxing.",
      rating: 5,
      date: "2 weeks ago"
    }
  ];

  return (
    <section id="reviews" className="py-12 md:py-24 bg-brand-cream border-b border-brand-sand scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-brand-sand px-4 py-2 rounded-full shadow-sm mx-auto">
            <MessageSquare className="w-4 h-4 text-brand-yellow" />
            <span className="text-brand-brown text-xs font-bold uppercase tracking-widest pt-0.5">Guest Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-brown tracking-tight">
            What Our Guests Say
          </h2>
          <p className="text-brand-brown/70">
            Read authentic experiences from coffee lovers who visit Rohan's Sowaka Café in Mumbai.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviewsData.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-brand-sand shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-sand/30 pointer-events-none group-hover:scale-110 transition-transform duration-200" />
              
              <div className="space-y-4 text-left">
                {/* Stars */}
                <div className="flex space-x-1 text-brand-yellow">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                <p className="text-brand-brown/80 text-sm leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-6 mt-6 border-t border-brand-sand text-left flex justify-between items-end">
                <div>
                  <h4 className="font-bold text-brand-brown text-base">{rev.name}</h4>
                  <p className="text-xs text-brand-brown/50 font-semibold">{rev.role}</p>
                </div>
                <span className="text-[10px] text-brand-brown/40 font-bold">{rev.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
