import SearchBox from "@/app/components/common/FormComponents/SearchBox/SearchBox";
import React from "react";
import styles from './LeadsContainer.module.css'
import LeadItem from "../LeadItem/LeadItem";
const LeadsContainer = () => {
    return (
        <section>
            <div className={styles.top}>
                <div className="title">Manage Your Leads</div>
                <SearchBox />
            </div>
            <div className={styles.candidateList}>
                <LeadItem />
            </div>
        </section>
    )
}
export default LeadsContainer;