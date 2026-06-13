import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Phone, MessageCircle, MapPin } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import ReviewTicker from './ReviewTicker'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '../../context/ModalContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { t, i18n } = useTranslation()
    const { openAppointmentModal } = useModal()
    const location = useLocation()
    const isArabic = i18n.language === 'ar'

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/a-propos' },
        { name: t('nav.specialties'), path: '/specialites' },
        { name: t('nav.blog'), path: '/blog' },
        { name: t('nav.contact'), path: '/contact' },
    ]

    const contactActions = [
        { icon: Phone, href: "tel:0528832466", label: isArabic ? 'اتصال' : 'Appeler', color: "bg-primary/10 text-primary hover:bg-primary hover:text-white" },
        { icon: MessageCircle, href: "https://wa.me/212641702524", label: 'WhatsApp', color: "bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white" },
        { icon: MapPin, href: "https://www.google.com/maps/search/?api=1&query=Dr+Lamiae+Lachhab+Neurologue+Inezgane", label: isArabic ? 'موقعنا' : 'Itinéraire', color: "bg-secondary/5 text-secondary hover:bg-secondary hover:text-white" }
    ]

    return (
        <>
            <div className="fixed w-full z-[110] top-0 left-0">
                <ReviewTicker />
            </div>
            <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-1 lg:py-2 mt-0 lg:mt-8' : 'py-3 lg:py-5 mt-0 lg:mt-9'}`}>
                <div className="container max-w-7xl mx-auto px-4">
                    {/* Vertical stack for mobile to include the contact bar */}
                    <div className={`flex flex-col gap-2 rounded-[1.5rem] lg:rounded-[2.5rem] p-1.5 lg:p-0 transition-all duration-700 ${scrolled ? 'shadow-xl' : ''}`}>

                        {/* Main Navbar Row */}
                        <div className={`relative flex justify-between items-center px-4 lg:px-10 py-2 lg:py-3 rounded-full lg:rounded-[2.5rem] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-2xl border border-slate-200/50 shadow-none' : 'bg-white/40 backdrop-blur-md border border-white/40 shadow-sm'} ${isArabic ? 'flex-row-reverse' : ''}`}>
                            {/* Logo */}
                            <Link to="/" className={`flex items-center gap-2 lg:gap-4 group ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                                <div className="relative w-10 h-10 lg:w-14 lg:h-14 overflow-hidden rounded-full lg:rounded-2xl bg-white shadow-inner flex items-center justify-center group-hover:scale-105 transition-all duration-500 border border-slate-100 p-1">
                                    <img
                                        src="/logo.png"
                                        alt="Dr. Lamiae Lachhab Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[10px] sm:text-xs lg:text-xl font-black text-secondary leading-none tracking-tight uppercase group-hover:text-primary transition-colors ${isArabic ? 'font-arabic' : ''}`}>{t('hero.title')}</span>
                                    <span className={`text-[8px] lg:text-[10px] font-bold text-primary leading-tight tracking-widest uppercase opacity-70 italic ${isArabic ? 'font-arabic' : ''}`}>
                                        {isArabic ? 'طبيبة أخصائية في أمراض الأعصاب' : t('hero.subtitle')}
                                    </span>
                                </div>
                            </Link>

                            {/* Desktop Nav Actions */}
                            <div className={`hidden lg:flex items-center gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                <div className={`flex items-center gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-2 group/nav ${location.pathname === item.path ? 'text-primary' : 'text-secondary/60 hover:text-secondary'} ${isArabic ? 'font-arabic' : ''}`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Desktop Quick Contact Icons */}
                                <div className={`flex items-center gap-2 px-4 border-l border-r border-slate-200/60 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                    {contactActions.map((action, idx) => (
                                        <a
                                            key={idx}
                                            href={action.href}
                                            target={action.icon !== Phone ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            title={action.label}
                                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${action.color} shadow-sm group/icon relative`}
                                        >
                                            <action.icon size={16} />
                                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-secondary text-white text-[8px] font-bold px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap z-[120]">
                                                {action.label}
                                            </span>
                                        </a>
                                    ))}
                                </div>


                            </div>

                            {/* Mobile Burger Menu Button */}
                            <div className="flex lg:hidden items-center gap-2">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/5 text-secondary hover:bg-primary hover:text-white transition-all shadow-sm border border-secondary/5"
                                    aria-label="Menu"
                                >
                                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Contact Quick Bar (Visible only on mobile inside the navbar) */}
                        <div className={`flex lg:hidden items-center justify-between gap-1.5 transition-all duration-500 ${scrolled ? 'px-2' : ''}`}>
                            {contactActions.map((action, idx) => (
                                <a
                                    key={idx}
                                    href={action.href}
                                    target={action.icon !== Phone ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/40 shadow-sm backdrop-blur-md transition-all active:scale-95 ${action.color.split(' ')[0]} ${action.color.split(' ')[1]} ${scrolled ? 'bg-white/80' : 'bg-white/40'}`}
                                >
                                    <action.icon size={14} />
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${isArabic ? 'font-arabic' : ''}`}>
                                        {action.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(30px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 z-[90] bg-white/95 lg:hidden flex flex-col justify-center px-10"
                    >
                        <div className={`flex flex-col gap-5 ${isArabic ? 'text-right items-end' : ''}`}>
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-4xl font-black tracking-tighter transition-all italic ${location.pathname === item.path ? 'text-primary' : 'text-secondary/20 hover:text-secondary'} ${isArabic ? 'font-arabic' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="py-4 border-t border-secondary/5 mt-4 w-full"
                            >
                                <div className={`text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-4 px-1 ${isArabic ? 'text-right' : ''}`}>
                                    {isArabic ? 'اللغة / Language' : 'Langue / Language'}
                                </div>
                                <div className={`inline-block scale-110 ${isArabic ? 'origin-right' : 'origin-left'}`}>
                                    <LanguageSwitcher />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-10 w-full"
                            >
                                <button
                                    onClick={() => {
                                        setIsOpen(false)
                                        openAppointmentModal()
                                    }}
                                    className={`block w-full py-5 bg-primary text-white text-lg font-black text-center rounded-2xl shadow-xl shadow-primary/20 ${isArabic ? 'font-arabic' : ''}`}
                                >
                                    {t('nav.appointment')}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
