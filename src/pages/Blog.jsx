import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Brain, Activity,  X,  User, Tag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NeuralNetwork, EEGWave } from '../components/common/EEGBackground'
   
const Blog = () => {
    const { t, i18n } = useTranslation()
    const isArabic = i18n.language === 'ar'
    const [selectedPost, setSelectedPost] = useState(null)

    const posts = [
        {
            id: 1,
            title: t('blog_page.posts.p1.title', "Les migraines : causes et solutions modernes"),
            excerpt: t('blog_page.posts.p1.excerpt', "Découvrez comment identifier les types de migraines et les traitements actuels..."),
            content: t('blog_page.posts.p1.content', "La migraine n'est pas un simple mal de tête..."),
            date: "12 Mars 2024",
            category: t('blog_page.categories.neurology'),
            readTime: "5 min",
            image: "/migraines.png"
        },
        {
            id: 2,
            title: t('blog_page.posts.p2.title', "Comprendre l'EEG : l'examen clé du cerveau"),
            excerpt: t('blog_page.posts.p2.excerpt', "Pourquoi votre médecin demande un EEG ?"),
            content: t('blog_page.posts.p2.content', "L'électroencéphalographie (EEG) est un examen fondamental..."),
            date: "05 Mars 2024",
            category: t('blog_page.categories.diagnostic'),
            readTime: "4 min",
            image: "/l'EEG.png"
        },
        {
            id: 3,
            title: t('blog_page.posts.p3.title', "Sommeil et santé neurologique"),
            excerpt: t('blog_page.posts.p3.excerpt', "Le lien entre la qualité de votre sommeil et le bon fonctionnement..."),
            content: t('blog_page.posts.p3.content', "Un bon sommeil est le garant d'un cerveau en bonne santé..."),
            date: "28 Fév 2024",
            category: t('blog_page.categories.prevention'),
            readTime: "6 min",
            image: "/Sommeil.png"
        },
        // ... I'll use placeholders for others to keep it concise but working
        {
            id: 4,
            title: t('blog_page.posts.p4.title', "L'épilepsie : Comprendre les crises"),
            excerpt: t('blog_page.posts.p4.excerpt', "Vivre avec l'épilepsie demande une prise en charge adaptée..."),
            content: t('blog_page.posts.p4.content', "L'épilepsie est l'une des affections neurologiques les plus fréquentes..."),
            date: "20 Fév 2024",
            category: t('blog_page.categories.neurology'),
            readTime: "7 min",
            image: "/L'épilepsie.png"
        },
        {
            id: 5,
            title: t('blog_page.posts.p5.title', "AVC : Les signes d'alerte"),
            excerpt: t('blog_page.posts.p5.excerpt', "Chaque minute compte. Apprenez à reconnaître les symptômes..."),
            content: t('blog_page.posts.p5.content', "L'AVC (Accident Vasculaire Cérébral) est une urgence absolue..."),
            date: "15 Fév 2024",
            category: t('blog_page.categories.urgency'),
            readTime: "5 min",
            image: "/AVC.png"
        },
        {
            id: 6,
            title: t('blog_page.posts.p6.title', "La maladie de Parkinson"),
            excerpt: t('blog_page.posts.p6.excerpt', "Un guide pratique sur les symptômes, la prise en charge..."),
            content: t('blog_page.posts.p6.content', "La maladie de Parkinson touche la motricité mais aussi l'humeur..."),
            date: "10 Fév 2024",
            category: t('blog_page.categories.neurodegenerative'),
            readTime: "8 min",
            image: "/Parkinson.png"
        },
        {
            id: 7,
            title: t('blog_page.posts.p7.title', "Tout savoir sur l'ENMG"),
            excerpt: t('blog_page.posts.p7.excerpt', "Comment se déroule un ENMG ? Cet examen est essentiel..."),
            content: t('blog_page.posts.p7.content', "L'ENMG permet d'étudier le fonctionnement des nerfs et des muscles..."),
            date: "02 Fév 2024",
            category: t('blog_page.categories.diagnostic'),
            readTime: "5 min",
            image: "/l'ENMG.png"
        },
        {
            id: 8,
            title: t('blog_page.posts.p8.title', "Céphalées de tension"),
            excerpt: t('blog_page.posts.p8.excerpt', "Le stress est souvent en cause. Découvrez des exercices..."),
            content: t('blog_page.posts.p8.content', "Contrairement à la migraine, la céphalée de tension est souvent liée..."),
            date: "25 Jan 2024",
            category: t('blog_page.categories.consultation'),
            readTime: "4 min",
            image: "/Céphalées.png"
        },
        {
            id: 9,
            title: t('blog_page.posts.p9.title', "Neurologie pédiatrique"),
            excerpt: t('blog_page.posts.p9.excerpt', "Développement neuro-moteur et signes cliniques à surveiller..."),
            content: t('blog_page.posts.p9.content', "Le cerveau de l'enfant est en pleine croissance..."),
            date: "18 Jan 2024",
            category: t('blog_page.categories.pediatrics'),
            readTime: "6 min",
            image: "/Neurologie.png"
        }
    ]

    return (
        <div className="relative overflow-hidden bg-primary/5 min-h-screen">
            <Helmet>
                <title>{t('nav.blog')} | Dr. Lamiae Lachhab</title>
            </Helmet>

            <NeuralNetwork color="#83cfd2" className="opacity-10 scale-150 rotate-[-15deg]" />

            {/* Header Section */}
            <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white overflow-hidden">
                <EEGWave className="top-1/2 left-0 w-full opacity-10" />
                <div className={`container relative z-10 text-center ${isArabic ? 'font-arabic' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full mb-8 font-black text-xs tracking-[0.3em] uppercase"
                    >
                        {t('blog_page.hero.badge')}
                    </motion.div>
                    <h1 className={`text-5xl lg:text-5xl font-black text-secondary tracking-tighter mb-8 leading-[0.9] ${isArabic ? 'leading-tight' : ''}`}>
                        {t('blog_page.hero.title')} <br />
                        <span className="text-primary italic">{t('blog_page.hero.title_highlight')}</span>
                    </h1>
                    <p className="text-xl text-secondary/60 leading-relaxed max-w-2xl mx-auto opacity-90 font-medium">
                        {t('blog_page.hero.desc')}
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-20 relative z-10">
                <div className="container">
                    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 ${isArabic ? 'rtl' : ''}`}>
                        {posts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-secondary/5 hover:shadow-primary/20 transition-all border border-primary/5 group cursor-pointer ${isArabic ? 'text-right' : ''}`}
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className={`absolute top-4 ${isArabic ? 'left-4' : 'right-4'}`}>
                                        <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 lg:p-10">
                                    <div className={`flex items-center gap-4 text-secondary/40 text-[10px] mb-6 font-bold uppercase tracking-widest ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-primary" />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h3 className={`text-2xl font-black text-secondary mb-5 leading-[1.2] group-hover:text-primary transition-colors ${isArabic ? 'font-arabic' : ''}`}>
                                        {post.title}
                                    </h3>
                                    <p className="text-secondary/60 text-base leading-relaxed mb-8 line-clamp-3 font-medium opacity-80">
                                        {post.excerpt}
                                    </p>
                                    <div className={`flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-widest group/btn pt-4 border-t border-primary/5 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        {t('blog_page.ui.read_more')}
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                                            <ArrowRight size={16} className={`group-hover/btn:translate-x-1 transition-transform ${isArabic ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Article Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-secondary/80 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className={`absolute top-6 z-30 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-xl ${isArabic ? 'right-6' : 'left-6'}`}
                            >
                                <X size={24} />
                            </button>

                            <div className="relative h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden bg-white border-b border-slate-100 flex items-center justify-center">
                                <img
                                    src={selectedPost.image}
                                    className="w-full h-full object-contain"
                                    alt={selectedPost.title}
                                />
                                <div className={`absolute top-6 z-20 ${isArabic ? 'left-6' : 'right-6'}`}>
                                    <span className="px-5 py-2 bg-primary/95 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl backdrop-blur-sm">
                                        {selectedPost.category}
                                    </span>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
                            </div>

                            <div className={`p-8 md:p-12 lg:px-16 lg:pb-20 ${isArabic ? 'text-right rtl' : ''}`}>
                                <div className={`flex flex-wrap items-center gap-6 mb-8 text-[11px] font-bold text-secondary/40 uppercase tracking-widest ${isArabic ? 'justify-end' : ''}`}>
                                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                        <Calendar size={16} className="text-primary" />
                                        {selectedPost.date}
                                    </div>

                                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                        <User size={16} className="text-primary" />
                                        Dr. Lamiae Lachhab
                                    </div>
                                </div>

                                <h2 className={`text-3xl md:text-5xl font-black text-secondary mb-10 leading-[1.1] tracking-tighter italic ${isArabic ? 'font-arabic' : ''}`}>
                                    {selectedPost.title}
                                </h2>

                                <div className="prose prose-lg max-w-none text-secondary/70">
                                    <p className={`text-lg md:text-xl leading-relaxed font-medium opacity-90 ${isArabic ? 'first-letter:ml-3 first-letter:float-right' : 'first-letter:mr-3 first-letter:float-left'} first-letter:text-5xl first-letter:font-black first-letter:text-primary`}>
                                        {selectedPost.content}
                                    </p>
                                    <div className={`mt-12 p-8 bg-primary/5 rounded-[2rem] border border-primary/10 flex items-start gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white flex-shrink-0">
                                            <Brain size={24} />
                                        </div>
                                        <div>
                                            <h4 className={`font-black text-secondary mb-2 uppercase tracking-widest text-xs ${isArabic ? 'font-arabic' : ''}`}>{t('blog_page.ui.expert_note')}</h4>
                                            <p className="text-base font-medium opacity-80 leading-relaxed italic">
                                                {t('blog_page.ui.expert_note_desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-slate-100 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`flex items-center gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <Tag size={18} />
                                        </div>
                                        <span className={`text-xs font-bold text-secondary uppercase tracking-widest opacity-60 ${isArabic ? 'font-arabic' : ''}`}>
                                            {t('blog_page.ui.tags_label')}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="bg-secondary text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl hover:-translate-y-1"
                                    >
                                        {t('blog_page.ui.close')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Newsletter Section */}
            <div className="container pb-20 relative z-10">
                <div className="bg-secondary rounded-[2.5rem] py-8 px-10 lg:py-12 lg:px-20 relative overflow-hidden shadow-2xl border border-white/5 flex flex-col items-center text-center">
                    <NeuralNetwork color="#ffffff" className="opacity-10 scale-150 rotate-12" />
                    <div className="relative z-10 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 font-black text-[10px] tracking-widest uppercase text-white"
                        >
                            <Activity size={12} className="text-primary" />
                            {t('blog_page.ui.newsletter_badge')}
                        </motion.div>
                        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter italic text-white leading-none ${isArabic ? 'font-arabic' : ''}`}>
                            {t('blog_page.ui.newsletter_title')} <span className="text-primary">{t('blog_page.ui.newsletter_title_highlight')}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
