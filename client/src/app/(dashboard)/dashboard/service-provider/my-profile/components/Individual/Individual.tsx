'use client';
import React, { useState } from 'react'
import styles from './Individual.module.css'
import CustomInput from '@/app/components/common/FormComponents/CustomInput/CustomInput'
import PhoneInput from '@/app/components/common/FormComponents/PhoneInput/PhoneInput'
import CustomTextarea from '@/app/components/common/FormComponents/CustomTextarea/CustomTextarea'
import Datepicker from '@/app/components/common/FormComponents/Datepicker/Datepicker'
import CustomTagInput from '@/app/components/common/FormComponents/CustomTagInput/CustomTagInput';
import Button from '@/app/components/common/Button/Button';
import ChangePassword from '@/app/components/common/ChangePassword/ChangePassword';
import InfoIcon from '@/assets/icons/InfoIcon';
import Image from 'next/image';
const Individual = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [languages, setLanguages] = useState<string[]>([]);

    return (
        <div className={styles.individualContainer}>
            <div className={styles.basicInfo}>
                <div className="title">Basic Information</div>
                <div className="subTitle">These information will be displayed to clients.</div>
                <div className="form">
                    <CustomInput
                        label='Full Name'
                        required
                        placeholder='John Smith'
                    />
                    <CustomInput
                        label='Tagline'
                        required
                        placeholder='Web Developer | Java'
                        infoText='A short phrase that describes your expertise.'
                    />
                    <div className={styles.profileContainer}>
                        <div className={styles.label}>Profile Photo</div>
                        <div className={styles.profileBox}>
                            <Image
                                src='/assets/images/profileImageAvatar.png'
                                alt='Profile Image'
                                width={80}
                                height={80}
                                className={styles.profileImage}
                            />
                            <div className={styles.uploadButton}>
                                <input type="file" />
                                <Button style='grey' width='auto' buttonText='Upload' />
                            </div>
                            < span className={styles.infoText} > <InfoIcon width={10} height={10} />People trust people — upload your photo and make your profile more personal and credible.</span>
                        </div>
                        < span className={styles.infoText} > <InfoIcon width={10} height={10} />Image size (width 100px, height 100px)</span>
                    </div>
                    <CustomInput
                        label='Email Address'
                        required
                        placeholder='john.smith@example.com'
                    />
                    <PhoneInput
                        label='Phone Number'
                        required
                        placeholder='Enter your phone number'
                    />
                    <CustomTextarea
                        label='About me'
                        placeholder='Tell clients a bit about yourself — your skills, experience, and what makes you great at what you do...'
                    />
                </div>
            </div>
            <div className={styles.serviceInfo}>
                <div className="title">Service Information</div>
                <div className="subTitle">Help clients understand more about your services</div>
                <div className="form">
                    <CustomInput
                        label='Service Location'
                        required
                        placeholder='New York, USA'
                    />
                    <div className="row">
                        <Datepicker
                            label="Contact Start Time"
                            required
                            placeholder="Select Date"
                            onChange={setStartDate}
                            value={startDate}
                        />
                        <Datepicker
                            label="Contact End Time"
                            required
                            placeholder="Select Date"
                            onChange={setStartDate}
                            value={startDate}
                        />
                    </div>
                    <CustomTagInput
                        label='Languages Spoken'
                        required
                        placeholder='Add a language & press enter'
                        value={languages}
                        onChange={setLanguages}
                    />
                    <CustomInput
                        label='Website/Portfolio'
                        required
                        placeholder='Paste url here...'
                    />
                    <CustomInput
                        label='Social Link'
                        required
                        placeholder='Paste url here...'
                    />
                </div>
            </div>
            <div className={styles.actions}>
                <Button width='auto' style='grey' buttonText='Cancel' />
                <Button width='auto' style='skyblue' buttonText='Save Changes' />
            </div>
            <div className={styles.security}>
                <ChangePassword />
            </div>
        </div>
    )
}

export default Individual