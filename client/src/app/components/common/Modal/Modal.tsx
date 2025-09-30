import React from 'react'
import styles from './Modal.module.css'
import CloseIcon from '@/assets/icons/CloseIcon';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}><CloseIcon width={16} height={16} /></button>
                {children}
            </div>
        </div>
    )
}

export default Modal