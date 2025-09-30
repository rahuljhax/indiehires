import React from "react";
import styles from './CustomTextarea.module.css';
interface CustomTextareaProps {
    label?: string,
    placeholder: string,
    required?: boolean,
    errorMessage?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}
const CustomTextarea = ({ value, onChange, placeholder, label, required, errorMessage }: CustomTextareaProps) => {
    return (
        <div className={styles.inputBox}>
            <div className={styles.label}>{label}{required && <span> *</span>}</div>
            <textarea value={value} onChange={onChange} className={styles.textarea} placeholder={placeholder}></textarea>
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default CustomTextarea;