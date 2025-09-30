import React from "react";
import styles from './CustomInput.module.css';
import InfoIcon from "@/assets/icons/InfoIcon";
interface CustomInputProps {
    label?: string,
    placeholder: string,
    required?: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errorMessage?: string,
    type?: 'password' | 'text',
    infoText?: string
}
const CustomInput = ({ value, onChange, placeholder, type = 'text', label, required, infoText, errorMessage }: CustomInputProps) => {
    return (
        <div className={styles.inputBox}>
            {label && <div className={styles.label}>{label}{required && <span> *</span>}</div>}
            <input value={value} onChange={onChange} className={styles.input} type={type} placeholder={placeholder} />
            {infoText && < span className={styles.infoText} > <InfoIcon width={10} height={10} />{infoText}</span>}
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div >
    )
}
export default CustomInput;