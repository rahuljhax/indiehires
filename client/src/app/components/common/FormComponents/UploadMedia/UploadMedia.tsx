import React, { ChangeEvent } from "react";
import styles from './UploadMedia.module.css';
import InfoIcon from "@/assets/icons/InfoIcon";
interface UploadMediaProps {
    label: string;
    required?: boolean;
    errorMessage?: string;
    multiple?: boolean;
    accept?: string;
    infoText?: string;
    onChange: (value: File | FileList) => void;
}
const UploadMedia = ({ infoText, label, required, errorMessage, onChange, multiple, accept = ".jpg,.jpeg,.png" }: UploadMediaProps) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onChange(multiple ? e.target.files : e.target.files[0])
        }
    }
    return (
        <div className={styles.inputBox}>
            <div className={styles.label}>{label}{required && <span> *</span>}</div>
            <input onChange={handleFileChange} accept={accept} className={styles.input} multiple={multiple} type="file" />
            {infoText && < span className={styles.infoText} > <InfoIcon width={10} height={10} />{infoText}</span>}
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default UploadMedia;