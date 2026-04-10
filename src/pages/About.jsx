import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Award, GraduationCap, CheckCircle2, Heart, ShieldCheck, Microscope,  ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { NeuralNetwork, EEGWave } from '../components/common/EEGBackground'
import { useModal } from '../context/ModalContext'



const About = () => {
    const { t, i18n } = useTranslation()
    const { openAppointmentModal } = useModal()
    const isArabic = i18n.language === 'ar'

    const diplomasKeys = ['medecine', 'speciality', 'enmg', 'eeg_adult', 'eeg_pediatric']

    const values = [
        {
            icon: Heart,
            title: t('about.values.v1_title'),
            desc: t('about.values.v1_desc')
        },
        {
            icon: ShieldCheck,
            title: t('about.values.v2_title'),
            desc: t('about.values.v2_desc')
        },
        {
            icon: Microscope,
            title: t('about.values.v3_title'),
            desc: t('about.values.v3_desc')
        }
    ]

    return (
        <div className="relative overflow-hidden bg-white selection:bg-primary/20 font-sans">
            <Helmet>
                <title>{t('nav.about')} | Dr. Lamiae Lachhab</title>
            </Helmet>

            {/* Hero Section - Elite Introduction */}
            <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 bg-slate-50/50">
                <NeuralNetwork color="#83cfd2" className="opacity-10 scale-125 rotate-[-10deg] absolute top-[-10%] right-[-10%]" />
                <EEGWave className="top-16 right-0 w-2/3 opacity-5 absolute" />

                <div className="container relative z-10 px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={isArabic ? 'text-right' : 'text-left'}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/5 text-secondary rounded-full mb-6 font-black text-[10px] tracking-widest uppercase"
                            >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#83cfd2]" />
                                {t('about.hero.badge')}
                            </motion.div>

                            <h1 className={`text-4xl lg:text-5xl font-black text-secondary leading-[1.05] tracking-tighter mb-6 italic ${isArabic ? 'font-arabic' : ''}`}>
                                {t('about.hero.title')} <span className="text-primary italic">{t('about.hero.title_highlight')}</span>
                            </h1>

                            <p className={`text-base text-secondary/60 leading-relaxed mb-10 font-bold opacity-80 ${isArabic ? 'font-arabic' : ''}`}>
                                {t('about.bio')}
                            </p>

                            <div className={`flex flex-wrap gap-4 ${isArabic ? 'justify-end' : 'justify-start'}`}>
                                {[
                                    { icon: Award, text: t('about.hero.badge_aggre') },
                                    { icon: CheckCircle2, text: t('about.hero.badge_spec') }
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100 group transition-all hover:border-primary/20">
                                        <badge.icon className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className={`text-[10px] font-black text-secondary uppercase tracking-widest ${isArabic ? 'font-arabic' : ''}`}>{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative lg:ml-auto"
                        >
                            <div className="relative z-10 p-2 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 max-w-sm ml-auto mr-auto lg:mr-0">
                                <div className="rounded-[2.2rem] overflow-hidden aspect-[4/5] relative group">
                                    <img
                                        src="profile.jpeg"
                                        alt="Dr. Lamiae Lachhab"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Diplomas Section - Optimized Path */}
            <section className="py-12 bg-secondary text-white relative overflow-hidden font-sans">
                <NeuralNetwork color="#83cfd2" className="opacity-[0.05] scale-150 absolute top-0 left-0" />
                <EEGWave className="bottom-0 left-0 w-full opacity-[0.03] absolute" />

                <div className="container relative z-10 px-4 max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full mb-4 font-black text-[9px] tracking-widest uppercase">
                            <GraduationCap size={14} />
                            {t('about.diplomas.section_badge')}
                        </div>
                        <h2 className={`text-3xl lg:text-5xl font-black mb-4 leading-none tracking-tighter italic ${isArabic ? 'font-arabic' : ''}`}>
                            {t('about.diplomas.section_title')} <br />
                            <span className="text-primary italic text-2xl lg:text-4xl">{t('about.diplomas.section_title_highlight')}</span>
                        </h2>
                    </div>

                    {/* Compact Elite Vertical Path */}
                    <div className="relative space-y-4 before:absolute before:inset-0 before:ml-[1.25rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                        {diplomasKeys.map((key, i) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            >
                                {/* Dot on Timeline */}
                                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/40 bg-secondary absolute left-2 md:left-1/2 md:-ml-3 shadow-lg transition-all group-hover:scale-110 group-hover:bg-primary group-hover:border-primary z-20">
                                    <CheckCircle2 size={10} className="text-primary group-hover:text-white transition-colors" />
                                </div>

                                {/* Compact Content Card */}
                                <div className={`w-[calc(100%-2.5rem)] md:w-[calc(50%-2rem)] ml-auto md:ml-0 bg-white/5 p-5 lg:p-6 rounded-[1.5rem] lg:rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all duration-500 hover:bg-white/[0.07] shadow-lg group/card relative overflow-hidden ${isArabic ? 'text-right' : 'text-left'}`}>
                                    <span className={`absolute -right-2 -top-2 text-6xl font-black text-white/[0.02] group-hover:text-primary/5 transition-colors pointer-events-none italic select-none ${isArabic ? 'left-4' : 'right-4'}`}>
                                        0{i + 1}
                                    </span>

                                    <div className={`relative z-10 flex flex-col gap-1 ${isArabic ? 'items-end' : 'items-start'}`}>
                                        <h3 className={`text-base lg:text-lg font-black tracking-tight leading-tight group-hover:text-primary transition-colors italic ${isArabic ? 'font-arabic' : ''}`}>
                                            {t(`about.diplomas.${key}`)}
                                        </h3>
                                        <div className={`mt-3 flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                            <Award size={12} className="text-primary/40" />
                                            <span className={`text-[8px] font-black uppercase tracking-widest text-white/20 ${isArabic ? 'font-arabic' : ''}`}>
                                                {t('about.diplomas.validation')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section - Artistic Cards */}
            <section className="py-20 relative bg-white overflow-hidden">
                <div className="container relative z-10 px-4 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
                        <div className="lg:col-span-12 text-center">
                            <h2 className={`text-4xl lg:text-5xl font-black text-secondary tracking-tighter mb-4 italic ${isArabic ? 'font-arabic' : ''}`}>
                                {t('about.values.section_title')} <span className="text-primary italic">{t('about.values.section_title_highlight')}</span>
                            </h2>
                            <p className={`text-base text-secondary/40 font-bold tracking-widest uppercase ${isArabic ? 'font-arabic' : ''}`}>
                                {t('about.values.subtitle')}
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary/20 transition-all duration-500 h-full group text-center relative overflow-hidden">
                                    <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-secondary transition-all duration-500">
                                        <v.icon size={32} className="text-primary group-hover:text-white transition-all scale-110" />
                                    </div>
                                    <h3 className={`text-2xl font-black text-secondary mb-4 tracking-tighter italic group-hover:text-primary transition-colors ${isArabic ? 'font-arabic' : ''}`}>
                                        {v.title}
                                    </h3>
                                    <p className={`text-sm text-secondary/60 leading-relaxed font-bold ${isArabic ? 'font-arabic' : ''}`}>
                                        {v.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <div className="container px-4 max-w-7xl mx-auto pb-20">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative bg-primary rounded-[3rem] p-8 lg:p-16 overflow-hidden shadow-2xl shadow-primary/30"
                >
                    <NeuralNetwork color="#ffffff" className="opacity-10 scale-150 absolute top-0" />
                    <div className={`relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-white ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`max-w-xl ${isArabic ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                            <h3 className={`text-4xl lg:text-4xl font-black mb-4 tracking-tighter leading-none italic ${isArabic ? 'font-arabic' : ''}`}>
                                {t('about.cta.title')}
                            </h3>
                            <p className={`text-lg font-bold opacity-70 ${isArabic ? 'font-arabic' : ''}`}>
                                {t('about.cta.desc')}
                            </p>
                        </div>
                        <button 
                            onClick={openAppointmentModal}
                            className={`px-12 py-5 bg-white text-secondary hover:bg-secondary hover:text-white rounded-2xl text-lg font-black transition-all shadow-2xl flex items-center gap-4 group/cta ${isArabic ? 'flex-row-reverse font-arabic' : ''}`}
                        >
                            {t('about.cta.button')}
                            <ArrowUpRight className={`group-hover/cta:rotate-45 transition-transform w-6 h-6 ${isArabic ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
