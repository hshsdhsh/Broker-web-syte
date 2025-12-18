import React from 'react';
import { TranslationSchema } from '../types';
import { Facebook, Instagram, Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  t: TranslationSchema;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8 border-t border-white/10 dark:border-dark-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-4">
                    <img 
                      src="https://imagizer.imageshack.com/img923/1222/XQwFAe.png" 
                      alt="Vardanyan" 
                      className="w-12 h-12 md:w-20 md:h-20 object-contain transition-all duration-300"
                    />
                    <span className="text-xl md:text-3xl font-bold tracking-widest font-serif text-gold-500 transition-all duration-300">VARDANYAN</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                    {t.footer_desc}
                </p>
            </div>

            {/* Contacts Column */}
            <div>
                <h4 className="text-gold-500 font-bold text-lg mb-6 uppercase tracking-wider">{t.footer_contacts}</h4>
                <div className="flex flex-col gap-4 text-gray-300">
                     <div className="flex items-center gap-3 group">
                        <Phone className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors" />
                        <span className="group-hover:text-white transition-colors">+374 44 12 21 27</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <Mail className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors" />
                        <span className="group-hover:text-white transition-colors">vardanyancompany@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <MessageCircle className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                        <span className="group-hover:text-white transition-colors">{t.contact_whatsapp}: +374 44 12 21 27</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <MessageCircle className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors" />
                        <span className="group-hover:text-white transition-colors">{t.contact_viber}: +374 94 89 03 97</span>
                    </div>
                </div>
            </div>

            {/* Socials Column */}
            <div>
                <h4 className="text-gold-500 font-bold text-lg mb-6 uppercase tracking-wider">{t.footer_follow}</h4>
                <div className="flex gap-4">
                    <a 
                        href="https://www.facebook.com/stepanavanum.ansharj.guyq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-gray-700 bg-gray-800 flex items-center justify-center text-white hover:bg-gold-600 hover:border-gold-600 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://www.instagram.com/vardanyan_realty" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-gray-700 bg-gray-800 flex items-center justify-center text-white hover:bg-gold-600 hover:border-gold-600 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>&copy; {new Date().getFullYear()} VARDANYAN Realty. {t.footer_rights}</div>
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;