import React from "react";
import styles from './Details.module.css'
import Status from "@/app/components/common/Status/Status";
import LocationIcon from "@/assets/icons/LocationIcon";
import MyJobsIcon from "@/assets/icons/MyJobsIcon";
import PersonIcon from "@/assets/icons/PersonIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
const Details = () => {
    return (
        <div className={styles.details}>
            <div className={styles.statusShare}>
                <Status />
                <button className={styles.share}><ShareIcon width={18} height={18} />Share</button>
            </div>
            <div className={styles.companyNameWithTitle}>
                <div className={styles.companyName}>CloudTech</div>
                <div className={styles.jobTitle}>DevOps Engineer</div>
            </div>
            <ul className={styles.info}>
                <li><LocationIcon width={16} height={16} />San Francisco, CA (Remote)</li>
                <li><MyJobsIcon width={16} height={16} />Full-time</li>
                <li><PersonIcon width={16} height={16} />Mid senior level</li>
            </ul>
            <div className={styles.jobDescTitle}>Job Description</div>
            <div className={styles.jobDesc}>
                <p>We are looking for a skilled DevOps Engineer to streamline our software development and deployment processes. You will be responsible for CI/CD pipelines, cloud infrastructure, automation, and system monitoring to ensure high availability and performance <span>...more</span></p>
            </div>
        </div>
    )
}
export default Details;