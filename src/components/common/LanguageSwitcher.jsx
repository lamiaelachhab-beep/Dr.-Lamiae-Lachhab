import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown, Check } from 'lucide-react'

const LANGUAGES = [
    { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' },
    { code: 'ar', label: 'العربية',  flag: '🇲🇦', short: 'AR' },
    { code: 'en', label: 'English',  flag: '🇬🇧', short: 'EN' },
    { code: 'es', label: 'Español',  flag: '🇪🇸', short: 'ES' },
]

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

    // Close on outside click
    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const select = (code) => {
        i18n.changeLanguage(code)
        setOpen(false)
    }

    return (
        <div ref={ref} className="relative">
            {/* Trigger */}
            <button
                onClick={() => setOpen(v => !v)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold border border-slate-200 hover:border-primary/40 hover:bg-primary/5 text-secondary transition-all group bg-white/80 backdrop-blur-sm shadow-sm"
                aria-label="Change language"
            >
                <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-[10px] font-black tracking-[0.1em] uppercase opacity-80">{current.short}</span>
                </div>
                <ChevronDown className={`w-3 h-3 text-secondary/30 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {open && (
                <div className={`absolute mt-2 w-44 bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden z-[200] animate-in fade-in slide-in-from-top-2 duration-150 ${i18n.language === 'ar' ? 'right-0' : 'left-0'}`}>
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => select(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all hover:bg-primary/5 ${i18n.language === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}
                                ${current.code === lang.code ? 'bg-primary/5 text-primary font-black' : 'text-secondary/70 font-bold hover:text-secondary'}`}
                        >
                            <span className="text-base">{lang.flag}</span>
                            <span className="flex-1 text-xs tracking-wide">{lang.label}</span>
                            {current.code === lang.code && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSwitcher
