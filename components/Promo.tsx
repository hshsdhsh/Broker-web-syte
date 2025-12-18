import React from 'react';
import { TranslationSchema, Page } from '../types';

interface PromoProps {
  t: TranslationSchema;
  onNavigate: (page: Page) => void;
}

const Promo: React.FC<PromoProps> = ({ t, onNavigate }) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-950 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-dark-900 text-white shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10 px-6 py-12 md:px-16 md:py-20 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-serif text-gold-400">
              {t.ad_here_title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 max-w-2xl leading-relaxed">
              {t.ad_here_sub}
            </p>

            <div className="w-full max-w-4xl h-40 md:h-64 bg-white/5 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center mb-10 transition-colors duration-500 hover:border-gold-500/50 hover:bg-white/10 group cursor-default">
               <div className="text-center">
                   <span className="block text-3xl md:text-4xl font-light text-white/20 group-hover:text-gold-500/50 transition-colors duration-500">970 × 250</span>
                   <span className="text-xs md:text-sm text-white/40 uppercase tracking-widest mt-2">{t.ad_space_available}</span>
               </div>
            </div>

            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg cursor-pointer hover:shadow-gold-500/20 hover:-translate-y-1"
            >
              {t.ad_here_cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;