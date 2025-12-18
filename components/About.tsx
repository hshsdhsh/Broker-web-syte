import React from 'react';
import { TranslationSchema } from '../types';
import { Shield, Target, TrendingUp, Heart, Building2 } from 'lucide-react';

interface AboutProps {
  t: TranslationSchema;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-dark-900 dark:text-white mb-6">{t.about_title}</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                {t.about_intro}
            </p>
        </div>

        {/* Split Section: Who we are & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-24">
            {/* Who we are */}
            <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-dark-700 flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Building2 className="w-24 h-24 md:w-32 md:h-32 text-green-600" />
                </div>
                <div className="w-14 h-14 bg-white dark:bg-dark-700 rounded-xl shadow-sm flex items-center justify-center mb-6 text-gold-500 transition-transform duration-500 group-hover:scale-110">
                    <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4 font-serif">{t.story_title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg flex-grow">
                    {t.story_text}
                </p>
            </div>

            {/* Values */}
            <div className="bg-dark-900 dark:bg-black rounded-2xl p-8 md:p-10 text-white flex flex-col shadow-2xl relative overflow-hidden group border border-gray-800 dark:border-dark-700 hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Heart className="w-24 h-24 md:w-32 md:h-32 text-green-500" />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-gold-400 transition-transform duration-500 group-hover:scale-110">
                    <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-6 font-serif">{t.values_title}</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {t.val_1}
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                         <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {t.val_2}
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                         <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {t.val_3}
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                         <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {t.val_4}
                    </li>
                </ul>
            </div>
        </div>

        {/* Dubai Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group bg-dark-900 h-[300px] md:h-auto">
             <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-900 dark:to-green-700 opacity-90 transition-opacity duration-500 group-hover:opacity-95 z-10"></div>
             
             {/* Optimized High-Quality Image */}
             <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea904f18431?auto=format&fit=crop&q=80&w=1200" 
                alt="Dubai Skyline" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 transition-transform duration-[2000ms] group-hover:scale-105 z-0" 
                loading="lazy"
             />
             
             {/* Fallback pattern if image fails to load/while loading */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

             <div className="relative z-20 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-10 text-white text-center md:text-left h-full justify-center md:justify-start">
                <div className="flex-shrink-0 p-5 bg-white/20 backdrop-blur-md rounded-full transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg border border-white/20">
                    <TrendingUp className="w-10 h-10 text-gold-300" />
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-gold-50 drop-shadow-sm">{t.dubai_title}</h3>
                    <p className="text-white/95 text-lg max-w-2xl leading-relaxed drop-shadow-md font-light">
                        {t.dubai_text}
                    </p>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default About;