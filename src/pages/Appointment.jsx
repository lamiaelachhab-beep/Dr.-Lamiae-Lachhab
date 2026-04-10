import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, Phone, MessageCircle, MapPin,  CheckCircle2,   } from 'lucide-react'
import { motion } from 'framer-motion'
import { NeuralNetwork, EEGWave } from '../components/common/EEGBackground'

const Appointment = () => {
    const { t, i18n } = useTranslation()
    const isArabic = i18n.language === 'ar'

    const schedule = [
        { day: t('appointment_page.schedule.days.mon'), hours: "09:00 - 18:00" },
        { day: t('appointment_page.schedule.days.tue'), hours: "09:00 - 18:00" },
        { day: t('appointment_page.schedule.days.wed'), hours: "09:00 - 13:00" },
        { day: t('appointment_page.schedule.days.thu'), hours: "09:00 - 18:00" },
        { day: t('appointment_page.schedule.days.fri'), hours: "09:00 - 17:00" },
        { day: t('appointment_page.schedule.days.sat_sun'), hours: t('appointment_page.schedule.closed') }
    ]

    const appointmentChannels = [
        {
            icon: Phone,
            title: t('appointment_page.channels.call'),
            value: "05 28 83 24 66",
            color: "bg-primary",
            link: "tel:0528832466"
        },
        {
            icon: MessageCircle,
            title: t('appointment_page.channels.whatsapp'),
            value: "06 41 70 25 24",
            color: "bg-emerald-500",
            link: "https://wa.me/212641702524"
        }
    ]

    return (
        <div className="relative overflow-hidden bg-white selection:bg-primary/20 font-sans">
            <Helmet>
                <title>{t('nav.appointment')} | Dr. Lamiae Lachhab</title>
            </Helmet>

            {/* Compact Header */}
            <section className="relative pt-40 pb-12 lg:pt-48 lg:pb-16 bg-[#0f172a] text-white overflow-hidden">
                <NeuralNetwork color="#83cfd2" className="opacity-10 scale-125 absolute inset-0" />
                <div className={`container relative z-10 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex-1 ${isArabic ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-primary rounded-full mb-4 font-black text-[9px] uppercase tracking-widest">
                            <Calendar className="w-3 h-3" />
                            {t('appointment_page.hero.badge')}
                        </div>
                        <h1 className={`text-4xl lg:text-6xl font-black tracking-tighter mb-4 italic leading-tight ${isArabic ? 'font-arabic' : ''}`}>
                            {t('appointment_page.hero.title')} <span className="text-primary">{t('appointment_page.hero.title_highlight')}</span>
                        </h1>
                        <p className={`text-sm lg:text-base text-white/50 max-w-lg mx-auto lg:mx-0 font-medium ${isArabic ? 'font-arabic' : ''}`}>
                            {t('appointment_page.hero.desc')}
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="hidden lg:block">
                        <Calendar size={120} className="text-primary opacity-20" />
                    </motion.div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-12 bg-white">
                <div className="container px-4 max-w-6xl mx-auto">
                    <div className={`grid lg:grid-cols-2 gap-8 items-start ${isArabic ? 'lg:rtl' : ''}`}>

                        {/* Left: Quick Actions & Location */}
                        <div className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {appointmentChannels.map((channel, i) => (
                                    <motion.a
                                        key={i}
                                        href={channel.link}
                                        target={channel.icon === MessageCircle ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className={`bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all group ${isArabic ? 'text-right items-end' : ''}`}
                                    >
                                        <div className={`w-10 h-10 ${channel.color} text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                            <channel.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{channel.title}</p>
                                            <p className="text-lg font-black text-secondary tracking-tight tabular-nums">{channel.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className={`bg-[#0f172a] p-6 rounded-3xl text-white flex items-center gap-6 shadow-xl relative overflow-hidden group ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                                <div className={`absolute top-0 w-16 h-16 bg-primary/10 rounded-bl-full ${isArabic ? 'left-0 rounded-br-full rounded-bl-none' : 'right-0'}`} />
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className={`text-sm font-black tracking-tight mb-1 ${isArabic ? 'font-arabic' : ''}`}>{t('appointment_page.location.title')}</h4>
                                    <p className={`text-xs text-white/40 leading-relaxed font-semibold ${isArabic ? 'font-arabic' : ''}`}>
                                        {t('appointment_page.location.address')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Schedule */}
                        <motion.div
                            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`bg-slate-50 p-8 rounded-3xl border border-slate-100 ${isArabic ? 'text-right' : ''}`}
                        >
                            <div className={`flex items-center gap-3 mb-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                    <Clock size={16} />
                                </div>
                                <h2 className={`text-sm font-black text-secondary tracking-widest uppercase ${isArabic ? 'font-arabic' : ''}`}>{t('appointment_page.schedule.title')}</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {schedule.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`flex flex-col p-4 rounded-2xl border transition-all ${item.hours === t('appointment_page.schedule.closed') ? 'bg-secondary/5 opacity-50 border-transparent' : 'bg-white border-slate-100'}`}
                                    >
                                        <span className={`text-[10px] font-black text-secondary/40 uppercase tracking-widest mb-1 ${isArabic ? 'font-arabic' : ''}`}>{item.day}</span>
                                        <span className={`text-[11px] font-black text-secondary tracking-tight ${isArabic ? 'font-arabic' : ''}`}>{item.hours}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={`mt-6 flex items-center gap-3 text-primary bg-primary/5 p-4 rounded-xl ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                                <CheckCircle2 size={16} className="shrink-0" />
                                <p className={`text-[10px] font-bold italic leading-tight ${isArabic ? 'font-arabic' : ''}`}>
                                    {t('appointment_page.instruction')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Simplified CTA */}
            <div className="container px-4 max-w-6xl mx-auto pb-16">
                <motion.a
                    href="tel:0528832466"
                    whileHover={{ scale: 1.01 }}
                    className={`flex flex-col md:flex-row items-center justify-between p-8 bg-[#0f172a] rounded-[2.5rem] border border-white/5 shadow-2xl group relative overflow-hidden ${isArabic ? 'md:flex-row-reverse text-right' : 'text-left'}`}
                >
                    <div className={`relative z-10 text-center mb-6 md:mb-0 ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
                        <h3 className={`text-xl lg:text-2xl font-black text-white italic tracking-tight mb-1 ${isArabic ? 'font-arabic' : ''}`}>{t('appointment_page.urgent.title')}</h3>
                        <p className={`text-xs font-bold text-white/30 uppercase tracking-[0.2em] ${isArabic ? 'font-arabic' : ''}`}>{t('appointment_page.urgent.desc')}</p>
                    </div>
                    <div className={`px-8 py-4 bg-primary text-white rounded-2xl text-sm font-black transition-all flex items-center gap-3 shadow-xl group-hover:bg-white group-hover:text-secondary border-2 border-primary ${isArabic ? 'flex-row-reverse font-arabic' : ''}`}>
                        <span>{t('appointment_page.urgent.button')}</span>
                        <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </div>
                    <NeuralNetwork color="#83cfd2" className="opacity-[0.05] absolute top-0 right-0 scale-150" />
                </motion.a>
            </div>
        </div>
    )
}

export default Appointment
