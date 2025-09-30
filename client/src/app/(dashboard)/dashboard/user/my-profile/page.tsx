import EditIcon from '@/assets/icons/EditIcon'
import React from 'react'
import styles from './page.module.css'
import CustomInput from '@/app/components/common/FormComponents/CustomInput/CustomInput'
import PhoneInput from '@/app/components/common/FormComponents/PhoneInput/PhoneInput'
import Button from '@/app/components/common/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import MyJobsIcon from '@/assets/icons/MyJobsIcon'

const page = () => {
  return (
    <section>
      <div className={styles.top}>
        <div className="title">My Profile</div>
        <div className={styles.editIcon}>
          <EditIcon width={16} height={16} />
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className="form">
          <CustomInput
            label='Full Name'
            required
            placeholder='John Smith'
          />
          <CustomInput
            label='Email Address'
            placeholder='john.smith@example.com'
            required
          />
          <PhoneInput
            placeholder='Enter your phone number'
            label='Phone Number'
            required
          />
          <div className={styles.uploadResume}>
            <div className={styles.label}>Upload Resume</div>
            {/* {errorMessage && <span className={styles.error}>{errorMessage}</span>} */}
            <div className={styles.uploadBox}>
              <input type="file" className={styles.uploadInput} />
              <Image
                src={'/assets/images/uploadIcon.png'}
                width={65}
                height={57}
                alt='Upload Icon'
              />
              <div className={styles.title}>Drag and Drop</div>
              <div className={styles.type}>Upload resume upto 2 MB of the following types: .docx, .pdf <br />or</div>
              <button className={styles.uploadButton}>Upload</button>
            </div>
            <Link className={styles.uploadedResume} href={'#'}><MyJobsIcon width={20} height={20} /> <span>View Resume</span></Link>
          </div>
          <div className={styles.actions}>
            <Button width='auto' style='grey' buttonText='Cancel' />
            <Button width='auto' style='skyblue' buttonText='Save' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page