
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-yellow-400 py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bungee text-4xl md:text-6xl text-black mb-8">TWO BROTHERS, <br /> ONE MISSION.</h1>
          <p className="text-black/80 text-xl font-medium leading-relaxed italic">
            "It started on a street corner with nothing but a used fryer and a recipe that made our friends go crazy. We realized good chicken brings people together."
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-xs font-black uppercase tracking-widest">Our Story</div>
          <h2 className="font-bungee text-3xl md:text-4xl text-black leading-tight">FROM STREET ROOTS TO CITY LEGENDS</h2>
          <p className="text-zinc-600 leading-relaxed">
            2 Broz Chicken wasn't born in a boardroom. It was born on the sidewalk, amidst the hustle and bustle of city life. We noticed that while everyone loved fried chicken, finding that perfect mix of "Street Spice" and "Gourmet Quality" was impossible.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            We spent 14 months perfecting our brine, experimenting with over 40 different flour blends, and getting the double-dip technique exactly right. Every piece of chicken we serve today is a testament to those long nights by the fryer.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="font-bungee text-4xl text-red-500">50K+</p>
              <p className="text-zinc-400 font-bold uppercase text-xs">Buckets Served</p>
            </div>
            <div>
              <p className="font-bungee text-4xl text-red-500">12</p>
              <p className="text-zinc-400 font-bold uppercase text-xs">Secret Spices</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
           <div className="relative bg-zinc-900 rounded-[40px] p-2 rotate-2 group">
              <img 
                src="https://picsum.photos/seed/story/800/1000" 
                alt="Brothers at the stall" 
                className="rounded-[36px] grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-yellow-400 p-8 rounded-3xl border-4 border-black -rotate-6 shadow-2xl">
                 <p className="font-bungee text-xl text-black">EST. 2022</p>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24 px-4 text-center">
        <h2 className="font-bungee text-3xl md:text-4xl text-white mb-16 underline decoration-yellow-400 underline-offset-8">THE BROZ PROMISE</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-zinc-800 rounded-3xl hover:bg-zinc-900 transition-colors">
            <h3 className="font-bungee text-xl text-yellow-400 mb-4">NO COMPROMISE</h3>
            <p className="text-zinc-500">We use only high-grade vegetable oils and change them daily. No exceptions.</p>
          </div>
          <div className="p-8 border border-zinc-800 rounded-3xl hover:bg-zinc-900 transition-colors">
            <h3 className="font-bungee text-xl text-yellow-400 mb-4">COMMUNITY FIRST</h3>
            <p className="text-zinc-500">We source our chicken from local farms, supporting the very neighborhood that built us.</p>
          </div>
          <div className="p-8 border border-zinc-800 rounded-3xl hover:bg-zinc-900 transition-colors">
            <h3 className="font-bungee text-xl text-yellow-400 mb-4">SMILES GUARANTEED</h3>
            <p className="text-zinc-500">If your chicken isn't the best you've had this week, we'll replace it. No questions asked.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
