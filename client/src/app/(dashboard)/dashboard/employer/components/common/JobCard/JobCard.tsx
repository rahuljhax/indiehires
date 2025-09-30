import React from "react";
import styles from './JobCard.module.css'
import ApplicantsIcon from "@/assets/icons/ApplicantsIcon";
import BudgetIcon from "@/assets/icons/BudgetIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import MyJobsIcon from "@/assets/icons/MyJobsIcon";
import ThreeDotIcon from "@/assets/icons/ThreeDotIcon";
import Link from "next/link";
import Status from "@/app/components/common/Status/Status";
const JobCard = () => {
    return (
        <div className={styles.jobCard}>
            <div className={styles.top}>
                <div className={styles.statusWithAction}>
                    <Status />
                    <div className={styles.editAction}>
                        <ThreeDotIcon width={22} height={22} />
                        {/* <Link className={styles.editButton} href='#'>Edit</Link> */}
                    </div>
                </div>
                <div className={styles.companyNameWithTitle}>
                    <p className={styles.companyName}>CloudTech</p>
                    <p className={styles.jobTitle}>DevOps Engineer</p>
                </div>
                <ul className={styles.jobInfo}>
                    <li><LocationIcon width={16} height={16} />San Francisco, CA</li>
                    <li><MyJobsIcon width={16} height={16} />Full-time</li>
                    <li><BudgetIcon width={16} height={16} />$125k - $155k</li>
                    <li><ApplicantsIcon width={16} height={16} />2 applicants</li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <p className={styles.date}>Posted 2 days ago</p>
                <Link className={styles.viewDetails} href={'/dashboard/employer/my-jobs/job-details'}>View Details</Link>
            </div>
        </div>
    )
}
export default JobCard;