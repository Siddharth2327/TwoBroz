
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Utensils } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
              <Utensils className="text-black" size={24} />
            </div>
            <span className="font-bungee text-2xl tracking-tighter text-black">
              2 BROZ <span className="text-red-500">CHICKEN</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-red-500 ${
                  location.pathname === link.href ? 'text-red-600 border-b-2 border-red-600' : 'text-zinc-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-zinc-200 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold uppercase tracking-widest text-zinc-800 hover:text-red-500 transition-colors py-2 border-b border-zinc-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/menu"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
