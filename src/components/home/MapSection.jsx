import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { MapPin, Phone, MessageCircle, Clock, Facebook, Instagram, Linkedin, Accessibility } from 'lucide-react'
import { motion } from 'framer-motion'
import { EEGWave, NeuralNetwork } from '../common/EEGBackground'

const MapSection = () => {
    const { t, i18n } = useTranslation()
    const isArabic = i18n.language === 'ar'

    return (
        <section className="py-12 bg-background relative overflow-hidden font-sans">
            <div className="container relative z-10 px-4 max-w-7xl mx-auto">
                <div className={`grid lg:grid-cols-12 gap-6 items-stretch ${isArabic ? 'lg:rtl' : ''}`}>

                    {/* Left Column (1/3) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* 1. Opening Hours Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${isArabic ? 'text-right' : ''}`}
                        >
                            <div className={`absolute top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-all group-hover:w-36 group-hover:h-36 ${isArabic ? 'left-0 rounded-bl-none rounded-br-[100px]' : 'right-0'}`} />
                            <div className={`flex items-center gap-4 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <Clock size={20} />
                                </div>
                                <h3 className={`text-lg font-black text-secondary uppercase tracking-tight ${isArabic ? 'font-arabic' : ''}`}>{t('map_section.hours_title')}</h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { day: t('map_section.hours_days'), hours: "08:30 - 16:30", active: true },
                                ].map((item, i) => (
                                    <div key={i} className={`flex flex-col gap-2 group/item ${isArabic ? 'items-end' : ''}`}>
                                        <span className="font-bold text-secondary/40 text-[9px] uppercase tracking-[0.2em]">{item.day}</span>
                                        <div className={`flex justify-between items-center bg-slate-50 p-3.5 rounded-2xl border border-slate-100 group-hover/item:border-primary/30 transition-all w-full ${isArabic ? 'flex-row-reverse' : ''}`}>
                                            <span className={`font-black text-secondary text-sm ${isArabic ? 'font-arabic' : ''}`}>{t('map_section.hours_service')}</span>
                                            <span className="bg-primary text-white px-3 py-1 rounded-xl font-black text-[10px] shadow-md shadow-primary/20 uppercase tracking-widest">
                                                {item.hours}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                <div className={`mt-4 p-3 bg-rose-50 rounded-xl border border-rose-100 flex items-center gap-2.5 ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                                    <div className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                                    <p className={`text-[11px] font-black text-rose-900 uppercase tracking-tighter leading-tight ${isArabic ? 'font-arabic' : ''}`}>
                                        {t('map_section.hours_note')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* 1b. Dedicated Accessibility Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className={`bg-white p-5 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-4 group transition-all duration-500 hover:bg-teal-50/30 hover:shadow-teal-100/40 ${isArabic ? 'flex-row-reverse text-right' : ''}`}
                        >
                            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                                <Accessibility size={20} />
                            </div>
                            <p className={`text-[11px] font-black text-secondary uppercase tracking-tighter leading-tight max-w-[160px] ${isArabic ? 'font-arabic' : ''}`}>
                                {t('map_section.accessibility')}
                            </p>
                        </motion.div>

                        {/* 2. Social Media Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className={`bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 group transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5 ${isArabic ? 'text-right' : ''}`}
                        >
                            <h3 className={`text-lg font-black text-secondary mb-6 ${isArabic ? 'font-arabic' : ''}`}>{t('map_section.social_title')}</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { icon: Facebook, label: "Facebook", sub: "Dr Lachhab Lamiae", color: "bg-blue-600", hover: "hover:bg-blue-50", url: "https://web.facebook.com/profile.php?id=100088802815932" },
                                    { icon: Instagram, label: "Instagram", sub: "@dr_lachhab_neurologue", color: "bg-gradient-to-tr from-rose-500 via-pink-500 to-violet-600", hover: "hover:bg-pink-50", url: "https://instagram.com/dr_lachhab_neurologue" },
                                    { icon: Linkedin, label: "LinkedIn", sub: "Lachhab Lamiae", color: "bg-sky-700", hover: "hover:bg-sky-50", url: "#" }
                                ].map((social, i) => (
                                    <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 p-3 bg-slate-50/50 rounded-2xl group/social transition-all border border-transparent hover:border-slate-200 ${social.hover} ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <div className={`w-9 h-9 ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover/social:scale-110 transition-transform`}>
                                            <social.icon size={16} />
                                        </div>
                                        <div>
                                            <p className="font-black text-secondary text-xs leading-none">{social.label}</p>
                                            <p className="text-[9px] text-secondary/40 font-bold mt-1">{social.sub}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (2/3) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* 3. Main Cabinet Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 flex-1 flex flex-col min-h-[420px] group transition-all duration-500 hover:shadow-2xl"
                        >
                            <div className={`p-8 pb-4 flex justify-between items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                                <div className={isArabic ? 'flex flex-col items-end' : ''}>
                                    <h3 className={`text-2xl font-black text-secondary mb-2 tracking-tighter leading-none ${isArabic ? 'font-arabic' : ''}`}>{t('map_section.cabinet_title')}</h3>
                                    <div className={`flex items-center gap-2 text-primary font-bold text-xs ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <MapPin size={14} />
                                        <p>{t('contact.address_value')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-100 flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-rose-400" />
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-amber-100 flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-amber-400" />
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <div className="w-1 h-1 rounded-full bg-emerald-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 relative overflow-hidden group shadow-inner">
                                <div className="absolute inset-0 z-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.691905902766!2d-9.533790800000002!3d30.359704800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c78be54e4567%3A0x131c7b3d4b8e7f8b!2zRHIgTEFDSEhBQiBMYW1pYWXYjCBOZXVyb2xndWUg2KfZhNiv2YPYqtmI2LHYqSDYp9mE2KvYoSDYo9iu2LXYp9im2YrYqSDYp9mE2KzZh9in2LIg2KfZhNi52LXYqNmK!5e0!3m2!1sfr!2sma!4v1773879987607!5m2!1sfr!2sma"
                                        className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                {/* Overlay badge */}
                                <div className={`absolute bottom-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-2xl border border-white/50 flex items-center gap-2 z-10 ${isArabic ? 'right-6 flex-row-reverse' : 'left-6'}`}>
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                                    <span className={`text-[10px] font-black text-secondary tracking-widest uppercase ${isArabic ? 'font-arabic' : ''}`}>{t('map_section.cabinet_open')}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom Action Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 4. Call Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`bg-primary p-8 rounded-[2rem] text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl shadow-primary/20 transition-all duration-500 hover:shadow-primary/40 ${isArabic ? 'text-right' : ''}`}
                            >
                                <div className={`absolute -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none ${isArabic ? '-left-8' : '-right-8'}`}>
                                    <Phone size={160} />
                                </div>
                                <div className="relative z-10">
                                    <div className={`flex items-center gap-3 mb-4 text-white ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                            <Phone size={24} className="fill-white" />
                                        </div>
                                        <h4 className={`text-xl font-black tracking-tight ${isArabic ? 'font-arabic' : ''}`}>{t('map_section.call_title')}</h4>
                                    </div>
                                    <p className="text-white/70 font-bold mb-6 text-base tracking-tight">{t('map_section.call_desc')}</p>
                                    <a href="tel:0528832466" className="bg-white text-primary font-black text-lg py-4 px-6 rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.03] shadow-2xl active:scale-95">
                                        05 28 83 24 66
                                    </a>
                                </div>
                            </motion.div>

                            {/* 5. Message Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`bg-[#0f172a] p-8 rounded-[2rem] text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl shadow-slate-900/20 transition-all duration-500 hover:shadow-slate-900/40 ${isArabic ? 'text-right' : ''}`}
                            >
                                <div className={`absolute -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none ${isArabic ? '-left-8' : '-right-8'}`}>
                                    <MessageCircle size={160} />
                                </div>
                                <div className="relative z-10">
                                    <div className={`flex items-center gap-3 mb-4 text-white ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                                            <MessageCircle size={24} className="fill-white" />
                                        </div>
                                        <h4 className={`text-xl font-black tracking-tight ${isArabic ? 'font-arabic' : ''}`}>{t('map_section.whatsapp_title')}</h4>
                                    </div>
                                    <p className="text-white/50 font-bold mb-6 text-sm uppercase tracking-widest">{t('map_section.whatsapp_desc')}</p>
                                    <a href="https://wa.me/212641702524" className="bg-white text-[#0f172a] font-black text-lg py-4 px-6 rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.03] shadow-2xl active:scale-95">
                                        06 41 70 25 24
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapSection
