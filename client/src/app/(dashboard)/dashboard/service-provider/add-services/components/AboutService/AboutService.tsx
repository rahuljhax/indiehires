'use client';
import React, { useState } from 'react'
import styles from '../../page.module.css'
import CustomInput from '@/app/components/common/FormComponents/CustomInput/CustomInput'
import CustomDropdown from '@/app/components/common/FormComponents/CustomDropdown/CustomDropdown'
import PhoneInput from '@/app/components/common/FormComponents/PhoneInput/PhoneInput'
import TextEditor from '@/app/components/common/FormComponents/TextEditor/TextEditor'
import CustomTagInput from '@/app/components/common/FormComponents/CustomTagInput/CustomTagInput';
import Button from '@/app/components/common/Button/Button';
const AboutService = () => {
  const [aboutService, setAboutService] = useState('');
  const [highlights, setHighlights] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>About Service</div>
      <div className={styles.content}>
        <div className="subTitle">Provide the basic information about the service</div>
        <div className="form">
          <CustomInput
            label='Service Title'
            required
            placeholder='Professional Web Design Services'
            infoText='A clear title that describes your service'
          />
          <CustomDropdown
            label='Service Category'
          />
          <CustomInput
            label='Service Location'
            required
            placeholder='New York, USA'
          />
          <PhoneInput
            label='Phone Number '
            required
            placeholder='Enter your phone number'
          />
          <TextEditor
            label='About Service'
            value={aboutService}
            onChange={setAboutService}
          />
          <CustomTagInput 
            value={highlights}
            onChange={setHighlights}
            label='Key Highlights'
            required
            placeholder='e.g. Satisfaction Guarantee'
            infoText='Add key features or benefits of your service'
          />
          <CustomTagInput
            value={keywords}
            onChange={setKeywords}
            label='Keywords'
            required
            placeholder='Java developer'
            infoText='Add keywords to help clients find your service'
          />
          <div className={styles.next}>
            <Button width='auto' style='skyblue' buttonText='Next' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutService