import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { Language, TranslationSchema, Page } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSchema;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, currentPage, onNavigate, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navLinks: { label: string; id: Page }[] = [
    { label: t.nav_home, id: 'home' },
    { label: t.nav_services, id: 'services' },
    { label: t.nav_about, id: 'about' },
    { label: t.nav_contact, id: 'contact' },
  ];

  // Determine appearance based on scroll and dark mode
  const isHome = currentPage === 'home';
  const isDarkText = (!isHome || scrolled);
  
  // Navbar Background logic
  let navbarBgClass = 'bg-transparent py-4'; // Default transparent
  if (!isHome || scrolled) {
    navbarBgClass = 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-xl shadow-md py-3';
  }

  // Text Color Logic
  let textColorClass = 'text-white'; // Default white on transparent
  if (isDarkText) {
    textColorClass = 'text-green-900 dark:text-gray-100';
  }

  // When menu is open, force text color to visible depending on theme
  const brandTextColor = isOpen 
    ? 'text-green-900 dark:text-white' 
    : textColorClass;

  const toggleColor = isOpen
    ? 'text-green-900 dark:text-white'
    : textColorClass;

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${isOpen ? 'bg-transparent' : navbarBgClass}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Brand */}
        <button 
          onClick={() => {
            onNavigate('home');
            setIsOpen(false);
          }}
          className="flex items-center gap-2 md:gap-4 group relative z-50 flex-shrink-0 max-w-[70%]"
        >
            <img 
              src="https://imagizer.imageshack.com/img923/1222/XQwFAe.png" 
              alt="Vardanyan" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-all duration-500"
            />
          <span className={`brand-font text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider transition-colors duration-500 truncate ${brandTextColor}`}>
            VARDANYAN
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => onNavigate(link.id)}
                  className={`text-sm lg:text-base font-medium tracking-wide transition-all duration-300 hover:text-gold-500 relative py-1 hover:-translate-y-0.5 ${
                    textColorClass
                  } ${currentPage === link.id ? 'font-bold text-gold-500 dark:text-gold-400' : ''}`}
                >
                  {link.label}
                  {currentPage === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 rounded-full animate-slide-up"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-gray-300/30 pl-6 ml-2">
            {/* Language Selector */}
            <div className="relative group">
                <button className={`flex items-center gap-1 text-sm font-bold uppercase transition-colors duration-300 hover:text-gold-500 drop-shadow-md ${textColorClass}`}>
                <Globe className="w-4 h-4" />
                {lang}
                </button>
                
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-dark-900 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 ring-1 ring-black/5">
                {(['en', 'ru', 'hy'] as Language[]).map((l) => (
                    <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`block w-full text-left px-4 py-2.5 text-sm uppercase hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors ${
                        lang === l ? 'text-gold-500 font-bold' : 'text-gray-800 dark:text-gray-200'
                    }`}
                    >
                    {l}
                    </button>
                ))}
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-110 ${textColorClass}`}
                aria-label="Toggle Dark Mode"
            >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden relative z-50 flex-shrink-0">
             {/* Mobile Theme Toggle */}
            <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${toggleColor}`}
            >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button 
            className="text-gold-500 p-1 active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
            {isOpen ? <X size={30} className={toggleColor} /> : <Menu size={30} className={toggleColor} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen Overlay) */}
      <div className={`md:hidden fixed inset-0 bg-white/98 dark:bg-dark-950/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
      }`}>
        <ul className="flex flex-col gap-6 text-center mb-10 w-full px-6">
          {navLinks.map((link, idx) => (
            <li key={link.id} style={{ transitionDelay: `${idx * 50}ms` }} className={`transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <button 
                onClick={() => {
                    onNavigate(link.id);
                    setIsOpen(false);
                }}
                className={`text-3xl font-serif font-medium hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300 ${
                    currentPage === link.id 
                    ? 'text-gold-600 dark:text-gold-400 font-bold' 
                    : 'text-green-900 dark:text-gray-200'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        
        <div className={`flex gap-3 transition-all duration-700 delay-200 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {(['en', 'ru', 'hy'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setIsOpen(false); }}
                className={`uppercase px-5 py-3 rounded-full border text-sm font-bold tracking-widest transition-all duration-300 active:scale-95 ${
                    lang === l 
                    ? 'bg-gold-500 text-white border-gold-500 shadow-lg' 
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-dark-700 hover:bg-gray-200 dark:hover:bg-dark-700'
                }`}
              >
                {l}
              </button>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;