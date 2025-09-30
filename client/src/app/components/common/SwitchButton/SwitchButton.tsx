import React, { ChangeEvent } from 'react'
import styles from './SwitchButton.module.css'
import clsx from 'clsx';
interface SwitchProps {
    name: string,
    value: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const SwitchButton = ({ value, name, onChange }: SwitchProps) => {
    return (
        <>
            <label className={styles.switch}>
                <input name={name} onChange={onChange} type="checkbox" checked={value} />
                <span className={clsx(styles.slider, styles.round)}></span>
            </label>
        </>
    )
}

export default SwitchButton