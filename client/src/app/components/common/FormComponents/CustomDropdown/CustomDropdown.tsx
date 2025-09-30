'use client';
import React, { useState } from "react";
import styles from './CustomDropdown.module.css'
import Select from "react-select";

interface DropdownProps {
    label?: string,
    required?: boolean,
    placeholder?: string,
    errorMessage?: string,
}
type OptionType = {
    label: string;
    value: string;
}
const options: OptionType[] = [
    { value: 'value1', label: 'Option 1' },
    { value: 'value2', label: 'Option 2' },
    { value: 'value3', label: 'Option 3' }
]
const CustomDropdown = ({ label, required, errorMessage, placeholder }: DropdownProps) => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    return (
        <div className={styles.inputBox}>
            {label && <div className={styles.label}>{label}{required && <span> *</span>}</div>}
            <Select className={styles.select} value={selectedOption} onChange={setSelectedOption} options={options} placeholder={placeholder} />
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default CustomDropdown;