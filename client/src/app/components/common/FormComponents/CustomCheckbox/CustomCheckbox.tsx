import React, { ChangeEvent } from "react";
import styles from './CustomCheckbox.module.css';
interface CustomCheckboxProps {
    label?: string,
    required?: boolean,
    name: string,
    errorMessage?: string,
    value: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const CustomCheckbox = ({ label, required, name, errorMessage, value, onChange }: CustomCheckboxProps) => {
    return (
        <div className={styles.checkBox}>
            <input checked={value} onChange={onChange} type="checkbox" name={name} id={name} />
            <label htmlFor={name}>{label} {required && <span> *</span>}</label>
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default CustomCheckbox;