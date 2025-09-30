import React from "react";
import styles from './JobCard.module.css'
import BudgetIcon from "@/assets/icons/BudgetIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import MyJobsIcon from "@/assets/icons/MyJobsIcon";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import BookmarkIcon from "@/assets/icons/BookmarkIcon";
interface JobCardProps {
    isSavedCard?: boolean
}
const JobCard = ({ isSavedCard }: JobCardProps) => {
    return (
        <div className={clsx(styles.jobCard, isSavedCard && styles.savedCard)}>
            <div className={styles.top}>
                <div className={styles.user}>
                    <Image
                        src={'/assets/images/companyImage.webp'}
                        width={42}
                        height={42}
                        alt="ServiceImage"
                        className={styles.profileImage}
                    />
                    <div className={styles.companyNameWithTitle}>
                        <p className={styles.companyName}>Google India</p>
                        <p className={styles.jobTitle}>DevOps Engineer</p>
                    </div>
                    {isSavedCard && <div className={styles.saveIcon}>
                        <BookmarkIcon width={16} height={16} />
                    </div>}
                </div>
                <ul className={styles.jobInfo}>
                    <li><LocationIcon width={16} height={16} />San Francisco, CA</li>
                    <li><MyJobsIcon width={16} height={16} />Full-time</li>
                    <li><BudgetIcon width={16} height={16} />$125k - $155k</li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <p className={styles.date}>{isSavedCard ? 'Posted' : 'Applied'} 2 days ago</p>
                <Link className={styles.viewDetails} href={'/dashboard/employer/my-jobs/job-details'}>View Details</Link>
            </div>
        </div>
    )
}
export default JobCard;