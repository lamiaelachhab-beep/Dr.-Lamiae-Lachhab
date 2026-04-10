import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Brain, Activity, Zap, Microscope, ArrowUpRight, Info, Phone, Plus } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NeuralNetwork } from '../components/common/EEGBackground'
import { useModal } from '../context/ModalContext'

const Specialties = () => {
    const { t, i18n } = useTranslation()
    const { openAppointmentModal } = useModal()
    const isArabic = i18n.language === 'ar'
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll()
    const xMarquee = useTransform(scrollYProgress, [0, 1], [0, -300])

    const exams = [
        {
            icon: Activity,
            code: "EEG",
            index: "01",
            name: t('specialties_page.exams.eeg.name'),
            desc: t('specialties_page.exams.eeg.desc'),
            indications: t('specialties_page.exams.eeg.ind', { returnObjects: true }),
            prep: t('specialties_page.exams.eeg.prep'),
            duration: t('specialties_page.exams.eeg.duration'),
            bg: "bg-secondary",
            textAccent: "text-primary",
        },
        {
            icon: Zap,
            code: "ENMG",
            index: "02",
            name: t('specialties_page.exams.enmg.name'),
            desc: t('specialties_page.exams.enmg.desc'),
            indications: t('specialties_page.exams.enmg.ind', { returnObjects: true }),
            prep: t('specialties_page.exams.enmg.prep'),
            duration: t('specialties_page.exams.enmg.duration'),
            bg: "bg-white",
            textAccent: "text-secondary",
        }
    ]

    const specialties = t('specialties_page.domains.items', { returnObjects: true })
    const specialtyIcons = [Zap, Activity, Microscope, Brain]

    return (
        <div ref={containerRef} className="overflow-hidden bg-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Helmet>
                <title>{t('nav.specialties')} | Dr. Lamiae Lachhab</title>
            </Helmet>

            {/* ══════════════════════════════════
                HERO — more compact, raw typographic
            ══════════════════════════════════ */}
            <section className="relative bg-white flex flex-col overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
                {/* vertical rule left — hidden on small mobile */}
                <div className={`absolute top-0 bottom-0 w-px bg-slate-50 z-10 hidden xs:block ${isArabic ? 'right-6 sm:right-16' : 'left-6 sm:left-16'}`} />

                {/* top info row */}
                <div className={`relative z-20 flex items-center justify-between px-6 sm:px-16 mb-8 sm:mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className={`text-[7px] sm:text-[8px] font-black tracking-[0.4em] uppercase text-secondary/30 ${isArabic ? 'font-arabic' : ''}`}
                    >
                        {t('specialties_page.hero.badge')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}
                    >
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className={`text-[7px] sm:text-[8px] font-black tracking-[0.4em] uppercase text-secondary/30 ${isArabic ? 'font-arabic' : ''}`}>
                            {t('specialties_page.hero.available')}
                        </span>
                    </motion.div>
                </div>

                {/* Main title — horizontal & responsive */}
                <div className={`relative z-10 px-6 sm:px-16 max-w-7xl ${isArabic ? 'text-right' : 'text-left'}`}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-none ${isArabic ? 'flex-row-reverse justify-start font-arabic' : ''}`}
                    >
                        <span className="text-secondary">{t('specialties_page.hero.title_p1')}</span>
                        <span className="text-primary italic">{t('specialties_page.hero.title_p2')}</span>
                        <span className="text-secondary">{t('specialties_page.hero.title_p3')}</span>
                    </motion.h1>

                    {/* Meta info & Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${isArabic ? 'sm:flex-row-reverse' : ''}`}
                    >
                        <p className={`text-secondary/40 font-semibold text-[11px] sm:text-xs lg:text-sm max-w-[280px] leading-relaxed ${isArabic ? 'font-arabic text-right' : ''}`}>
                            {t('specialties_page.hero.desc')}
                        </p>
                        <button
                            onClick={openAppointmentModal}
                            className={`group flex items-center gap-3 bg-secondary text-white font-black text-xs px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl hover:bg-primary transition-all duration-400 shrink-0 shadow-lg shadow-black/5 ${isArabic ? 'flex-row-reverse font-arabic' : ''}`}
                        >
                            {t('specialties_page.hero.cta')}
                            <ArrowUpRight size={14} className={`group-hover:rotate-45 transition-transform duration-300 ${isArabic ? 'rotate-180' : ''}`} />
                        </button>
                    </motion.div>
                </div>

                {/* scrolling marquee — smaller on mobile */}
                <div className="relative z-10 border-t border-slate-100/50 mt-12 sm:mt-16 overflow-hidden">
                    <motion.div style={{ x: xMarquee }} className="flex whitespace-nowrap py-3 bg-white/50">
                        {[...Array(6)].map((_, i) => (
                            <span key={i} className={`text-[7px] sm:text-[8px] font-black uppercase tracking-[0.4em] text-slate-200 px-6 sm:px-8 ${isArabic ? 'font-arabic' : ''}`}>
                                {isArabic 
                                    ? "\u0627\u0644\u0635\u0631\u0639 \u00b7 \u0646\u0641\u0642 \u0627\u0644\u0631\u0633\u063a \u00b7 \u0628\u0627\u0631\u0643\u0646\u0633\u0648\u0646 \u00b7 \u0645\u0627 \u0628\u0639\u062f \u0627\u0644\u062c\u0644\u0637\u0629 \u00b7 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u00b7 \u0627\u0639\u062a\u0644\u0627\u0644 \u0627\u0644\u0623\u0639\u0635\u0627\u0628 \u00b7 \u0627\u0644\u0635\u062f\u0627\u0639 \u00b7 \u200f"
                                    : "Epilepsie \u00b7 Canal Carpien \u00b7 Parkinson \u00b7 Post-AVC \u00b7 M\u00e9moire \u00b7 Neuropathies \u00b7 C\u00e9phal\u00e9es \u00b7 "}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
                EXAMS — compact panels
            ══════════════════════════════════ */}
            {exams.map((exam, i) => (
                <section key={i} className={`relative overflow-hidden ${exam.bg}`}>
                    <div className="container relative z-10 px-6 sm:px-16 py-12 lg:py-24 max-w-7xl mx-auto">
                        <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-start ${isArabic ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Panel ID & Info */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={`${i % 2 !== 0 ? 'lg:order-2' : ''} ${isArabic ? 'text-right' : 'text-left'}`}
                            >
                                <div className="relative">
                                    <p className={`text-[4.5rem] sm:text-[6rem] lg:text-[8rem] font-black leading-none tracking-tighter select-none mb-[-0.6rem] sm:mb-[-1rem] -ml-1 sm:-ml-2 opacity-10 ${i === 0 ? 'text-white' : 'text-secondary'} ${isArabic ? 'mr-[-1rem] ml-0' : ''}`}>
                                        {exam.index}
                                    </p>

                                    <div className={`relative z-10 ${isArabic ? 'pr-1 sm:pr-2' : 'pl-1 sm:pl-2'}`}>
                                        <div className={`flex items-center gap-3 mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'bg-secondary/5'}`}>
                                                <exam.icon size={16} className={exam.textAccent} />
                                            </div>
                                            <span className={`text-[6px] sm:text-[7px] font-black tracking-[0.4em] uppercase ${i === 0 ? 'text-white/30' : 'text-secondary/30'} ${isArabic ? 'font-arabic' : ''}`}>{exam.code}</span>
                                        </div>

                                        <h2 className={`text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter italic leading-tight mb-4 break-words hyphens-auto ${i === 0 ? 'text-white' : 'text-secondary'} ${isArabic ? 'font-arabic' : ''}`}>
                                            {exam.name}
                                        </h2>

                                        <p className={`text-sm font-semibold leading-relaxed mb-8 max-w-[320px] ${i === 0 ? 'text-white/40' : 'text-secondary/40'} ${isArabic ? 'font-arabic ml-auto' : ''}`}>
                                            {exam.desc}
                                        </p>

                                        <div className={`flex flex-wrap gap-2.5 sm:gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                            <div className={`px-3 py-1.5 sm:py-2 rounded-xl border ${i === 0 ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                                                <p className={`text-[6px] sm:text-[7px] font-black uppercase tracking-widest mb-0.5 ${i === 0 ? 'text-white/20' : 'text-secondary/20'} ${isArabic ? 'font-arabic' : ''}`}>
                                                    {t('specialties_page.exams.labels.duration')}
                                                </p>
                                                <p className={`text-[11px] sm:text-xs font-black italic ${i === 0 ? 'text-white' : 'text-secondary'} ${isArabic ? 'font-arabic' : ''}`}>{exam.duration}</p>
                                            </div>
                                            <div className={`flex-1 min-w-[140px] px-3 py-1.5 sm:py-2 rounded-xl border ${i === 0 ? 'bg-primary/10 border-primary/20' : 'bg-primary/5 border-primary/10'}`}>
                                                <p className={`text-[6px] sm:text-[7px] font-black uppercase tracking-widest text-primary mb-0.5 flex items-center gap-1.5 ${isArabic ? 'flex-row-reverse font-arabic font-black' : ''}`}>
                                                    <Info size={8} /> {t('specialties_page.exams.labels.prep')}
                                                </p>
                                                <p className={`text-[10px] sm:text-[11px] font-semibold italic ${i === 0 ? 'text-white/60' : 'text-secondary/60'} ${isArabic ? 'font-arabic' : ''}`}>{exam.prep}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Indications List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`${i % 2 !== 0 ? 'lg:order-1' : ''} w-full`}
                            >
                                <p className={`text-[7px] sm:text-[8px] font-black tracking-[0.4em] uppercase mb-5 sm:mb-6 pl-2 sm:pl-4 ${i === 0 ? 'text-white/20' : 'text-secondary/20'} ${isArabic ? 'text-right font-arabic pr-4 pl-0' : ''}`}>
                                    {t('specialties_page.exams.labels.fields')}
                                </p>

                                <div className="grid grid-cols-1 gap-0.5">
                                    {exam.indications && Array.isArray(exam.indications) && exam.indications.map((ind, j) => (
                                        <div
                                            key={j}
                                            className={`flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 rounded-xl transition-all duration-300 ${i === 0
                                                ? 'hover:bg-white/5 border border-transparent hover:border-white/10'
                                                : 'hover:bg-slate-50 border border-transparent hover:border-slate-100'
                                                } ${isArabic ? 'flex-row-reverse' : ''}`}
                                        >
                                            <div className={`flex items-center gap-3 sm:gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                                <span className="text-primary text-[8px] sm:text-[9px] font-black tabular-nums">0{j + 1}</span>
                                                <span className={`text-base sm:text-lg lg:text-xl font-black italic tracking-tight ${i === 0 ? 'text-white/60' : 'text-secondary/60'} ${isArabic ? 'font-arabic' : ''}`}>
                                                    {ind}
                                                </span>
                                            </div>
                                            <Plus size={12} className={`opacity-0 sm:opacity-20 ${i === 0 ? 'text-white' : 'text-secondary'}`} />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-8 sm:h-10 ${i === 0 ? 'bg-white' : 'bg-secondary'}`}
                        style={{ clipPath: isArabic ? 'polygon(0 0, 0 100%, 100% 100%)' : 'polygon(0 100%, 100% 0, 100% 100%)' }}
                    />
                </section>
            ))}

            {/* ══════════════════════════════════
                SPECIALTIES — horizontal dark
            ══════════════════════════════════ */}
            <section className="py-16 lg:py-28 bg-secondary relative overflow-hidden">
                <NeuralNetwork color="#83cfd2" className="absolute inset-0 opacity-[0.03] w-full h-full pointer-events-none" />
                <div className="container px-6 sm:px-16 max-w-7xl mx-auto relative z-10">
                    <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
                        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter italic leading-none ${isArabic ? 'text-right font-arabic' : ''}`}>
                            {t('specialties_page.domains.title')}<br /><span className="text-primary not-italic">{t('specialties_page.domains.title_highlight')}</span>
                        </h2>
                        <p className={`text-white/20 font-semibold text-[11px] sm:text-xs max-w-[200px] leading-relaxed ${isArabic ? 'text-right font-arabic' : ''}`}>
                            {t('specialties_page.domains.desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {specialties && Array.isArray(specialties) && specialties.map((sp, i) => {
                            const Icon = specialtyIcons[i] || Brain;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-500 ${isArabic ? 'text-right' : 'text-left'}`}
                                >
                                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary transition-all duration-500 text-primary group-hover:text-white ${isArabic ? 'ml-auto' : ''}`}>
                                        <Icon size={14} />
                                    </div>
                                    <h3 className={`text-base sm:text-lg font-black text-white italic tracking-tight mb-2 ${isArabic ? 'font-arabic' : ''}`}>{sp.title}</h3>
                                    <p className={`text-[10px] sm:text-[11px] font-semibold text-white/30 leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>{sp.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CTA — clean minimal
            ══════════════════════════════════ */}
            <section className="relative py-16 lg:py-28 bg-white overflow-hidden">
                <div className="container relative z-10 px-6 sm:px-16 max-w-7xl mx-auto">
                    <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center ${isArabic ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className={isArabic ? 'w-full' : ''}>
                            <p className={`text-[7px] sm:text-[8px] font-black tracking-[0.4em] uppercase text-primary mb-4 sm:mb-5 ${isArabic ? 'font-arabic' : ''}`}>
                                {t('specialties_page.cta.badge')}
                            </p>
                            <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-secondary tracking-tighter italic leading-[0.9] ${isArabic ? 'font-arabic' : ''}`}>
                                {t('specialties_page.cta.title')}<br />
                                <span className="text-primary not-italic">{t('specialties_page.cta.title_highlight')}</span>
                            </h3>
                        </div>

                        <div className={`flex flex-col gap-2.5 sm:gap-3 w-full lg:max-w-xs ${isArabic ? 'lg:ml-auto items-end' : ''}`}>
                            <p className={`text-secondary/30 font-semibold text-[11px] sm:text-xs leading-relaxed mb-2 sm:mb-3 ${isArabic ? 'text-right font-arabic' : ''}`}>
                                {t('specialties_page.cta.desc')}
                            </p>
                            <button
                                onClick={openAppointmentModal}
                                className={`group flex items-center justify-between gap-4 bg-secondary text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-black text-xs sm:text-sm hover:bg-primary transition-all duration-400 ${isArabic ? 'flex-row-reverse font-arabic' : ''}`}
                            >
                                <span>{t('specialties_page.cta.button')}</span>
                                <ArrowUpRight size={14} className={`group-hover:rotate-45 transition-transform ${isArabic ? 'rotate-180' : ''}`} />
                            </button>
                            <a
                                href="tel:0528832466"
                                className={`flex items-center gap-3 border border-slate-100 text-secondary/40 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-black text-xs sm:text-sm hover:border-secondary/20 hover:text-secondary transition-all duration-400 ${isArabic ? 'flex-row-reverse font-arabic' : ''}`}
                            >
                                <Phone size={14} className="text-primary" />
                                <span>05 28 83 24 66</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Specialties