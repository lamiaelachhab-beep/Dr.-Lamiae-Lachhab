import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationFR from './locales/fr.json';
import translationAR from './locales/ar.json';
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
    fr: { translation: translationFR },
    ar: { translation: translationAR },
    en: { translation: translationEN },
    es: { translation: translationES },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'cookie', 'navigator'],
            caches: ['localStorage']
        }
    });

// Handle text direction (RTL for Arabic only)
i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
});

export default i18n;
