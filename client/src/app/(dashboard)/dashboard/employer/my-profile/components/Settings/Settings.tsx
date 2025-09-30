'use client';
import React, { ChangeEvent, useState } from 'react'
import styles from './Settings.module.css'
import SwitchButton from '@/app/components/common/SwitchButton/SwitchButton'
import ChangePassword from '@/app/components/common/ChangePassword/ChangePassword';
const Settings = () => {
    const [switches, setSwitches] = useState({
        newApplicant: false,
        jobPosting: false,
        marketingUpdates: false,
        subscriptionUpdates: false,
        pushNotification: false,
    })
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (name in switches) {
            setSwitches((prev) => ({
                ...prev,
                [name]: checked
            }))
        }
    }
    return (
        <div className={styles.settingContainer}>
            <div className={styles.titleWithSubTitle}>
                <div className="title">Notification Preferences</div>
                <div className="subTitle">Control how and when you receive notifications</div>
            </div>
            <div>
                <div className={styles.notificationTitle}>Email Notifications</div>
                <div className={styles.notificationBoxes}>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>New Applicants</p>
                            <p>Receive an email when a new candidate applies</p>
                        </div>
                        <SwitchButton name='newApplicant' value={switches.newApplicant} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Job Posting Expiration</p>
                            <p>Alerts when your postings are about to expire</p>
                        </div>
                        <SwitchButton name='jobPosting' value={switches.jobPosting} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Marketing Updates</p>
                            <p>News, tips and product updates </p>
                        </div>
                        <SwitchButton name='marketingUpdates' value={switches.marketingUpdates} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Subscription Updates</p>
                            <p>Information about your subscription status and renewals </p>
                        </div>
                        <SwitchButton name='subscriptionUpdates' value={switches.subscriptionUpdates} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.notificationTitle}>Push Notifications</div>
                <div className={styles.notificationBoxes}>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Enable Push Notifications</p>
                            <p>Receive notifications on your device</p>
                        </div>
                        <SwitchButton name='pushNotification' value={switches.pushNotification} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>
            <ChangePassword />
        </div>
    )
}

export default Settings