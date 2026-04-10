import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import WhyChoose from '../components/home/WhyChoose'
import Cabinet from '../components/home/Cabinet'
import Testimonials from '../components/home/Testimonials'
import MapSection from '../components/home/MapSection'

const Home = () => {
    const { t } = useTranslation()

    return (
        <>
            <Helmet>
                <title>{t('hero.title')} | {t('hero.subtitle')}</title>
                <meta name="description" content={t('hero.description')} />
                <meta name="keywords" content="neurologue Inezgane, EEG Agadir, دكتورة أعصاب إنزكان, ENMG Agadir, Lamiae Lachhab" />
            </Helmet>

            <Hero />
            <Services />
            <WhyChoose />
            <Cabinet />
            <Testimonials />
            <MapSection />
        </>
    )
}

export default Home
