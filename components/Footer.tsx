
import React from 'react';
import { Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h2 className="font-bungee text-2xl mb-6">
            2 BROZ <span className="text-red-500">CHICKEN</span>
          </h2>
          <p className="text-zinc-400 max-w-xs mx-auto md:mx-0">
            Street food for the soul. Two brothers, one fryer, and the world's best crispy chicken. 
            Join the revolution.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter size={24} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Find Us</h3>
          <ul className="space-y-4 text-zinc-400">
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin size={20} className="text-red-500" />
              <span>123 Street Corner, Food Hub, City</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <Phone size={20} className="text-red-500" />
              <span>+1 (234) BROZ-FRY</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Hours</h3>
          <ul className="space-y-2 text-zinc-400">
            <li>Mon - Thu: 4 PM - 12 AM</li>
            <li>Fri - Sat: 4 PM - 2 AM</li>
            <li>Sun: 12 PM - 10 PM</li>
            <li className="pt-4 text-yellow-400 font-bold">Closed on Public Holidays</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} 2 Broz Chicken. All rights reserved. Built for street food lovers.
      </div>
    </footer>
  );
};

export default Footer;
