import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Bot, Clock, MapPin, Stethoscope, FileText,
  Zap, Brain, Activity, Languages, Phone, CreditCard
} from 'lucide-react';

const faqData = {
  fr: [
    {
      icon: Clock,
      question: "Horaires d'ouverture",
      answer: "Le cabinet est ouvert :\n- Lun, Mar, Jeu : 09h00 - 18h00\n- Mer : 09h00 - 13h00\n- Ven : 09h00 - 17h00\nFermé le Samedi et Dimanche."
    },
    {
      icon: Bot,
      question: "Prendre rendez-vous",
      type: 'whatsapp',
      phone: "0641702524",
      answer: "whatsapp"
    },
    {
      icon: MapPin,
      question: "Localisation",
      type: 'maps',
      url: "https://www.google.com/maps/search/?api=1&query=Dr+Lamiae+Lachhab+Neurologue+Inezgane",
      answer: "maps"
    },
    {
      icon: Brain,
      question: "Spécialités",
      answer: "Le Dr Lamiae Lachhab est Neurologue, spécialisée dans le diagnostic et le traitement des maladies du système nerveux (cerveau, moelle épinière, nerfs et muscles). Elle traite notamment les migraines, l'épilepsie, Parkinson, les AVC et les troubles de la mémoire."
    },
    {
      icon: Zap,
      question: "EEG (Témoin du cerveau)",
      answer: "L'Électroencéphalographie (EEG) est un examen indolore qui enregistre l'activité électrique du cerveau. Il est essentiel pour diagnostiquer l'épilepsie et les troubles de la conscience chez l'adulte et l'enfant."
    },
    {
      icon: Activity,
      question: "ENMG (Nerfs et Muscles)",
      answer: "L'Électroneuromyographie (ENMG) permet d'étudier la conduction nerveuse et la réponse musculaire. Utile pour le canal carpien, les sciatiques, les neuropathies et les myopathies."
    },
    {
      icon: FileText,
      question: "Documents à apporter",
      answer: "Pour votre consultation, veuillez apporter vos ordonnances actuelles, vos anciens examens (EEG, ENMG, Scanner, IRM) et vos bilans biologiques."
    },
    {
      icon: Stethoscope,
      question: "Maux de tête & Migraines",
      answer: "Nous assurons une prise en charge complète des céphalées et migraines, avec des protocoles personnalisés pour réduire la fréquence et l'intensité des crises."
    },
    {
      icon: CreditCard,
      question: "Tarifs & Paiement",
      answer: "Pour toute information sur les tarifs, veuillez contacter le cabinet au 0528832466. Paiement accepté en espèces ainsi que par TPE (carte bancaire, téléphone mobile et moyens de paiement électroniques)."
    },
  ],
  ar: [
    {
      icon: Clock,
      question: "أوقات العمل",
      answer: "العيادة مفتوحة :\n- الإثنين، الثلاثاء، الخميس: 09:00 - 18:00\n- الأربعاء: 09:00 - 13:00\n- الجمعة: 09:00 - 17:00\nمغلقة السبت والأحد."
    },
    {
      icon: Bot,
      question: "حجز موعد",
      type: 'whatsapp',
      phone: "0641702524",
      answer: "whatsapp"
    },
    {
      icon: MapPin,
      question: "الموقع",
      type: 'maps',
      url: "https://www.google.com/maps/search/?api=1&query=Dr+Lamiae+Lachhab+Neurologue+Inezgane",
      answer: "maps"
    },
    {
      icon: Brain,
      question: "التخصصات",
      answer: "الدكتورة لمياء لشهب أخصائية في أمراض الجهاز العصبي (الدماغ، النخاع الشوكي، الأعصاب والعضلات). تشمل تخصصاتها علاج الشقيقة، الصرع، باركنسون، الجلطات الدماغية واضطرابات الذاكرة."
    },
    {
      icon: Zap,
      question: "تخطيط الدماغ (EEG)",
      answer: "تخطيط الدماغ هو فحص غير مؤلم يسجل النشاط الكهربائي للدماغ. وهو ضروري لتشخيص الصرع واضطرابات الوعي عند الكبار والأطفال."
    },
    {
      icon: Activity,
      question: "تخطيط الأعصاب (ENMG)",
      answer: "تخطيط الأعصاب والعضلات يسمح بدراسة توصيل الأعصاب واستجابة العضلات. مفيد لتشخيص النفق الرسغي، عرق النسا، وأمراض العضلات."
    },
    {
      icon: FileText,
      question: "الوثائق المطلوبة",
      answer: "خلال زيارتكم، يرجى إحضار الوصفات الطبية الحالية، الفحوصات القديمة (تخطيط الدماغ، الرنين المغناطيسي، نتائج التحاليل)."
    },
    {
      icon: Stethoscope,
      question: "صداع وشقيقة",
      answer: "نقدم رعاية كاملة لآلام الرأس والشقيقة، مع بروتوكولات مخصصة لتقليل تكرار وحدة النوبات."
    },
    {
      icon: CreditCard,
      question: "التعريفات والأداء",
      answer: "لأي معلومات حول التعريفات، يرجى الاتصال بالعيادة على 0528832466. يتم قبول الدفع نقداً أو عبر جهاز الأداء الإلكتروني (TPE) باستعمال البطاقة البنكية أو الهاتف ووسائل الدفع الإلكترونية."
    },
  ]
};

