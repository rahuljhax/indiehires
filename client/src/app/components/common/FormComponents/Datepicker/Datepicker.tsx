import React from "react";
import styles from './Datepicker.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface DatepickerProps {
    label?: string,
    placeholder?: string,
    required?: boolean,
    errorMessage?: string,
    value: Date | null,
    onChange: (value: Date | null) => void
}
const Datepicker = ({ label, required, errorMessage, value, onChange }: DatepickerProps) => {
    return (
        <div className={styles.inputBox}>
            <div className={styles.label}>{label}{required && <span> *</span>}</div>
            <DatePicker minDate={new Date()} className={styles.input} showIcon selected={value} onChange={(date) => onChange(date)} />
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default Datepicker;