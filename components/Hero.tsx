import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-dark overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Food Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Craving something <span className="text-primary">extraordinary?</span>
        </h1>
        <p className="mt-2 max-w-xl text-xl text-gray-300 mb-8">
          Experience flavor like never before. Delivered hot, fast, and fresh to your doorstep.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onCtaClick}
            className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            Order Now
          </button>
          <button
            onClick={() => document.getElementById('chat-trigger')?.click()}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold py-3 px-8 rounded-full transition-all duration-200 flex items-center gap-2"
          >
            <Sparkles size={18} />
            Ask AI Chef
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
