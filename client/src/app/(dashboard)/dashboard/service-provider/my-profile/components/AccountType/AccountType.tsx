'use client';
import MyProfileIcon from "@/assets/icons/MyProfileIcon";
import React, { useState } from "react";
import styles from './AccountType.module.css'
import clsx from "clsx";
import BusinessIcon from "@/assets/icons/BusinessIcon";
import Button from "@/app/components/common/Button/Button";
const AccountType = () => {
    const [accountType, setAccountType] = useState('Individual');
    return (
        <div className={styles.accountTypeContainer}>
            <div className="title">What Best Describes You?</div>
            <div className={styles.boxes}>
                <div className={clsx(styles.box, accountType === 'Individual' && styles.active)} onClick={() => setAccountType('Individual')}>
                    <MyProfileIcon width={50} height={50} />
                    <div className={styles.title}>Individual</div>
                    <p>Freelancer or independent professional offering services personally.</p>
                </div>
                <div className={clsx(styles.box, accountType === 'Business' && styles.active)} onClick={() => setAccountType('Business')}>
                    <BusinessIcon width={50} height={50} />
                    <div className={styles.title}>Business / Agency</div>
                    <p>A registered company or team offering services on behalf of a brand or organization.</p>
                </div>
                <Button width="auto" style="skyblue" buttonText="Continue" />
            </div>
        </div>
    )
}
export default AccountType;