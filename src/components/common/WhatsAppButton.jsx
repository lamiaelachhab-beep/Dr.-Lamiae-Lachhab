import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = ({ phoneNumber }) => {
    return (
        <motion.a
            href={`https://wa.me/212${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[100] bg-primary text-white p-5 rounded-3xl shadow-[0_20px_40px_-10px_rgba(131,207,210,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(131,207,210,0.6)] active:scale-95 transition-all duration-300 flex items-center gap-4 overflow-hidden group border-2 border-white/20"
            aria-label="Contacter sur WhatsApp"
        >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 overflow-hidden font-black text-xs uppercase tracking-widest whitespace-nowrap">
                WhatsApp Direct
            </span>
            <MessageCircle size={28} className="relative z-10" />

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[20px] rounded-full -z-10 group-hover:scale-150 transition-transform duration-700" />
        </motion.a>
    )
}

export default WhatsAppButton
