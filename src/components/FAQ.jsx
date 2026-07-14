import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Who is the owner of Sowaka Café?",
      answer: "Sowaka Café is founded and operated by Rohan, who oversees our flavor profiles and serves as our head barista. Rohan created the brand around the idea of handcrafted, signature beverages (symbolized by the fingerprint heart in our logo)."
    },
    {
      question: "What are the signature drinks at Sowaka Café?",
      answer: "We recommend starting with Rohan's three signature recipes: our Artisan Hot Chocolate (topped with chocolate chips and premium cocoa powder), the Iced Sowaka Latte (cold espresso over ice), and our seasonal Salted Caramel Iced Coffee."
    },
    {
      question: "Where is Sowaka Café located?",
      answer: "Our physical café is situated in Bandra East at WING-A, PRIME SERVICED ASHAPURA CHS, B, Maa Ashapura Cooperative Housing Society, Kala Nagar, Bandra East, Mumbai, Maharashtra 400051. Stop by to enjoy a cozy workspace, premium brews, and a friendly neighborhood environment."
    },
    {
      question: "What are your opening hours?",
      answer: "We are open Monday through Friday from 7:00 AM to 7:00 PM, and on weekends (Saturday and Sunday) from 8:00 AM to 6:00 PM. We roast and brew fresh every single day."
    },
    {
      question: "Can I host an event or inquire about bulk catering with Sowaka?",
      answer: "Yes, absolutely! Rohan designs custom catering menus and mobile drink bars for weddings, corporate events, and parties. You can send a request through our Contact Form below, and we will get back to you with options."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-soft-white border-b border-brand-sand scroll-mt-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="font-script text-3xl text-brand-yellow font-bold">Frequently Asked Questions</p>
          <h2 className="text-4xl font-extrabold text-brand-brown tracking-tight">
            Common Questions
          </h2>
          <p className="text-brand-brown/70 text-sm">
            Everything you need to know about Rohan's brewing methods, coordinates, and hours.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-brand-sand shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-yellow shrink-0" />
                    <span className="font-bold text-brand-brown group-hover:text-brand-yellow transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-brand-brown shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-60 border-t border-brand-sand' : 'max-h-0'
                } overflow-hidden`}>
                  <div className="p-6 text-sm text-brand-brown/80 leading-relaxed bg-brand-cream/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
