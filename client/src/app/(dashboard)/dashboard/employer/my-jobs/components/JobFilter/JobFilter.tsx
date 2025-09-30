import React from "react";
import styles from './JobFilter.module.css'
import DownArrowIcon from "@/assets/icons/DownArrowIcon";
import SearchBox from "@/app/components/common/FormComponents/SearchBox/SearchBox";
const JobFilter = () => {
    return (
        <div className={styles.top}>
            <div className={styles.left}>
                <div className="title">All Job Postings</div>
                <p className="subTitle">Manage and track all your job postings</p>
            </div>
            <div className={styles.right}>
                <div className={styles.selectBox}>
                    <select>
                        <option value="All">All</option>
                        <option value="ACTIVE">Active</option>
                        <option value="DRAFT">Draft</option>
                        <option value="EXPIRED">Expired</option>
                    </select>
                    <DownArrowIcon className={styles.downArrow} width={10} height={10} />
                </div>
                <div className={styles.selectBox}>
                    <select>
                        <option value=''>All</option>
                        <option value="last24Hours">Last 24 Hours</option>
                        <option value="last7Days">Last 7 Days</option>
                        <option value="last30Days">Last 30 Days</option>
                        <option value="lastYear">Last Year</option>
                    </select>
                    <DownArrowIcon className={styles.downArrow} width={10} height={10} />
                </div>
                <SearchBox />
            </div>
        </div>
    )
}

export default JobFilter;