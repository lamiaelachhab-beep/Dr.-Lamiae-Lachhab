import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Calendar as  Send, Phone, Clock, Activity, ShieldCheck, HeartPulse } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NeuralNetwork } from './EEGBackground'

const AppointmentModal = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation()
    const isArabic = i18n.language === 'ar'
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [slot, setSlot] = useState('morning')
    const [error, setError] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        if (!name || !date) return

        const selectedDate = new Date(date)
        const day = selectedDate.getDay()
        if (day === 0 || day === 6) {
            setError(t('appointment_modal.invalid_date', 'Veuillez choisir un jour ouvré (Lundi - Vendredi)'))
            return
        }

        setError('')
        const slotText = slot === 'morning' ? t('appointment_modal.slot_morning') : t('appointment_modal.slot_afternoon')
        const message = `Bonjour Dr Lamiae Lachhab, je souhaite prendre un rendez-vous.\n\n👤 Nom: ${name}\n📅 Date: ${date}\n⏰ Créneau: ${slotText}`
        window.open(`https://wa.me/212641702524?text=${encodeURIComponent(message)}`, '_blank')
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-[#0f172a]/80 backdrop-blur-md">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 cursor-pointer"
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 30 }}
                    className="relative w-full max-w-4xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row border border-white/10 my-auto"
                >
                    {/* Left Panel: Information & Branding (Dark) */}
                    <div className="md:w-[40%] bg-secondary p-6 lg:p-12 relative overflow-hidden flex flex-col justify-center items-center text-center shrink-0 min-h-[220px] md:min-h-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                        <NeuralNetwork color="#83cfd2" className="opacity-30 scale-150" />
                        
                        <div className="relative z-10 w-full flex flex-col items-center">
                            {/* Logo with Glow - Smaller on mobile */}
                            <div className="relative mb-4 md:mb-8 group">
                                <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                                <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-2xl md:rounded-[2rem] p-2 md:p-3 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500">
                                    <img src="/logo.png" className="w-full h-full object-contain" onError={(e) => e.target.style.display = 'none'} />
                                    <div className="hidden absolute inset-0 items-center justify-center bg-primary text-white font-black text-2xl md:text-4xl rounded-2xl md:rounded-[2rem]">L</div>
                                </div>
                            </div>

                            <h3 className={`text-xl md:text-2xl lg:text-3xl font-black text-white italic leading-tight mb-1 md:mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                                {t('appointment_modal.welcome')}
                            </h3>
                            <p className="text-primary font-black text-[8px] md:text-[10px] tracking-[0.4em] uppercase opacity-70 mb-4 md:mb-8">
                                {t('appointment_modal.doctor')}
                            </p>

                            <div className="hidden md:flex space-y-4 w-full flex-col">
                                {[
                                    { icon: ShieldCheck, text: "Soins sécurisés" },
                                    { icon: HeartPulse, text: "Écoute attentive" },
                                    { icon: Activity, text: "EEG & ENMG" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-2xl border border-white/5 opacity-60">
                                        <item.icon className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 mt-4 md:mt-8 hidden md:block">
                            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.5em]">{t('appointment_modal.city')}</span>
                        </div>
                    </div>

                    {/* Right Panel: The Form (Light) */}
                    <div className="md:w-[60%] p-6 md:p-12 bg-white relative overflow-y-auto">
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 md:top-8 md:right-8 p-2 md:p-3 bg-slate-50 hover:bg-primary/10 text-secondary/40 hover:text-primary rounded-full transition-all group border border-slate-100 z-20"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform" />
                        </button>

                        <div className={`mb-6 md:mb-10 ${isArabic ? 'text-right' : 'text-left'}`}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-3">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                <span className="text-[9px] font-black text-primary uppercase tracking-widest">Express Booking</span>
                            </div>
                            <h2 className={`text-2xl md:text-3xl font-black text-secondary italic tracking-tight ${isArabic ? 'font-arabic' : ''}`}>
                                {t('nav.appointment')}
                            </h2>
                            <p className={`text-secondary/40 text-xs md:text-sm font-semibold mt-2 ${isArabic ? 'font-arabic' : ''}`}>
                                {t('appointment_modal.info_text')}
                            </p>
                        </div>

                        <form onSubmit={handleSend} className="space-y-4 md:space-y-6">
                            <div className={`grid grid-cols-1 gap-4 md:gap-6 ${isArabic ? 'rtl' : ''}`}>
                                {/* Name Input */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] font-black text-secondary/30 uppercase tracking-widest ml-1">{t('appointment_modal.name_label')}</label>
                                    <div className="relative group">
                                        <div className={`absolute top-1/2 -translate-y-1/2 text-secondary/20 group-focus-within:text-primary transition-colors ${isArabic ? 'right-6' : 'left-6'}`}>
                                            <User size={18} />
                                        </div>
                                        <input
                                            type="text" required value={name} onChange={(e) => setName(e.target.value)}
                                            className={`w-full py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary font-black text-sm ${isArabic ? 'pr-16 text-right' : 'pl-16 text-left'}`}
                                        />
                                    </div>
                                </div>

                                {/* Date Input */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] font-black text-secondary/30 uppercase tracking-widest ml-1">Date souhaitée</label>
                                    <div className="relative group">
                                        <div className={`absolute top-1/2 -translate-y-1/2 text-secondary/20 group-focus-within:text-primary transition-colors ${isArabic ? 'right-6' : 'left-6'}`}>
                                            <Clock size={18} />
                                        </div>
                                        <input
                                            type="date" 
                                            required 
                                            min={new Date().toISOString().split('T')[0]}
                                            value={date} 
                                            onChange={(e) => {
                                                const val = e.target.value
                                                setDate(val)
                                                const d = new Date(val)
                                                const day = d.getDay()
                                                if (day === 0 || day === 6) {
                                                    setError(t('appointment_modal.invalid_date'))
                                                } else {
                                                    setError('')
                                                }
                                            }}
                                            className={`w-full py-4 md:py-5 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary font-black text-sm ${isArabic ? 'pr-16 text-right' : 'pl-16 text-left'}`}
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-[10px] font-black uppercase mt-1 ml-2">{error}</p>}
                                </div>
                            </div>

                            {/* Slot Toggle */}
                            <div className="p-1 md:p-1.5 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-[2rem] flex gap-2">
                                {['morning', 'afternoon'].map((s) => (
                                    <button
                                        key={s} type="button" onClick={() => setSlot(s)}
                                        className={`flex-1 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] tracking-[0.2em] uppercase transition-all duration-500 ${
                                            slot === s ? 'bg-white text-primary shadow-sm scale-[1.02]' : 'text-secondary/20 hover:text-secondary/40'
                                        }`}
                                    >
                                        {s === 'morning' ? t('appointment_modal.slot_morning') : t('appointment_modal.slot_afternoon')}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
                                <button
                                    type="submit"
                                    className="flex-[3] bg-secondary hover:bg-primary text-white py-4 md:py-5 rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 md:gap-4 shadow-xl transition-all active:scale-95 group relative overflow-hidden"
                                >
                                    <span className="relative z-10">{t('appointment_modal.send', 'Envoyer')}</span>
                                    <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                                <a
                                    href="tel:0528832466"
                                    className="flex-1 bg-primary/5 hover:bg-primary/10 border-2 border-primary/10 text-primary flex items-center justify-center rounded-2xl md:rounded-[2rem] transition-all hover:scale-105 active:scale-95 group"
                                >
                                    <Phone size={20} md:size={24} className="group-hover:rotate-12 transition-transform" />
                                </a>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default AppointmentModal
