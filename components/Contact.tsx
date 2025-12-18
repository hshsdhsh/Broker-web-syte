import React from 'react';
import { TranslationSchema } from '../types';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

interface ContactProps {
  t: TranslationSchema;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-dark-900 dark:text-white mb-12 text-center animate-slide-up">{t.contact_title}</h2>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Phone */}
          <div className="flex flex-col items-center p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-green-50 dark:bg-dark-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
               <Phone className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{t.contact_phone}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">+374 44 12 21 27</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{t.contact_whatsapp} / {t.contact_viber}</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-green-50 dark:bg-dark-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
               <Mail className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{t.contact_email}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">vardanyancompany@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 text-center md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-green-50 dark:bg-dark-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
               <MapPin className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{t.contact_address}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{t.address_value}</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full max-w-6xl mx-auto mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-gray-100 dark:bg-dark-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-dark-700 group">
                {/* Embed Google Map */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.493177115394!2d44.38416162001945!3d41.00846504977472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041850fb6e275df%3A0xd5f7300aef85d1bc!2sVardanyanRealty!5e1!3m2!1sru!2sam!4v1765614164853!5m2!1sru!2sam" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vardanyan Realty Location"
                    className="w-full h-full filter grayscale contrast-75 opacity-90 transition-all duration-700 ease-in-out group-hover:filter-none group-hover:contrast-100 group-hover:opacity-100"
                ></iframe>
                
                {/* Decorative border overlay */}
                <div className="absolute inset-0 border-[6px] border-white/20 dark:border-black/20 pointer-events-none rounded-3xl z-10 transition-colors duration-500 group-hover:border-gold-500/30"></div>

                {/* Optional Label Overlay */}
                <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 transition-all duration-500 opacity-100 group-hover:opacity-0 translate-y-0 group-hover:translate-y-4 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-dark-900 dark:text-white font-bold text-sm">Vardanyan Realty HQ</span>
                </div>
            </div>
        </div>

        {/* Social Follow */}
        <div className="text-center max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
             <h3 className="text-2xl font-serif font-bold text-dark-900 dark:text-white mb-8 flex items-center justify-center gap-4">
                <span className="h-px w-8 md:w-12 bg-gold-500"></span>
                {t.contact_follow}
                <span className="h-px w-8 md:w-12 bg-gold-500"></span>
             </h3>
             <div className="flex justify-center gap-6">
                <a 
                    href="https://www.facebook.com/stepanavanum.ansharj.guyq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                    <Facebook className="w-5 h-5" />
                    Facebook
                </a>
                <a 
                    href="https://www.instagram.com/vardanyan_realty" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                    <Instagram className="w-5 h-5" />
                    Instagram
                </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;