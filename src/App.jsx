import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain } from 'lucide-react'
import { ModalProvider, useModal } from './context/ModalContext'
// import AppointmentModal from './components/common/AppointmentModal'
// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Specialties = React.lazy(() => import('./pages/Specialties'))
const Appointment = React.lazy(() => import('./pages/Appointment'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Blog = React.lazy(() => import('./pages/Blog'))

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}



const PageLoader = () => (
    <div className="flex flex-col h-screen items-center justify-center bg-primary/5">
        <div className="relative">
            <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="text-primary w-10 h-10 animate-pulse" />
            </div>
        </div>
        <p className="mt-8 text-secondary font-black tracking-[0.3em] uppercase text-xs animate-pulse">Exploration en cours...</p>
    </div>
)

// Inner app component to access useModal
const AppContent = () => {
    const { closeAppointmentModal } = useModal()
    
    return (
        <div className="flex flex-col min-h-screen selection:bg-primary/20 selection:text-secondary">
            <Navbar />
            <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/a-propos" element={<About />} />
                            <Route path="/specialites" element={<Specialties />} />
                            <Route path="/rdv" element={<Appointment />} />
                            <Route path="/contact" element={<Appointment />} />
                            <Route path="/blog" element={<Blog />} />

                            {/* Arabic routes */}
                            <Route path="/عن-الطبيبة" element={<About />} />
                            <Route path="/التخصصات" element={<Specialties />} />
                            <Route path="/حجز-موعد" element={<Appointment />} />
                            <Route path="/اتصل-بنا" element={<Appointment />} />
                        </Routes>
                    </AnimatePresence>
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}

function App() {
    const { i18n } = useTranslation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Initial dir
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;

        // Simulate loading
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, [i18n.language]);

    if (loading) return <PageLoader />;

    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <ModalProvider>
                <ScrollToTop />
                <AppContent />
            </ModalProvider>
        </BrowserRouter>
    )
}

export default App
