import React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'
interface ButtonProps {
    style?: "grey" | "greyFill" | "skyblue" | 'darkblue' | 'red',
    buttonText: string,
    onClick?: () => void;
    disabled?: boolean;
    width?: string;
}
const Button = ({ style, width = '100%', buttonText, onClick, disabled }: ButtonProps) => {
    const ButtonStyles: React.CSSProperties = {
        width: width
    }
    return (
        <button disabled={disabled} style={ButtonStyles} className={clsx(styles.button, style === 'grey' && styles.greyButton, style === 'greyFill' && styles.greyFillButton, style === 'skyblue' && styles.skyblueButton, style === 'darkblue' && styles.darkBlueButton, style === 'red' && styles.redButton, disabled && styles.disabledButton)} onClick={onClick}>{buttonText}</button>
    )
}

export default Button