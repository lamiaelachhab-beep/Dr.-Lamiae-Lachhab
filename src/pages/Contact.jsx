import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Instagram, Send, MessageCircle,  Brain } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { NeuralNetwork, EEGWave } from '../components/common/EEGBackground'

const Contact = () => {
    const { t, i18n } = useTranslation()
    const isArabic = i18n.language === 'ar'
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        alert(t('contact_page.form.alert_success'))
    }

    return (
        <div className="relative overflow-hidden bg-primary/5">
            <Helmet>
                <title>{t('nav.contact')} | Dr. Lamiae Lachhab</title>
            </Helmet>

            <NeuralNetwork color="#83cfd2" className="opacity-10 scale-150 rotate-12" />

            {/* Header Section */}
            <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 bg-white">
                <EEGWave className="top-1/2 left-0 w-full opacity-10" />
                <div className={`container relative z-10 text-center ${isArabic ? 'font-arabic' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full mb-6 font-bold text-[10px] tracking-[0.2em] uppercase"
                    >
                        {t('contact_page.hero.badge')}
                    </motion.div>
                    <h1 className={`text-4xl lg:text-6xl font-black text-secondary tracking-tighter mb-6 ${isArabic ? 'leading-tight' : ''}`}>
                        {t('contact_page.hero.title')} <br />
                        <span className="text-primary italic">{t('contact_page.hero.title_highlight')}</span>
                    </h1>
                    <p className="text-lg text-secondary/60 leading-relaxed max-w-2xl mx-auto opacity-80 font-medium">
                        {t('contact_page.hero.desc')}
                    </p>
                </div>
            </section>

            <div className="container py-20 px-4 max-w-7xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-16 ${isArabic ? 'lg:rtl' : ''}`}>
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`space-y-12 ${isArabic ? 'text-right' : 'text-left'}`}
                    >
                        <div className="space-y-6">
                            <h2 className={`text-3xl lg:text-4xl font-black text-secondary tracking-tight ${isArabic ? 'font-arabic' : ''}`}>
                                {t('contact_page.details.title')}
                            </h2>
                            <div className={`w-16 h-1.5 bg-primary rounded-full ${isArabic ? 'ml-auto' : ''}`} />
                        </div>

                        <div className="grid gap-6">
                            {[
                                { icon: Phone, title: t('contact_page.details.phone'), value: "05 28 33 00 33", sub: t('contact_page.details.sec'), color: "bg-primary" },
                                { icon: MessageCircle, title: t('contact_page.details.whatsapp'), value: "06 41 70 25 24", sub: t('contact_page.details.urgency'), color: "bg-primary" },
                                { icon: MapPin, title: t('contact_page.details.address'), value: "Bd Mohamed V, Inezgane", sub: t('contact_page.details.building'), color: "bg-secondary" }
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center gap-6 p-6 bg-white rounded-2xl border border-primary/5 shadow-sm group hover:shadow-md transition-all ${isArabic ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div className={isArabic ? 'text-right' : ''}>
                                        <p className="text-[10px] font-black uppercase text-primary mb-1 tracking-widest">{item.title}</p>
                                        <p className="text-xl font-bold text-secondary tracking-tight">{item.value}</p>
                                        <p className="text-xs text-secondary/60 opacity-60 font-medium">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={`flex gap-4 ${isArabic ? 'justify-end' : ''}`}>
                            <a href="#" className="w-10 h-10 bg-white shadow-sm border border-primary/5 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white shadow-sm border border-primary/5 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 lg:p-16 rounded-[3rem] lg:rounded-[4rem] shadow-[0_32px_120px_-20px_rgba(0,0,0,0.1)] border border-primary/5 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className={`text-3xl lg:text-4xl font-black text-secondary mb-12 tracking-tighter italic ${isArabic ? 'text-right font-arabic' : ''}`}>
                                {t('contact_page.form.title')}
                            </h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                                <div className={`grid sm:grid-cols-2 gap-6 sm:gap-8 ${isArabic ? 'rtl' : ''}`}>
                                    <div className="space-y-3">
                                        <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary ${isArabic ? 'text-right block mr-4' : 'ml-4'}`}>
                                            {t('contact_page.form.labels.name')}
                                        </label>
                                        <input
                                            {...register("name", { required: true })}
                                            className={`w-full px-6 sm:px-8 py-4 sm:py-5 bg-primary/5 rounded-[1.5rem] sm:rounded-[2rem] border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-secondary ${isArabic ? 'text-right' : ''}`}
                                            placeholder={t('contact_page.form.placeholders.name')}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary ${isArabic ? 'text-right block mr-4' : 'ml-4'}`}>
                                            {t('contact_page.form.labels.contact')}
                                        </label>
                                        <input
                                            {...register("contact", { required: true })}
                                            className={`w-full px-6 sm:px-8 py-4 sm:py-5 bg-primary/5 rounded-[1.5rem] sm:rounded-[2rem] border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-secondary ${isArabic ? 'text-right' : ''}`}
                                            placeholder={t('contact_page.form.placeholders.contact')}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary ${isArabic ? 'text-right block mr-4' : 'ml-4'}`}>
                                        {t('contact_page.form.labels.subject')}
                                    </label>
                                    <input
                                        {...register("subject")}
                                        className={`w-full px-6 sm:px-8 py-4 sm:py-5 bg-primary/5 rounded-[1.5rem] sm:rounded-[2rem] border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-secondary ${isArabic ? 'text-right' : ''}`}
                                        placeholder={t('contact_page.form.placeholders.subject')}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary ${isArabic ? 'text-right block mr-4' : 'ml-4'}`}>
                                        {t('contact_page.form.labels.message')}
                                    </label>
                                        <textarea
                                        {...register("message", { required: true })}
                                        rows="5"
                                        className={`w-full px-6 sm:px-8 py-5 sm:py-6 bg-primary/5 rounded-[2rem] sm:rounded-[2.5rem] border border-transparent focus:border-primary focus:bg-white transition-all outline-none font-bold text-secondary resize-none ${isArabic ? 'text-right' : ''}`}
                                        placeholder={t('contact_page.form.placeholders.message')}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`w-full py-5 sm:py-6 bg-primary text-white rounded-full text-lg sm:text-xl font-black transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 group ${isArabic ? 'flex-row-reverse font-arabic font-black' : ''}`}
                                >
                                    {t('contact_page.form.button')}
                                    <Send className={`group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform ${isArabic ? 'rotate-180' : ''}`} />
                                </button>
                            </form>
                        </div>

                        {/* Background Pattern */}
                        <div className={`absolute bottom-0 p-8 opacity-[0.03] pointer-events-none ${isArabic ? 'left-0' : 'right-0'}`}>
                            <Brain size={300} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact
