'use client';
import React, { useState } from "react";
import styles from './PhoneInput.module.css';
import Select from "react-select";
interface PhoneInputProps {
    label?: string,
    placeholder: string,
    required?: boolean,
    errorMessage?: string,
}
type OptionType = {
    label: string;
    value: string;
}
const options = [
    { value: '+1242', label: '+1242' },
    { value: '+380', label: '+380' },
    { value: '+299', label: '+299' },
    { value: '+262', label: '+262' },
    { value: '+99532', label: '+99532' }
];


const PhoneInput = ({ placeholder, label, required, errorMessage }: PhoneInputProps) => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    return (
        <div className={styles.inputBox}>
            {label && <div className={styles.label}>{label}{required && <span> *</span>}</div>}
            <div className={styles.phoneWithCode}>
                <div style={{ width: '150px' }}>
                    <Select placeholder={'+1'} className={styles.select} value={selectedOption} onChange={setSelectedOption} isSearchable={false} options={options} />
                </div>
                <input className={styles.input} type='tel' maxLength={13} placeholder={placeholder} />
            </div>
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default PhoneInput;