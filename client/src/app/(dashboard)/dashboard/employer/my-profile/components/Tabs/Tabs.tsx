import React from "react";
import styles from './Tabs.module.css';
import clsx from "clsx";
interface TabsProps {
    activeTab: string,
    onClick: (value: string) => void;
    tabsName: string[]
}
const Tabs = ({ activeTab, onClick, tabsName }: TabsProps) => {
    return (
        <ul className={styles.tabs}>
            {tabsName.map((name: string, index: number) => <li key={index} onClick={() => onClick(name)} className={clsx(activeTab === name && styles.active)}>{name}</li>)}
        </ul>
    )
}

export default Tabs;