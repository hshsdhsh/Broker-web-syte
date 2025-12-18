import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { TranslationSchema, Language, Page } from '../types';
import { PROPERTIES, PropertyData } from '../properties';
import { MapPin, Bed, Bath, X, Check, ArrowRight, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

interface ServicesProps {
  t: TranslationSchema;
  lang: Language;
  onNavigate: (page: Page) => void;
}

const ITEMS_PER_PAGE = 9;

const Services: React.FC<ServicesProps> = ({ t, lang, onNavigate }) => {
  const [activeStatus, setActiveStatus] = useState<'all' | 'sale' | 'rent' | 'long_term'>('all');
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Modal Gallery State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeStatus]);

  // Image Preloading Effect
  useEffect(() => {
    if (selectedProperty) {
      const imagesToPreload = [
        // Next image
        selectedProperty.images[(currentImageIndex + 1) % selectedProperty.images.length],
        // Previous image
        selectedProperty.images[(currentImageIndex - 1 + selectedProperty.images.length) % selectedProperty.images.length]
      ];

      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [selectedProperty, currentImageIndex]);

  // Helper to get localized text
  const getLocale = useCallback((property: PropertyData) => {
    return property.locales[lang] || property.locales['en'];
  }, [lang]);

  // Filter properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      // Status Filter
      const statusMatch = activeStatus === 'all' || p.status === activeStatus;
      return statusMatch;
    });
  }, [activeStatus]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const displayedProperties = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProperties, currentPage]);


  // Helper to get displayed price (checks locale first)
  const getDisplayPrice = (property: PropertyData) => {
    const locale = getLocale(property);
    return locale.price || property.price;
  }

  // Modal Handlers
  const openModal = (property: PropertyData) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
    // Disable body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProperty(null);
    // Enable body scroll
    document.body.style.overflow = 'auto';
  };

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProperty) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProperty.images.length);
  }, [selectedProperty]);

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProperty) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
  }, [selectedProperty]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProperty) return;
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProperty, handleNextImage, handlePrevImage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById('services');
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 120, // Adjust for navbar height
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50 dark:bg-dark-900 transition-colors duration-500 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6 font-serif">{t.services_title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-8"></div>
            
            {/* Filters Container */}
            <div className="w-full max-w-4xl mx-auto">
                <div className="flex flex-wrap justify-center gap-3">
                    <FilterButton 
                        active={activeStatus === 'all'} 
                        onClick={() => setActiveStatus('all')} 
                        label={t.filter_all} 
                    />
                    <FilterButton 
                        active={activeStatus === 'sale'} 
                        onClick={() => setActiveStatus('sale')} 
                        label={t.filter_sale} 
                    />
                    <FilterButton 
                        active={activeStatus === 'rent'} 
                        onClick={() => setActiveStatus('rent')} 
                        label={t.filter_rent} 
                    />
                    <FilterButton 
                        active={activeStatus === 'long_term'} 
                        onClick={() => setActiveStatus('long_term')} 
                        label={t.filter_long} 
                    />
                </div>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20">
            {displayedProperties.length > 0 ? (
                displayedProperties.map((property) => {
                    const locale = getLocale(property);
                    const displayPrice = getDisplayPrice(property);
                    const mainImage = property.images && property.images.length > 0 ? property.images[0] : 'https://placehold.co/600x400?text=No+Image';

                    return (
                        <div 
                            key={property.id}
                            className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 dark:border-dark-700"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 md:h-72 overflow-hidden cursor-pointer" onClick={() => openModal(property)}>
                                <img 
                                    src={mainImage} 
                                    alt={locale.title} 
                                    loading="lazy" 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Status Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-md ${
                                        property.status === 'sale' ? 'bg-gold-500' : 'bg-dark-900'
                                    }`}>
                                        {property.status === 'long_term' ? t.filter_long : (property.status === 'sale' ? t.filter_sale : t.filter_rent)}
                                    </span>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                     <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white border border-white/20">
                                        {property.category}
                                     </span>
                                </div>
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="bg-white text-dark-900 px-6 py-2 rounded-full font-bold uppercase text-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                        {t.btn_details} <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                     <p className="text-xl font-bold text-gold-600 dark:text-gold-400 font-serif">{displayPrice}</p>
                                </div>

                                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 leading-snug line-clamp-2 min-h-[3.5rem]">{locale.title}</h3>
                                
                                <div className="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                                    <MapPin className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" />
                                    <span className="line-clamp-2">{locale.address}</span>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
                                    {property.category === 'residential' ? (
                                        <>
                                            {locale.rooms && (
                                                <div className="flex items-center gap-1.5" title="Rooms">
                                                    <Bed className="w-4 h-4 text-gray-400" />
                                                    <span className="truncate max-w-[80px] font-semibold">{locale.rooms.split(' ')[0]}</span>
                                                </div>
                                            )}
                                            {locale.baths && (
                                                <div className="flex items-center gap-1.5" title="Baths">
                                                    <Bath className="w-4 h-4 text-gray-400" />
                                                    <span className="font-semibold">{locale.baths.split(' ')[0]}</span>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Investment Opportunity</span>
                                    )}
                                    
                                    {locale.size && (
                                        <div className="flex items-center gap-1.5 ml-auto">
                                            <Maximize className="w-4 h-4 text-gray-400" />
                                            <span className="font-semibold">{locale.size.split(' ')[0]}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="col-span-full text-center py-20">
                    <div className="inline-block p-4 rounded-full bg-gray-100 dark:bg-dark-800 mb-4">
                        <X className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-xl text-gray-500 dark:text-gray-400">
                        {lang === 'hy' ? 'Տվյալներ չեն գտնվել' : (lang === 'ru' ? 'Ничего не найдено' : 'No properties found')}
                    </p>
                    <button 
                        onClick={() => setActiveStatus('all')}
                        className="mt-4 text-gold-500 hover:text-gold-600 font-bold transition-colors duration-300 underline underline-offset-4"
                    >
                         {lang === 'hy' ? 'Մաքրել ֆիլտրերը' : (lang === 'ru' ? 'Сбросить фильтры' : 'Clear filters')}
                    </button>
                </div>
            )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 md:gap-3">
                <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-dark-700 text-gray-600 dark:text-gray-400 hover:border-gold-500 hover:text-gold-500 dark:hover:text-gold-400 disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-gray-600 transition-all duration-300 bg-white dark:bg-dark-800"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-lg font-serif font-bold transition-all duration-300 ${
                            currentPage === page
                                ? 'bg-gold-500 text-white shadow-lg'
                                : 'bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 text-gray-600 dark:text-gray-400 hover:border-gold-500 hover:text-gold-500 dark:hover:text-gold-400'
                        }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-dark-700 text-gray-600 dark:text-gray-400 hover:border-gold-500 hover:text-gold-500 dark:hover:text-gold-400 disabled:opacity-30 disabled:hover:border-gray-300 disabled:hover:text-gray-600 transition-all duration-300 bg-white dark:bg-dark-800"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        )}
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
            <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm transition-opacity duration-300" onClick={closeModal}></div>
            
            <div className="relative bg-white dark:bg-dark-800 md:rounded-2xl w-full max-w-6xl h-[100dvh] md:h-[90vh] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-200 dark:border-dark-700">
                <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center transition-colors hover:bg-black"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Modal Gallery */}
                <div className="w-full h-[40%] md:h-full md:w-[60%] bg-black relative flex flex-col group select-none flex-shrink-0">
                     <div 
                        className="relative w-full h-full bg-dark-900 flex items-center justify-center cursor-pointer"
                        onClick={handleNextImage}
                     >
                        <img 
                            src={selectedProperty.images[currentImageIndex]} 
                            alt={`${getLocale(selectedProperty).title}`} 
                            className="w-full h-full object-contain"
                            key={currentImageIndex}
                            loading="eager" 
                        />
                        
                        {/* Navigation Arrows */}
                        {selectedProperty.images.length > 1 && (
                            <>
                                <button 
                                    onClick={handlePrevImage}
                                    className="absolute z-10 left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button 
                                    onClick={handleNextImage}
                                    className="absolute z-10 right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-mono">
                            {currentImageIndex + 1} / {selectedProperty.images.length}
                        </div>
                     </div>
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-[40%] h-[60%] md:h-full bg-white dark:bg-dark-800 flex flex-col relative">
                    <div 
                        className="p-6 md:p-10 overflow-y-auto flex-1 pb-24 md:pb-10"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded uppercase tracking-wider border border-green-200 dark:border-green-800">
                                {selectedProperty.category}
                            </span>
                            <span className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider text-white ${
                                selectedProperty.status === 'sale' ? 'bg-gold-500' : 'bg-gray-500 dark:bg-gray-600'
                            }`}>
                                {selectedProperty.status === 'long_term' ? t.filter_long : (selectedProperty.status === 'sale' ? t.filter_sale : t.filter_rent)}
                            </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-900 dark:text-white mb-2 leading-tight">
                            {getLocale(selectedProperty).title}
                        </h3>
                        
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6 font-light">
                            <MapPin className="w-5 h-5 mr-2 text-gold-500" />
                            {getLocale(selectedProperty).address}
                        </div>

                        <div className="text-3xl font-serif font-bold text-gold-600 dark:text-gold-400 mb-6 border-b border-gray-100 dark:border-dark-700 pb-6">
                            {getDisplayPrice(selectedProperty)}
                        </div>

                        {/* Specs */}
                        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
                            {getLocale(selectedProperty).rooms && (
                                 <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-dark-700/50 border border-gray-100 dark:border-dark-700">
                                    <Bed className="w-5 h-5 md:w-6 md:h-6 text-dark-900 dark:text-gray-300 mb-2" />
                                    <span className="text-[10px] uppercase text-gray-500 dark:text-gray-400 tracking-wide font-bold">Rooms</span>
                                    <span className="text-xs md:text-sm font-bold text-dark-900 dark:text-white text-center">{getLocale(selectedProperty).rooms}</span>
                                </div>
                            )}
                             {getLocale(selectedProperty).baths && (
                                 <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-dark-700/50 border border-gray-100 dark:border-dark-700">
                                    <Bath className="w-5 h-5 md:w-6 md:h-6 text-dark-900 dark:text-gray-300 mb-2" />
                                    <span className="text-[10px] uppercase text-gray-500 dark:text-gray-400 tracking-wide font-bold">Baths</span>
                                    <span className="text-xs md:text-sm font-bold text-dark-900 dark:text-white text-center">{getLocale(selectedProperty).baths}</span>
                                </div>
                            )}
                             {getLocale(selectedProperty).size && (
                                 <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-dark-700/50 border border-gray-100 dark:border-dark-700">
                                    <Maximize className="w-5 h-5 md:w-6 md:h-6 text-dark-900 dark:text-gray-300 mb-2" />
                                    <span className="text-[10px] uppercase text-gray-500 dark:text-gray-400 tracking-wide font-bold">Area</span>
                                    <span className="text-xs md:text-sm font-bold text-dark-900 dark:text-white text-center">{getLocale(selectedProperty).size}</span>
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-4">{t.modal_desc}</h4>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base font-light">
                                {getLocale(selectedProperty).description}
                            </p>
                        </div>

                         {getLocale(selectedProperty).amenities && (
                             <div className="mb-8">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-4">{t.modal_features}</h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {getLocale(selectedProperty).amenities?.map((feat, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-dark-700/50 border border-gray-100 dark:border-dark-700 p-3 rounded-lg">
                                            <Check className="w-4 h-4 text-gold-500 mr-3 flex-shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                         )}
                    </div>

                     <div className="absolute bottom-0 left-0 w-full p-4 md:static md:p-6 border-t border-gray-100 dark:border-dark-700 bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm z-10">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                closeModal();
                                onNavigate('contact');
                            }}
                            className="w-full bg-gold-500 text-white text-base md:text-lg font-bold py-3.5 rounded-xl shadow-lg hover:bg-gold-600 transition-colors flex items-center justify-center gap-3"
                        >
                            {t.modal_call_now || "Contact Agent"} <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

// Simple Status Button
const FilterButton = ({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) => (
    <button
        onClick={onClick}
        className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
            active 
            ? 'bg-gold-500 text-white shadow-lg' 
            : 'bg-white dark:bg-dark-700 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-dark-600 hover:bg-gray-50 dark:hover:bg-dark-600'
        }`}
    >
        {label}
    </button>
);

export default Services;