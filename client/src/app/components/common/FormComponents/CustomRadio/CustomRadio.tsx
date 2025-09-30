import React from "react";
import styles from './CustomRadio.module.css';
import clsx from "clsx";
interface CustomRadioProps {
    label?: string,
    required?: boolean,
    vertical?: boolean,
    errorMessage?: string,
    options: OptionType[],
    value: string,
    onChange: (value: string) => void
}
interface OptionType {
    label: string,
    value: string
}

const CustomRadio = ({ label, vertical, required, errorMessage, options, value, onChange }: CustomRadioProps) => {
    const handleChange = (value: string) => {
        onChange(value);
    }
    return (
        <div className={styles.inputBox}>
            {label && <div className={styles.label}>{label}{required && <span> *</span>}</div>}
            <div className={clsx(styles.radioInputs,vertical&&styles.verticalRadio)}>
                {options.map((item: OptionType, index: number) => <div key={index} onClick={() => handleChange(item.value)} className={styles.radioInput}>
                    <span className={value === item.value ? styles.selected : ''}></span>
                    <p>{item.label}</p>
                </div>)}
            </div>
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default CustomRadio;