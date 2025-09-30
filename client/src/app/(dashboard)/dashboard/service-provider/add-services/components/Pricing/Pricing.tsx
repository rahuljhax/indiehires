'use client';
import Button from '@/app/components/common/Button/Button'
import React, { useState } from 'react'
import styles from '../../page.module.css'
import CustomRadio from '@/app/components/common/FormComponents/CustomRadio/CustomRadio'
import CustomInput from '@/app/components/common/FormComponents/CustomInput/CustomInput';
import CustomTextarea from '@/app/components/common/FormComponents/CustomTextarea/CustomTextarea';
import CustomCheckbox from '@/app/components/common/FormComponents/CustomCheckbox/CustomCheckbox';
import CustomDropdown from '@/app/components/common/FormComponents/CustomDropdown/CustomDropdown';
const options = [
  {
    label: 'Fixed Price',
    value: 'fixedPrice'
  }, {
    label: 'Per Hour',
    value: 'perHour'
  }, {
    label: 'Per Session',
    value: 'perSession'
  },
]
const yesNo = [
  {
    label: 'Yes',
    value: 'yes'
  }, {
    label: 'No',
    value: 'no'
  }
]
const Pricing = () => {
  const [priceType, setPriceType] = useState('fixedPrice');
  const [isApplyWebsite, setIsApplyWebsite] = useState('yes');
  const [isHidePrice, setIsHidePrice] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Pricing</div>
      <div className={styles.content}>
        <div className="subTitle">Set your service pricing details.</div>
        <div className="form">
          <CustomRadio
            label='Choose Pricing Type'
            options={options}
            value={priceType}
            onChange={setPriceType}
          />
          <div className={styles.priceBox}>
            <div className={styles.label}>Starting Price<span> *</span></div>
            <div className={styles.priceInputs}>
              <div style={{ width: 150 }}>
                <CustomDropdown
                  placeholder='Currency'
                />
              </div>
              <CustomInput
                placeholder='e.g 1000'
              />
            </div>
          </div >
          <CustomTextarea
            label='Pricing & Packages Description'
            placeholder='e.g. Our base package includes a 5-page responsive website with basic SEO optimization. Additional pages, e-commerce functionality, or custom features are available at extra cost. We offer three tiers: Basic ($499), Premium ($999), and Enterprise ($1,999).'
          />
          <CustomCheckbox
            value={isHidePrice}
            onChange={(e) => setIsHidePrice(e.target.checked)}
            name='isHidePrice'
            label='Hide price from service posting'
          />
          <CustomRadio
            label='Will the user submit the service request through the C3H Global site?'
            options={yesNo}
            value={isApplyWebsite}
            onChange={setIsApplyWebsite}
          />
          {isApplyWebsite === 'no' && <CustomInput
            placeholder='Website url e.g., https://www.c3hglobal.com'
          />}
          <div className={styles.next}>
            <Button width='auto' style='skyblue' buttonText='Next' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing