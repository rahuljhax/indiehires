import React from "react";
import styles from './RecentListings.module.css'
import ServiceCard from "@/app/components/common/ServiceCard/ServiceCard";
const RecentListings = () => {
    return (
        <div className={styles.serviceBoxes}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    )
}
export default RecentListings;