
import Link from "next/link";
import React from "react";
import styles from './RecentJobList.module.css'
import JobCard from "../common/JobCard/JobCard";
const RecentJobList = () => {
    return (
        <section>
            <div className={styles.titleWithLink}>
                <div className='title'>Recent Job Postings</div>
                <Link href='/dashboard/employer/my-jobs' className={styles.viewAll}>View all jobs </Link>
            </div>
            <div className='jobs'>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </section>
    )
}
export default RecentJobList;