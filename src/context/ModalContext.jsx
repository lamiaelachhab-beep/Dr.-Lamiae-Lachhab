import React, { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const { t } = useTranslation()
    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

    const openAppointmentModal = () => {
        const message = t('common.whatsapp_message', 'Bonjour Dr Lamiae Lachhab, je souhaite prendre un rendez-vous.')
        window.open(`https://wa.me/212641702524?text=${encodeURIComponent(message)}`, '_blank')
    }
    const closeAppointmentModal = () => setIsAppointmentModalOpen(false)

    return (
        <ModalContext.Provider value={{ isAppointmentModalOpen, openAppointmentModal, closeAppointmentModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)
