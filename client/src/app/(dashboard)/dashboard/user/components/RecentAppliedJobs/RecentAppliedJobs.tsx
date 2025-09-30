import RightLongArrowIcon from '@/assets/icons/RightLongArrowIcon'
import Link from 'next/link'
import React from 'react'
import styles from './RecentAppliedJobs.module.css'
import JobCard from '../common/JobCard/JobCard'
const RecentAppliedJobs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className="title">Recent Applied Jobs</div>
        <Link className='viewAll' href={'#'}>View All <RightLongArrowIcon width={16} height={16} /></Link>
      </div>
      <div className={styles.jobListings}>
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  )
}

export default RecentAppliedJobs