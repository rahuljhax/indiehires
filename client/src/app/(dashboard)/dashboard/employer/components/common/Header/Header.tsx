import NotificationIcon from "@/assets/icons/NotificationIcon";
import Image from "next/image";
import React from "react";
import styles from './Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.profile}>
                <div className={styles.nameCategory}>
                    <p className={styles.name}>CloudTech</p>
                    <p className={styles.category}>IT & Tech</p>
                </div>
                <Image
                    className={styles.profileImage}
                    src={'/assets/images/profile.png'}
                    alt="Profile Image"
                    width={50}
                    height={50}
                />
            </div>
            <span className={styles.icon}>
                <NotificationIcon width={28} height={28} />
            </span>
        </header>
    )
}
export default Header;