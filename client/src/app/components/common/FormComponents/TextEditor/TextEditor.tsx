'use client'
import React, { useRef } from "react";
import styles from './TextEditor.module.css';
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
interface TextEditorProps {
    label?: string,
    required?: boolean,
    errorMessage?: string,
    value: string,
    onChange: (value: string) => void;
}
const TextEditor = ({ label, required, errorMessage, value, onChange }: TextEditorProps) => {
    const editor = useRef(null);
    return (
        <div className={styles.inputBox}>
            <div className={styles.label}>{label}{required && <span> *</span>}</div>
            <JoditEditor
                className={styles.editor}
                ref={editor}
                value={value}
                onBlur={newContent => onChange(newContent)}
                config={{
                    readonly: false,
                    height: 300,
                    style: {
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                    }
                }}
            />
            {errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    )
}
export default TextEditor;