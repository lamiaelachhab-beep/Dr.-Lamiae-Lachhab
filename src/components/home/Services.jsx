import React from 'react'
import { useTranslation } from 'react-i18next'
import { Brain, Activity, Zap, ChevronRight, Microscope, ShieldCheck, ArrowRight, Stethoscope, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { EEGWave } from '../common/EEGBackground'
import { useModal } from '../../context/ModalContext'

const ServiceCard = ({ icon: Icon, title, description, benefits, delay, index, discoverLabel }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="group relative"
    >
        <div className="h-full bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 relative overflow-hidden flex flex-col">

            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary/60 via-primary to-secondary rounded-t-[2.5rem]" />

            <div className="p-6 sm:p-10 flex flex-col flex-1">
                {/* Number Background */}
                <span className="absolute -right-4 -top-2 text-[6rem] sm:text-[10rem] font-black text-slate-50 group-hover:text-primary/5 transition-colors duration-500 pointer-events-none select-none leading-none">
                    0{index + 1}
                </span>

                <div className="relative z-10 flex-1">
                    {/* Icon + Title — stack on mobile, row on md+ */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5 mb-7">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-secondary tracking-tighter leading-tight italic sm:mt-1 break-words">
                            {title}
                        </h3>
                    </div>

                    <p className="text-sm text-secondary/60 mb-8 leading-relaxed font-bold">
                        {description}
                    </p>

                    {/* Benefits - Modernized List/Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-10">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2.5 group/item cursor-default"
                            >
                                <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300 translate-y-[0px]" />
                                <span className="text-[10px] sm:text-[11px] font-black text-secondary/70 uppercase tracking-widest leading-relaxed group-hover/item:text-secondary transition-colors">
                                     {benefit}
                                 </span>
                            </div>
                        ))}
                    </div>
                </div>

                <Link to="/specialites" className="relative z-10 inline-flex items-center gap-3 group/btn self-start">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white text-[11px] font-black uppercase tracking-widest group-hover/btn:bg-primary transition-all duration-300">
                        {discoverLabel}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </div>
    </motion.div>
)

const Services = () => {
    const { t } = useTranslation()
    const { openAppointmentModal } = useModal()

    const servicesData = [
        {
            icon: Stethoscope,
            title: t('services_section.pathologies.title'),
            description: t('services_section.pathologies.desc'),
            benefits: [
                t('services_section.pathologies.b1'),
                t('services_section.pathologies.b2'),
                t('services_section.pathologies.b3'),
                t('services_section.pathologies.b4'),
                t('services_section.pathologies.b5'),
            ],
        },
        {
            icon: Award,
            title: t('services_section.expertise.title'),
            description: t('services_section.expertise.desc'),
            benefits: [
                t('services_section.expertise.b1'),
                t('services_section.expertise.b2'),
                t('services_section.expertise.b3'),
            ],
        },
        {
            icon: Zap,
            title: t('services_section.enmg.title'),
            description: t('services_section.enmg.desc'),
            benefits: [
                t('services_section.enmg.b1'),
                t('services_section.enmg.b2'),
                t('services_section.enmg.b3'),
                t('services_section.enmg.b4'),
            ],
        },
        {
            icon: Activity,
            title: t('services_section.eeg.title'),
            description: t('services_section.eeg.desc'),
            benefits: [
                t('services_section.eeg.b1'),
                t('services_section.eeg.b2'),
                t('services_section.eeg.b3'),
            ],
        },
    ]

    const ctaItems = [
        { label: t('services_section.quality_label'), sub: t('services_section.quality_sub') },
        { label: t('services_section.followup_label'), sub: t('services_section.followup_sub') },
        { label: t('services_section.expertise_label'), sub: t('services_section.expertise_sub') },
    ]

    return (
        <section className="py-16 relative overflow-hidden bg-background font-sans">
            <EEGWave className="top-1/4 -right-1/4 opacity-5 rotate-12 scale-150" />

            <div className="container relative z-10 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/20 text-primary rounded-full mb-6 font-black text-[10px] tracking-widest uppercase"
                    >
                        <Microscope size={14} />
                        {t('services_section.badge')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-black text-secondary mb-6 tracking-tighter leading-[1.1]"
                    >
                        {t('services_section.title_line1')} <br />
                        <span className="text-primary italic">{t('services_section.title_line2')}</span>
                    </motion.h2>

                    <p className="text-base text-secondary/60 font-bold leading-relaxed">
                        {t('services_section.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            index={index}
                            delay={index * 0.1}
                            discoverLabel={t('services_section.cta_discover')}
                        />
                    ))}
                </div>

                {/* Refined CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mt-20 p-8 lg:p-12 bg-secondary rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                        <Brain size={300} />
                    </div>

                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-3xl lg:text-4xl font-black mb-6 leading-none italic tracking-tighter">
                            {t('services_section.cta_title')}<span className="text-primary">{t('services_section.cta_title_highlight')}</span>
                        </h3>
                        <p className="text-base text-white/50 mb-10 leading-relaxed font-bold">
                            {t('services_section.cta_desc')}
                        </p>
                        <button 
                            onClick={openAppointmentModal}
                            className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white hover:bg-white hover:text-secondary rounded-2xl text-base font-black transition-all shadow-2xl shadow-primary/20"
                        >
                            {t('services_section.cta_button')}
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="relative z-10 hidden lg:grid grid-cols-1 gap-6 border-l border-white/10 pl-16">
                        {ctaItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-black tracking-tight">{item.label}</p>
                                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