const ui = {
  fr: {
    greeting: "Bonjour ! Je suis l'assistant du Dr Lamiae Lachhab, neurologue à Inezgane. Comment puis-je vous aider ?",
    online: "En ligne",
    title: "Assistant Médical",
    faq_label: "Questions fréquentes",
    footer: "Réponses automatiques · Dr Lamiae Lachhab — Neurologie · Inezgane",
    whatsapp_text: (phone) => `Contactez-nous directement sur WhatsApp ${phone} :`,
    whatsapp_btn: "Ouvrir WhatsApp",
    maps_text: "Voici l'adresse du cabinet du Dr Lamiae Lachhab à Inezgane :",
    maps_btn: "Voir sur Google Maps",
    lang_prompt: "Choisissez votre langue / اختر لغتك",
    choose_fr: "Français",
    choose_ar: "العربية",
  },
  ar: {
    greeting: "مرحباً! أنا مساعد الدكتورة لمياء لشهب، أخصائية أمراض الجهاز العصبي بإنزكان. كيف يمكنني مساعدتك؟",
    online: "متاح",
    title: "المساعد الطبي",
    faq_label: "الأسئلة الشائعة",
    footer: "ردود تلقائية · د. لمياء لشهب — أمراض الجهاز العصبي · إنزكان",
    whatsapp_text: (phone) => `تواصلي معنا مباشرة على واتساب على الرقم ${phone} :`,
    whatsapp_btn: "فتح واتساب",
    maps_text: "إليك عنوان عيادة الدكتورة لمياء لشهب بإنزكان :",
    maps_btn: "عرض على خرائط جوجل",
    lang_prompt: "Choisissez votre langue / اختر لغتك",
    choose_fr: "Français",
    choose_ar: "العربية",
  }
};

const MedicalBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleLangSelect = (selectedLang) => {
    setLang(selectedLang);
    setMessages([
      {
        type: 'bot',
        content: 'text',
        text: ui[selectedLang].greeting,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleQuestionClick = (faq) => {
    if (!lang) return;
    const userMsg = {
      type: 'user',
      content: 'text',
      text: faq.question,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      let botMsg = {
        type: 'bot',
        content: 'text',
        text: '',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (faq.type === 'whatsapp') {
        botMsg.content = 'whatsapp';
        botMsg.phone = faq.phone;
        botMsg.text = ui[lang].whatsapp_text(faq.phone);
      } else if (faq.type === 'maps') {
        botMsg.content = 'maps';
        botMsg.url = faq.url;
        botMsg.text = ui[lang].maps_text;
      } else {
        botMsg.content = 'text';
        botMsg.text = faq.answer;
      }

      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const currentUi = lang ? ui[lang] : ui['fr'];
  const isRtlChat = lang === 'ar';

  return (
    <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-[100] font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group active:scale-95 transition-all duration-200"
      >
        <motion.div
          animate={!isOpen ? { scale: [1, 1.25, 1], opacity: [0.25, 0, 0.25] } : {}}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute inset-0 bg-primary rounded-full"
        />
        <div
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300
            ${isOpen ? 'bg-secondary rotate-90' : 'bg-primary'}`}
        >
          {isOpen ? <X className="w-8 h-8 text-white" /> : <Bot className="w-8 h-8 text-white" />}
        </div>
        {!isOpen && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-primary/10">
            <p className="text-sm font-bold text-secondary">Besoin d'aide ? / هل تحتاج مساعدة؟</p>
          </div>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] max-w-[400px] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100"
            style={{ maxHeight: 'min(80vh, 600px)' }}
            dir={isRtlChat ? 'rtl' : 'ltr'}
          >
            <div className="p-5 bg-gradient-to-r from-secondary to-primary text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight">{currentUi.title}</h4>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[10px] opacity-80 font-medium">{currentUi.online}</span>
                    </div>
                  </div>
                </div>
                {lang && (
                  <button
                    onClick={() => { setLang(null); setMessages([]); }}
                    className="flex items-center gap-1 px-2 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold transition-colors"
                  >
                    <Languages className="w-3 h-3" />
                    {lang === 'fr' ? 'AR' : 'FR'}
                  </button>
                )}
              </div>
            </div>

            {!lang ? (
              <div className="flex flex-col items-center justify-center gap-6 py-12 px-6 flex-1 bg-slate-50">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Languages className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-sm font-bold text-secondary">Choisissez votre langue</p>
                  <p className="text-sm font-bold text-secondary font-arabic">اختر لغتك</p>
                </div>
                <div className="flex gap-4 w-full">
                  <button
                    onClick={() => handleLangSelect('fr')}
                    className="flex-1 py-4 bg-white hover:bg-primary/5 border-2 border-gray-100 hover:border-primary rounded-2xl font-bold text-secondary transition-all shadow-sm"
                  >
                    Français
                  </button>
                  <button
                    onClick={() => handleLangSelect('ar')}
                    className="flex-1 py-4 bg-white hover:bg-primary/5 border-2 border-gray-100 hover:border-primary rounded-2xl font-bold text-secondary transition-all shadow-sm font-arabic"
                  >
                    العربية
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                          msg.type === 'bot'
                            ? 'bg-white text-secondary rounded-tl-none border border-gray-100'
                            : 'bg-primary text-white rounded-tr-none'
                        }`}
                      >
                        {msg.content === 'whatsapp' ? (
                          <div className="space-y-3">
                            <p>{msg.text}</p>
                            <a
                              href={`https://wa.me/212${msg.phone.replace(/^0/, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              {currentUi.whatsapp_btn}
                            </a>
                          </div>
                        ) : msg.content === 'maps' ? (
                          <div className="space-y-3">
                            <p>{msg.text}</p>
                            <a
                              href={msg.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-xl text-xs font-bold transition-colors"
                            >
                              <MapPin className="w-3.5 h-3.5" />
                              {currentUi.maps_btn}
                            </a>
                          </div>
                        ) : (
                          <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                        )}
                        <span className="text-[9px] opacity-40 mt-1 block">{msg.time}</span>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                        <div className="flex gap-1">
                          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-primary rounded-full" />
                          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-primary rounded-full" />
                          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-primary rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 bg-white border-t border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 px-1">{currentUi.faq_label}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {faqData[lang].map((faq, idx) => {
                      const Icon = faq.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleQuestionClick(faq)}
                          disabled={isTyping}
                          className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-primary/5 border border-slate-100 hover:border-primary/20 rounded-xl text-left transition-all group disabled:opacity-50"
                        >
                          <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-[10px] font-bold text-secondary leading-tight">{faq.question}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border-t border-gray-100">
                  <p className="text-[9px] text-center text-gray-400 font-medium">
                    {currentUi.footer}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MedicalBot;
