import React from 'react';
import { TranslationSchema } from '../types';
import { Award, Users, Clock, BarChart3 } from 'lucide-react';

interface HighlightsProps {
  t: TranslationSchema;
}

const Highlights: React.FC<HighlightsProps> = ({ t }) => {
  const metrics = [
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: t.h1_deals,
      text: t.h1_text,
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: t.h2_clients,
      text: t.h2_text,
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-500" />,
      title: t.h3_years,
      text: t.h3_text,
    },
  ];

  return (
    <section id="highlights" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-green-50 dark:bg-green-900/20">
                <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-dark-900 dark:text-white mb-4">{t.highlights_title}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-700 group flex flex-col items-center text-center"
            >
              <div className="mb-6 p-5 rounded-full bg-gray-50 dark:bg-dark-700 inline-block group-hover:bg-gold-50 dark:group-hover:bg-gold-900/20 transition-colors duration-500">
                {metric.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3 font-serif">{metric.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{metric.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;