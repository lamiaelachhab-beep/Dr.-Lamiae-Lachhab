import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Instagram } from 'lucide-react'
import { NeuralNetwork } from '../common/EEGBackground'

const Footer = () => {
    const { t, i18n } = useTranslation()
    const year = new Date().getFullYear()
    const isArabic = i18n.language === 'ar'

    const mainLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/a-propos' },
        { name: t('nav.specialties'), path: '/specialites' },
    ]

    const secondaryLinks = [
        { name: t('nav.blog'), path: '/blog' },
        { name: t('nav.appointment'), path: '/rdv' },
    ]

    return (
        <footer className={`relative bg-[#0f172a] text-white pt-10 pb-8 overflow-hidden border-t border-white/5 font-sans ${isArabic ? 'text-right' : 'text-left'}`}>
            <NeuralNetwork color="#83cfd2" className="opacity-[0.03] scale-125 rotate-[-5deg]" />

            <div className="container relative z-10 transition-all duration-500 max-w-7xl mx-auto px-4">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 ${isArabic ? 'lg:rtl' : ''}`}>
                    {/* Brand column */}
                    <div className={`lg:col-span-4 space-y-4 ${isArabic ? 'flex flex-col items-end' : ''}`}>
                        <Link to="/" className={`flex items-center gap-4 group ${isArabic ? 'flex-row-reverse' : ''}`}>
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 group-hover:scale-105 transition-transform shadow-lg">
                                <img src="/logo.png" alt="Cabinet Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className={`flex flex-col ${isArabic ? 'text-right' : 'text-left'}`}>
                                <span className={`text-lg font-black leading-none tracking-tighter uppercase text-white ${isArabic ? 'font-arabic' : ''}`}>{t('hero.title')}</span>
                                <span className={`text-[10px] font-black text-primary leading-tight tracking-[0.4em] uppercase mt-0.5 ${isArabic ? 'font-arabic' : ''}`}>
                                    {isArabic ? 'طبيبة أخصائية في أمراض الأعصاب' : t('hero.subtitle')}
                                </span>
                            </div>
                        </Link>
                        <p className={`text-white/50 text-[11px] leading-relaxed max-w-xs font-medium uppercase tracking-wider ${isArabic ? 'font-arabic' : ''}`}>
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-2">
                            <a href="https://instagram.com/dr_lachhab_neurologue" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary text-white/40 hover:text-white transition-all group border border-white/10 shadow-lg">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation column */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        <div className={isArabic ? 'text-right' : ''}>
                            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 opacity-70 ${isArabic ? 'font-arabic' : ''}`}>
                                {isArabic ? 'الملاحة' : 'Navigation'}
                            </h4>
                            <ul className="space-y-2.5">
                                {mainLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.path} className={`text-white/40 hover:text-primary transition-all text-[10px] font-bold uppercase tracking-[0.15em] ${isArabic ? 'font-arabic' : ''}`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={isArabic ? 'text-right' : ''}>
                            <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 opacity-70 ${isArabic ? 'font-arabic' : ''}`}>
                                {isArabic ? 'استكشاف' : 'Explorer'}
                            </h4>
                            <ul className="space-y-2.5">
                                {secondaryLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.path} className={`text-white/40 hover:text-primary transition-all text-[10px] font-bold uppercase tracking-[0.15em] ${isArabic ? 'font-arabic' : ''}`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className={`lg:col-span-4 space-y-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5 ${isArabic ? 'text-right' : ''}`}>
                        <div className={`flex gap-3 group ${isArabic ? 'flex-row-reverse' : ''}`}>
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                                <MapPin className="text-primary w-4 h-4" />
                            </div>
                            <p className={`text-white/60 text-[10px] font-semibold leading-tight uppercase tracking-wider ${isArabic ? 'font-arabic' : ''}`}>
                                {t('contact.address_value')}
                            </p>
                        </div>
                        <div className={`flex gap-3 group ${isArabic ? 'flex-row-reverse' : ''}`}>
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                                <Phone className="text-primary w-4 h-4" />
                            </div>
                            <div className={`flex flex-col gap-1.5 ${isArabic ? 'items-end' : ''}`}>
                                <a href="tel:0528832466" className="text-white/60 text-[10px] font-black tracking-widest uppercase hover:text-primary transition-colors leading-none">
                                    05 28 83 24 66
                                </a>
                                <a href="https://wa.me/212641702524" target="_blank" rel="noopener noreferrer" className="text-white/60 text-[10px] font-black tracking-widest uppercase hover:text-primary transition-colors leading-none flex items-center gap-1.5">
                                    06 41 70 25 24 <span className="text-[7px] bg-emerald-500/20 text-emerald-500 px-1 py-0.5 rounded-full font-bold">WA</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
                    <p className={`text-white/10 text-[9px] font-black uppercase tracking-[0.4em] text-center ${isArabic ? 'font-arabic' : ''}`}>
                        © {year} {t('hero.title')}. {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
