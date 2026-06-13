import React from 'react'
import { useTranslation } from 'react-i18next'
import { Award, Heart, ShieldCheck, Microscope, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { NeuralNetwork } from '../common/EEGBackground'

const WhyChoose = () => {
    const { t, i18n } = useTranslation()
    const isArabic = i18n.language === 'ar'

    const reasons = [
        {
            icon: Award,
            title: t('why_choose.r1_title'),
            desc: t('why_choose.r1_desc'),
            color: "bg-primary/10 text-primary border-primary/20"
        },
        {
            icon: Heart,
            title: t('why_choose.r2_title'),
            desc: t('why_choose.r2_desc'),
            color: "bg-secondary/10 text-secondary border-secondary/20"
        },
        {
            icon: Microscope,
            title: t('why_choose.r3_title'),
            desc: t('why_choose.r3_desc'),
            color: "bg-primary/10 text-primary border-primary/20"
        }
    ]

    return (
        <section className={`py-12 bg-background relative overflow-hidden font-sans ${isArabic ? 'text-right' : ''}`}>
            <NeuralNetwork color="#83cfd2" className="opacity-10 scale-125 rotate-[-15deg] pointer-events-none" />

            <div className="container relative z-10 px-4 max-w-7xl mx-auto">
                <div className={`grid lg:grid-cols-12 gap-10 items-center ${isArabic ? 'lg:rtl' : ''}`}>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6"
                    >
                        <div className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-secondary/5 text-secondary rounded-full font-black text-[10px] uppercase tracking-widest ${isArabic ? 'flex-row-reverse' : ''}`}>
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                            {t('why_choose.badge')}
                        </div>

                        <h2 className={`text-3xl lg:text-5xl font-black text-secondary leading-[1.1] mb-6 tracking-tighter ${isArabic ? 'font-arabic' : ''}`}>
                            {t('why_choose.title')} <br />
                            <span className="text-primary italic">{t('why_choose.title_highlight')}</span>
                        </h2>

                        <p className={`text-base text-secondary/60 mb-8 leading-relaxed max-w-lg font-bold ${isArabic ? 'mr-0 ml-auto' : ''}`}>
                            {t('why_choose.desc')}
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`inline-block ${isArabic ? 'mr-0 ml-auto' : ''}`}
                        >
                            <a 
                                href="/a-propos" 
                                className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-widest text-secondary hover:bg-slate-50 hover:border-primary/30 transition-all shadow-sm"
                            >
                                {t('common.learn_more')}
                                <ArrowUpRight size={14} className="text-primary" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Cards Column */}
                    <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isArabic ? 'text-right flex flex-col items-end' : ''} ${i === 2 ? 'sm:col-span-2 lg:max-w-[400px] lg:mx-auto' : ''}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm ${reason.color} group-hover:scale-110 group-hover:rotate-3`}>
                                    <reason.icon size={24} />
                                </div>
                                <h3 className={`text-xl font-black text-secondary mb-3 tracking-tight leading-none ${isArabic ? 'font-arabic' : ''}`}>{reason.title}</h3>
                                <p className="text-secondary/60 text-sm font-bold leading-relaxed">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
