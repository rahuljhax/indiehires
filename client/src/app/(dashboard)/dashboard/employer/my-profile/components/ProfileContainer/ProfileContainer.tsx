'use client';
import React, { useState } from "react";
import styles from './ProfileContainer.module.css'
import Image from "next/image";
import CameraIcon from "@/assets/icons/CameraIcon";
import Tabs from "../Tabs/Tabs";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import Settings from "../Settings/Settings";
import Button from "@/app/components/common/Button/Button";
const ProfileContainer = () => {
    const [activeTab, setActiveTab] = useState('Personal details');

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileImages}>
                <div className={styles.coverImage}>
                    <Image
                        src={'/assets/images/profileBanner.jpg'}
                        width={986}
                        height={230}
                        alt="coverImage"
                    />
                    <span className={styles.uploadIcon}><CameraIcon width={16} height={16} /></span>
                </div>
                <div className={styles.profileImage}>
                    <Image
                        src={'/assets/images/profile.png'}
                        width={60}
                        height={60}
                        alt="coverImage"
                    />
                    <span className={styles.uploadIcon}><CameraIcon width={16} height={16} /></span>
                </div>
            </div>
            <Tabs activeTab={activeTab} onClick={setActiveTab} tabsName={['Personal details', 'Company details', 'Settings']} />
            {activeTab === 'Personal details' && <PersonalDetails />}
            {activeTab === 'Company details' && <CompanyDetails />}
            {activeTab === 'Settings' && <Settings />}
            {activeTab !== 'Settings' && <div className={styles.actions}>
                <Button style='grey' buttonText="Cancel" />
                <Button style='skyblue' buttonText="Save" />
            </div>}
        </div>
    )
}
export default ProfileContainer;