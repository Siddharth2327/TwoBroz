
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Flame, Info, Tag } from 'lucide-react';

const MenuPage: React.FC = () => {
  const [filter, setFilter] = useState<MenuItem['category'] | 'All'>('All');

  const filteredItems = filter === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-zinc-50 pb-24">
      {/* Header */}
      <div className="bg-zinc-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-bungee text-4xl md:text-6xl mb-6 tracking-tighter">OUR <span className="text-yellow-400">LEGENDARY</span> MENU</h1>
          <p className="text-zinc-400 text-lg uppercase tracking-widest font-bold">Everything made fresh to order</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-2 flex flex-wrap justify-center gap-2">
          {['All', 'Fried Chicken', 'Burgers', 'Sides', 'Combos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'text-zinc-600 hover:bg-zinc-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-md border border-zinc-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-black/80 text-white text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md border border-white/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-black px-4 py-2 rounded-xl border-2 border-black shadow-lg">
          ${item.price.toFixed(2)}
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bungee text-xl leading-none text-zinc-900">{item.name}</h3>
        </div>
        <p className="text-zinc-500 text-sm mb-6 flex-1">{item.description}</p>
        
        {/* Expansion area */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 ${
            isHovered ? 'max-h-40 opacity-100 mt-4 p-4 mb-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center text-sm font-bold uppercase text-zinc-600">
              <div className="flex items-center space-x-2"><Tag size={16} /> <span>Price</span></div>
              <span className="text-red-500 text-lg">${item.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold uppercase text-zinc-600">
              <div className="flex items-center space-x-2"><Info size={16} /> <span>Calories</span></div>
              <span className="text-zinc-900">{item.calories} kcal</span>
            </div>
            <div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-yellow-400 transition-all duration-1000" 
                 style={{ width: isHovered ? '100%' : '0%' }}
               ></div>
            </div>
          </div>
        </div>

        <button className="w-full mt-auto py-4 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-red-500 transition-colors flex items-center justify-center space-x-2">
          <span>Add to Plate</span>
          <Flame size={18} />
        </button>
      </div>
    </div>
  );
};

export default MenuPage;
