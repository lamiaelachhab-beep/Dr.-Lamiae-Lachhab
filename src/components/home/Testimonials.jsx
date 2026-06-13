import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ExternalLink } from 'lucide-react';

const Testimonials = () => {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const isRTL = i18n.language === 'ar';

    const reviews = ['rev1', 'rev2', 'rev3', 'rev4', 'rev5', 'rev6'];

    // Auto-scroll logic every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const googleMapsUrl = "https://www.google.com/maps/place/Dr+LACHHAB+Lamiae%D8%8C+Neurolgue+%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1%D8%A9+%D8%A7%D9%84%D8%A3%D8%B4%D9%87%D8%A8+%D9%8لم%D9%8A%D8%A7%D8%A1+%D8%A3%D8%AE%D8%B5%D8%A7%D8%A6%D9%8A%D8%A9+%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%B2+%D8%A7%D9%84%D8%B1%D8%B5%D8%A8%D9%8A%E2%80%AD/@30.3597048,-9.5337908,17z/data=!4m8!3m7!1s0xdb3c78be54e4567:0x131c7b3d4b8e7f8b!8m2!3d30.3597048!4d-9.5337908!9m1!1b1!16s%2Fg%2F11tg0v4pkz";

    return (
        <section className="py-16 bg-background overflow-hidden" id="testimonials">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Section Header - Moved back to the TOP/FRONT */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className={`text-4xl md:text-4xl font-black text-secondary mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {t('testimonials.title')}
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
                    <p className={`text-lg md:text-xl text-secondary/60 italic font-medium max-w-2xl mx-auto px-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {t('testimonials.subtitle')}
                    </p>
                </motion.div>

                {/* Main Slider Container */}
                <div className="relative flex items-center justify-center group overflow-visible">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevReview}
                        className={`absolute left-0 lg:-left-4 z-20 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100 text-secondary hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 ${isRTL ? 'rotate-180' : ''}`}
                        aria-label="Previous review"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={nextReview}
                        className={`absolute right-0 lg:-right-4 z-20 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100 text-secondary hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 ${isRTL ? 'rotate-180' : ''}`}
                        aria-label="Next review"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Testimonial Card */}
                    <div className="w-full max-w-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 lg:p-12 shadow-[0_15px_40px_-12px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden cursor-pointer"
                                onClick={() => window.open(t(`testimonials.items.${reviews[currentIndex]}.link`), '_blank')}
                            >
                                <Quote className="absolute top-6 right-8 text-slate-50 w-24 h-24 md:w-32 md:h-32 rotate-180 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="flex gap-0.5 text-amber-400">
                                            {[...Array(parseInt(t(`testimonials.items.${reviews[currentIndex]}.rating`)))].map((_, i) => (
                                                <Star key={i} fill="currentColor" size={16} />
                                            ))}
                                        </div>
                                        <div className={`flex items-center gap-1.5 text-primary/80 font-black text-[9px] tracking-widest uppercase ${isRTL ? 'md:flex-row-reverse font-arabic' : ''}`}>
                                            <CheckCircle2 size={13} />
                                            <span>Google Verified</span>
                                        </div>
                                    </div>

                                    <blockquote className={`text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium mb-8 italic ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
                                        "{t(`testimonials.items.${reviews[currentIndex]}.text`)}"
                                    </blockquote>

                                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-50 pt-8 mt-auto">
                                        <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] bg-slate-50 flex items-center justify-center text-primary font-black text-2xl border border-slate-100 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500 uppercase">
                                                {t(`testimonials.items.${reviews[currentIndex]}.author`).charAt(0)}
                                            </div>
                                            <div className={isRTL ? 'text-right' : 'text-left'}>
                                                <h4 className={`text-base md:text-lg font-black text-secondary leading-tight mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                                                    {t(`testimonials.items.${reviews[currentIndex]}.author`)}
                                                </h4>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                                        {t('testimonials.verified')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            className="px-6 py-3 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-primary transition-all shadow-xl shadow-secondary/10 group-hover:scale-105 active:scale-95"
                                        >
                                            {t('testimonials.original')}
                                            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8 mb-10">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-6 bg-primary shadow-sm' : 'w-1.5 bg-slate-200 hover:bg-slate-300'}`}
                            aria-label={`Go to review ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Keeping the CTA button at the end as it's useful */}
                <div className="text-center pt-8 border-t border-slate-100">
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:scale-105 transition-all duration-300"
                    >
                        <span>{t('testimonials.link_google')}</span>
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
