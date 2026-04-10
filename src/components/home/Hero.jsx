import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MessageCircle, Calendar,  Activity, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { EEGWave, NeuralNetwork } from '../common/EEGBackground'
import { useModal } from '../../context/ModalContext'


const Hero = () => {
    const { t, i18n } = useTranslation()
    const { openAppointmentModal } = useModal()
    const isArabic = i18n.language === 'ar'

    return (
        <div className="relative min-h-[70vh] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-primary/5">
            {/* Dynamic Background Elements */}
            <NeuralNetwork color="#83cfd2" className="opacity-30 lg:opacity-60 scale-150 rotate-12" />
            <div className={`absolute top-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10 ${isArabic ? 'left-0 bg-gradient-to-r' : 'right-0'}`} />

            {/* Subtle EEG Wave */}
            <EEGWave className="top-10 left-0 w-full opacity-10" />

            <div className="container relative z-10">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isArabic ? 'lg:rtl rtl text-right' : ''}`}>
                    {/* Text content - Reordered for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`order-2 lg:order-1 text-center ${isArabic ? 'lg:text-right' : 'lg:text-left'}`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-5 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full mb-6 font-bold text-[10px] tracking-wide"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#83cfd2] animate-pulse" />
                            {t('hero.badge', 'Expertise en Neurologie – Agadir / Inezgane')}
                        </motion.div>

                        <h1 className={`text-4xl lg:text-4xl font-black mb-6 text-secondary leading-[1.05] tracking-tight ${isArabic ? 'font-arabic' : ''}`}>
                            <span className="block text-primary opacity-90">{t('hero.title')}</span>
                            <span className="block mt-1 font-arabic leading-tight">{t('hero.subtitle')}</span>
                        </h1>

                        <div className={`text-base text-secondary/60 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 opacity-80 ${isArabic ? 'lg:mr-0 lg:ml-auto' : ''}`}>
                            <p>{t('hero.description')}</p>
                     
                        </div>

                        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isArabic ? 'lg:justify-end' : 'lg:justify-start'}`}>
                            <button 
                                onClick={openAppointmentModal}
                                className="btn-primary group flex items-center justify-center gap-2 py-4 px-8 text-base shadow-xl bg-primary hover:bg-secondary transition-all"
                            >
                                <Calendar className="w-4 h-4" />
                                {t('hero.cta_appointment')}
                            </button>
                            <a href="https://wa.me/212641702524" className="group flex items-center justify-center gap-2 py-4 px-8 text-base border border-primary/30 text-primary hover:bg-primary/10 bg-white/80 rounded-2xl font-black transition-all">
                                <MessageCircle className="w-4 h-4 text-primary" />
                                {t('hero.cta_whatsapp')}
                            </a>
                        </div>

                        <div className={`mt-12 flex flex-wrap gap-4 justify-center ${isArabic ? 'lg:justify-end' : 'lg:justify-start'}`}>
                            {[
                                { icon: Activity, text: "EEG" },
                                { icon: Zap, text: "ENMG" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 text-[10px] font-black text-secondary/60 bg-white/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-primary/5"
                                >
                                    <item.icon className="w-3.5 h-3.5 text-primary" />
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image content - Reordered for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex justify-center items-center h-full min-h-[300px] lg:min-h-0 order-1 lg:order-2 mb-8 lg:mb-0"
                    >
                        {/* Soft Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 rounded-full blur-[100px] lg:blur-[140px] -z-10 animate-pulse-slow" />

                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[100%] aspect-square border-2 border-primary/10 rounded-full -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] lg:w-[80%] aspect-square border border-primary/5 rounded-full -z-10" />

                        {/* Image Container with Fade */}
                        <div className="relative w-full max-w-[450px] lg:max-w-[650px] h-full flex items-end">
                            <div className="relative z-10 w-full [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                                <img
                                    src="profilpng.png"
                                    alt={t('hero.title')}
                                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] translate-y-4 lg:translate-y-12"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Hero
