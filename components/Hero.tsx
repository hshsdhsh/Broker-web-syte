import React from 'react';
import { TranslationSchema, Page } from '../types';
import { Home, ArrowRight } from 'lucide-react';

interface HeroProps {
  t: TranslationSchema;
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ t, onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 md:-mt-36">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 text-center text-white pt-24 md:pt-48 pb-12 flex flex-col justify-center h-full">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full border border-gold-400/30 bg-black/20 backdrop-blur-md">
            <Home className="w-8 h-8 text-gold-400" />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight font-serif">
          {t.hero_title}
        </h1>
        
        <div className="w-20 h-1 bg-gold-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t.hero_sub}
        </p>

        <p className="text-sm font-semibold text-gold-400 uppercase tracking-widest mb-10">
            {t.hero_dubai}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => onNavigate('services')}
            className="px-8 py-3.5 bg-gold-500 text-white font-bold text-lg rounded shadow-lg hover:bg-gold-600 transition-colors duration-300"
          >
            {t.hero_cta}
          </button>
          
          <button 
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-transparent border border-white text-white font-bold text-lg rounded hover:bg-white hover:text-green-900 transition-colors duration-300"
          >
            {t.hero_cta2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;