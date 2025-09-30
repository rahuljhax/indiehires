import React from 'react'
import styles from './SavedJobs.module.css'
import Link from 'next/link'
import RightLongArrowIcon from '@/assets/icons/RightLongArrowIcon'
import JobCard from '../common/JobCard/JobCard'
const SavedJobs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className="title">Saved Jobs</div>
        <Link className='viewAll' href={'#'}>View All <RightLongArrowIcon width={16} height={16} /></Link>
      </div>
      <div className={styles.jobListings}>
        <JobCard isSavedCard />
        <JobCard isSavedCard />
        <JobCard isSavedCard />
      </div>
    </div>
  )
}

export default SavedJobs