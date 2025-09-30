'use client';
import React, { useState } from 'react'
import styles from './Business.module.css'
import CustomTagInput from '@/app/components/common/FormComponents/CustomTagInput/CustomTagInput'
import CustomInput from '@/app/components/common/FormComponents/CustomInput/CustomInput'
import Datepicker from '@/app/components/common/FormComponents/Datepicker/Datepicker'
import ChangePassword from '@/app/components/common/ChangePassword/ChangePassword';
import Button from '@/app/components/common/Button/Button';
import PhoneInput from '@/app/components/common/FormComponents/PhoneInput/PhoneInput';
import CustomTextarea from '@/app/components/common/FormComponents/CustomTextarea/CustomTextarea';
import CustomDropdown from '@/app/components/common/FormComponents/CustomDropdown/CustomDropdown';
import Image from 'next/image';
import InfoIcon from '@/assets/icons/InfoIcon';
const Business = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [languages, setLanguages] = useState<string[]>([]);
  return (
    <div className={styles.businessContainer}>
      <div className={styles.profileCreatorInfo}>
        <div className="title">Profile Creator Info</div>
        <div className="subTitle">Your Role in the Business/Agency</div>
        <div className="form">
          <CustomInput
            label='Full Name'
            required
            placeholder='John Smith'
          />
          <CustomInput
            label='Email Address'
            required
            placeholder='john.smith@example.com'
          />
          <CustomInput
            label='Designation in Company'
            required
            placeholder='CEO'
          />
          <PhoneInput
            label='Phone Number'
            required
            placeholder='Enter your phone number'
          />
        </div>
      </div>
      <div className={styles.businessInfo}>
        <div className="title">Business Info</div>
        <div className="subTitle">Help clients connect with your services by sharing more about your business.</div>
        <div className="form">
          <CustomInput
            label='Business Name'
            required
            placeholder='InfoTech'
          />
          <div className={styles.profileContainer}>
            <div className={styles.label}>Company Photo</div>
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
            label='Business Email'
            required
            placeholder='john.smith@example.com'
          /> <CustomInput
            label='Company Tagline'
            required
            placeholder='e.g One stop solutions for all'
          />
          <CustomDropdown
            label='Company Size'
          />
          <CustomInput
            label='Company Headquarter'
            required
            placeholder='New York, USA'
          />
          <PhoneInput
            label='Official Phone Number'
            placeholder='Enter your phone number'
          />
          <CustomTextarea
            label='About Business'
            required
            placeholder='Tell clients a bit about your business — your expertise, industry experience, and what sets your services apart...'
          />
        </div>
      </div>
      <div className={styles.billingAddress}>
        <div className="title">Billing Address</div>
        <div className="subTitle">Enter the address associated with your payment or invoicing details.</div>
        <div className="form">
          <div className="row">
            <CustomDropdown
              label="Country"
              placeholder="USA"
              required
            />
            <CustomDropdown
              label="State"
              placeholder="California"
              required
            />
          </div>
          <div className="row">
            <CustomInput
              label="City"
              required
              placeholder="New York"
            />
            <CustomInput
              label="Postal/ZIP Code"
              required
              placeholder="07008"
            />

          </div>
          <CustomInput
            label="Street Address"
            required
            placeholder="Address line 1..."
          />
          <CustomInput
            label="Apartment/Suite/Unit"
            required
            placeholder="Address line 2..."
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
            infoText='Please provide the URL to your professional website or portfolio (e.g., https://xyz.com).
'
          />
          <CustomInput
            label='Social Link'
            required
            placeholder='Paste url here...'
            infoText='Please provide the URL to your Social Media (e.g., https://xyz.com)
'
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

export default Business