import React from "react";
import styles from './DashboardStats.module.css'
import MyJobsIcon from "@/assets/icons/MyJobsIcon";
import Image from "next/image";
import PlusIcon from "@/assets/icons/PlusIcon";
import Link from "next/link";
import BookmarkIcon from "@/assets/icons/BookmarkIcon";
const DashboardStats = () => {
    return (
        <div className={styles.boxes}>
            <div className={styles.box}>
                <div className={styles.boxContent}>
                    <p>16</p>
                    <span>Applied Jobs</span>
                </div>
                <div className={styles.icon}>
                    <MyJobsIcon width={22} height={22} />
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.boxContent}>
                    <p>16</p>
                    <span>Saved Jobs</span>
                </div>
                <div className={styles.icon}>
                    <BookmarkIcon width={22} height={22} />
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.boxContent}>
                    <p>16</p>
                    <span>Saved Services</span>
                </div>
                <div className={styles.icon}>
                    <BookmarkIcon width={22} height={22} />
                </div>
            </div>

            <div className={styles.postJob}>
                <Image
                    src={'/assets/images/button_pattern.png'}
                    alt="Button Pattern"
                    width={240}
                    height={92}
                />
                <p>Find the Right Talent, Fast.</p>
                <Link href={'#'} className={styles.postJobButton}><PlusIcon width={18} height={18} /> Post a Job</Link>
            </div>
        </div>
    )
}
export default DashboardStats;