import React from "react";
import styles from './DashboardStats.module.css'
import MyJobsIcon from "@/assets/icons/MyJobsIcon";
import Image from "next/image";
import PlusIcon from "@/assets/icons/PlusIcon";
import Link from "next/link";
const DashboardStats = () => {
    return (
        <div className={styles.boxes}>
            <div className={styles.box}>
                <div className={styles.boxContent}>
                    <p>16</p>
                    <span>Total Jobs</span>
                </div>
                <div className={styles.icon}>
                    <MyJobsIcon width={22} height={22} />
                </div>
            </div>   <div className={styles.box}>
                <div className={styles.boxContent}>
                    <p>16</p>
                    <span>Total Jobs</span>
                </div>
                <div className={styles.icon}>
                    <MyJobsIcon width={22} height={22} />
                </div>
            </div>   <div className={styles.box}>
                <div className={styles.boxContent}>
                    <p>16</p>
                    <span>Total Jobs</span>
                </div>
                <div className={styles.icon}>
                    <MyJobsIcon width={22} height={22} />
                </div>
            </div>

            <div className={styles.postJob}>
                <Image
                    src={'/assets/images/button_pattern.png'}
                    alt="Button Pattern"
                    width={240}
                    height={92}
                />
                    <p>Your Next Great Hire is Waiting!</p>
                    <Link href={'/dashboard/employer/post-job'} className={styles.postJobButton}><PlusIcon width={18} height={18} /> Post a Job</Link>
            </div>
        </div>
    )
}
export default DashboardStats;