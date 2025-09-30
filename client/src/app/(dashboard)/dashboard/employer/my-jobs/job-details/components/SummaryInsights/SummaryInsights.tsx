import React from "react";
import styles from './SummaryInsights.module.css'
const SummaryInsights = () => {
    return (
        <div className={styles.summaryInsights}>
            <div className={styles.title}>Summary & Insights</div>
            <ul className={styles.info}>
                <li>
                    <span>Department</span>
                    <span>Tech</span>
                </li>
                <li>
                    <span>Salary:</span>
                    <span>$125k - $155k</span>
                </li>
                <li>
                    <span>Date posted:</span>
                    <span>27-03-2025</span>
                </li>
                <li>
                    <span>Closing date:</span>
                    <span>31-03-2025</span>
                </li>

                <li>
                    <span>Applicants:</span>
                    <span>24</span>
                </li>
            </ul>
        </div>
    )
}
export default SummaryInsights;