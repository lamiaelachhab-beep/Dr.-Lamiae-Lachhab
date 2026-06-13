import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Microscope, Sparkles } from 'lucide-react';

const Cabinet = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const images = [
        {
            url: '/img5.jpeg',
            title: t('cabinet.gallery.img1.title'),
            description: t('cabinet.gallery.img1.desc')
        },
        {
            url: '/bureau.jpeg',
            title: t('cabinet.gallery.img5.title'),
            description: t('cabinet.gallery.img5.desc')
        },
        {
            url: '/EEG.jpeg',
            title: t('cabinet.gallery.img2.title'),
            description: t('cabinet.gallery.img2.desc')
        },
        {
            url: '/EMG.jpeg',
            title: t('cabinet.gallery.img3.title'),
            description: t('cabinet.gallery.img3.desc')
        },
        {
            url: '/img1.jpg',
            title: t('cabinet.gallery.img4.title'),
            description: t('cabinet.gallery.img4.desc')
        }
    ];

    const highlights = [
        {
            icon: Microscope,
            title: t('cabinet.highlights.h1_title'),
            desc: t('cabinet.highlights.h1_desc')
        },
        {
            icon: ShieldCheck,
            title: t('cabinet.highlights.h2_title'),
            desc: t('cabinet.highlights.h2_desc')
        },
        {
            icon: Heart,
            title: t('cabinet.highlights.h3_title'),
            desc: t('cabinet.highlights.h3_desc')
        },
        {
            icon: Sparkles,
            title: t('cabinet.highlights.h4_title'),
            desc: t('cabinet.highlights.h4_desc')
        }
    ];

    return (
        <section className="py-24 bg-background overflow-hidden font-sans" id="cabinet">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest text-primary uppercase bg-slate-50 rounded-full shadow-inner border border-slate-100"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        {t('cabinet.title')}
                    </motion.div>
                    {/* 
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight tracking-tighter italic ${isRTL ? 'font-arabic' : ''}`}
                    >
                        {t('cabinet.subtitle')}
                    </motion.h2> */}

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-lg text-secondary/60 leading-relaxed max-w-2xl mx-auto font-medium ${isRTL ? 'font-arabic' : ''}`}
                    >
                        {t('cabinet.description')}
                    </motion.p>
                </div>

                {/* Compact Custom Grid: 2 on first row, 3 on second row */}
                <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-8">
                    {/* Row 1: 2 Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {images.slice(0, 2).map((img, index) => (
                            <ImageCard key={index} img={img} index={index} isRTL={isRTL} height="h-[300px] md:h-[350px]" />
                        ))}
                    </div>

                    {/* Row 2: 3 Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {images.slice(2, 5).map((img, index) => (
                            <ImageCard key={index} img={img} index={index + 2} isRTL={isRTL} height="h-[250px] md:h-[280px]" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* Optimized ImageCard for the new grid */
const ImageCard = ({ img, index, isRTL, height }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`group relative w-full ${height} overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl shadow-slate-200/50 border border-slate-100`}
    >
        <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Glassmorphic Caption Reveal */}
        <div className="absolute inset-x-3 bottom-3 md:inset-x-6 md:bottom-6 p-4 md:p-5 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <h3 className={`text-white text-sm md:text-base font-black mb-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {img.title}
            </h3>
            <p className={`text-white/80 text-[10px] md:text-xs leading-relaxed line-clamp-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {img.description}
            </p>
        </div>

        {/* Floating Label */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-white/50 group-hover:opacity-0 transition-opacity duration-300">
            <span className={`text-secondary text-[9px] font-black uppercase tracking-widest ${isRTL ? 'font-arabic' : ''}`}>
                {img.title}
            </span>
        </div>
    </motion.div>
);

export default Cabinet;
