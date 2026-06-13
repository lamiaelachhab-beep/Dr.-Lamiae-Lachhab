import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewTicker = () => {
    const { t, i18n } = useTranslation();
    const [index, setIndex] = useState(0);
    const isArabic = i18n.language === 'ar';

    const reviews = ['rev1', 'rev2', 'rev3', 'rev4', 'rev5', 'rev6'];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hidden md:block bg-secondary/95 text-white py-1.5 md:py-2 overflow-hidden border-b border-white/5 backdrop-blur-md">
            <div className="container mx-auto px-4 relative h-4 md:h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.a
                        key={index}
                        href={t(`testimonials.items.${reviews[index]}.link`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: isArabic ? -10 : 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: isArabic ? 10 : -10 }}
                        transition={{ duration: 0.5 }}
                        className={`flex items-center gap-2 md:gap-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-full hover:text-primary transition-colors ${isArabic ? 'font-arabic flex-row-reverse' : 'text-[7px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-widest'}`}
                    >
                        <div className={`flex gap-0.5 text-amber-400 ${isArabic ? 'ml-2' : 'mr-1'}`}>
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={window.innerWidth < 768 ? 8 : 10} />)}
                        </div>

                        <span className="opacity-80 line-clamp-1 max-w-[150px] sm:max-w-[300px] md:max-w-none">
                            "{t(`testimonials.items.${reviews[index]}.text`)}"
                        </span>

                        <span className="text-primary font-black flex-shrink-0">— {t(`testimonials.items.${reviews[index]}.author`)}</span>

                        <div className={`hidden sm:flex items-center gap-1 bg-white/10 px-1.5 md:px-2 py-0.5 rounded text-[6px] md:text-[8px] ${isArabic ? 'mr-3' : 'ml-3'}`}>
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            G-Avis
                        </div>
                    </motion.a>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ReviewTicker;
