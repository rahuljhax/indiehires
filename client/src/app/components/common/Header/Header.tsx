import React from "react";
import styles from './Header.module.css'
import Link from "next/link";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.headerContainer}>
                    <Link href="/" className={styles.logo}><img src="/assets/images/logo.png" alt="Logo" /></Link>
                    <nav>
                        <Link href="/jobs">Jobs</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/pricing">Pricing</Link>
                    </nav>
                    <div className={styles.authButtons}>
                        <Link href="/login" className={styles.loginBtn}>Login</Link>
                        <Link href="/signup" className={styles.signupBtn}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;