'use client'
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styles from './CustomTagInput.module.css';
import InfoIcon from "@/assets/icons/InfoIcon";
interface CustomTagInputProps {
    label?: string,
    placeholder: string,
    required?: boolean,
    errorMessage?: string,
    infoText?: string,
    value: string[],
    onChange: (updatedTags: string[]) => void;
}
const CustomTagInput = ({ infoText, placeholder, label, required, errorMessage, value, onChange }: CustomTagInputProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            const newTag = inputValue.trim();
            if (!value.includes(newTag)) {
                onChange([...value, newTag])
            }
            setInputValue('');
        }
    }
    const handleRemove = (indexToRemove: number) => {
        const newTags = value.filter((_, index) => index !== indexToRemove);
        onChange(newTags)
    }
    return (
        <div className={styles.inputBox}>
            <div className={styles.label}>{label}{required && <span> *</span>}</div>
            <input value={inputValue} onKeyDown={handleKeyDown} onChange={handleChange} className={styles.input} type="text" placeholder={placeholder} />
            {infoText && < span className={styles.infoText} > <InfoIcon width={10} height={10} />{infoText}</span>}
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
            {value?.length > 0 && <ul className={styles.tags}>
                {value.map((item: string, index: number) => <li key={index}><p>{item}</p> <span onClick={() => handleRemove(index)}>x</span></li>)}
            </ul>}
        </div>
    )
}
export default CustomTagInput;