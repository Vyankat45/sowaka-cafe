import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: null, text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, text: '' });

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill in all required fields (Name, Email, Message).' });
      setIsSubmitting(false);
      return;
    }

    // Simulate API request
    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        text: `Thank you for reaching out, ${formData.name}! Rohan and the team will get back to you shortly at ${formData.email}.` 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  // Coordinates matching index.html local business schema (Bandra East, Mumbai)
  const mapEmbedUrl = "https://maps.google.com/maps?q=Maa+Ashapura+Cooperative+Housing+Society,+Kala+Nagar,+Bandra+East,+Mumbai,+Maharashtra+400051&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-24 bg-brand-cream border-b border-brand-sand scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="space-y-4 max-w-xl mx-auto mb-16 text-center">
          <p className="font-script text-3xl text-brand-yellow font-bold">Find Us & Ask Rohan</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-brown tracking-tight">
            Contact & Location
          </h2>
          <p className="text-brand-brown/70">
            Have questions about our blends, catering, or want to say hello? Send us a message directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Map (Left) - Takes 7 cols */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Hours Card */}
              <div className="bg-white p-6 rounded-3xl border border-brand-sand shadow-sm space-y-4">
                <div className="flex items-center space-x-3 text-brand-yellow">
                  <Clock className="w-6 h-6 text-brand-brown" />
                  <h3 className="font-bold text-lg text-brand-brown">Opening Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-brand-brown/80 font-medium">
                  <div className="flex justify-between border-b border-dashed border-brand-sand pb-1">
                    <span>Monday - Friday</span>
                    <span className="text-brand-brown-light font-bold">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="text-brand-brown-light font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Info Details Card */}
              <div className="bg-white p-6 rounded-3xl border border-brand-sand shadow-sm space-y-4">
                <div className="flex items-center space-x-3 text-brand-yellow">
                  <MapPin className="w-6 h-6 text-brand-brown" />
                  <h3 className="font-bold text-lg text-brand-brown">Location & Call</h3>
                </div>
                <div className="space-y-3 text-sm text-brand-brown/80">
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-brand-brown-light">Address:</span>
                    <span>Maa Ashapura CHS, Kala Nagar, Bandra East, Mumbai, Maharashtra 400051</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-brand-brown-light">Phone:</span>
                    <a href="tel:+919930055555" className="hover:underline text-brand-brown font-bold">+91 99300 55555</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-brand-brown-light">Email:</span>
                    <a href="mailto:rohan@sowakacafe.com" className="hover:underline text-brand-brown font-bold">rohan@sowakacafe.com</a>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Map Embed */}
            <div className="w-full h-80 rounded-3xl overflow-hidden border border-brand-sand shadow-md relative bg-brand-sand">
              <iframe
                title="Sowaka Café Location Map - 1208 Pine St, Seattle, WA"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Delivery Partners strip */}
            <div className="bg-white/80 p-6 rounded-3xl border border-brand-sand text-center space-y-3">
              <p className="text-xs uppercase font-extrabold tracking-widest text-brand-brown/60">
                Order Delivery From Our Partners
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['UberEats', 'DoorDash', 'Grubhub'].map((partner) => (
                  <button
                    key={partner}
                    onClick={() => alert(`Redirecting mock delivery query for ${partner} to Sowaka Cafe...`)}
                    className="bg-brand-cream border border-brand-sand px-5 py-2.5 rounded-full text-xs font-bold text-brand-brown hover:bg-brand-yellow hover:border-brand-yellow hover:shadow-md transition-all duration-300"
                  >
                    {partner}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form (Right) - Takes 5 cols */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white p-8 rounded-3xl border border-brand-sand shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-brand-brown">Send Rohan a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Form Status Notification */}
                {status.type && (
                  <div className={`p-4 rounded-2xl flex items-start space-x-3 text-sm ${
                    status.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                    )}
                    <span>{status.text}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label htmlFor="contact-form-name" className="text-xs font-bold uppercase tracking-wider text-brand-brown/60">Your Name *</label>
                  <input
                    type="text"
                    id="contact-form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., Sarah Smith"
                    required
                    className="w-full bg-brand-cream/50 border border-brand-sand rounded-xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-brown focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-form-email" className="text-xs font-bold uppercase tracking-wider text-brand-brown/60">Your Email *</label>
                  <input
                    type="email"
                    id="contact-form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@example.com"
                    required
                    className="w-full bg-brand-cream/50 border border-brand-sand rounded-xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-brown focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-form-subject" className="text-xs font-bold uppercase tracking-wider text-brand-brown/60">Subject</label>
                  <input
                    type="text"
                    id="contact-form-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="E.g., Catering / Coffee Inquiry"
                    className="w-full bg-brand-cream/50 border border-brand-sand rounded-xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-brown focus:bg-white transition-all duration-200"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-form-message" className="text-xs font-bold uppercase tracking-wider text-brand-brown/60">Message *</label>
                  <textarea
                    id="contact-form-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note to Rohan here..."
                    required
                    className="w-full bg-brand-cream/50 border border-brand-sand rounded-xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-brown focus:bg-white transition-all duration-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-brown text-brand-yellow font-bold py-3.5 px-6 rounded-full hover:bg-brand-yellow hover:text-brand-brown transition-all duration-300 shadow-md flex items-center justify-center space-x-2 disabled:bg-brand-brown/50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
