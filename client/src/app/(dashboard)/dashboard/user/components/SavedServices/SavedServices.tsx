import React from 'react'
import styles from './SavedServices.module.css'
import RightLongArrowIcon from '@/assets/icons/RightLongArrowIcon'
import Link from 'next/link'
import ServiceCard from '@/app/components/common/ServiceCard/ServiceCard'
const SavedServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className="title">Saved Services</div>
        <Link className='viewAll' href={'#'}>View All <RightLongArrowIcon width={16} height={16} /></Link>
      </div>
      <div className={styles.listing}>
        <ServiceCard isUserServiceCard />
        <ServiceCard isUserServiceCard />
        <ServiceCard isUserServiceCard />
      </div>
    </div>
  )
}

export default SavedServices