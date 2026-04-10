import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
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

    return (
        <>
            <div className="fixed w-full z-[110] top-0 left-0">
                <ReviewTicker />
            </div>
            <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-1 lg:py-2 mt-0 lg:mt-8' : 'py-3 lg:py-5 mt-0 lg:mt-9'}`}>
                <div className="container max-w-7xl mx-auto px-4">
                    <div className={`relative flex justify-between items-center px-4 lg:px-10 py-2 lg:py-3 rounded-full lg:rounded-[2.5rem] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-xl shadow-slate-200/30 border border-slate-200/50' : 'bg-white/40 backdrop-blur-md border border-white/40 shadow-sm'} ${isArabic ? 'flex-row-reverse' : ''}`}>
                        {/* Logo with Image - Optimized for Mobile */}
                        <Link to="/" className={`flex items-center gap-2 lg:gap-4 group ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                            <div className="relative w-10 h-10 lg:w-14 lg:h-14 overflow-hidden rounded-full lg:rounded-2xl bg-white shadow-inner flex items-center justify-center group-hover:scale-105 transition-all duration-500 border border-slate-100 p-1">
                                <img
                                    src="/logo.png"
                                    alt="Dr. Lamiae Lachhab Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden w-full h-full items-center justify-center bg-primary text-white font-black text-xl">L</div>
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-[10px] sm:text-xs lg:text-xl font-black text-secondary leading-none tracking-tight uppercase group-hover:text-primary transition-colors ${isArabic ? 'font-arabic' : ''}`}>{t('hero.title')}</span>
                                <span className={`text-[8px] lg:text-[10px] font-bold text-primary leading-tight tracking-widest uppercase opacity-70 italic ${isArabic ? 'font-arabic' : ''}`}>
                                    {isArabic ? 'طبيبة أخصائية في أمراض الأعصاب' : t('hero.subtitle')}
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav - Integrated Style */}
                        <div className={`hidden lg:flex items-center gap-10 ${isArabic ? 'flex-row-reverse' : ''}`}>
                            <div className={`flex items-center gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-2 group/nav ${location.pathname === item.path ? 'text-primary' : 'text-secondary/60 hover:text-secondary'} ${isArabic ? 'font-arabic' : ''}`}
                                    >
                                        {item.name}
                                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-primary rounded-full transition-all duration-500 ${location.pathname === item.path ? 'w-1.5 opacity-100' : 'w-0 opacity-0 group-hover/nav:w-1 group-hover/nav:opacity-50'}`} />
                                    </Link>
                                ))}

                                <div className={`ml-4 pl-6 border-l border-slate-200/60 ${isArabic ? 'mr-4 pr-6 border-r border-l-0 ml-0 pl-0' : ''}`}>
                                    <LanguageSwitcher />
                                </div>
                            </div>

                            <Link to="/rdv" className={`px-6 py-3 bg-secondary text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-secondary/15 hover:bg-primary hover:shadow-primary/30 transition-all hover:-translate-y-1 ${isArabic ? 'font-arabic' : ''}`}>
                                {t('nav.appointment')}
                            </Link>
                        </div>

                        {/* Mobile Actions - Simplified */}
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
                </div>
            </nav>

            {/* Premium Mobile Menu Overlay - with Integrated Translation */}
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

                            {/* Translation in mobile menu list */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
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
                                        setIsOpen(false);
                                        openAppointmentModal();
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
