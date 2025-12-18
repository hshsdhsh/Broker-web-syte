import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero'; 
import { Language, Page } from './types';
import { TRANSLATIONS } from './constants';

// Lazy load heavy components for performance optimization
const Services = React.lazy(() => import('./components/Services'));
const Highlights = React.lazy(() => import('./components/Highlights'));
const Promo = React.lazy(() => import('./components/Promo'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

// Declare gtag for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Elegant Loading Component with Logo
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="relative">
      <div className="w-10 h-10 border-[3px] border-gray-200 dark:border-dark-700 rounded-full"></div>
      <div className="absolute top-0 left-0 w-10 h-10 border-[3px] border-gold-500 rounded-full animate-spin border-t-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="https://imagizer.imageshack.com/img923/1222/XQwFAe.png" 
          alt="Loading..." 
          className="w-5 h-5 object-contain animate-pulse" 
        />
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('hy');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const t = TRANSLATIONS[lang];

  // Initialize Dark Mode from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // Track page views when currentPage changes
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_title: currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
        page_location: window.location.href,
        page_path: `/${currentPage}`
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-dark-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          {currentPage === 'home' && (
            <div className="animate-fade-in">
              {/* Hero is not lazy loaded to ensure fast LCP */}
              <Hero t={t} onNavigate={handleNavigate} />
              <Highlights t={t} />
              <Promo t={t} onNavigate={handleNavigate} />
            </div>
          )}

          {currentPage === 'services' && (
            <div className="pt-36 min-h-[80vh] animate-fade-in">
              <Services t={t} lang={lang} onNavigate={handleNavigate} />
            </div>
          )}

          {currentPage === 'about' && (
             <div className="pt-36 min-h-[80vh] animate-fade-in flex flex-col">
                 <About t={t} />
            </div>
          )}

          {currentPage === 'contact' && (
             <div className="pt-36 pb-20 min-h-[80vh] flex flex-col items-center animate-fade-in">
               <div className="w-full">
                  <Contact t={t} />
               </div>
             </div>
          )}
        </Suspense>
      </main>
      
      <Footer t={t} />
    </div>
  );
};

export default App;