'use client';
import SwitchButton from '@/app/components/common/SwitchButton/SwitchButton'
import React, { ChangeEvent, useState } from 'react'
import styles from './NotificationPreferences.module.css'
import ChangePassword from '@/app/components/common/ChangePassword/ChangePassword';
const NotificationPreferences = () => {
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
            <div>
                <div className={styles.notificationTitle}>Email Notifications</div>
                <div className={styles.notificationBoxes}>
                    <div className={styles.title}>Job Alerts</div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>New job postings in your field</p>
                        </div>
                        <SwitchButton name='newApplicant' value={switches.newApplicant} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Jobs near your location</p>
                        </div>
                        <SwitchButton name='jobPosting' value={switches.jobPosting} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Job application status updates</p>
                        </div>
                        <SwitchButton name='marketingUpdates' value={switches.marketingUpdates} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.title}>Service Updates</div>


                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>New services listed in your interest area</p>
                        </div>
                        <SwitchButton name='subscriptionUpdates' value={switches.subscriptionUpdates} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Promotions or discounts on services</p>
                        </div>
                        <SwitchButton name='subscriptionUpdates' value={switches.subscriptionUpdates} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.title}>Marketing Updates</div>

                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>News, tips and product updates</p>
                        </div>
                        <SwitchButton name='subscriptionUpdates' value={switches.subscriptionUpdates} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.notificationTitle}>Push Notifications</div>
                <div className={styles.notificationBoxes}>
                    <div className={styles.title}>Job Alerts</div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>New job postings in your field</p>
                        </div>
                        <SwitchButton name='newApplicant' value={switches.newApplicant} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Jobs near your location</p>
                        </div>
                        <SwitchButton name='jobPosting' value={switches.jobPosting} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Job application status updates</p>
                        </div>
                        <SwitchButton name='marketingUpdates' value={switches.marketingUpdates} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.title}>Service Updates</div>

                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>New services listed in your interest area</p>
                        </div>
                        <SwitchButton name='subscriptionUpdates' value={switches.subscriptionUpdates} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>Promotions or discounts on services</p>
                        </div>
                        <SwitchButton name='subscriptionUpdates' value={switches.subscriptionUpdates} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.title}>Marketing Updates</div>

                    <div className={styles.notificationBox}>
                        <div className={styles.notificationContent}>
                            <p>News, tips and product updates</p>
                        </div>
                        <SwitchButton name='subscriptionUpdates' value={switches.subscriptionUpdates} onChange={onChangeHandler} />
                    </div>
                </div>
            </div>
            <ChangePassword />
        </div>
    )
}

export default NotificationPreferences