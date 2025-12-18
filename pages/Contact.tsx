
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-bungee text-4xl md:text-6xl text-black">GET IN TOUCH</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
            Have a question about our secret recipe? Or just want to say hi? Drop the Broz a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200">
              <h3 className="font-bungee text-xl mb-8">CONTACT INFO</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-xs text-zinc-400 mb-1">Our Location</p>
                    <p className="font-medium text-zinc-900 leading-snug">The Chicken Stall @ 123 Street Corner, Foodie Park, SF</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-xs text-zinc-400 mb-1">Call the Broz</p>
                    <p className="font-medium text-zinc-900">+1 (234) BROZ-FRY</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-xs text-zinc-400 mb-1">Email Us</p>
                    <p className="font-medium text-zinc-900 underline">hello@2brozchicken.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-zinc-100">
                <p className="font-bungee text-sm mb-6">FOLLOW THE SQUAD</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"><Facebook size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-10 rounded-3xl shadow-lg border border-zinc-100 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Broz" 
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Catering Request</option>
                  <option>Feedback</option>
                  <option>Franchise Interest</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                <textarea 
                  rows={6} 
                  placeholder="Tell us what's on your mind..." 
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
