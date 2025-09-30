import React from 'react'
import RecentAppliedJobs from '../RecentAppliedJobs/RecentAppliedJobs'
import SavedJobs from '../SavedJobs/SavedJobs'
import SavedServices from '../SavedServices/SavedServices'
import styles from './DashboardListings.module.css'
const DashboardListings = () => {
    return (
        <div className={styles.dashboardListings}>
            <RecentAppliedJobs />
            <SavedJobs />
            <SavedServices />
        </div>
    )
}

export default DashboardListings