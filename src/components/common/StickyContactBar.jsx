import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const StickyContactBar = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contacts = [
        {
            icon: Phone,
            label: isArabic ? 'اتصال' : 'Appeler',
            href: 'tel:0528832466',
            color: 'bg-primary',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            href: 'https://wa.me/212641702524',
            color: 'bg-emerald-500',
        },
        {
            icon: MapPin,
            label: isArabic ? 'الموقع' : 'Itinéraire',
            href: 'https://www.google.com/maps/search/?api=1&query=Dr+Lamiae+Lachhab+Neurologue+Inezgane',
            color: 'bg-secondary',
        },
    ];

    // Offsets to account for fixed Navbar
    // Mobile: nav is ~64px
    // Desktop: Ticker (40px) + Nav (~80px) = 120px
    // When scrolled, Desktop Nav is slightly smaller and Ticker stays.
    
    return (
        <div 
            className={`fixed left-0 w-full z-[80] transition-all duration-700 px-4 pointer-events-none
                ${scrolled ? 'top-20 lg:top-32' : 'top-24 lg:top-40'}`}
        >
            <div className="container max-w-lg mx-auto pointer-events-auto">
                <div className={`flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-1.5 gap-1.5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    {contacts.map((contact, idx) => (
                        <a
                            key={idx}
                            href={contact.href}
                            target={contact.icon !== Phone ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl transition-all active:scale-95 group overflow-hidden relative ${contact.color} text-white shadow-lg`}
                        >
                            <contact.icon size={16} className="shrink-0 group-hover:rotate-12 transition-transform" />
                            <span className={`text-[10px] font-black uppercase tracking-wider whitespace-nowrap ${isArabic ? 'font-arabic' : ''}`}>
                                {contact.label}
                            </span>
                            
                            {/* Glass effect on hover */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StickyContactBar;
