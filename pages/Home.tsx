
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Trophy, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-zinc-950 overflow-hidden">
        {/* Abstract shapes in background */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-yellow-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-bold uppercase tracking-widest">
              <Flame size={16} />
              <span>Voted Best Street Chicken 2024</span>
            </div>
            <h1 className="font-bungee text-5xl md:text-7xl xl:text-8xl text-white leading-none">
              TASTE THE <br />
              <span className="text-yellow-400 italic">BROZ</span> MAGIC
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
              Authentic, double-dipped, extra-crispy fried chicken made with brotherhood and passion. 
              Straight from our stall to your stomach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/menu" 
                className="px-10 py-5 bg-yellow-400 text-black font-black uppercase tracking-widest rounded-full hover:bg-yellow-300 transition-all flex items-center justify-center space-x-2 shadow-[0_0_40px_rgba(250,204,21,0.3)]"
              >
                <span>View Full Menu</span>
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-zinc-800 text-white font-black uppercase tracking-widest rounded-full hover:bg-zinc-700 transition-all flex items-center justify-center"
              >
                Find Us Near You
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto aspect-square bg-yellow-400 rounded-3xl rotate-3 shadow-2xl flex items-center justify-center border-8 border-black overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/chickenmain/800/800" 
                 alt="Delicious Chicken" 
                 className="w-full h-full object-cover -rotate-3 group-hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="font-bungee text-2xl">The OG Bucket</p>
                  <p className="text-sm font-bold uppercase opacity-80">Starting at $12.99</p>
               </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-10 -right-4 bg-white p-4 rounded-2xl shadow-2xl border-2 border-zinc-100 flex items-center space-x-3 -rotate-12 animate-bounce">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600"><Flame size={20} /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Trending Now</p>
                <p className="font-bold text-sm">Fire Wings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Trophy size={32} />
            </div>
            <h3 className="font-bungee text-xl">Top Quality</h3>
            <p className="text-zinc-500">Only the freshest, locally sourced chicken and 100% natural spices.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
              <Flame size={32} />
            </div>
            <h3 className="font-bungee text-xl">Secret Spices</h3>
            <p className="text-zinc-500">A family recipe passed down through generations. Our spice mix is untouchable.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Clock size={32} />
            </div>
            <h3 className="font-bungee text-xl">Lightning Fast</h3>
            <p className="text-zinc-500">Street food should be fast. We serve your food fresh and hot in under 10 minutes.</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-bungee text-4xl md:text-5xl text-black">CRAVING SOMETHING CRISPY?</h2>
          <p className="text-black/80 text-xl font-medium">Don't settle for boring. Join the Broz family today and taste what you've been missing.</p>
          <Link 
            to="/menu" 
            className="inline-block bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            ORDER YOUR BUCKET NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
